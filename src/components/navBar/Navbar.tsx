"use client";

import React, { useEffect, useState } from "react";
import CustomButton from "../shared/CustomButton";
import Image from "next/image";
import { Logo } from "@/public/icons";
import Navigation from "./Navigation";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Make the navbar visible when scrolling up
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`hidden lg:flex w-full py-4 items-center justify-center fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-[90%] md:w-[80%] xl:w-[75%] 2xl:w-[70%] flex items-center justify-between">
        <div className="flex items-center">
          <Image src={Logo} alt="Logo" className="mr-10" />

          <Navigation />
        </div>

        <div className="flex items-center gap-4">
          <CustomButton
            label="Login"
            variant="transparent"
            className="text-sm py-2 px-4 cursor-pointer rounded-lg"
            onClick={() => {}}
          />

          <CustomButton
            label="Get Started"
            variant="default"
            className="text-sm py-2 px-4 rounded-lg cursor-pointer"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
