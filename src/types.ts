import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { IconType } from "react-icons";

export interface CustomButtonProps {
  label: string;
  variant?: "default" | "outline" | "transparent";
  className?: string;
  icon?: IconType;
  iconStyle?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface TypographyProps {
  label: string;
}

export interface CustomLinkProps {
  label: string;
}

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

export interface DesignPixelsProps {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  showLink: boolean;
}

export interface CardContentProps {
  title: string | ReactNode;
  description: string;
  icon: any | null;
  titleStyle?: string;
  descriptionStyle?: string;
  iconStyle?: string;
  containerStyle?: string;
  textContainerStyle?: string;
  className?: string;
}
