import PageBanner from "@/components/SharedComponents/PageBanner";
import BannerImg from "../../assets/gallery/gallery-1.jpg";
import { useParams } from "react-router-dom";
import CustomButton from "@/components/SharedComponents/CustomButton";
import { FaDonate, FaSpinner } from "react-icons/fa";
import { useGetReliefGoodByIdQuery } from "@/redux/api/api";

const AllReliefGoodDetails = () => {
  const { id } = useParams();
  const { data: reliefGoodData, isLoading } = useGetReliefGoodByIdQuery(id);
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <FaSpinner className="animate-spin text-4xl text-custom-main" />
      </div>
    );
  }

  return (
    <div className="my-10">
      <PageBanner heading="Details page" bgImg={BannerImg} />
      <section className="text-gray-700 body-font overflow-hidden bg-custom-light dark:bg-custom-dark mt-24 rounded-md border dark:border-custom-gray-300 md:mx-0 mx-4 ">
        <div className="container p-5 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <img
              alt="named"
              className="lg:w-1/2 w-full object-cover object-center rounded border p-1 shadow-md dark:bg-custom-gray-300 transform transition duration-300 hover:scale-110 cursor-zoom-in mb-6 lg:mb-0"
              src={reliefGoodData?.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6">
              <h2 className="text-sm title-font text-custom-gray500 dark:text-custom-gray-300 tracking-widest my-2">
                Unity Relief work
              </h2>
              <h1 className="text-custom-gray500 dark:text-custom-white text-3xl title-font font-medium mb-1">
                {reliefGoodData?.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-custom-gray500 dark:text-custom-white ml-3">
                    5 Reviews
                  </span>
                </span>
              </div>
              <div className="flex items-center justify-between my-5">
                <span className="px-2 py-1 text-xs font-semibold text-custom-white bg-custom-gray500 tracking-wider rounded-md">
                  {reliefGoodData?.category}
                </span>
                <div className="text-lg font-semibold text-custom-gray dark:text-custom-white">
                  ${reliefGoodData?.amount}
                </div>
              </div>
              <p className="leading-relaxed text-custom-gray500 dark:text-custom-white">
                {reliefGoodData?.details}
              </p>

              <div className="flex justify-center my-5">
                <CustomButton to="/dashboard" icon={FaDonate}>
                  Donate Now
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllReliefGoodDetails;

