"use client";

import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../shared/CustomButton";
import { navBarLinks } from "@/constants";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "motion/react";
import { NavBarItemsProps, NavBarLinkProps } from "@/types";

interface NavDropdownProps {
  items: NavBarItemsProps[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const NavDropdown: React.FC<NavDropdownProps> = ({
  items,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <motion.div
      className="absolute top-full left-0 mt-[8px] backdrop-blur-md bg-white/70 z-[-9999px] rounded-lg shadow-lg p-6 w-[600px] overflow-hidden"
      // ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{
        height: {
          duration: 0.3,
          ease: "easeIn",
        },
        opacity: {
          duration: 0.3,
          ease: "easeIn",
        },
      }}
    >
      <div className="grid grid-cols-2 gap-2">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="flex flex-col gap-1 p-3 rounded-lg hover:bg-[#EBE8FE] transition-colors cursor-pointer"
          >
            <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
            <p className="text-xs text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Navbar = () => {
  const [hoverItem, setHoveredItem] = useState<number | null>(null);
  const [navItems, setNavItems] = useState<NavBarLinkProps | null>(null);

  useEffect(() => {
    if (hoverItem) {
      const navItems = navBarLinks.find((items) => items.id === hoverItem);
      setNavItems(navItems || null);
    }
  }, [hoverItem]);

  return (
    <div className="hidden md:flex w-full py-4 items-center justify-center">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="font-semibold text-primary text-xl mr-10">droip</h1>

          <div className="relative flex items-center gap-6">
            {navBarLinks?.map((link) => (
              <div
                key={link.id}
                onClick={() => setHoveredItem(link.id)}
                onMouseEnter={() => setHoveredItem(link.id)}
                onMouseLeave={() => {
                  setNavItems(null);
                }}
                className="flex items-center text-sm gap-1 cursor-pointer"
              >
                <Link href="#">{link.label}</Link>
                {link.items && (
                  <div
                    className="transition-transform duration-300"
                    style={{
                      transform: `rotate(${
                        hoverItem === link.id ? 180 : 0
                      }deg)`,
                    }}
                  >
                    <IoIosArrowDown />
                  </div>
                )}
              </div>
            ))}

            {navItems && navItems?.items && (
              <NavDropdown
                items={navItems.items}
                onMouseEnter={() => setHoveredItem(navItems.id)}
                onMouseLeave={() => setNavItems(null)}
              />
            )}
          </div>
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
