import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { MyAuth } from "../../Firebase/AuthProvier";
import Header from "../../Components/Header/Header";

const Details = ()=>{
    const {user} = useContext(MyAuth)
    const {itemName,category,price,rating,customizeable,time,photo,description,stock} = useLoaderData();
    return (
        <>
        {user && <Header></Header>}
        <div className="container mx-auto px-3 mt-10 md:mt-20">
            <div className="flex gap-8 flex-col md:flex-row items-center">
                <div className="flex-1">
                    <img src={photo} alt="" className="rounded-lg" />                    
                </div>
                <div className="flex-1 space-y-4">
                    <div>
                        <h1 className="text-3xl font-bold">{itemName}</h1>
                    </div>                    
                    <div>
                        <h1 className="text-2xl font-normal">Price: {price} BDT</h1>
                    </div>  
                    <div>
                        <p>{description}</p>
                    </div>
                    <table className="table border text-center">
                        <thead className="">
                            <tr>
                                <th className="border">Category</th>
                                <th className="border">Rating</th>
                                <th className="border">Customizable</th>
                                <th className="border">Prepare Time</th>
                                <th className="border">Stock</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border">{category}</td>
                                <td className="border">{rating} Star</td>
                                <td className="border">{customizeable}</td>
                                <td className="border">{time} Days</td>
                                <td className="border">{stock}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                                   
                </div>

            </div>
        </div>
        </>
    );
}
export default Details;