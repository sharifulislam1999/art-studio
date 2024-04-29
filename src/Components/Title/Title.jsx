import { PropTypes } from 'prop-types';
import { Fade } from "react-awesome-reveal";
const Title = ({title,description}) => {
    return (
        <div className='text-center space-y-4 my-28'>
            <Fade direction='up' duration="1300">
            <h1 className='text-3xl md:text-5xl font-bold text-[#0A7EF5]'>{title}</h1>
            </Fade>
            <Fade direction='up' duration="1300" delay="50">
            <p className='w-full text-[#575555] text-base font-normal mx-auto md:w-[50%]'>{description}</p>
            </Fade>
        </div>
    );
};
Title.propTypes = {
    title: PropTypes.str,
    description: PropTypes.str
}
export default Title;