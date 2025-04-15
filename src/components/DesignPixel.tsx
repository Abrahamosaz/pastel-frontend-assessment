"use client";

import React, { useRef, useEffect, useState } from "react";
import FeaturesList from "./FeaturesList";
import { designPixels } from "@/constants";
import { motion } from "framer-motion";

const DesignPixel = () => {
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
    <div className="mt-20 lg:mt-30 xl:mt-50 w-full flex items-center justify-center bg-transparent">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[70%] flex flex-col gap-6">
        <div className="relative" ref={headingRef}>
          {/* Base gray text */}
          <h1 className="w-[90%] text-black/30  text-5xl xl:text-6xl 2xl:text-8xl leading-[1.1em] 2xl:tracking-[-5px] font-medium">
            Design pixel-perfect sites beyond ordinary
          </h1>

          {/* Animated black overlay text with clip-path wipe */}
          <motion.h1
            className="absolute top-0 left-0 w-[90%] text-black text-5xl xl:text-6xl 2xl:text-8xl leading-[1.1em] 2xl:tracking-[-5px] font-medium"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            Design pixel-perfect sites beyond ordinary
          </motion.h1>
        </div>

        <div className="w-full mt-20">
          <FeaturesList features={designPixels} />
        </div>
      </div>
    </div>
  );
};

export default DesignPixel;
