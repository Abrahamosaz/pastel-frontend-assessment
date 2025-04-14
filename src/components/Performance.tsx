"use client";

import React, { useState, useEffect } from "react";
import { performance } from "@/public/images";
import CardContent from "./shared/CardContent";

const Performance = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById("performance-container");
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
    <div
      id="performance-container"
      className="relative flex items-center justify-center py-20 xl:py-30 bg-black text-white overflow-hidden"
    >
      <div className="w-[90%] 2xl:w-[70%] flex flex-col items-center justify-center gap-6">
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

      {/* Gradient spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-90 z-20"
        style={{
          background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(77, 59, 219, 0.4), transparent 60%)`,
        }}
      />
    </div>
  );
};

export default Performance;
