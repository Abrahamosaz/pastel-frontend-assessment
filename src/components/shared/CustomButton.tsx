import React from "react";

const CustomButton: React.FC<CustomButtonProps> = ({ ...props }) => {
  return <button {...props}>CustomButton</button>;
};

export default CustomButton;
