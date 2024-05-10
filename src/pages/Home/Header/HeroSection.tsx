import AOS from "aos";
import { useEffect, useState } from "react";
import { FaDonate } from "react-icons/fa";
import HeroImg1 from "/src/assets/hero-section-image/hero-img-1.jpg";
import HeroImg2 from "/src/assets/hero-section-image/hero-img-2.jpg";
import HeroImg3 from "/src/assets/hero-section-image/hero-img-3.jpg";
import HeroImg4 from "/src/assets/hero-section-image/hero-img-4.jpg";
import CustomButton from "@/components/SharedComponents/CustomButton";

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    AOS.init(); // Initialize AOS

    // Start text animation loop
    const textAnimationInterval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 1 second

    return () => clearInterval(textAnimationInterval); // Cleanup interval on unmount
  }, []);

  const texts = ["Features", "Hero"];

  return (
    <div className="px-4 lg:py-0 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-24">
      <div className="grid gap-4 lg:grid-cols-2">
        <div
          className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg"
          data-aos="fade-right" // Add AOS animation here
        >
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 md:text-5xl sm:text-4xl text-2xl font-bold tracking-tight text-custom-gray dark:text-custom-white sm:leading-none animate-pulse font-Quicksand dark:font-playfair-display">
              Empower
              <span className="text-sky-500 pl-3">{texts[textIndex]}</span>
              <br /> <span className="relative top-4">change lives today</span>
            </h2>
            <p className="text-base text-gray-700 dark:text-custom-white md:text-lg pt-3">
              Shape a brighter future and building a better world with our
              impactful NGO initiatives.
            </p>
          </div>
          {/* ====donat button start ===== */}
          <div data-aos="zoom-in">
            <CustomButton icon={FaDonate}>Donate Now</CustomButton>
          </div>
          {/* ====donat button end ===== */}
        </div>

        {/* ====hero image section start ===== */}
        <div
          className="flex items-center justify-center -mx-4 lg:pl-8"
          data-aos="fade-left"
        >
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg md:h-[360px] md:w-[250px] hover:scale-105 transition-transform duration-300 cursor-pointer hover:opacity-[.7] border p-1 dark:border-custom-gray-300 dark:bg-custom-white"
              src={HeroImg1}
              alt="HeroImg1"
            />
            <img
              className="object-cover md:h-[280px] md:w-[240px] rounded shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer hover:opacity-[.7] border p-1 dark:border-custom-gray-300 dark:bg-custom-white"
              src={HeroImg2}
              alt="HeroImg2"
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover md:h-[290px] md:w-[240px] rounded shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer hover:opacity-[.7] border p-1 dark:border-custom-gray-300 dark:bg-custom-white"
              src={HeroImg3}
              alt="HeroImg3"
            />
            <img
              className="object-cover mb-6 rounded shadow-lg md:h-[280px] md:w-[240px] mt-7 hover:scale-105 transition-transform duration-300 cursor-pointer hover:opacity-[.7] border p-1 dark:border-custom-gray-300 dark:bg-custom-white"
              src={HeroImg4}
              alt="HeroImg4"
            />
          </div>
        </div>
        {/* ====hero image section end ===== */}
      </div>
    </div>
  );
};

export default HeroSection;
