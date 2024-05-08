import React from "react";

interface DynamicTitleProps {
  heading: string;
  title: string;
}

const DynamicTitle: React.FC<DynamicTitleProps> = ({
  heading = "",
  title = "",
}) => {
  return (
    <div
      className="text-center my-10"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      <p className="text-custom-main font-bold tracking-widest text-[13px]">
        {title}{" "}
      </p>
      <h3 className="text-custom-dark dark:text-custom-white font-bold tracking-wider text-2xl font-Quicksand dark:font-playfair-display">
        {heading}
      </h3>
    </div>
  );
};

export default DynamicTitle;
