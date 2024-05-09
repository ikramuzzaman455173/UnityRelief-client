import HeroSection from "@/pages/Home/Header/HeroSection";
import ReliefGoods from "./ReliefGoods/ReliefGoods";
import Testimonial from "./Testimonial/Testimonial";
import CarouselGallery from "./GalleryCarousel/CarouselGallery";
import AboutUs from "./WhoWeAre/AboutUs";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ReliefGoods />
      <Testimonial />
      <CarouselGallery />
      <AboutUs/>
    </>
  );
};

export default HomePage;
