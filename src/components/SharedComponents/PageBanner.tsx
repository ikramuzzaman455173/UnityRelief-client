// const PageBanner = ({ heading = "", bgImg = "" }) => {
//   return (
//     <div className="relative top-5 dark:top-10">
//       <img
//         className="md:w-full md:h-[250px] relative shadow-md md:block hidden rounded-md border p-2 dark:border-custom-white"
//         src={bgImg}
//         alt="banner img"
//       />
//       <div className="flex flex-col justify-center items-center">
//         <h2
//           className="text-center awesome-btn mt-10 px-20 py-2 cursor-pointer rounded-full md:text-[24px] sm:text-[20px] text-[18px] tracking-wider font-bold text-slate-600 absolute top-[80px] md:top-[50px] md:block hidden"
//           data-aos="zoom-in"
//           data-aos-duration="1500"
//         >
//           {heading}
//         </h2>
//       </div>
//     </div>
//   );
// };

import Aos from "aos";
import { useEffect } from "react";

// export default PageBanner;

const PageBanner = ({ heading = "", bgImg = "" }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="relative md:top-5 top-[40px] dark:md:top-10 dark:top-[60px] md:mx-0 mx-5">
      <img
        className="w-full h-[250px] md:h-[270px] md:block hidden relative shadow-md rounded-md border p-2 dark:border-custom-white dark:bg-custom-white"
        src={bgImg}
        alt="banner img"
      />
      <div className="flex flex-col justify-center items-center">
        <h2
          className="text-center mt-10 awesome-btn px-20 py-2 cursor-pointer rounded-md md:text-[24px] sm:text-[20px] text-[18px] tracking-wider font-bold text-slate-600 absolute top-[80px] md:top-[70px] md:block hidden"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          {heading}
        </h2>
      </div>
    </div>
  );
};

export default PageBanner;
