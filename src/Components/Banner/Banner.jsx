import { PropTypes } from 'prop-types';
const Banner = ({title}) => {
    return (
        <div className="py-4 md:py-8 bg-[#0A7EF5] text-white">
        <div className="container mx-auto px-3">
            <div className="space-y-4">
                <h1 className="text-xl md:text-3xl font-medium">{title}</h1>
            </div>               
        </div>
    </div>
    );
};
Banner.propTypes = {
    title: PropTypes.str
}

export default Banner;