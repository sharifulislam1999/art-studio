import { useLoaderData } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import Title from "../../Components/Title/Title";
import CraftCard from "../../Components/CraftCard.jsx/CraftCard";
import { useContext, useEffect, useState } from "react";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import Accordian from "../../Components/Accordian/Accordian";
import Testimonail from "../../Components/Progress/Testimonail";
import { MyAuth } from "../../Firebase/AuthProvier";
import Header from "../../Components/Header/Header";

const Home = ()=>{
    document.title="Home | Art Studio"
    const {user} = useContext(MyAuth)
    const [category,setCategory] = useState([]);
    const items = useLoaderData();
    useEffect(()=>{
        fetch("http://localhost:5000/category")
        .then(res=>res.json())
        .then(data => setCategory(data));
        
    },[])
    return (
        <>
        {user && <Header></Header>}
        <Slider></Slider>
        
        <div className="container mx-auto px-3">
            <Title title="Feature Craft Item" description="Explore our curated collection of exquisite handcrafted treasures. From intricate embroidery to stunning beadwork, each piece is a testament to craftsmanship and beauty. Find your perfect statement piece today."></Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {items.map((item,i)=><CraftCard key={i} item={item}></CraftCard>)}
        </div>
        <Title title="Feature Category" description="Explore our curated Feature Category section for a showcase of exquisite craftsmanship. From embroidery to quilting and beyond, discover handcrafted wonders to elevate your style and home decor"></Title>
        <div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {category.map((item,i)=> <CategoryCard key={i} item={item}></CategoryCard>)}
        </div>
        <Title title="Why Chose Us" description="Explore artisanal excellence! Find handcrafted treasures curated with passion and expertise. Experience quality, craftsmanship, and authenticity that set us apart. Choose us for your creative journey."></Title>
        <div>
            <Accordian></Accordian>
        </div>
        <Title title="What Say Our Clients" description="See what our clients love about us! Read testimonials reflecting the joy of our handcrafted creations. Join our art-loving community and experience the magic firsthand"></Title>
        <div>
            <Testimonail></Testimonail>
        </div>
        </div>
        </div>
        

        </>
    );
}
export default Home;
