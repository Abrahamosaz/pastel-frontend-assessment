"use client";

import Image from "next/image";
import { swiperImages } from "@/public/images/swiper";
import OscillatingSwiper from "./OscillatingSwiper";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

export default function SwipesSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });

  const [orAnimation, setOrAnimation] = useState({
    opacity: 0,
    y: -50, // Start above current position, from where the previous "Or" faded
  });

  // Update animation when component comes into view
  useEffect(() => {
    if (isInView) {
      setOrAnimation({
        opacity: 1,
        y: 0,
      });
    } else {
      setOrAnimation({
        opacity: 0,
        y: -50,
      });
    }
  }, [isInView]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById("jump-start");
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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById("jump-start");
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
      id="jump-start"
      ref={sectionRef}
      className="relative py-20 w-full flex flex-col gap-4 bg-black text-white"
    >
      <div className="flex items-center justify-end">
        <div className="ml-10 lg:ml-0 w-full lg:w-[46%] flex flex-col gap-4">
          <motion.h1
            className="hidden lg:flex text-[150px] font-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{
              opacity: orAnimation.opacity,
              y: orAnimation.y,
            }}
            transition={{ duration: 0.8 }}
          >
            Or
          </motion.h1>
          <h1 className="hidden lg:flex lg:text-6xl font-semibold">
            Jumpstart your <br /> business with <br /> beautifully crafted
            <br />
            themes and sections
          </h1>

          <h1 className="flex lg:hidden text-4xl sm:text-5xl font-semibold">
            Jumpstart your business <br /> with beautifully crafted
            <br />
            themes and sections
          </h1>
        </div>
      </div>

      <div className="relative w-full flex flex-col items-center sm:items-end">
        <div className="w-full max-w-[1600px] pt-10 pb-4">
          <Image
            src={swiperImages.rocket}
            alt="Rocket icon"
            width={50}
            height={50}
            className="ml-10 lg:ml-1"
          />
        </div>

        <div className="w-full max-w-[1600px] flex flex-col lg:grid grid-cols-1 md:grid-cols-[1fr_3fr] items-start justify-start px-4 gap-y-4 md:gap-y-0">
          {/* Header */}
          <div className="max-w-xl sm:max-w-2xl lg:max-w-sm w-full md:mx-0 md:text-left space-y-4">
            <div className="flex flex-col items-start gap-3 mb-4">
              <h2 className="ml-8 lg:ml-0 text-lg sm:text-2xl font-medium text-white leading-tight">
                Launch with ease using stunning, ready-to-use themes & sections
                designed for every need.
              </h2>
            </div>
          </div>

          {/* Swiper Rows */}
          <div className="relative w-full overflow-hidden">
            {/* Left gradient overlay */}
            <div className="absolute top-0 left-0 h-full w-12 z-10 bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none" />

            {/* Right gradient overlay */}
            <div className="absolute top-0 right-0 h-full w-12 z-10 bg-gradient-to-l from-black via-black/50 to-transparent pointer-events-none" />

            {/* First Row */}
            <div className="mb-2">
              <OscillatingSwiper
                images={[
                  swiperImages.swipe1_1,
                  swiperImages.swipe1_2,
                  swiperImages.swipe1_3,
                  swiperImages.swipe1_4,
                ]}
                oscillationDuration={12}
                startingDelay={0}
                rowIndex={0}
              />
            </div>

            {/* Second Row */}
            <div className="mb-2">
              <OscillatingSwiper
                images={[
                  swiperImages.swipe2_1,
                  swiperImages.swipe2_2,
                  swiperImages.swipe2_3,
                  swiperImages.swipe2_4,
                  swiperImages.swipe2_5,
                ]}
                oscillationDuration={14}
                startingDelay={2}
                rowIndex={1}
              />
            </div>

            {/* Third Row */}
            <div>
              <OscillatingSwiper
                images={[
                  swiperImages.swipe3_1,
                  swiperImages.swipe3_2,
                  swiperImages.swipe3_3,
                  swiperImages.swipe3_4,
                  swiperImages.swipe3_5,
                  swiperImages.swipe3_6,
                ]}
                oscillationDuration={10}
                startingDelay={4}
                rowIndex={2}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient spotlight effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-90 z-20 rounded-3xl"
        style={{
          background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(77, 59, 219, 0.4), transparent 60%)`,
        }}
      />
    </div>
  );
}
