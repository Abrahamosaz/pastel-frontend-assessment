import { CardContentProps } from "@/types";
import Image from "next/image";
import classNames from "classnames";
import { cn } from "@/utils/cn";
import React from "react";

const CardContent: React.FC<CardContentProps> = ({
  title,
  description,
  icon,
  titleStyle,
  descriptionStyle,
  iconStyle,
  containerStyle,
  textContainerStyle,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex items-end justify-center bg-[#FFFFFF] rounded-[18px]",
        className
      )}
    >
      <div
        className={classNames(
          "flex flex-col gap-10 p-10 w-full",
          containerStyle
        )}
      >
        {icon && (
          <Image
            src={icon}
            alt="Icon"
            quality={100}
            className={classNames("w-8 h-8 rounded-br-[18px]", iconStyle)}
          />
        )}

        <div
          className={classNames(
            "flex flex-col gap-4 text-xl",
            textContainerStyle
          )}
        >
          {React.isValidElement(title) ? (
            title
          ) : (
            <h2 className={classNames("font-semibold text-2xl", titleStyle)}>
              {title}
            </h2>
          )}

          <p className={classNames("text-black/70", descriptionStyle)}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
