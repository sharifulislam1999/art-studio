import { useContext } from "react";
import { MyAuth } from "../../Firebase/AuthProvier";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData } from "react-router-dom";

const SimpleForm = () => {
    const category = useLoaderData();
    const {user} = useContext(MyAuth);
    const errorMsg = (msg)=>{
        toast.error(msg)
    }
    const successMsg = (msg)=>{
        toast.success(msg)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const itemName = form.itemName.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customizeable = form.customizeable.value;
        const time = form.time.value;
        const photo = form.photo.value;
        const stock = form.stock.value;
        const description = form.description.value;
        const item = {itemName,category,price,rating,customizeable,time,photo,description,stock,useremail:user?.email || `githubprovider@${user?.displayName}`,userName:user?.displayName}
        console.log(item)
        fetch("https://b9a10-server-ecru.vercel.app/additem",{
            method: "POST",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.insertedId){
                form.reset();
                successMsg("Added Success")
            }else{
                errorMsg("Added Unsuccess")
            }
        })

    }
    return (
        <div className="p-5 rounded-xl border">
             <div className="text-center my-5 text-4xl font-bold ">
                <h1 className="text-[#0A7EF5]">Add Item</h1>
            </div>
           <form onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div className="space-y-1">
                    <h1 className="text-base text-[#5e6064]">Name</h1>
                    <input type="text" name="itemName" className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full" placeholder="Craft Name" required />
                </div>
                <div>
                    <h1 className="text-base text-[#5e6064] mb-1">Category</h1>
                   <select name="category" className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full" id="" required>
                    <option value="">Select One</option>
                    {category.map((item,i)=> <option key={i} value={item.name}>{item.name}</option> )}
                   </select>
                </div>                        
            </div>
            <div className="grid mt-4 grid-cols-1 lg:grid-cols-5 gap-4">
                    <div>
                    <h1 className="text-base text-[#5e6064]">Price (BDT) </h1>
                        <input name="price" type="number" className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full" placeholder="Price" required />
                    </div>
                    <div>
                    <h1 className="text-base text-[#5e6064]">Rating</h1>
                        <input name="rating" type="text" className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full" placeholder="Rating"  required/>
                    </div>
                    <div>
                        <h1 className="text-base text-[#5e6064]">Customizable</h1>
                        <div className="flex gap-3 p-[6px] border border-[#5e6064] rounded-xl">
                    <div className="flex items-center gap-3">
                    <input type="radio" name="customizeable" value="yes" className="radio" checked /> <span>Yes</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <input type="radio" name="customizeable" value="no" className="radio" /> <span>No</span>
                    </div>
                    </div>
                    </div>
                    <div>
                    <h1 className="text-base text-[#5e6064]">Processing Time (Days)</h1>
                    <input name="time" type="text" className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full" placeholder="Processing Time" required />                       
                    </div>
                    <div>
                        <h1 className="text-base text-[#5e6064]">Stock</h1>
                        <select name="stock" id="" className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full" required>
                            <option value="">Select One</option>
                            <option value="In Stock">In Stock</option>
                            <option value="Made to order">Made to order</option>
                        </select>
                    {/* <input name="stock" type="text" className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full" placeholder="Stock" required /> */}
                    </div>
                    
                </div>
            <div className="mt-4">
                <h1 className="text-base text-[#5e6064]">Photo URL</h1>
                <input type="url" name="photo" className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full" placeholder="Photo Url" required />
            </div>
            <div className="mt-4">
                <h1 className="text-base text-[#5e6064]">Description</h1>
                <textarea name="description" id="" cols="30" rows="4" className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full resize-y" placeholder="Short Description" required></textarea>
            </div>
            <div className="mt-10">
                <input type="submit" value="Add Item" className="w-full bg-[#0A7EF5] text-white py-2 rounded-md cursor-pointer text-lg font-medium" />
            </div>
           </form>
           <ToastContainer></ToastContainer>
        </div>
    );
};

export default SimpleForm;