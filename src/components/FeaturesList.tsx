"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { designPixels } from "@/constants";
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
  const [activeId, setActiveId] = useState<number>(designPixels[0]?.id);
  const currentImage = features.find((feature) => feature.id === activeId);

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
            isActive={feature.id === activeId}
            isLastItem={index === features?.length - 1}
          >
            <div
              onClick={() => setActiveId(feature.id)}
              className="w-full cursor-pointer flex flex-col gap-6"
            >
              <Typography
                variant="h6"
                className={classNames({
                  "text-[#939394]": feature.id !== activeId,
                  "!font-bold !text-3xl": feature.id === activeId,
                })}
              >
                {feature.title}
              </Typography>
              <AnimatePresence>
                {activeId == feature.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeIn" }}
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
                        className="mt-10 flex lg:hidden h-[350px] object-cover rounded-2xl"
                        src={currentImage?.image!}
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

      <div className="w-[55%] hidden lg:flex relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage?.id}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              className="h-[530px] object-cover rounded-2xl"
              src={currentImage?.image!}
              alt="feature image"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FeaturesList;
