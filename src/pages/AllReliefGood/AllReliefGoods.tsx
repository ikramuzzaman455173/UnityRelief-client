import PageBanner from "@/components/SharedComponents/PageBanner";
import BannerImg from "../../assets/gallery/gallery-1.jpg";
import DynamicTitle from "@/components/SharedComponents/DynamicTitle";
import Aos from "aos";
import { useEffect, useState } from "react";
import CustomButton from "@/components/SharedComponents/CustomButton";
// import { FaDonate } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import { useGetReliefGoodsQuery } from "@/redux/api/api";
import { Post } from "../Home/ReliefGoods/ReliefGoods";
const AllReliefGoods = () => {
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
    <div className="my-10">
      <PageBanner heading="All Relief Goods" bgImg={BannerImg} />
      <div className="mt-16  dark:mt-20">
        <DynamicTitle
          heading="Relief Goods"
          title="Welcome to relief goods page"
        />
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {reliefGoods.map((post:Post) => (
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
            {/* <div className="flex gap-4 justify-between items-center">
              <CustomButton icon={FaDonate}>Donate Now</CustomButton>
              <Link
                to={`/relief-goods/${1}`}
                className="rounded border border-custom-dark px-4 dark:border-custom-white text-custom-gray dark:text-custom-white dark:hover:text-custom-blackOne dark:hover:bg-custom-white  py-2  duration-300 hover:bg-custom-gray-300 transition active:scale-105 transform overflow-hidden font-Quicksand text-[12px] tracking-wider font-semibold"
              >
                View Details
              </Link>
            </div> */}

            <div>
              <CustomButton
                to={`/relief-goods/${post._id}`}
                className="!min-w-full dark:font-merriweather font-Quicksand tracking-wider "
              >
                View Details
              </CustomButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllReliefGoods;
