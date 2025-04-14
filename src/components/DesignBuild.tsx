import React from "react";
import AnimateHeader from "./shared/AnimateHeader";
import CardContent from "./shared/CardContent";
import { designBuild } from "@/public/images";
import Image from "next/image";

const DesignBuild = () => {
  return (
    <div className="relative flex items-center justify-center py-20 xl:py-30 bg-bg-primary">
      <div className="w-[90%] lg:w-[80%] 2xl:w-[70%] ">
        <AnimateHeader
          title={
            <h2 className="text-black text-5xl xl:text-6xl 2xl:text-8xl leading-[1.1em] 2xl:tracking-[-5px] font-medium">
              Design and
              <br />
              build everything
            </h2>
          }
          content={
            <p className="text-xl md:text-2xl font-medium">
              more efficiently with the <strong>most advanced</strong> granular
              controls
            </p>
          }
          isShort={true}
        />

        <div className="mt-10 md:mt-20 flex flex-col md:grid grid-cols-2 lg:grid-cols-4 gap-0.5">
          <div className="items-center col-span-2 lg:col-span-4 flex flex-col md:grid grid-cols-4 bg-[#FFFFFF] rounded-[18px] p-10">
            <CardContent
              icon={null}
              title={
                <h2 className="font-semibold text-2xl">
                  Seamless <br />
                  migration
                </h2>
              }
              description="Migrate your existing design seamlessly into Droip with just a click of a button!"
              className="col-span-2 h-full"
              containerStyle="!p-0"
              descriptionStyle="w-[55%] text-base"
            />

            <div className="bg-[#FFFFFF] col-span-2 w-full h-full">
              <Image src={designBuild.safety} alt="image" />
            </div>
          </div>

          <CardContent
            icon={designBuild.formBuilder}
            title="Form builder"
            description="Build forms for any purpose and effortlessly manage form data natively."
            iconStyle="w-full h-full"
            className="col-span-1 lg:col-span-2"
            descriptionStyle="text-base w-[50%]"
          />

          <CardContent
            icon={designBuild.css}
            title="CSS preview"
            description="See real-time CSS changes and fine-tune styles as you need."
            iconStyle="w-full h-full"
            className="col-span-1 lg:col-span-2"
            descriptionStyle="text-base w-[50%]"
          />

          <CardContent
            icon={designBuild.breakpoints}
            title="Unlimited breakpoints"
            description="Achieve pixel-perfect responsiveness across all devices with unlimited breakpoints."
            iconStyle="w-full h-full"
            descriptionStyle="text-base"
          />
          <CardContent
            icon={designBuild.figma}
            title="Figma to droip"
            description="Seamlessly import Figma designs into Droip and bring your vision to life in no time."
            iconStyle="w-full h-full"
            descriptionStyle="text-base"
          />
          <CardContent
            icon={designBuild.code}
            title="Code element"
            description="Add custom HTML, CSS, and JavaScript to an element for extended functionality."
            iconStyle="w-full h-full"
            descriptionStyle="text-base"
          />
          <CardContent
            icon={designBuild.popUp}
            title="Pop-up builder"
            description="Design engaging pop-ups that captivate visitors and boost conversions."
            iconStyle="w-full h-full"
            descriptionStyle="text-base"
          />
          <CardContent
            icon={designBuild.autosaved}
            title="Autosave"
            description="Never lose progress—your work is automatically saved as you build."
            iconStyle="w-full h-full"
            descriptionStyle="text-base"
          />
          <CardContent
            icon={designBuild.global}
            title="Global style manager"
            description="Maintain consistent branding with centralized style controls."
            iconStyle="w-full h-full"
            descriptionStyle="text-base"
          />
          <CardContent
            icon={designBuild.ai}
            title="Droip AI"
            description="Harness AI to accelerate your workflow and creative process."
            iconStyle="w-full h-full"
            className="col-span-2"
            descriptionStyle="text-base"
            textContainerStyle="w-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default DesignBuild;
