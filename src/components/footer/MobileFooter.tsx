import { footerLinks } from "@/constants";
import React from "react";

const MobileFooter = () => {
  const footersGrid = [
    footerLinks.find((footer) => footer.label === "Product"),
    footerLinks.find((footer) => footer.label === "Company"),
    footerLinks.find((footer) => footer.label === "Resources"),
    footerLinks.find((footer) => footer.label === "Support"),
  ];

  const socials = footerLinks.find((footer) => footer.label === "Social");

  return (
    <div className="w-full flex flex-col md:hidden items-center justify-center">
      <div className="w-[90%] flex flex-col gap-12">
        <div className="w-full grid grid-cols-2 gap-4 gap-y-12">
          {footersGrid?.map((footer) => (
            <div key={footer!.id} className="flex flex-col gap-6">
              <h2 className="font-semibold text-sm">{footer!.label}</h2>
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

        <div className="flex items-center gap-8">
          <h2 className="font-semibold text-sm">{socials!.label}</h2>

          <div className="w-full flex items-center gap-4">
            {socials!.items.map((item) => (
              <item.label key={item.id} className="text-lg cursor-pointer" />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t-2 border-[#D0D0D2] mt-20 py-4 w-full flex flex-col gap-6 justify-between">
        <div className="flex items-center justify-between">
          <div className="text-footer-primary text-sm">
            © {new Date().getFullYear()} Droip. All rights reserved
          </div>
          <div className="text-footer-primary text-sm">
            © 2025 Droip. All rights reserved
          </div>
        </div>

        <div className="text-footer-primary text-sm">
          © 2025 Droip. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
