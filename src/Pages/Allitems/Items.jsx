import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
const Items = ()=>{
  document.title="All Craft Items";
    const items = useLoaderData()
    return (
        <>
        <Banner title="All Art & Craft"></Banner>
        <div className="container mx-auto px-3 mt-10">
            <div>
            <div className="overflow-x-auto">
  <table className="table border">
    {/* head */}
    <thead>
      <tr className="text-base text-[#0A7EF5]">        
        <th className="border-r text-center">Craft Name</th>
        <th className="border-r text-center">Price</th>
        <th className="border-r text-center">Rating</th>
        <th className="text-center">Details</th>
      </tr>
    </thead>
    <tbody>
      {items.map((item,i)=> <tr key={i}>
        <td className="border-r">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.photo} alt={`Name of ${item.itemName}`} />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.itemName}</div>
              <div className="text-sm opacity-50">Category: {item.category}</div>
            </div>
          </div>
        </td>
        <td className="border-r text-center">
         <h1>{item.price} TK</h1>
        </td>
        <td className="border-r text-center">{item.rating} Star</td>
        <th className="flex justify-center">
        <Link to={`/details/${item._id}`} className='p-1 md:px-4 md:py-2 bg-[#0A7EF5] text-white rounded-full text-base font-normal inline-block'>Details</Link>
        </th>
      </tr>)}
      
      </tbody>
      </table>
      </div>
    </div>
        </div>
        </>
       
    );
}
export default Items;