import React from "react";
import { Footer, MobileNavBar, NavBar } from ".";
import MobileFooter from "./footer/MobileFooter";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[80%] xl:w-[75%] 2xl:w-[70%] h-full">
        <NavBar />
        <MobileNavBar />
        <div>{children}</div>
        <Footer />
        <MobileFooter />
      </div>
    </main>
  );
};

export default Container;
