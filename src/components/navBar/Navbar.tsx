"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { navBarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import CustomButton from "../shared/CustomButton";
import { motion } from "motion/react";
import Image from "next/image";
import { Logo } from "@/public/icons";
import classNames from "classnames";

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

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

          <NavigationMenu>
            <NavigationMenuList>
              {navBarLinks.map((link, index) => (
                <NavigationMenuItem key={link.id}>
                  {link.items ? (
                    <>
                      <NavigationMenuTrigger className="cursor-pointer font-normal text-base bg-transparent hover:bg-transparent focus:bg-transparent">
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="animate-in slide-in-from-top-2 duration-300 ease-out border-none">
                        <ul className="grid w-[600px] gap-3 p-4 grid-cols-2">
                          {link.items.map((item) => (
                            <ListItem
                              key={item.id}
                              title={item.title}
                              href="#"
                              className="hover:bg-secondary/70"
                            >
                              {item.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      className={classNames({
                        "cursor-pointer text-base bg-transparent hover:bg-transparent focus:bg-transparent":
                          true,

                        "font-semibold": index === 0,
                      })}
                      href="#"
                    >
                      {link.label}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
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
