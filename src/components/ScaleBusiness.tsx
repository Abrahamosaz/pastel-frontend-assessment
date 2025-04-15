"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScaleBusinesContentCard from "./shared/ScaleBusinesContentCard";
import { scaleBusinessContentCards } from "@/constants";

const ScaleBusiness = () => {
  const [isInView, setIsInView] = useState(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // For the heading animation
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

  // For the cards stacking animation
  const { scrollYProgress } = useScroll({
    target: cardsContainerRef,
    offset: ["start end", "end end"],
  });

  return (
    <div
      ref={containerRef}
      className="pt-20 xl:pt-30 w-full flex items-center justify-center bg-[#000000] text-white"
    >
      <div className="w-[90%] lg:w-[80%] 2xl:w-[70%] flex flex-col">
        <div className="relative" ref={headingRef}>
          <h1 className="w-[90%] md:w-[70%] text-white/30 text-5xl xl:text-6xl 2xl:text-8xl leading-[1.1em] 2xl:tracking-[-5px] font-medium">
            Scale your <br /> business with
          </h1>
          <motion.h1
            className="absolute top-0 left-0 w-[90%] md:w-[70%] text-white text-5xl xl:text-6xl 2xl:text-8xl leading-[1.1em] 2xl:tracking-[-5px] font-medium"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            Scale your <br /> business with
          </motion.h1>
        </div>

        {/* Cards with stacking animation */}
        <div ref={cardsContainerRef} className="w-full relative min-h-[350vh]">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            {" "}
            {/* Added top offset */}
            {scaleBusinessContentCards?.map((card, index) => {
              const totalCards = scaleBusinessContentCards.length;
              const scrollSegment = 0.8 / totalCards;
              const startPoint = index * scrollSegment;
              const endPoint = startPoint + scrollSegment;

              const cardProgress = useTransform(
                scrollYProgress,
                [startPoint, endPoint],
                [0, 1]
              );

              const cardY = useTransform(
                cardProgress,
                [0, 1],
                ["100vh", "0vh"]
              );

              const cardOpacity = useTransform(
                cardProgress,
                [0, 0.3, 1],
                [0, 1, 1]
              );

              return (
                <motion.div
                  key={card.id}
                  className="w-full absolute left-0"
                  style={{
                    y: cardY,
                    opacity: cardOpacity,
                    zIndex: index,
                  }}
                  initial={{ y: "100vh", opacity: 0 }}
                >
                  <ScaleBusinesContentCard
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScaleBusiness;
