"use client";

import React from "react";
import { control, dollar, secure, workflow } from "@/public/icons";
import CardContent from "./shared/CardContent";

const ThirdPartyDep = () => {
  return (
    <div className="relative flex items-center justify-center py-20 xl:py-30 bg-bg-primary">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[70%] flex flex-col gap-6">
        <h2 className="text-4xl md:text-[64px] font-semibold">
          Low <br />
          third-party <br />
          dependencies
        </h2>

        <div className="hidden mt-10 lg:grid grid-cols-3 gap-0.5">
          <CardContent
            icon={control}
            key="first"
            title="More control, less reliance"
            description="Get complete control over your website's performance and aesthetics without extra plugins."
            containerStyle="!p-5 !sm:p-10"
          />
          <div className="col-span-2 bg-[#FFFFFF] p-5 sm:p-10 rounded-[18px]">
            <video
              className="w-full h-full object-fill rounded-lg"
              loop
              muted
              playsInline
              autoPlay
              data-droip="dpseahk9"
              poster=""
            >
              <source
                src="https://droip.com/wp-content/uploads/2025/03/PanzerV3.mp4#t=0,0"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <CardContent
            icon={dollar}
            key="second"
            title="Cost-effective"
            description="Reduce ongoing costs with built-in tools that let you scale seamlessly without extra expenses."
            containerStyle="!p-5 !sm:p-10"
          />
          <CardContent
            icon={workflow}
            key="third"
            title="Simplified workflow"
            description="With everything built in, your design process is streamlined, efficient, and hassle-free."
            containerStyle="!p-5 !sm:p-10"
          />
          <CardContent
            icon={secure}
            key="fouth"
            title="Streamlined & secure"
            description="Fewer external plugins mean fewer vulnerabilities, keeping your site secure and lightweight."
            containerStyle="!p-5 !sm:p-10"
          />
        </div>

        <div className="hidden mt-10 sm:grid lg:hidden grid-cols-2 gap-0.5">
          <CardContent
            icon={control}
            key="first"
            title="More control, less reliance"
            description="Get complete control over your website's performance and aesthetics without extra plugins."
            containerStyle="!p-5 !sm:p-10"
          />
          <CardContent
            icon={dollar}
            key="second"
            title="Cost-effective"
            description="Reduce ongoing costs with built-in tools that let you scale seamlessly without extra expenses."
            containerStyle="!p-5 !sm:p-10"
          />
          <div className="col-span-2 bg-[#FFFFFF] p-5 sm:p-10 rounded-[18px]">
            <video
              className="w-full h-full object-fill rounded-lg"
              loop
              muted
              playsInline
              autoPlay
              data-droip="dpseahk9"
              poster=""
            >
              <source
                src="https://droip.com/wp-content/uploads/2025/03/PanzerV3.mp4#t=0,0"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <CardContent
            icon={workflow}
            key="third"
            title="Simplified workflow"
            description="With everything built in, your design process is streamlined, efficient, and hassle-free."
            containerStyle="!p-5 !sm:p-10"
          />
          <CardContent
            icon={secure}
            key="fouth"
            title="Streamlined & secure"
            description="Fewer external plugins mean fewer vulnerabilities, keeping your site secure and lightweight."
            containerStyle="!p-5 !sm:p-10"
          />
        </div>

        <div className="mt-10 sm:hidden flex flex-col gap-0.5">
          <div className="col-span-2 bg-[#FFFFFF] p-5 sm:p-10 rounded-[18px]">
            <video
              className="w-full h-full object-fill rounded-lg"
              loop
              muted
              playsInline
              autoPlay
              data-droip="dpseahk9"
              poster=""
            >
              <source
                src="https://droip.com/wp-content/uploads/2025/03/PanzerV3.mp4#t=0,0"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <CardContent
            icon={control}
            key="first"
            title="More control, less reliance"
            description="Get complete control over your website's performance and aesthetics without extra plugins."
            containerStyle="!p-5 !sm:p-10"
            descriptionStyle="text-sm"
          />
          <CardContent
            icon={dollar}
            key="second"
            title="Cost-effective"
            description="Reduce ongoing costs with built-in tools that let you scale seamlessly without extra expenses."
            containerStyle="!p-5 !sm:p-10"
            descriptionStyle="text-sm"
          />
          <CardContent
            icon={workflow}
            key="third"
            title="Simplified workflow"
            description="With everything built in, your design process is streamlined, efficient, and hassle-free."
            containerStyle="!p-5 !sm:p-10"
            descriptionStyle="text-sm"
          />
          <CardContent
            icon={secure}
            key="fouth"
            title="Streamlined & secure"
            description="Fewer external plugins mean fewer vulnerabilities, keeping your site secure and lightweight."
            containerStyle="!p-5 !sm:p-10"
            descriptionStyle="text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdPartyDep;
