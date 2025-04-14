"use client";

import React from "react";
import FeaturesList from "./FeaturesList";
import { designPixels } from "@/constants";

const DesignPixel = () => {
  return (
    <div className="mt-20 lg:mt-30 xl:mt-50 w-full flex items-center justify-center bg-transparent">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[70%] flex flex-col gap-6">
        <h1 className="w-[90%] text-black text-5xl xl:text-6xl 2xl:text-8xl leading-[1.1em] 2xl:tracking-[-5px] font-medium">
          Design pixel-perfect sites beyond ordinary
        </h1>

        <div className="w-full mt-20">
          <FeaturesList features={designPixels} />
        </div>
      </div>
    </div>
  );
};

export default DesignPixel;
