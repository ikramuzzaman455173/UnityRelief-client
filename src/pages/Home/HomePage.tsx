import HeroSection from "@/pages/Home/Header/HeroSection";
import ReliefGoods from "./ReliefGoods/ReliefGoods";
import Testimonial from "./Testimonial/Testimonial";
import CarouselGallery from "./GalleryCarousel/CarouselGallery";
import AboutUs from "./WhoWeAre/AboutUs";
import OurTeam from "./OurTeam/OurTeam";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ReliefGoods />
      <Testimonial />
      <CarouselGallery />
      <AboutUs />
      <OurTeam />
    </>
  );
};

export default HomePage;
