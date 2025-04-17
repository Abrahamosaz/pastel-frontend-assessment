"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";

interface OscillatingSwiperProps {
  images: (string | StaticImageData)[];
  oscillationDuration?: number;
  scrollSpeed?: number;
  startingDelay?: number;
  rowIndex?: number; // Add rowIndex prop to determine size reduction
}

export default function OscillatingSwiper({
  images,
  oscillationDuration = 8,
  scrollSpeed = 0.08,
  startingDelay = 0,
  rowIndex = 0, // Default to 0 if not provided
}: OscillatingSwiperProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Calculate size reduction based on row index
  const getImageSize = () => {
    const baseWidth = 360; // Base max-width for the first row
    const reductionFactor = 0.85; // 15% reduction for each row
    const width = baseWidth * Math.pow(reductionFactor, rowIndex);
    return {
      width: `calc(80vw - ${32 * (rowIndex + 1)}px)`,
      maxWidth: `${width}px`,
    };
  };

  React.useEffect(() => {
    if (!containerRef.current || images.length === 0) return;

    const scrollContainer = containerRef.current;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    let direction = 1;
    let animationId: number;
    let lastTimestamp: number | null = null;
    let elapsedTime = -startingDelay;
    let currentPosition = 0;

    const animate = (timestamp: number) => {
      if (lastTimestamp === null) {
        lastTimestamp = timestamp;
        animationId = requestAnimationFrame(animate);
        return;
      }

      const deltaTime = (timestamp - lastTimestamp) / 1000;
      lastTimestamp = timestamp;

      elapsedTime += deltaTime;

      if (elapsedTime < 0) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      if (elapsedTime >= oscillationDuration) {
        direction *= -1;
        elapsedTime = 0;
      }

      const progress = elapsedTime / oscillationDuration;
      const targetPosition =
        direction === 1 ? maxScroll * progress : maxScroll * (1 - progress);

      const scrollDelta = (targetPosition - currentPosition) * scrollSpeed;
      currentPosition += scrollDelta;

      scrollContainer.scrollLeft = currentPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [images, oscillationDuration, scrollSpeed, startingDelay]);

  const imageSize = getImageSize();

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-hidden py-0"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="flex-shrink-0 rounded-lg overflow-hidden shadow-lg"
            style={{
              width: imageSize.width,
              maxWidth: imageSize.maxWidth,
            }}
          >
            <div
              className="relative w-full"
              style={{
                paddingBottom: `${56.25 - rowIndex * 2}%`, // Slightly reduce height ratio for each row
              }}
            >
              <Image
                src={src}
                alt={`Design ${index + 1}`}
                fill
                className="object-cover"
                sizes={`(max-width: 768px) ${90 - rowIndex * 5}vw, ${
                  400 - rowIndex * 40
                }px`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
