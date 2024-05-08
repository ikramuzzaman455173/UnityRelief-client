// import { useEffect, useState } from "react";
// const Testimonial = () => {
// const array = [
//   {
//     id: 1,
//     name: "AidCare Foundation",
//     designation: "Director",
//     testimonialDescription:
//       "Revolutionized aid distribution. Efficient and impactful. Streamlined our processes.",
//     keyWord: "aidcare",
//     logo: "aidcare_logo.png",
//     animation: "fade-in-left",
//     sliderImage: "https://source.unsplash.com/random/800x600/?aidcare",
//   },
//   {
//     id: 2,
//     name: "Hope Alliance",
//     designation: "Head of Operations",
//     testimonialDescription:
//       "Streamlined relief operations. Unparalleled features. Improved our outreach.",
//     keyWord: "hopealliance",
//     logo: "hope_alliance_logo.png",
//     animation: "fade-in-right",
//     sliderImage: "https://source.unsplash.com/random/800x600/?hopealliance",
//   },
//   {
//     id: 3,
//     name: "Unity Relief",
//     designation: "Logistics Coordinator",
//     testimonialDescription:
//       "Simplified logistics. Highly recommended. Focused aid efforts on our sight.",
//     keyWord: "unityrelief",
//     logo: "unity_relief_logo.png",
//     animation: "fade-in-left",
//     sliderImage: "https://source.unsplash.com/random/800x600/?unityrelief",
//   },
//   {
//     id: 4,
//     name: "Global Aid Network",
//     designation: "Supply Chain Manager",
//     testimonialDescription:
//       "Optimized supply chain. Enhanced collaboration. Crucial for our operations.",
//     keyWord: "globalaidnetwork",
//     logo: "global_aid_logo.png",
//     animation: "fade-in-right",
//     sliderImage:
//       "https://source.unsplash.com/random/800x600/?globalaidnetwork",
//   },
//   {
//     id: 5,
//     name: "Rescue Relief",
//     designation: "Disaster Response Coordinator",
//     testimonialDescription:
//       "Exceeded expectations. Versatile and reliable. Essential tool for emergencies.",
//     keyWord: "rescuerelief",
//     logo: "rescue_relief_logo.png",
//     animation: "fade-in-left",
//     sliderImage: "https://source.unsplash.com/random/800x600/?rescuerelief",
//   },
//   {
//     id: 6,
//     name: "Empower Aid",
//     designation: "Operations Manager",
//     testimonialDescription:
//       "Empowered our team. Swift response. Impactful features.",
//     keyWord: "empoweraid",
//     logo: "empower_aid_logo.png",
//     animation: "fade-in-right",
//     sliderImage: "https://source.unsplash.com/random/800x600/?empoweraid",
//   },
// ];

//   const [currentSlider, setCurrentSlider] = useState(0);
//   // The slider images array
//   const prevSlider = () =>
//     setCurrentSlider((currentSlider) =>
//       currentSlider === 0 ? array.length - 2 : currentSlider - 1
//     );
//   const nextSlider = () =>
//     setCurrentSlider((currentSlider) =>
//       currentSlider === array.length - 2 ? 0 : currentSlider + 1
//     );
//   // if you don't want to change the slider automatically then you can just remove the useEffect
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       nextSlider();
//     }, 3000);
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [currentSlider]);

//   const isSmallScreen = window.innerWidth <= 768;
//   return (
//     <div className="max-w-full min-w-[350px]  mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10 px-8 md:px-16 lg:px-24">
//       <div className="relative overflow-hidden">
//         <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
//           {/* arrow left */}
//           <button
//             onClick={prevSlider}
//             className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
//           >
//             <svg
//               viewBox="0 0 1024 1024"
//               className="w-4 h-4 md:w-6 md:h-6 icon"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="black"
//             >
//               {" "}
//               <g strokeWidth="0"></g>{" "}
//               <g
//                 id="SVGRepo_tracerCarrier"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               ></g>{" "}
//               <g id="SVGRepo_iconCarrier">
//                 <path
//                   fill="black"
//                   d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
//                 ></path>
//               </g>
//             </svg>
//           </button>
//           {/* arrow right */}
//           <button
//             onClick={nextSlider}
//             className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
//           >
//             <svg
//               viewBox="0 0 1024 1024"
//               className="w-4 h-4 md:w-6 md:h-6 icon"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="black"
//               transform="rotate(180)"
//             >
//               {" "}
//               <g strokeWidth="0"></g>{" "}
//               <g
//                 id="SVGRepo_tracerCarrier"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               ></g>{" "}
//               <g id="SVGRepo_iconCarrier">
//                 {" "}
//                 <path
//                   fill="black"
//                   d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
//                 ></path>
//               </g>
//             </svg>
//           </button>
//         </div>
//         {/* slider container */}
//         <div
//           className="ease-linear duration-300 flex"
//           style={{
//             transform: `translateX(-${
//               currentSlider * (isSmallScreen ? 100 : 50)
//             }%)`,
//           }}
//         >
//           {/* sliders */}
//           {array.map((each, idx) => (
//             <div key={idx} className="p-4 min-w-full md:min-w-[50%]">
//               <div className="h-full p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   className="block w-5 h-5 text-slate-800 mb-4"
//                   viewBox="0 0 975.036 975.036"
//                 >
//                   <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
//                 </svg>
//                 <p className="leading-relaxed mb-6 text-gray-500">
//                   {each?.testimonialDescription}
//                 </p>
//                 <a className="inline-flex items-center">
//                   <img
//                     className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
//                     src={`https://source.unsplash.com/200x200/?${each.keyWord}`}
//                     alt="carousel navigate ui"
//                   />
//                   <span className="flex-grow flex flex-col pl-4">
//                     <span className="title-font font-medium text-gray-900">
//                       {each.name}
//                     </span>
//                     <span className="text-gray-500 text-sm">
//                       {each?.designation}
//                     </span>
//                   </span>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Testimonial;

import Rating from "@/components/SharedComponents/Rating";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Review1LogoImg from "/src/assets/testimonial/review1.jpg";
import Review2LogoImg from "/src/assets/testimonial/review2.jpg";
import Review3LogoImg from "/src/assets/testimonial/review3.jpg";
import Review4LogoImg from "/src/assets/testimonial/review4.jpg";
import Review5LogoImg from "/src/assets/testimonial/review5.jpg";
import Review6LogoImg from "/src/assets/testimonial/review6.jpg";
import DynamicTitle from "@/components/SharedComponents/DynamicTitle";
const Testimonial = () => {
  const array = [
    {
      id: 1,
      title: "David's Perspective",
      designation: "Financial Analyst",
      testimonialDescription:
        "Their transparency and accountability are unmatched in the charity sector. It's inspiring to see their impact grow steadily.",
      name: "David Thompson",
      logo: Review1LogoImg,
      rating: 5,
    },
    {
      id: 2,
      title: "Maria's Experience",
      designation: "Teacher",
      testimonialDescription:
        "Their dedication to sustainable solutions sets them apart. I'm proud to be part of their journey towards lasting change.",
      name: "Maria Rodriguez",
      logo: Review2LogoImg,
      rating: 4,
    },
    {
      id: 3,
      title: "Sarah's Testimony",
      designation: "Nurse",
      testimonialDescription:
        "Volunteering with them has been incredibly rewarding. You can see the difference you're making in people's lives every day.",
      name: "Sarah Johnson",
      logo: Review3LogoImg,
      rating: 5,
    },

    {
      id: 4,
      title: "Johnson' works",
      designation: "Professor",
      testimonialDescription:
        "Volunteering with them has been incredibly rewarding. You can see the difference you're making in people's lives every day.",
      name: "Johnson Smith",
      logo: Review4LogoImg,
      rating: 5,
    },
    {
      id: 5,
      title: "Kiss Kington Experience",
      designation: "Jounalist, London",
      testimonialDescription:
        "The legal definition of a charitable organization (and of charity) varies between countries and in some instances regions of the country. The regulation, the tax treatment.",
      name: "Kiss Kington",
      logo: Review5LogoImg,
      rating: 4,
    },
    {
      id: 6,
      title: "John Balmer Perspective",
      designation: "Financial Analyst",
      testimonialDescription:
        "The legal definition of a charitable organization (and of charity) varies between countries and in some instances regions of the country. The regulation, the tax treatment.",
      name: "John Balmer",
      logo: Review6LogoImg,
      rating: 5,
    },
  ];

  const [currentSlider, setCurrentSlider] = useState(0);

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? array.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === array.length - 1 ? 0 : currentSlider + 1
    );

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlider]);

  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div className="mb-20">
      <DynamicTitle heading="WHAT PEOPLE SAY ABOUT US" title="Testimonial" />
      <div className="max-w-full min-w-[350px]  mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5 lg:gap-10">
        <div className="relative overflow-hidden">
          <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
            {/* arrow left */}
            <button
              onClick={prevSlider}
              className="flex justify-center items-center hover:bg-custom-gray500 hover:text-custom-white dark:hover:bg-custom-white dark:text-custom-gray500 rounded-full w-6 h-6 md:w-8 md:h-8"
            >
              <IoIosArrowBack className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            {/* arrow right */}
            <button
              onClick={nextSlider}
              className="flex justify-center items-center hover:bg-custom-gray500 hover:text-custom-white dark:hover:bg-custom-white dark:text-custom-gray500 rounded-full w-6 h-6 md:w-8 md:h-8"
            >
              <IoIosArrowForward className="w-4 h-4 md:w-6 md:h-6" />
            </button>
          </div>
          {/* slider container */}
          <div
            className="ease-linear duration-300 flex"
            style={{
              transform: `translateX(-${
                currentSlider * (isSmallScreen ? 100 : 50)
              }%)`,
            }}
          >
            {/* sliders */}
            {array.map((each, idx) => (
              <div key={idx} className="p-4 min-w-full md:min-w-[50%]">
                <div className="h-full border dark:border-custom-white p-5 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)] bg-custom-light dark:bg-custom-dark ">
                  <div className="md:block hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="block w-16 h-16 opacity-50 text-slate-800 dark:text-custom-white mb-4"
                      viewBox="0 0 975.036 975.036"
                    >
                      <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                    </svg>
                  </div>

                  <div className="my-2">
                    <Rating initialRating={each?.rating} />
                  </div>

                  <h3 className="text-xl font-medium tracking-wider font-source-code-pro text-custom-gray500 dark:text-custom-white mb-4">
                    {each.title}
                  </h3>

                  <p className="leading-relaxed mb-6 text-gray-500 dark:text-custom-white italic font-medium font-mono dark:font-Quicksand text-justify px-5">
                    {each?.testimonialDescription}
                  </p>
                  <div className="inline-flex items-center">
                    <img
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                      src={each?.logo}
                      alt={each.name}
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-custom-gray dark:text-custom-white">
                        {each.name}
                      </span>
                      <span className="text-custom-gray dark:text-custom-white text-sm">
                        {each?.designation}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
