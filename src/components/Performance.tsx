import React from "react";
import { performance } from "@/public/images";
import CardContent from "./shared/CardContent";

const Performance = () => {
  return (
    <div className="relative flex items-center justify-center py-20 xl:py-30 bg-black text-white">
      <div className="w-[90%] 2xl:w-[70%] flex flex-col items-cente justify-center gap-6">
        <h2 className="text-4xl md:text-[64px] font-semibold text-center">
          Performance that <br />
          sets you apart
        </h2>

        <div className="mt-10 md:mt-20 lg:mt-30 w-full flex flex-col lg:flex-row items-center gap-6">
          <CardContent
            title="Clean code output"
            description="Droip generates minimal, well-structured code that is free from unnecessary bloat ensuring efficiency."
            icon={performance.image13}
            containerStyle="flex-col-reverse !p-0 !gap-0"
            iconStyle="w-full h-full object-cover"
            textContainerStyle="p-12"
            className="bg-[#1A1A1A] text-white"
            descriptionStyle="text-white/70 text-lg leading-5 w-[80%]"
            titleStyle="text-3xl"
          />

          <CardContent
            title="Keep website lightweight"
            description="Optimized code means faster load times, improved performance, and a smoother user experience."
            icon={performance.image12}
            containerStyle="flex-col-reverse !p-0 !gap-0"
            iconStyle="w-full h-full object-cover"
            textContainerStyle="p-12"
            className="bg-[#1A1A1A] text-white"
            descriptionStyle="text-white/70 text-lg leading-5 w-[80%]"
            titleStyle="text-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Performance;
