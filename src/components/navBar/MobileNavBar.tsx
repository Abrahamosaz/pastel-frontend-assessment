"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "@/public/icons";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navBarLinks } from "@/constants";
import { ChevronDownIcon } from "lucide-react";
import classNames from "classnames";
import CustomButton from "../shared/CustomButton";

const MobileNavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeOpenNav, setActiveOpenNav] = useState<number | null>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Don't hide navbar when menu is open
      if (open) {
        setVisible(true);
        return;
      }

      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, open]);

  // When menu opens, ensure navbar is visible
  useEffect(() => {
    if (open) {
      setVisible(true);
    }
  }, [open]);

  return (
    <div className="w-full flex flex-col items-center justify-center lg:hidden">
      <div
        className={`w-full fixed top-0 left-0 right-0 bg-white backdrop-blur-sm z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-[90%] md:w-[85%] mx-auto flex items-center justify-between py-4">
          <Image src={Logo} alt="Logo" className="w-15" />

          <div className="relative w-8 h-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden relative w-7 h-7 flex items-center justify-center focus:outline-none"
                aria-label={open ? "Close menu" : "Open menu"}
              >
                <div className="relative w-6 h-5 flex items-center justify-center">
                  <span
                    className={`absolute h-0.5 w-5 bg-primary rounded-sm transition-all duration-300 ease-out ${
                      open ? "rotate-45" : "-translate-y-1.5"
                    }`}
                  ></span>

                  <span
                    className={`absolute h-0.5 w-5 bg-primary rounded-sm transition-all duration-300 ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>

                  <span
                    className={`absolute h-0.5 w-5 bg-primary rounded-sm transition-all duration-300 ease-out ${
                      open ? "-rotate-45" : "translate-y-1.5"
                    }`}
                  ></span>
                </div>
              </button>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Spacer to push content below the fixed header */}
      <div className="h-16"></div>

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
            className="fixed inset-0 top-16 bg-white z-40"
          >
            <div className="w-[90%] md:w-[85%] mx-auto h-full pb-8 overflow-y-auto hide-scrollbar">
              <div className="flex flex-col space-y-4 py-4">
                {navBarLinks.map((link, index) => (
                  <div key={link.id} className="text-gray-600 text-lg py-4">
                    <div
                      onClick={() => {
                        if (activeOpenNav === link.id) {
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
                        <div className="p-4 w-full flex flex-col gap-10">
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
                              {item.icon && (
                                <Image src={item.icon} alt="icon" />
                              )}
                              <p className="text-sm font-semibold">
                                {item.title}
                              </p>
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

                {/* Make sure the Get Started button is visible */}
                <div className="pt-4 pb-16">
                  <CustomButton
                    label="Get Started"
                    variant="default"
                    className="text-sm py-2 px-4 rounded-lg cursor-pointer w-fit"
                    onClick={() => {}}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavBar;
