import { footerLinks } from "@/constants";
import React from "react";
import Image from "next/image";
import { producedBy } from "@/public/icons";

const Footer = () => {
  return (
    <div className="pt-10 w-full hidden md:flex items-center justify-center bg-bg-primary">
      <div className="w-[90%] md:w-[80%] xl:w-[75%] 2xl:w-[70%] flex flex-col gap-6">
        <div className="w-full grid grid-cols-5">
          {footerLinks?.map((footer) => (
            <div key={footer.id} className="flex flex-col gap-6">
              {/* header */}
              <h2 className="font-semibold text-base">{footer.label}</h2>

              {/* label */}
              <div className="flex flex-col gap-4">
                {footer?.items?.map((item) => (
                  <div key={item.id} className="w-full flex">
                    {typeof item.label === "string" ? (
                      <p className="text-base text-footer-primary hover:text-black cursor-pointer">
                        {item.label}
                      </p>
                    ) : (
                      <item.label className="mt-2 ml-2 self-center text-lg cursor-pointer" />
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
            <div className="flex items-center gap-2 max-md:justify-end col-span-1">
              <p className="text-[#00000099] font-300 text-sm">A Product by</p>
              <Image alt="producedBy" src={producedBy} className="w-24" />
            </div>
          </div>
          <div className="text-footer-primary text-sm">
            <div className="w-fit cursor-pointer flex items-center rounded-sm bg-[#9353ff] max-md:col-span-2 md:justify-self-end">
              <div className="py-1 px-1.5 rounded-sm ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="19"
                  viewBox="0 0 15 21"
                  fill="none"
                >
                  <path
                    d="M14.5374 0.914062C13.6307 1.08059 12.8146 1.56167 12.2162 2.28329C11.6177 3.00492 11.3094 3.91157 11.3094 4.85523V6.40949H7.39233C3.45709 6.55751 0.71875 9.36999 0.71875 13.2371C0.71875 17.2153 3.65657 20.0833 7.70062 20.0833C11.4001 20.0833 14.1928 17.7334 14.6462 14.2363C14.6825 13.9218 14.7006 13.6257 14.7006 13.3112L14.7188 0.914062H14.5374ZM11.2913 9.85107L11.2732 13.2371C11.2732 13.5702 11.2369 13.9033 11.1643 14.2363C10.7291 15.9571 9.3146 17.0858 7.55554 17.0858C5.36124 17.0858 3.83792 15.439 3.83792 13.1076C3.83792 10.7577 5.36124 9.31448 7.55554 9.31448H11.2913V9.85107Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="bg-white border border-[#9353ff] text-[13px] text-[#5518ab] font-500 py-1 px-2 rounded-sm">
                Made in Droip
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
