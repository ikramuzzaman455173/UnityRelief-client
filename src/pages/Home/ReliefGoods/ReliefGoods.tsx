// import CustomButton from "@/components/SharedComponents/CustomButton";
// import DynamicTitle from "@/components/SharedComponents/DynamicTitle";
// import { useGetReliefGoodsQuery } from "@/redux/api/api";
// import Aos from "aos";
// import { useEffect } from "react";
// // import { FaDonate } from "react-icons/fa";
// interface Post {
//   id: number;
//   image: string;
//   title: string;
//   category: string;
//   details: string;
//   amount: number,

// }
// const ReliefGoods = () => {

//   const { data: reliefGoods } = useGetReliefGoodsQuery("high");
//   useEffect(() => {
//     Aos.init();
//   }, []);
//   return (
//     <div className="my-20 ">
//       {/* ====heading info start===== */}
//       <DynamicTitle
//         title="ACTIVE CAMPAIGN"
//         heading="We Are Opening Donations"
//       />
//       {/* ====heading info end===== */}
//       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
//         {reliefGoods?.map((post:Post) => (
//           <div
//             key={post.id}
//             className="md:mx-auto max-w-[350px] space-y-4 rounded-md bg-custom-white p-6 shadow md:w-[350px] dark:bg-custom-dark border cursor-pointer mx-4 dark:border-custom-white"
//             data-aos="fade-up"
//             data-aos-duration="1000"
//           >
//             <div className="relative overflow-hidden rounded-lg">
//               <img
//                 width={200}
//                 height={200}
//                 className="h-[200px] w-[350px] rounded-lg object-cover transform transition-transform duration-300 hover:scale-110"
//                 src={post.image}
//                 alt={post.title}
//               />
//             </div>
//             <div className="grid gap-2">
//               <h1 className="text-lg font-semibold font-Quicksand dark:font-playfair-display text-custom-gray dark:text-custom-white">
//                 {post.title}
//               </h1>
//               <div className="flex items-center justify-between">
//                 <span className="px-2 py-2 text-xs font-semibold text-custom-white bg-custom-gray500 tracking-wider rounded-md">
//                   {post.category}
//                 </span>
//                 <div className="text-lg font-semibold text-custom-gray dark:text-custom-white">
//                   ${post.amount}
//                 </div>
//               </div>
//             </div>
//             <div>
//               <CustomButton
//                 to={`/relief-goods/${post.id}`}
//                 className="w-full dark:font-merriweather font-Quicksand tracking-wider "
//               >
//                 View Details
//               </CustomButton>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ====view more button start===== */}
//       <div className="text-center my-14">
//         <CustomButton
//           to="/relief-goods"
//           className="bg-custom-gray dark:font-Quicksand"
//         >
//           View All RelIeF Goods
//         </CustomButton>
//       </div>
//       {/* ====view more button end===== */}
//     </div>
//   );
// };

// export default ReliefGoods;

import CustomButton from "@/components/SharedComponents/CustomButton";
import DynamicTitle from "@/components/SharedComponents/DynamicTitle";
import { useGetReliefGoodsQuery } from "@/redux/api/api";
import Aos from "aos";
import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa"; // Import loading spinner icon

export interface Post {
  _id: string;
  image: string;
  title: string;
  category: string;
  details: string;
  amount: number;
}

const ReliefGoods = () => {
  const { data: reliefGoods, isLoading } = useGetReliefGoodsQuery("high");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Aos.init();
    setLoading(false); // Set loading to false after Aos initialization
  }, []);

  if (isLoading || loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-custom-main" />
      </div>
    );
  }

  return (
    <div className="my-20 ">
      {/* ====heading info start===== */}
      <DynamicTitle
        title="ACTIVE CAMPAIGN"
        heading="We Are Opening Donations"
      />
      {/* ====heading info end===== */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {reliefGoods?.slice(0, 6)?.map((post: Post) => (
          <div
            key={post._id}
            className="md:mx-auto max-w-[350px] space-y-4 rounded-md bg-custom-white p-6 shadow md:w-[350px] dark:bg-custom-dark border cursor-pointer mx-4 dark:border-custom-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                width={200}
                height={200}
                className="h-[200px] w-[350px] rounded-lg object-cover transform transition-transform duration-300 hover:scale-110"
                src={post.image}
                alt={post.title}
              />
            </div>
            <div className="grid gap-2">
              <h1 className="text-lg font-semibold font-Quicksand dark:font-playfair-display text-custom-gray dark:text-custom-white">
                {post.title}
              </h1>
              <div className="flex items-center justify-between">
                <span className="px-2 py-2 text-xs font-semibold text-custom-white bg-custom-gray500 tracking-wider rounded-md">
                  {post.category}
                </span>
                <div className="text-lg font-semibold text-custom-gray dark:text-custom-white">
                  ${post.amount}
                </div>
              </div>
            </div>
            <div>
              <CustomButton
                to={`/relief-goods/${post._id}`}
                className="w-full dark:font-merriweather font-Quicksand tracking-wider "
              >
                View Details
              </CustomButton>
            </div>
          </div>
        ))}
      </div>

      {/* ====view more button start===== */}
      <div className="text-center my-14">
        <CustomButton
          to="/relief-goods"
          className="bg-custom-gray dark:font-Quicksand"
        >
          View All RelIeF Goods
        </CustomButton>
      </div>
      {/* ====view more button end===== */}
    </div>
  );
};

export default ReliefGoods;
