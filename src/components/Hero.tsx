"use client";

import React from "react";
import CustomButton from "./shared/CustomButton";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { HeroImage } from "@/public/images";
import Image from "next/image";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="mt-20 lg:mt-35 w-full flex items-center justify-center">
      <div className="w-full flex flex-col gap-4">
        <div className="w-fit py-2 px-6 rounded-4xl text-base md:text-lg font-bold bg-secondary">
          No-Code WordPress Site Builder
        </div>

        <div className="mt-3 md:mt-5 flex md:flex-row flex-col md:items-start justify-between">
          <div className="hidden md:flex flex-col gap-1 text-5xl xl:text-6xl 2xl:text-8xl font-medium text-black">
            <h1>Break Limits.</h1>
            <h1>
              Build <span className="text-primary">Anything.</span>
            </h1>
            <h1>No Code Needed.</h1>
          </div>

          <div className="flex md:hidden flex-col gap-1 text-4xl xl:text-6xl 2xl:text-8xl font-medium text-black">
            <h1>Break Limits. Build</h1>
            <h1>
              <span className="text-primary">Anything.</span> No Code
            </h1>
            <h1>Needed.</h1>
          </div>

          <div className="flex flex-col gap-1 w-full sm:w-[450px] md:max-w-[320px]">
            <div className="w-full bg-transparent md:bg-secondary/60 text-lg text-black/70 pt-10 md:pt-4 md:px-6 py-4 md:pb-20 rounded-2xl">
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

        <motion.div
          className="mt-20 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="w-full h-full object-cover rounded-lg border-[10px] border-secondary"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
