import DynamicTitle from "@/components/SharedComponents/DynamicTitle";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const OurTeam = () => {
  const ourTeams = [
    {
      id: 1,
      work: "Volunteer",
      name: "Eugene Wells",
      profileImg: "https://i.ibb.co/hW5WR7K/team-1.jpg",
    },
    {
      id: 2,
      work: "Volunteer",
      name: "Donna Howard",
      profileImg: "https://i.ibb.co/PQXfqZy/team-2.jpg",
    },
    {
      id: 3,
      work: "SUPPORT STAFF",
      name: "Donald Henderson",
      profileImg: "https://i.ibb.co/cDcHnbF/team-3.jpg",
    },
    {
      id: 4,
      work: "SUPPORT STAFF",
      name: "Elizabeth Walker",
      profileImg: "https://i.ibb.co/5KqXgQs/team-4.jpg",
    },
    {
      id: 5,
      work: "Volunteer",
      name: "ANDREW BOWE",
      profileImg: "https://i.ibb.co/n1rqvcS/team-5.webp",
    },
    {
      id: 6,
      work: "SUPPORT STAFF",
      name: "ABBAS DADLA",
      profileImg: "https://i.ibb.co/R3q513f/team-6.webp",
    },
  ];
  return (
    <>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 pb-10">
        <DynamicTitle heading="Meet Our Volunteers" title="BEST TEAM" />
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {ourTeams.map((team) => (
            <div key={team.id}>
              <div className="relative overflow-hidden bg-custom-white dark:bg-custom-dark dark:border-custom-white p-5 border shadow-md transition duration-300 transform rounded lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80 rounded-xl"
                  src={team.profileImg}
                  alt="Person"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-custom-dark bg-opacity-75 opacity-0 hover:opacity-100">
                  <p className="mb-1 text-lg font-bold text-gray-100">
                    {team.name}
                  </p>
                  <p className="mb-4 text-xs text-gray-100">{team.work}</p>
                  <p className="mb-4 text-xs tracking-wide text-custom-gray-300">
                    Vincent Van Gogh’s most popular painting, The Starry Night.
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <Link
                      to="https://www.facebook.com"
                      target="_blank"
                      className="text-lg text-white bg-[#1877F2] p-2 rounded-full cursor-pointer"
                    >
                      <FaFacebook />
                    </Link>
                    <Link
                      to="https://www.twitter.com"
                      target="_blank"
                      className="text-lg text-white bg-[#1DA1F2] p-2 rounded-full  cursor-pointer"
                    >
                      <FaTwitter />
                    </Link>
                    <Link
                      to="https://www.instagram.com"
                      target="_blank"
                      className="text-lg text-white bg-gradient-to-r from-orange-500 to-pink-500 p-2 rounded-full cursor-pointer"
                    >
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurTeam;
