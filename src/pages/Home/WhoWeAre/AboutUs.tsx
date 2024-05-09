// import { AiOutlineCheck } from 'react-icons/ai';

// const features = [
//   "A Slice Of Heaven",
//   "Disrupt Inspire",
//   "Preliminary Thinking",
//   "Flipboard Curmudgeon",
//   "Storage Shed",
//   "Satoshi Nakamoto"
// ];

// const AboutUs = () => {
//   return (
//     <>
//       <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
//         <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
//           <div className="flex flex-col justify-center">
//             <div className="max-w-xl mb-6">
//               <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
//                 The quick, brown fox
//                 <br className="hidden md:block" />
//                 jumps over{" "}
//                 <span className="relative px-1">
//                   <div className="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400" />
//                   <span className="relative inline-block text-deep-purple-accent-400">
//                     a lazy dog
//                   </span>
//                 </span>
//               </h2>
//               <p className="text-base text-gray-700 md:text-lg">
//                 Sed ut perspiciatis unde omnis iste natus error sit voluptatem
//                 accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
//                 quae. explicabo.
//               </p>
//             </div>
//             <p className="mb-4 text-sm font-bold tracking-widest uppercase">
//               FEATURES
//             </p>
//             <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
//               {features.map((feature, index) => (
//                 <ul key={index} className="space-y-3">
//                   <li className="flex">
//                     <AiOutlineCheck className="w-5 h-5 mt-px text-deep-purple-accent-400" />
//                     <span className="ml-2">{feature}</span>
//                   </li>
//                 </ul>
//               ))}
//             </div>
//           </div>
//           <div>
//             <img
//               className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
//               src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AboutUs;

import { AiOutlinePlayCircle, AiOutlineCheck } from "react-icons/ai";

import { useState } from "react";

const AboutUs = () => {
  const features = [
    "Support people in extreme need",
    "Largest global crowdfunding community",
    "Make the world a better place",
    "Share your love for community",
    "Protect People, Pets, and the Planet",
    "Support people in extreme need",
  ];

  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <div>
                <p className="text-custom-main mb-2 italic text-xl md:text-center font-bold tracking-wide font-source-code-pro">
                  Who We Are
                </p>

                <h3 className="text-3xl font-Quicksand text-custom-gray dark:text-custom-white tracking-wide  font-[700] mb-5">
                  We’re Non-Profit Charity & <br />
                  NGO Organization
                </h3>
              </div>
              <p className="text-base text-custom-gray500 dark:text-custom-gray-300 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <p className="mb-4 text-sm italic text-custom-main font-Quicksand font-[700] tracking-widest uppercase">
              FEATURES
            </p>
            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
              {features.map((feature, index) => (
                <ul key={index} className="space-y-3">
                  <li className="flex">
                    <AiOutlineCheck className="text-xl mt-px text-custom-gray dark:text-custom-gray-300 " />
                    <span className="ml-2 text-custom-gray500 dark:text-custom-white">
                      {feature}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="relative group border-2 dark:border-custom-white p-1 rounded-md shadow">
            <img
              className="bject-cover w-full h-[300px] rounded shadow-lg sm:h-auto cursor-pointer transition-opacity duration-300 ease-in-out group-hover:opacity-75"
              src="https://harity.templatekit.co/wp-content/uploads/sites/49/elementor/thumbs/five-young-multicultural-volunteers-standing-together-smiling-and-looking-at-camera-e1657642113794-pt5ss3wqyoldfm4alxj2rjlmoyv2rqi0l8sqendhgo.jpg"
              alt="about us bg img"
            />
            {showVideo && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/XHOmBV4js_E"
                  title="YouTube video player"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            {!showVideo && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                <div
                  onClick={toggleVideo}
                  className="flex cursor-pointer items-center justify-center bg-gradient-to-t from-black to-transparent w-full h-full"
                >
                  <AiOutlinePlayCircle className="text-white text-5xl animate-pulse" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
