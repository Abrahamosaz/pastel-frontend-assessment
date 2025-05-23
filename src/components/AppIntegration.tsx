"use client";

import React, { useState } from "react";
import AnimateHeader from "./shared/AnimateHeader";
import { appIntegrationIcons } from "@/public/icons";
import Image from "next/image";
import { motion } from "motion/react";
import classNames from "classnames";

const AppIntegration = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative flex items-center justify-center py-20 xl:py-30 bg-bg-primary">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[70%] flex flex-col">
        <AnimateHeader
          title={
            <h2 className="text-black text-5xl xl:text-6xl 2xl:text-8xl leading-[1.1em] 2xl:tracking-[-5px] font-medium">
              App
              <br />
              integration
            </h2>
          }
          content="Connect your go-to apps effortlessly within the builder for a smooth and uninterrupted workflow."
        />

        <div className="mt-10 md:mt-20 grid  grid-cols-4 md:grid-cols-6 gap-[1px]">
          {appIntegrationIcons?.map((Icon, index) => {
            return (
              <motion.div
                key={index}
                className={classNames({
                  "w-full rounded-2xl flex items-center justify-center py-6 lg:py-8 relative":
                    true,
                  "bg-bg-app-integration-active": hoveredIndex === index,
                  "bg-bg-app-integration": hoveredIndex !== index,
                })}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                animate={{
                  filter:
                    hoveredIndex !== null && hoveredIndex !== index
                      ? "blur(2px)"
                      : "blur(0px)",
                  transition: {
                    duration: 0.3,
                    ease: "easeInOut",
                  },
                }}
              >
                <Image
                  width={50}
                  height={50}
                  src={Icon}
                  alt="image icon"
                  className={`transition-all w-[32px] h-[32px] lg:w-fit lg:h-fit duration-300 rounded-2xl ${
                    hoveredIndex === index ? "scale-125" : "scale-100"
                  }`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppIntegration;
