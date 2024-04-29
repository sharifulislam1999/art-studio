import { PropTypes } from 'prop-types';
import { BiCategory } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { BiSolidCustomize } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import { IoMdTimer } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const MylistCard = ({item,setFilter,total}) => {
    const navigate = useNavigate();
    const goUpdatePage = ()=>{
        navigate(`/update/${_id}`);        
    }
    const handleDelete = (_id,customizeable)=>{
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://b9a10-server-ecru.vercel.app/delete/${_id}`,{
                    method:"DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount === 1){
                        const remaining = total.filter(item => item._id !== _id );
                        setFilter(remaining);             
                    
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                    }
                  });

           
            }
          });

    }
    const {_id,itemName,category,price,rating,customizeable,time,photo,description,stock} = item;
    return (
        <div className="rounded-xl flex flex-col border">
           <div>
                <img className='w-full h-[235px] object-cover rounded-t-xl' src={photo} alt="" />
           </div>
           <div className='p-2 md:p-4 flex flex-col  space-y-2'>
           <div className='text-xl md:text-2xl font-semibold'>
                <h1> {itemName}</h1>
           </div>

           <div className='text-xl text-[#363636c1]'>
                <h1 className='flex items-center gap-1'>Price: {price} TK</h1>
           </div>

           <div className='flex gap-2 flex-wrap'>
            <div className='flex items-center gap-2 bg-[#0A7EF5] text-white px-2 py-1 rounded-full'>
                <div>
                    <BiCategory/>
                </div>
                <div>
                <h1>{category}</h1>
                </div>
            </div>
            <div className='flex items-center gap-2 bg-[#0A7EF5] text-white px-2 py-1 rounded-full'>
                <div>
                    <FaStar></FaStar>
                </div>
                <div>
                <h1>{rating}</h1>
                </div>
            </div>
            <div className='flex items-center gap-2 bg-[#0A7EF5] text-white px-2 py-1 rounded-full'>
                <div>
                    <BiSolidCustomize/>
                </div>
                <div>
                <h1>{customizeable}</h1>
                </div>
            </div>
            <div className='flex items-center gap-2 bg-[#0A7EF5] text-white px-2 py-1 rounded-full'>
                <div>
                <AiOutlineStock/>
                </div>
                <div>
                <h1>{stock}</h1>
                </div>
            </div>
            <div className='flex items-center gap-2 bg-[#0A7EF5] text-white px-2 py-1 rounded-full'>
                <div>
                    <IoMdTimer/>
                </div>
                <div>
                <h1>{time} Days</h1>
                </div>
            </div>
           </div>
            </div>
            <div className='flex-grow p-2 md:p-4'>
            <h1>{description}</h1>
           </div>

           <div className='flex gap-3 p-2 md:p-4'>
            <button onClick={()=>goUpdatePage(_id)}  className='px-4 py-2 bg-[#0A7EF5] text-white rounded-full text-base font-normal inline-block'>Update</button>
            <button onClick={()=>handleDelete(_id,customizeable)} className='px-4 py-2 bg-red-500 text-white rounded-full text-base font-normal inline-block'>Delete</button>
           </div>        
                        
        </div>
    );
};
MylistCard.propTypes = {
    item: PropTypes.obj,
    myList: PropTypes.array,
    setMyList: PropTypes.func,
    load: PropTypes.bol,
    setLoad: PropTypes.func
}
export default MylistCard;