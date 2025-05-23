"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { DesignPixelsProps } from "@/types";
import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { IoArrowForward } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";

interface FeatureItemProps {
  isActive?: boolean;
  isLastItem?: boolean;
}

const FeatureItem = styled("div")<FeatureItemProps>(
  ({ theme, isActive, isLastItem }) => ({
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    position: "relative",
    paddingLeft: theme.spacing(6),
    paddingBottom: isLastItem ? theme.spacing(0) : theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      paddingBottom: isLastItem ? theme.spacing(0) : theme.spacing(4),
    },
    [theme.breakpoints.up("lg")]: {
      paddingBottom: isLastItem ? theme.spacing(0) : theme.spacing(8),
    },
    [theme.breakpoints.up("xl")]: {
      paddingBottom: isLastItem ? theme.spacing(0) : theme.spacing(10),
    },
    "&::before": {
      content: '""',
      position: "absolute",
      left: 0,
      top: "24px",
      bottom: 0,
      width: "2px",
      backgroundColor: theme.palette.secondary.main,
    },
    "&::after": {
      content: '""',
      position: "absolute",
      left: "-2px",
      top: "12px",
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      backgroundColor: theme.palette.primary.main,
      ...(isActive && {
        boxShadow: `0 0 0 8px ${theme.palette.primary.main}1A`,
      }),
    },
  })
);

const FeaturesList = ({
  features,
  isReverse = false,
}: {
  features: DesignPixelsProps[];
  isReverse?: boolean;
}) => {
  const [selectedFeature, setSelectedFeature] = useState<DesignPixelsProps>(
    features[0]
  );

  const [previousFeature, setPreviousFeature] =
    useState<DesignPixelsProps | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");

  // // Handle feature selection
  const handleFeatureSelect = (feature: DesignPixelsProps) => {
    if (feature.id === selectedFeature?.id) return;

    // Save the current feature as previous before updating
    setPreviousFeature(selectedFeature);

    // Determine direction based on feature id
    if (feature.id > selectedFeature?.id) {
      setDirection("right");
    } else {
      setDirection("left");
    }
    setSelectedFeature(feature);
  };

  return (
    <div
      className={classNames({
        "flex items-start w-full": true,
        "flex-row-reverse": isReverse,
      })}
    >
      <Box
        className={classNames({
          "w-full lg:w-[45%]": true,
          "pl-0 lg:pl-20 2xl:pl-35": isReverse,
        })}
      >
        {features.map((feature, index) => (
          <FeatureItem
            key={feature.id}
            isActive={feature.id === selectedFeature?.id}
            isLastItem={index === features?.length - 1}
          >
            <div
              onClick={() => handleFeatureSelect(feature)}
              className="w-full cursor-pointer flex flex-col gap-6"
            >
              <Typography
                variant="h6"
                className={classNames({
                  "text-[#939394]": feature.id !== selectedFeature?.id,
                  "!font-bold !text-3xl": feature.id === selectedFeature?.id,
                })}
              >
                {feature.title}
              </Typography>
              <AnimatePresence>
                {selectedFeature?.id === feature.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeIn" }}
                    className="w-full lg:w-[70%] overflow-hidden"
                  >
                    <div className="pb-10">
                      <Typography variant="body1">
                        {feature.description}
                      </Typography>

                      {feature.showLink && (
                        <div className="mt-5 text-primary/90 cursor-pointer font-semibold flex items-center gap-2 group relative">
                          <p className="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-primary/90 after:left-0 after:bottom-0 after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                            View Details
                          </p>
                          <IoArrowForward className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      )}

                      <Image
                        className="mt-10 flex lg:hidden object-cover rounded-2xl"
                        src={selectedFeature?.image}
                        alt="feature image"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FeatureItem>
        ))}
      </Box>

      <div className="hidden lg:flex w-[55%] md:h-[30rem] lg:h-[30rem] xl:h-[35rem]">
        <div className="w-full h-full relative rounded-[1.2rem] overflow-hidden bg-gray-100">
          <AnimatePresence initial={false}>
            {direction === "right" ? (
              <>
                {/* Base layer - new selected image */}
                <div
                  className="absolute inset-0 flex items-center justify-center rounded-[1.2rem]"
                  style={{ zIndex: 1 }}
                  key="base-right"
                >
                  <div className="w-full h-full relative rounded-[1.2rem]">
                    <Image
                      src={selectedFeature?.image}
                      alt={selectedFeature?.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "1.2rem",
                      }}
                    />
                  </div>
                </div>

                {/* Previous image sliding out */}
                {previousFeature && (
                  <motion.div
                    key={`previous-${previousFeature.id}`}
                    className="absolute inset-0 flex items-center justify-center rounded-[1.2rem]"
                    style={{ zIndex: 2 }}
                    initial={{ x: "0%" }}
                    animate={{ x: "-100%" }}
                    exit={{ x: "-100%" }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.6,
                    }}
                  >
                    <div className="w-full h-full relative rounded-[1.2rem]">
                      <Image
                        src={previousFeature.image}
                        alt={previousFeature.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                          borderRadius: "1.2rem",
                        }}
                      />
                    </div>
                  </motion.div>
                )}
              </>
            ) : (
              <>
                {/* Base layer - previous image */}
                <div
                  className="absolute inset-0 flex items-center justify-center rounded-[1.2rem]"
                  style={{ zIndex: 1 }}
                  key="base-left"
                >
                  <div className="w-full h-full relative rounded-[1.2rem]">
                    <Image
                      src={previousFeature?.image || selectedFeature?.image}
                      alt={previousFeature?.title || selectedFeature?.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "1.2rem",
                      }}
                    />
                  </div>
                </div>

                {/* New image sliding in */}
                <motion.div
                  key={`selected-${selectedFeature?.id}`}
                  className="absolute inset-0 flex items-center justify-center rounded-[1.2rem]"
                  style={{ zIndex: 2 }}
                  initial={{ x: "-100%" }}
                  animate={{ x: "0%" }}
                  exit={{ x: "-100%" }}
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.6,
                  }}
                >
                  <div className="w-full h-full relative rounded-[1.2rem]">
                    <Image
                      src={selectedFeature?.image}
                      alt={selectedFeature?.title}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: "1.2rem",
                      }}
                    />
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;
