import { useContext, useEffect, useState } from "react";
import { MyAuth } from "../../Firebase/AuthProvier";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useNavigate } from "react-router-dom";
const UpdateForm = () => {
    const [category,setCategory] = useState([])
    const item = useLoaderData();
    const navigate = useNavigate()
    useEffect(()=>{
        fetch('https://b9a10-server-ecru.vercel.app/category')
        .then(res=> res.json())
        .then(data => setCategory(data));
    },[])
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
        const updatedItem = {itemName,category,price,rating,customizeable,time,photo,description,stock}
        console.log(item)
        fetch(`https://b9a10-server-ecru.vercel.app/update/${item._id}`,{
            method: "PUT",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedItem)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.modifiedCount === 1){
                successMsg("Update Success");
                setTimeout(()=>{
                    navigate("/mylist")
                },800)
            }else if(data.modifiedCount === 0){
                errorMsg("No Changed");
            }
        })

    }
    return (
        <div className="p-5 mt-10 rounded-xl border">
             <div className="text-center my-5 text-4xl font-bold ">
                <h1 className="text-[#0A7EF5]">Update Craft</h1>
            </div>
           <form onSubmit={handleSubmit}>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div className="space-y-1">
                    <h1 className="text-base text-[#5e6064]">Name</h1>
                    <input type="text" defaultValue={item.itemName} name="itemName" className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full" placeholder="Craft Name" required />
                </div>
                <div>
                    <h1 className="text-base text-[#5e6064] mb-1">Category</h1>
                   <select defaultValue={item.category} name="category" className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full" id="" required>
                    <option >Select One</option>
                    {/* {category.map((cate,i)=> <option key={i}  value={cate.name}>{cate.name}</option> )} */}
                    <option value="Beadwork">Beadwork</option>
                    <option value="Embroidery">Embroidery</option>
                    <option value="Macrame">Macrame</option>
                    <option value="Knitting & Crocheting">Knitting & Crocheting</option>
                    <option value="Quilting">Quilting</option>
                    <option value="Tie-Dyeing">Tie-Dyeing</option>
                   </select>
                </div>                        
            </div>
            <div className="grid mt-4 grid-cols-1 lg:grid-cols-5 gap-4">
                    <div>
                    <h1 className="text-base text-[#5e6064]">Price (BDT)</h1>
                        <input name="price" type="number" defaultValue={item.price} className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full" placeholder="Price" required />
                    </div>
                    <div>
                    <h1 className="text-base text-[#5e6064]">Rating</h1>
                        <input name="rating" type="number" defaultValue={item.rating} className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full" placeholder="Rating"  required/>
                    </div>
                    <div>
                        <h1 className="text-base text-[#5e6064]">Customizable</h1>
                        <div className="flex gap-3 p-[6px] border border-[#5e6064] rounded-xl">
                    <div className="flex items-center gap-3">
                    <input type="radio" name="customizeable" value="yes" className="radio" defaultChecked={item.customizeable === "yes"} /> <span>Yes</span>
                    </div>
                    <div className="flex items-center gap-3">
                    <input type="radio" name="customizeable" value="no" className="radio" defaultChecked={item.customizeable === "no"} /> <span>No</span>
                    </div>
                    </div>
                    </div>
                    <div>
                    <h1 className="text-base text-[#5e6064]">Processing Time (Days)</h1>
                    <input name="time" type="text" defaultValue={item.time} className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full" placeholder="Processing Time" required />                       
                    </div>
                    <div>
                        <h1 className="text-base text-[#5e6064]">Stock</h1>
                        <select name="stock" defaultValue={item.stock} id="" className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full" required>
                            <option value="">Select One</option>
                            <option value="In Stock">In Stock</option>
                            <option value="Made to order">Made to order</option>
                        </select>
                    </div>
                    
                </div>
            <div className="mt-4">
                <h1 className="text-base text-[#5e6064]">Photo URL</h1>
                <input type="url" name="photo" defaultValue={item.photo} className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full" placeholder="Photo Url" required />
            </div>
            <div className="mt-4">
                <h1 className="text-base text-[#5e6064]">Description</h1>
                <textarea name="description" id="" cols="30" rows="4" defaultValue={item.description} className="border rounded-xl border-[#5e6064] py-1 px-2 focus:outline-none w-full resize-y" placeholder="Short Description" required></textarea>
            </div>
            <div className="mt-10">
                <input type="submit" value="Update" className="w-full bg-[#0A7EF5] text-white py-2 rounded-md cursor-pointer text-lg font-medium" />
            </div>
           </form>
           <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateForm;