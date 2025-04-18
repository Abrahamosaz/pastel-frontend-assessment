"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import ScaleBusinesContentCard from "./shared/ScaleBusinesContentCard";
import { scaleBusinessContentCards } from "@/constants";
import { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
  id: string | number;
}

interface AnimatedCardProps {
  card: CardProps;
  index: number;
  totalCards: number;
  scrollYProgress: MotionValue<number>;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  card,
  index,
  totalCards,
  scrollYProgress,
}) => {
  // Each component instance has its own hooks at the top level
  const scrollSegment = 0.8 / totalCards;
  const startPoint = index * scrollSegment;
  const endPoint = startPoint + scrollSegment;

  // Use useTransform hook properly at the component top level
  const y = useTransform(
    scrollYProgress,
    [startPoint, endPoint],
    ["100vh", "0vh"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [startPoint, startPoint + 0.3 * scrollSegment, endPoint],
    [0, 1, 1]
  );

  return (
    <motion.div
      className="w-full absolute left-0"
      style={{
        y,
        opacity,
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
};

const ScaleBusiness: React.FC = () => {
  const [isInView, setIsInView] = useState<boolean>(false);
  const headingRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

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
      <div className="w-full flex flex-col items-center">
        <div className="relative w-[90%] 2xl:w-[70%]" ref={headingRef}>
          <h1 className="hidden lg:flex w-[90%] md:w-[70%] text-white/30 text-5xl lg:text-7xl 2xl:text-8xl leading-[1.1em] 2xl:tracking-[-5px] font-medium">
            Scale your <br /> business with
          </h1>

          <h1 className="flex lg:hidden w-[90%] md:w-[70%] text-white/30 text-5xl lg:text-7xl 2xl:text-8xl leading-[1.1em] 2xl:tracking-[-5px] font-medium">
            Scale your business with
          </h1>
          <motion.h1
            className="absolute top-0 left-0 w-[90%] md:w-[70%] hidden lg:flex text-white text-5xl lg:text-7xl 2xl:text-8xl leading-[1.1em] 2xl:tracking-[-5px] font-medium"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            Scale your <br /> business with
          </motion.h1>

          <motion.h1
            className="absolute top-0 left-0 w-[90%] flex lg:hidden md:w-[70%] text-white text-5xl lg:text-7xl 2xl:text-8xl leading-[1.1em] 2xl:tracking-[-5px] font-medium"
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            Scale your business with
          </motion.h1>
        </div>

        {/* Cards with stacking animation */}
        <div
          ref={cardsContainerRef}
          className="w-full lg:w-[90%] 2xl:w-[70%] relative min-h-[350vh]"
        >
          <div className="sticky top-0 h-screen flex items-center justify-center">
            {scaleBusinessContentCards?.map((card, index) => (
              <AnimatedCard
                key={card.id}
                card={card}
                index={index}
                totalCards={scaleBusinessContentCards.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScaleBusiness;
