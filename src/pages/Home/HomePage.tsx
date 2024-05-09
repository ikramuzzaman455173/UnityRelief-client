import HeroSection from "@/pages/Home/Header/HeroSection";
import ReliefGoods from "./ReliefGoods/ReliefGoods";
import Testimonial from "./Testimonial/Testimonial";
import CarouselGallery from "./GalleryCarousel/CarouselGallery";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ReliefGoods />
      <Testimonial />
      <CarouselGallery />
    </>
  );
};

export default HomePage;
