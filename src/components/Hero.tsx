"use client";

import React from "react";
import CustomButton from "./shared/CustomButton";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <div className="mt-10 w-full flex items-center justify-center">
      <div className="w-full flex flex-col gap-4">
        <div className="w-fit py-2 px-6 rounded-4xl font-semibold bg-secondary">
          No-Code WordPress Site Builder
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1 text-8xl font-bold text-black">
            <h1>Break Limits.</h1>
            <h1>
              Build <span className="text-primary">Anything.</span>
            </h1>
            <h1>No Code Needed.</h1>
          </div>

          <div className="flex flex-col gap-1 max-w-[300px]">
            <div className="bg-secondary/60 text-lg text-black/70 p-6 pb-20 rounded-2xl">
              Droip is a no-code, drag-and-drop WordPress builder that
              simplifies website creation with powerful capabilities.
            </div>

            <CustomButton
              label="Watch Intro"
              onClick={() => {}}
              className="bg-secondary/60 text-primary text-lg font-medium rounded-2xl"
              icon={AiOutlinePlayCircle}
              iconStyle="text-primary"
            />

            <CustomButton
              label="Get Started with Droip"
              onClick={() => {}}
              className="text-lg font-medium rounded-2xl"
              icon={IoIosArrowForward}
              iconStyle="text-primary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
