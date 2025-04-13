"use client";

import React from "react";
import AnimateHeader from "./shared/AnimateHeader";

const AppIntegration = () => {
  return (
    <div className="relative flex items-center justify-center py-20 xl:py-30 bg-bg-primary">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[70%] ">
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
      </div>
    </div>
  );
};

export default AppIntegration;
