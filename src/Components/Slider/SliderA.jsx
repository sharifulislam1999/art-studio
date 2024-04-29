import propTypes from "prop-types";
import { Typewriter } from 'react-simple-typewriter'
const SliderA = ({ data }) => {
  const { title, des, bg } = data;
  return (
    <div className={`flex  justify-center items-center px-10 lg:px-0 relative h-[60vh] lg:h-[80vh] bg-cover ${bg} bg-center`}>
      <div className=""></div>
      <div className="container z-20 mx-auto px-3">
        <div className={`flex gap-5 items-center`}>
          <div className="flex-1 lg:space-y-6 space-y-3">
            <div className="text-3xl lg:text-7xl font-bold leading-normal">
              <h1
                data-aos="fade-down"
                data-aos-duration="1000"
                className="text-white"
              >
                {title}
              </h1>
              <h1 className="text-[#0A7EF5]"><Typewriter
            words={['Handcrafted', 'Unique', 'Exquisite', 'Authentic','Inspired','Masterpiece','Luxurious']}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /></h1>
            </div>
            <div className="text-base md:text-lg">
              <p
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay = "500"
               className="text-[#d6d1d1]">{des}</p>
            </div>
            <div>
              <button data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay = "1000"
               className="own-btn">
                Explore More
              </button>
            </div>
          </div>
          <div className="flex-1 hidden lg:block">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
SliderA.propTypes = {
  data: propTypes.object,
};

export default SliderA;
