import React from "react";
import { cn } from "@/utils/cn";
import { CustomButtonProps } from "@/types";
import classNames from "classnames";

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  variant = "default",
  icon: ReactIcon,
  iconStyle,
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "p-2 rounded-md font-medium transition-colors text-sm flex items-center gap-2 justify-center cursor-pointer",
        variant === "default" && "bg-primary text-white",
        variant === "outline" &&
          "border-2 border-blue-500 text-blue-500 hover:bg-blue-50",
        variant === "transparent" && "bg-transparent text-black/70",
        className
      )}
      {...props}
    >
      {label}
      {ReactIcon && (
        <ReactIcon
          className={classNames({
            "text-lg": true,
            iconStyle,
          })}
        />
      )}
    </button>
  );
};

export default CustomButton;
