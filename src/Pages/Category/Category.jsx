import { useLoaderData, useParams } from "react-router-dom";
import SingleCategory from "../../Components/SingleCategory/SingleCategory";
import { useContext } from "react";
import { MyAuth } from "../../Firebase/AuthProvier";
import Header from "../../Components/Header/Header";

const Category = () => {
    const categorys = useLoaderData();
    const {name} = useParams();
    const {user} = useContext(MyAuth)
    return (
        <>
         {user && <Header></Header>}
        <div className="py-8 bg-[#0A7EF5] text-white">
            <div className="container mx-auto px-3">
                <div className="space-y-4">
                    <h1 className="text-3xl font-medium">Category: {name}</h1>
                    <h1 className="text-xl font-normal">Found Item: {categorys.length}</h1>
                </div>               
            </div>
        </div>
        <div className="container mx-auto px-3">
            <div className="grid gap-4 mt-10 md:mt-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {categorys.map((item,i)=><SingleCategory key={i} item={item}></SingleCategory>)}
            </div>
        </div>
        </>
    );
};

export default Category;