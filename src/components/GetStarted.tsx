"use client";

import React, { useEffect, useState } from "react";
import CustomButton from "./shared/CustomButton";
import { IoIosArrowForward } from "react-icons/io";

const GetStarted = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById("get-started");
      if (container) {
        const rect = container.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="flex items-center justify-center pb-20 xl:pb-30 bg-bg-primary overflow-hidden">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[70%]">
        <div
          id="get-started"
          className="relative w-full rounded-3xl bg-black text-white flex flex-col gap-8 md:flex-row items-start lg:items-center justify-between p-10 md:p-15 md:py-18"
        >
          <h1 className="text-4xl lg:text-6xl font-semibold">
            Get Started <br /> For Free
          </h1>
          <div className="flex flex-col gap-8 w-full md:w-[40%] 2xl:w-[31%] text-xs md:text-sm lg:text-base font-medium leading-[22px]">
            <p>
              Experience the power of Droip no-code website builder, risk free.
              Create stunning, responsive sites with pure creative freedom.
            </p>

            <CustomButton
              label="Try for Free"
              onClick={() => {}}
              className="font-medium text-lg py-3 rounded-3xl"
              icon={IoIosArrowForward}
              iconStyle="text-primary"
            />
          </div>

          {/* Gradient spotlight effect */}
          <div
            className="pointer-events-none absolute -inset-px opacity-90 z-20"
            style={{
              background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(77, 59, 219, 0.4), transparent 60%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
