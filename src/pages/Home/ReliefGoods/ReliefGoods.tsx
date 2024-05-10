import CustomButton from "@/components/SharedComponents/CustomButton";
import DynamicTitle from "@/components/SharedComponents/DynamicTitle";
import Aos from "aos";
import { useEffect } from "react";
// import { FaDonate } from "react-icons/fa";

const ReliefGoods = () => {
  const reliefGoodsPosts = [
    {
      id: 1,
      image: "https://i.ibb.co/s5CL0t1/cause-1.jpg",
      title: "Plant Tree, Save Earth & Lives Secure the Future",
      category: "Environment",
      amount: 500, // Amount in USD
      details:
        "Help us plant trees to combat climate change and ensure a sustainable future. Location: Various locations worldwide. Urgency: Medium.",
    },
    {
      id: 2,
      image: "https://i.ibb.co/dgjKNfs/cause-2.jpg",
      title: "Emergency Response and School Food ",
      category: "Volunteering",
      amount: 300, // Amount in USD
      details:
        "Provide emergency response support and food for schools in crisis-affected areas. Location: Disaster-prone regions. Urgency: High.",
    },
    {
      id: 3,
      image: "https://i.ibb.co/mtF1hs7/cause-3.jpg",
      title: "People that Need Clean Drinking Water",
      category: "Water",
      amount: 500, // Amount in USD
      details:
        "Help communities in need access clean drinking water by supporting water purification projects. Location: Impoverished areas lacking clean water sources. Urgency: High.",
    },
    {
      id: 4,
      image: "https://i.ibb.co/s2ZwDSm/cause-4.jpg",
      title: "Let’s Help Children Build a Happy Future",
      category: "Education",
      amount: 800, // Amount in USD
      details:
        "Support educational initiatives to empower children and give them opportunities for a brighter future. Location: Underprivileged communities. Urgency: Medium.",
    },
    {
      id: 5,
      image: "https://i.ibb.co/W3sNTSH/cause-5.jpg",
      title: "Little Help Can Make a Big Difference",
      category: "Food",
      amount: 600, // Amount in USD
      details:
        "Provide essential food supplies to families facing food insecurity. Location: Low-income neighborhoods. Urgency: High.",
    },
    {
      id: 6,
      image: "https://i.ibb.co/pbfg0vq/cause-6.jpg",
      title: "Online Donation in the Modern World",
      category: "Medicine",
      amount: 7500, // Amount in USD
      details:
        "Support online medical services to provide healthcare access to underserved communities. Location: Remote or isolated areas. Urgency: Medium.",
    },
  ];
  useEffect(() => {
    Aos.init();
  }, []);
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
            <div>
              <CustomButton
                to={`/relief-goods/${post.id}`}
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
