import { StaticImageData } from "next/image";
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

export interface NavBarItemsProps {
  id: number;
  icon: StaticImageData | null;
  title: string;
  description: string;
}

export interface NavBarLinkProps {
  id: number;
  label: string;
  items: NavBarItemsProps[] | null;
}

export interface FooterItemsProps {
  id: number;
  label: IconType | string;
}

export interface FooterLinkProps {
  id: number;
  label: string;
  items: FooterItemsProps[];
}
