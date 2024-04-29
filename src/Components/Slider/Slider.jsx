import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import SliderA from "./SliderA";
import "./customstyle.css"
const Slider = () => {
  const sliderItem = [
    {
      title: "Unleash Your Creativity",
      des: "Explore our curated collection of artisanal wonders and let your imagination soar. Find inspiration in every handcrafted piece, and embark on your next creative journey with us.",
      bg: 'bg-sliderbg-1'
    },
    {
      title: `Crafted with Passion`,
      des: "Discover the artistry and dedication behind each handmade treasure. From intricate details to timeless designs, our artisans pour their hearts into every creation, delivering excellence in craftsmanship.",
      bg: 'bg-sliderbg-2'
    },
    {
      title: "Artisanal Elegance",
      des: "Indulge in the elegance of handcrafted beauty. Our collection showcases the finest craftsmanship, offering exquisite pieces that add sophistication and charm to any space or ensemble.",
      bg: 'bg-sliderbg-3'
    },
    {
      title: "Experience Authenticity",
      des: "Immerse yourself in the authenticity of artisanal craftsmanship. Each piece tells a unique story, reflecting the traditions, cultures, and creativity of our talented artisans. Explore and embrace the genuine beauty of handmade art.",
      bg: 'bg-sliderbg-4'
    },
  ];
  return (
    <div>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination,Navigation,Autoplay]}
        loop={true}
        autoplay={
            {delay:4000}
        }
        className="mySwiper"
      >
        {sliderItem.map((item, i) => (
          <SwiperSlide key={i}>
            <SliderA data={item}></SliderA>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
