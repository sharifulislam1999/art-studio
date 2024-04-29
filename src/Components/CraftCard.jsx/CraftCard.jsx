import { PropTypes } from 'prop-types';
import { BiCategory } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { BiSolidCustomize } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import { IoMdTimer } from "react-icons/io";
import { Link } from 'react-router-dom';

const CraftCard = ({item}) => {
    const {_id,itemName,category,price,rating,customizeable,time,photo,description,stock} = item;
    return (
        <div className="rounded-xl flex  flex-col hover:scale-[101%] duration-200 border">
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
            <div className='flex-grow p-2 md:p-4 '>
            <h1>{description}</h1>
           </div>
           <div className='p-2 md:p-4 '>
            <Link to={`/details/${_id}`} className='px-4 py-2 bg-[#0A7EF5] text-white rounded-full text-base font-normal inline-block'>View Details</Link>
           </div>
                        
        </div>
    );
};
CraftCard.propTypes = {
    item: PropTypes.object
}
export default CraftCard;