import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'
import { motion } from 'framer-motion';
const ImageSlider = () => {
  const images = [img1, img2, img3, img4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: false
  };

  return (
  <div className="relative w-full h-[500px]">
  {/* Slider */}
  
  <Slider {...settings}>
    {images.map((img, idx) => (
      <div key={idx}>
        <img 
          src={img} 
          alt={`slide-${idx}`} 
          className="w-full h-[500px]  md:h-[650px] object-cover "
        />
      </div>
    ))}
  </Slider>

   <div className="absolute top-0 left-0 w-full h-[500px]  md:h-[650px] bg-black/60 z-10"></div>

  {/* Hero Section */}
  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4">
    <motion.div 
      className="px-6 py-20 text-center text-white z-10 mt-16"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 className="text-2xl md:text-7xl font-bold mb-6 leading-tight">
        أهلا وسهلاً بكم في موقع
      </motion.h1>
      <motion.h1 className="text-2xl md:text-7xl font-bold mb-6 text-[#D2AF34] leading-tight">
        المستشار القانوني محمد مصطفى
      </motion.h1>
      <motion.p className="text-lg md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed">
        نحن نخبة من المحامين والمستشارين القانونيون السعوديين وغير السعوديين 
        نسعد بخدمتكم لتقديم الاستشارات القانونية ودراسة القضايا والترافع في كافة 
        أنواع القضايا وتأسيس الشركات وصياغة العقود واللوائح
      </motion.p>
    </motion.div>
  </div>
</div>
  );
};

export default ImageSlider;