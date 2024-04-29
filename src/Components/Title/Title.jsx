import { PropTypes } from 'prop-types';
const Title = ({title,description}) => {
    return (
        <div className='text-center space-y-4 my-28'>
            <h1 className='text-3xl md:text-5xl font-bold text-[#0A7EF5]'>{title}</h1>
            <p className='w-full text-[#575555] text-base font-normal mx-auto md:w-[50%]'>{description}</p>
        </div>
    );
};
Title.propTypes = {
    title: PropTypes.str,
    description: PropTypes.str
}
export default Title;