"use client";

import React, { useEffect, useRef, useState } from "react";
import FeaturesList from "./FeaturesList";
import { craftEngages } from "@/constants";
import { motion } from "motion/react";

const CraftEngage = () => {
  const [isInView, setIsInView] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="my-20 lg:my-30 xl:my-50 w-full flex items-center justify-center bg-transparent">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[70%] flex flex-col gap-6">
        <div className="relative" ref={headingRef}>
          <h1 className="w-[90%] md:w-[70%] text-black/30 text-5xl xl:text-6xl 2xl:text-8xl leading-[1.1em] 2xl:tracking-[-5px] font-medium">
            Craft engaging and immersive interactions
          </h1>

          {/* Animated black overlay text with clip-path wipe */}
          <motion.h1
            className="absolute top-0 left-0 w-[90%] md:w-[70%] text-black text-5xl xl:text-6xl 2xl:text-8xl leading-[1.1em] 2xl:tracking-[-5px] font-medium"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            Craft engaging and immersive interactions
          </motion.h1>
        </div>
        <div className="w-full mt-20">
          <FeaturesList features={craftEngages} isReverse={true} />
        </div>
      </div>
    </div>
  );
};

export default CraftEngage;
