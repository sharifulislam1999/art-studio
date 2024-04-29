import { useContext, useEffect, useState } from "react";
import { MyAuth } from "../../Firebase/AuthProvier";
import MylistCard from "../../Components/MylistCard/MylistCard";
import Select from 'react-select'
import Banner from "../../Components/Banner/Banner";
import Header from "../../Components/Header/Header";

const Mylist = ()=>{
    document.title="My Items"
    const [myList,setMyList] = useState([]);
    const [filter,setFilter] = useState([]);
    const {user} = useContext(MyAuth);
    useEffect(()=>{
        fetch(`https://b9a10-server-ecru.vercel.app/items/${user.email || "Github Provider"}`)
        .then(res=> res.json())
        .then(data => {
            setMyList(data);
            setFilter(data);
        })
    },[])
    const options = [
        { value: 'all', label: 'All' },
        { value: 'customizable', label: 'Customizable' },
        { value: 'noncustomizable', label: 'Non Customizable' },
      ];
    const selectChange = (e)=>{
        if(e.value === "customizable"){
            const filterList = myList.filter((item) => item.customizeable === 'yes'); 
            setFilter([...filterList]);
        }else if(e.value === "noncustomizable"){
            const filterList = myList.filter((item) => item.customizeable === 'no');
            setFilter([...filterList])     
        }else if(e.value ==='all'){
            const filterList = myList.filter(() => true);
            setFilter([...filterList]);
        }
    }
    return (
        <>
        {user && <Header></Header>}
         <Banner title="My List"></Banner>       
        <div className="container mx-auto px-3 mt-10"> 
       <div className="space-y-2 my-5">
       <h1 className="text-xl font-semibold">Sort By</h1>
        <div className="w-[250px]">            
        <Select options={options} onChange={selectChange} />
        </div>          
       </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filter.map((item,i)=><MylistCard key={i} total={myList} setFilter={setFilter} item={item}></MylistCard>)}
        </div>
        </div>
        </>
       
    );
}
export default Mylist;