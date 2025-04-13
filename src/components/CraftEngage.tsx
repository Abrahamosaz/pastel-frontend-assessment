import React from "react";
import FeaturesList from "./FeaturesList";
import { craftEngages } from "@/constants";

const CraftEngage = () => {
  return (
    <div className="my-20 lg:my-30 xl:my-50 w-full flex items-center justify-center bg-transparent">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[70%] flex flex-col gap-6">
        <h1 className="w-[90%] md:w-[70%] text-black text-5xl xl:text-6xl 2xl:text-8xl leading-[1.1em] 2xl:tracking-[-5px] font-medium">
          Craft engaging and immersive interactions
        </h1>

        <div className="w-full mt-20">
          <FeaturesList features={craftEngages} isReverse={true} />
        </div>
      </div>
    </div>
  );
};

export default CraftEngage;
