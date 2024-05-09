import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGooglePlus,
  FaPhone,
} from "react-icons/fa";
import { FaMapLocation, FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ContactInfo from "./ContactInfo";
import CustomButton from "./CustomButton";

const Footer = () => {
  return (
    <>
      <section className="pt-16 pb-7 bg-custom-dark rounded-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between pb-14 border-b border-gray-500 gap-8">
            <div className="flex items-center">
              <p className="pl-2 text-4xl text-custom-white font-bold">
                UniTy{" "}
                <span className="font-Quicksand dark:font-playfair-display font-semibold text-custom-white bg-custom-main px-4 py-1 rounded-md">
                  RelieF
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to="https://www.google.com"
                target="_blank"
                className="text-lg text-white bg-custom-red p-2 rounded-full cursor-pointer"
              >
                <FaGooglePlus />
              </Link>
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
          <div className="py-14 flex flex-col lg:flex-row justify-between gap-8 border-b border-gray-500">
            <div className="w-full max-lg:mx-auto flex flex-col sm:flex-row max-lg:items-center max-lg:justify-between gap-6 md:gap-12 lg:gap-24">
              <div className="">
                <h6 className="text-xl font-semibold text-white mb-7 max-lg:text-center">
                  UnitTy RelieF
                </h6>
                <ul className="flex flex-col max-lg:items-center gap-6">
                  <li>
                    <Link
                      to=""
                      className="text-base max-lg:text-center text-custom-white font-Quicksand font-[700] tracking-wider whitespace-nowrap transition-all duration-300 hover:text-custom-main focus-within:outline-0 focus-within:text-custom-main"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="text-base max-lg:text-center text-custom-white font-Quicksand font-[700] tracking-wider whitespace-nowrap transition-all duration-300 hover:text-custom-main focus-within:outline-0 focus-within:text-custom-main"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="text-base max-lg:text-center text-custom-white font-Quicksand font-[700] tracking-wider whitespace-nowrap transition-all duration-300 hover:text-custom-main focus-within:outline-0 focus-within:text-custom-main"
                    >
                      Causes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="text-base max-lg:text-center text-custom-white font-Quicksand font-[700] tracking-wider whitespace-nowrap transition-all duration-300 hover:text-custom-main focus-within:outline-0 focus-within:text-custom-main"
                    >
                      Relief Goods
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-xl font-Quicksand font-semibold text-white mb-7 max-lg:text-center">
                  Quick Links
                </h6>
                <ul className="flex flex-col gap-6 max-lg:items-center">
                  {/* <div className="flex items-center justify-center">
                    <div className="bg-custom-main p-3 text-xl rounded-full">
                      <FaPhone />
                    </div>
                    <div className="text-lg font-medium tracking-wide font-source-code-pro text-custom-gray-300 pl-5">
                      <p className="mb-2">call us</p>
                      <p>+1-206-156 2849</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="bg-custom-main p-3 text-xl rounded-full">
                      <FaMessage />
                    </div>

                    <div className="text-lg font-medium tracking-wide font-source-code-pro text-custom-gray-300 pl-5">
                      <p className="mb-2">Mail us</p>
                      <p className="lowercase">info@unityrelief.com</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-4">
                    <div className="bg-custom-main p-3 text-xl rounded-full">
                      <FaMapLocation />
                    </div>
                    <div className="text-lg font-medium tracking-wide font-source-code-pro text-custom-gray-300 pl-5">
                      <p className="mb-2">visit us</p>
                      <p>California 62639</p>
                    </div>
                  </div> */}

                  <ContactInfo
                    icon={<FaPhone />}
                    title="call us"
                    description="+1-206-156 2849"
                  />
                  <ContactInfo
                    icon={<FaMessage />}
                    title="Mail us"
                    description="info@unityrelief.com"
                  />
                  <ContactInfo
                    icon={<FaMapLocation />}
                    title="visit us"
                    description="California 62639545"
                  />
                </ul>
              </div>
              <div>
                <h6 className="text-xl font-Quicksand font-semibold text-white mb-7 max-lg:text-center">
                  Resources
                </h6>
                <ul className="flex flex-col gap-6 max-lg:items-center">
                  <li>
                    <Link
                      to=""
                      className="text-base max-lg:text-center text-custom-white font-Quicksand font-[700] tracking-wider whitespace-nowrap transition-all duration-300 hover:text-custom-main focus-within:outline-0 focus-within:text-custom-main"
                    >
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="text-base max-lg:text-center text-custom-white font-Quicksand font-[700] tracking-wider whitespace-nowrap transition-all duration-300 hover:text-custom-main focus-within:outline-0 focus-within:text-custom-main"
                    >
                      Quick Start
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="text-base max-lg:text-center text-custom-white font-Quicksand font-[700] tracking-wider whitespace-nowrap transition-all duration-300 hover:text-custom-main focus-within:outline-0 focus-within:text-custom-main"
                    >
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      className="text-base max-lg:text-center text-custom-white font-Quicksand font-[700] tracking-wider whitespace-nowrap transition-all duration-300 hover:text-custom-main focus-within:outline-0 focus-within:text-custom-main"
                    >
                      User Guide
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full lg:max-w-md max-lg:mx-auto ">
              <h6 className="text-xl font-Quicksand font-semibold text-white max-lg:text-center mb-10">
                Newsletter
              </h6>
              <div className="bg-custom-gray rounded-3xl p-5">
                <form action="#" className="flex flex-col gap-5">
                  <div className="relative">
                    <label className="flex  items-center mb-2 text-custom-white font-Quicksand  tracking-wider text-base font-medium">
                      Email
                    </label>
                    <input
                      type="text"
                      id="default-search"
                      className="block w-full px-5 py-3 text-lg shadow-xs text-white bg-transparent border border-customgrtext-custom-white font-Quicksand  tracking-wider rounded-full placeholder-customgrtext-custom-white  font-[700] focus:outline-none leading-relaxed focus-within:border-gray-300"
                      placeholder="unity@relief.com"
                    />
                  </div>
                  <div className="flex flex-col min-[540px]:flex-row items-center justify-between gap-3">
                    <div className="flex items-start black">
                      <input
                        id="checked-checkbox"
                        type="checkbox"
                        className="w-5 h-5 aspect-square appearance-none cursor-pointer border border-gray-600 bg-transparent  rounded-md mr-2 hover:border-customgrtext-custom-white hover:bg-gray-900 checked:bg-no-repeat checked:bg-center checked:border-customgrtext-custom-white font-Quicksand font-[700] tracking-wider checked:bg-gray-800"
                      />
                      <label className="text-sm cursor-pointer text-custom-white font-Quicksand font-[700] tracking-wider">
                        I agree with{" "}
                        <Link to="" className="text-custom-main">
                          Privacy Policy
                        </Link>{" "}
                        and{" "}
                        <Link to="" className="text-custom-main">
                          Terms of Condition
                        </Link>
                      </label>
                    </div>
                    <CustomButton>Send</CustomButton>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-5 pt-7">
            <span className="text-sm text-custom-white font-Quicksand font-[700] tracking-wider">
              <Link to="">@unityRelief</Link> 2024, All rights reserved.
            </span>
            <div className="relative  text-gray-500 focus-within:text-gray-900 ">
              <div className="absolute inset-y-0 right-6 flex items-center pl-3 pointer-events-none "></div>
              <button
                type="button"
                id="default-search"
                className="block w-full lg:min-w-[448px] pr-12 pl-6 py-3 text-base font-normal shadow-xs text-gray-50 bg-transparent border border-gray-700 rounded-full placeholder-customgrtext-custom-white font-Quicksand font-[700] tracking-wider focus:outline-none leading-relaxed transition-all duration-500 "
              >
                Have a question? talk to us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
