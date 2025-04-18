import React from "react";
import Image from "next/image";
import { ScaleBusinessContentCardProps } from "@/types";
import { IoArrowForward } from "react-icons/io5";

const ScaleBusinesContentCard: React.FC<ScaleBusinessContentCardProps> = ({
  title,
  image,
  description,
}) => {
  return (
    <div className="w-full h-full py-6 sm:py-12 pl-6 sm:pl-6 pr-6 sm:pr-6 lg:pl-12 lg:pr-0 flex flex-col lg:flex-row gap-20 sm:gap-30 md:gap-40 lg:gap-20 justify-between bg-[#CDC6FB] lg:bg-[#EBE8FE] rounded-[20px] lg:rounded-[28px] min-h-[300px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[650px]">
      <div className="w-full flex flex-col justify-between mb-10 text-black">
        <h1 className="text-2xl xl:text-3xl font-semibold">{title}</h1>

        <div className="flex flex-col justify-between gap-2">
          <p className="w-[70%] lg:w-full text-xl lg:text-2xl font-medium">
            {description}
          </p>

          <div className="mt-5 text-primary/90 cursor-pointer font-semibold flex items-center gap-2 group relative">
            <p className="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-primary/90 after:left-0 after:bottom-0 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
              View Details
            </p>
            <IoArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>

      <Image
        src={image}
        alt="image"
        className="w-full h-full object-cover lg:rounded-tl-3xl lg:rounded-bl-3xl min-h-[200px] xs:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] xl:min-h-[650px]  min-w-[200px] xs:min-w-[300px] sm:min-w-[400px] lg:min-w-[500px] xl:min-w-[750px]"
      />
    </div>
  );
};

export default ScaleBusinesContentCard;
