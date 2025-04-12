import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileNavBar = () => {
  return (
    <div className="flex md:hidden w-full py-4 items-center justify-center">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-semibold text-primary text-xl mr-10">droip</h1>

        <GiHamburgerMenu className="text-primary text-xl" />
      </div>
    </div>
  );
};

export default MobileNavBar;
