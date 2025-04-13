import React from "react";
import { Footer, MobileNavBar, NavBar } from ".";
import MobileFooter from "./footer/MobileFooter";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="w-full h-full">
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
