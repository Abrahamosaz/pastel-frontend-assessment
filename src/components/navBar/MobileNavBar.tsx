"use client";

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Logo } from "@/public/icons";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { navBarLinks } from "@/constants";
import { ChevronDownIcon } from "lucide-react";
import classNames from "classnames";
import CustomButton from "../shared/CustomButton";

const MobileNavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeOpenNav, setActiveOpenNav] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col items-center justify-center lg:hidden">
      <div className="w-[90%] flex items-center justify-between py-4">
        <Image src={Logo} alt="Logo" className="w-15 md:w-24" />

        <div className="relative w-8 h-8 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="close"
                style={{
                  willChange: "transform, opacity",
                  transformStyle: "preserve-3d",
                }}
                initial={{
                  rotateZ: -90,
                  x: -10,
                  y: -10,
                  opacity: 0,
                }}
                animate={{
                  rotateZ: 0,
                  x: 0,
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  rotateZ: 90,
                  x: 10,
                  y: -10,
                  opacity: 0,
                }}
                transition={{
                  transform: {
                    duration: 0.4,
                    ease: "easeOut",
                  },
                  opacity: {
                    duration: 0.4,
                    ease: "ease",
                  },
                }}
              >
                <IoMdClose
                  onClick={() => setOpen(!open)}
                  className="text-primary text-2xl cursor-pointer"
                />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                style={{
                  willChange: "transform, opacity",
                  transformStyle: "preserve-3d",
                }}
                initial={{
                  rotateZ: 90,
                  x: 10,
                  y: -10,
                  opacity: 0,
                }}
                animate={{
                  rotateZ: 0,
                  x: 0,
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  rotateZ: -90,
                  x: -10,
                  y: -10,
                  opacity: 0,
                }}
                transition={{
                  transform: {
                    duration: 0.4,
                    ease: "easeOut",
                  },
                  opacity: {
                    duration: 0.4,
                    ease: "ease",
                  },
                }}
              >
                <GiHamburgerMenu
                  onClick={() => setOpen(!open)}
                  className="text-primary text-2xl cursor-pointer"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{
              opacity: 1,
              y: 0,
              height: "100vh",
              transition: {
                duration: 0.5,
                ease: "easeInOut",
                height: { duration: 0.5 },
                width: { duration: 0.5 },
              },
            }}
            exit={{
              opacity: 0,
              y: -20,
              height: 0,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
            style={{
              transformStyle: "preserve-3d",
              willChange: "width, height",
            }}
            className="mt-10 absolute w-full flex justify-center self-center top-16 left-0 right-0 bg-white z-50"
          >
            <div className="w-[90%]">
              <div className="flex flex-col space-y-4 py-4">
                {navBarLinks.map((link, index) => (
                  <div
                    key={link.id}
                    className="text-gray-600 hover:text-primary text-lg py-4 border-b-[2px] border-[#EBE9F9]"
                  >
                    <div
                      onClick={() => {
                        if (activeOpenNav) {
                          setActiveOpenNav(null);
                        } else {
                          setActiveOpenNav(link.id);
                        }
                      }}
                      className="flex items-center gap-1"
                    >
                      <p
                        className={classNames({
                          "text-lg": true,
                          "font-semibold":
                            index === 0 || activeOpenNav === link.id,
                        })}
                      >
                        {link.label}
                      </p>
                      {link.items && (
                        <motion.div
                          animate={{
                            rotate: activeOpenNav === link.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDownIcon className="size-4" />
                        </motion.div>
                      )}
                    </div>

                    <AnimatePresence>
                      {link.items && activeOpenNav === link.id && (
                        <div className="p-4 w-full flex flex-col gap-6">
                          {link.items?.map((item) => (
                            <motion.div
                              key={item.id}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{
                                height: "auto",
                                opacity: 1,
                                transition: {
                                  height: { duration: 0.3, ease: "easeInOut" },
                                  opacity: { duration: 0.1 },
                                },
                              }}
                              exit={{
                                height: 0,
                                opacity: 0,
                                transition: {
                                  height: { duration: 0.3, ease: "easeIn" },
                                  opacity: { duration: 0.1 },
                                },
                              }}
                              style={{
                                willChange: "width, height",
                                transformStyle: "preserve-3d",
                                overflow: "hidden",
                              }}
                              className="flex items-center gap-4"
                            >
                              <p>{item.title}</p>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <div className="text-gray-600 hover:text-primary text-lg py-4 border-b-[2px] border-[#EBE9F9]">
                  <div className="flex items-center gap-1">
                    <p className="text-lg">Login</p>
                  </div>
                </div>

                <CustomButton
                  label="Get Started"
                  variant="default"
                  className="text-sm py-2 px-4 rounded-lg cursor-pointer w-fit"
                  onClick={() => {}}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavBar;
