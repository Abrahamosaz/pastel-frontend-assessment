import { footerLinks } from "@/constants";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full hidden md:flex items-center justify-center bg-bg-primary">
      <div className="w-[90%] md:w-[80%] xl:w-[75%] 2xl:w-[70%] flex flex-col gap-6">
        <div className="w-full grid grid-cols-5">
          {footerLinks?.map((footer) => (
            <div key={footer.id} className="flex flex-col gap-6">
              <h2 className="font-semibold text-sm">{footer.label}</h2>
              <div className="flex flex-col gap-4">
                {footer?.items?.map((item) => (
                  <div key={item.id} className="w-full flex">
                    {typeof item.label === "string" ? (
                      <p className="text-sm text-footer-primary hover:text-black cursor-pointer">
                        {item.label}
                      </p>
                    ) : (
                      <item.label className="text-lg cursor-pointer" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t-2 border-[#D0D0D2] mt-10 py-4 flex flex-items justify-between">
          <div className="text-footer-primary text-sm">
            © {new Date().getFullYear()} Droip. All rights reserved
          </div>
          <div className="text-footer-primary text-sm">
            © 2025 Droip. All rights reserved
          </div>
          <div className="text-footer-primary text-sm">
            © 2025 Droip. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
