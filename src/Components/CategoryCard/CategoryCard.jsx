import { PropTypes } from 'prop-types';
import {useNavigate } from 'react-router-dom';
const CategoryCard = ({item}) => {
    const {image,name,des} = item;
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate(`/category/${name}`);
    }
    return (
        <div onClick={handleClick} className='border rounded-xl hover:scale-[101%] duration-200 overflow-hidden cursor-pointer'>
            <div>
                <img  className='h-[250px] rounded-t-xl w-full object-cover' src={image} alt="" />
            </div>
            <div className='p-2 md:p-4 space-y-3'>
            <div className='text-lg md:text-2xl font-semibold'>
                <h1>{name}</h1>
            </div>
            <div>
                <p>{des}</p>
            </div>
                {/* <Link to={`/category/${name}`} className='px-4 py-2 bg-[#0A7EF5] text-white rounded-full text-base font-normal inline-block'>View All</Link>  */}
            </div>
                       
        </div>
    );
};
CategoryCard.propTypes = {
    item: PropTypes.object
}
export default CategoryCard;