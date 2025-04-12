import { IconType } from "react-icons";

export interface CustomButtonProps {
  label: string;
  variant?: "default" | "outline" | "transparent";
  className?: string;
  icon?: IconType;
  iconStyle?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface TypographyProps {}

export interface CustomLinkProps {}
