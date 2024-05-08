import CustomButton from "@/components/SharedComponents/CustomButton";
import DynamicTitle from "@/components/SharedComponents/DynamicTitle";
import { FaDonate } from "react-icons/fa";

const ReliefGoods = () => {
  const reliefGoodsPosts = [
    {
      id: 1,
      image: "https://source.unsplash.com/600x400/?food",
      title: "Emergency Food Supplies",
      category: "Food Supplies",
      amount: 10000, // Amount in USD
      details:
        "Provides essential food items such as rice, beans, canned goods, and cooking oil to families affected by the crisis.",
    },
    {
      id: 2,
      image: "https://source.unsplash.com/600x400/?shelter",
      title: "Shelter Kits Distribution",
      category: "Shelter Kits",
      amount: 15000, // Amount in USD
      details:
        "Distributes shelter kits containing tents, blankets, and sleeping mats to displaced families for temporary shelter.",
    },
    {
      id: 3,
      image: "https://source.unsplash.com/600x400/?clothing",
      title: "Clothing Donation Drive",
      category: "Clothing",
      amount: 5000, // Amount in USD
      details:
        "Collects and distributes clothing items such as shirts, pants, jackets, and shoes to individuals in need of clothing assistance.",
    },
    {
      id: 4,
      image: "https://source.unsplash.com/600x400/?medical",
      title: "Medical Supplies Assistance",
      category: "Medical Supplies",
      amount: 8000, // Amount in USD
      details:
        "Provides medical supplies including bandages, antibiotics, and first aid kits to medical facilities treating patients affected by the crisis.",
    },
    {
      id: 5,
      image: "https://source.unsplash.com/600x400/?hygiene",
      title: "Hygiene Kits Distribution",
      category: "Hygiene Kits",
      amount: 6000, // Amount in USD
      details:
        "Distributes hygiene kits containing soap, toothpaste, toothbrushes, and sanitary pads to promote cleanliness and prevent disease transmission.",
    },
    {
      id: 6,
      image: "https://source.unsplash.com/600x400/?blanket",
      title: "Blanket Distribution Campaign",
      category: "Bedding & Blankets",
      amount: 7500, // Amount in USD
      details:
        "Conducts a blanket distribution campaign to provide warm bedding materials to individuals and families facing cold weather conditions.",
    },
  ];

  return (
    <div className="my-20 ">
      {/* ====heading info start===== */}
      <DynamicTitle
        title="ACTIVE CAMPAIGN"
        heading="We Are Opening Donations"
      />
      {/* ====heading info end===== */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {reliefGoodsPosts.map((post) => (
          <div
            key={post.id}
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
            <div className="flex gap-4 justify-between items-center">
              <CustomButton icon={FaDonate}>Donate Now</CustomButton>
              <button className="rounded border border-custom-dark px-4 dark:border-custom-white text-custom-gray dark:text-custom-white dark:hover:text-custom-blackOne dark:hover:bg-custom-white  py-2  duration-300 hover:bg-custom-gray-300 transition active:scale-105 transform overflow-hidden font-Quicksand text-[12px] tracking-wider font-semibold">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ====view more button start===== */}
      <div className="text-center my-14">
        <CustomButton className="bg-custom-gray dark:font-Quicksand">
          View All RelIeF Goods
        </CustomButton>
      </div>
      {/* ====view more button end===== */}
    </div>
  );
};

export default ReliefGoods;
