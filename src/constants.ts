import { StaticImageData } from "next/image";
import { IconType } from "react-icons";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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

export const navBarLinks: NavBarLinkProps[] = [
  { id: 1, label: "Home", items: null },
  {
    id: 2,
    label: "Product",
    items: [
      {
        id: 1,
        icon: null,
        title: "Editor",
        description: "Effective Visual Builder",
      },
      {
        id: 2,
        icon: null,
        title: "Interaction & Animation",
        description: "Design interactive websites",
      },
      {
        id: 3,
        icon: null,
        title: "Grids & Layouts",
        description: "Structure more easily",
      },
      {
        id: 4,
        icon: null,
        title: "Media Manager",
        description: "Manage & edit site assets",
      },
      {
        id: 5,
        icon: null,
        title: "Typography",
        description: "Customize your branding",
      },
      {
        id: 6,
        icon: null,
        title: "Form Builder",
        description: "Design any web forms",
      },
      {
        id: 7,
        icon: null,
        title: "Pop-up Builder",
        description: "Build pop-ups visually",
      },
      {
        id: 8,
        icon: null,
        title: "Content Manager",
        description: "Centralized dynamic content management",
      },
      {
        id: 9,
        icon: null,
        title: "SEO",
        description: "Optimize your SEO workflow",
      },
      {
        id: 10,
        icon: null,
        title: "Accessibility",
        description: "Accessible to everyone",
      },
      {
        id: 11,
        icon: null,
        title: "Figma to Droip",
        description: "Turn static design into live websites",
      },
    ],
  },
  {
    id: 3,
    label: "Resources",
    items: [
      {
        id: 1,
        icon: null,
        title: "Droip Blogs",
        description: "Explore what's happening",
      },
      {
        id: 2,
        icon: null,
        title: "Documentation",
        description: "Learn from documentation",
      },
      {
        id: 3,
        icon: null,
        title: "Release Notes",
        description: "Check what's new",
      },
    ],
  },
  {
    id: 4,
    label: "Support",
    items: [
      {
        id: 1,
        icon: null,
        title: "Get Support",
        description: "Fix your issues with our experts",
      },
      {
        id: 2,
        icon: null,
        title: "Feature Request",
        description: "Let us know what's missing",
      },
      {
        id: 3,
        icon: null,
        title: "Contact",
        description: "Contact for query",
      },
    ],
  },
  { id: 5, label: "Pricing", items: null },
];

export const footerLinks: FooterLinkProps[] = [
  {
    id: 1,
    label: "Social",
    items: [
      { id: 1, label: FaFacebook },
      { id: 2, label: FaXTwitter },
      { id: 3, label: FaLinkedin },
      { id: 4, label: FaYoutube },
    ],
  },
  {
    id: 2,
    label: "Product",
    items: [
      { id: 1, label: "Grid & Layouts" },
      { id: 2, label: "Typography" },
      { id: 3, label: "Media Manager" },
      { id: 4, label: "Form Builder" },
      { id: 5, label: "Pop-Up Builder" },
      { id: 6, label: "Interaction & Animations" },
      { id: 7, label: "Accessibility" },
    ],
  },
  {
    id: 3,
    label: "Company",
    items: [
      { id: 1, label: "Affiliates" },
      { id: 2, label: "Terms & Privacy" },
      { id: 3, label: "Cookie" },
    ],
  },
  {
    id: 4,
    label: "Resources",
    items: [
      { id: 1, label: "Blog" },
      { id: 2, label: "Documentation" },
      { id: 3, label: "Release Notes" },
    ],
  },
  {
    id: 5,
    label: "Support",
    items: [
      { id: 1, label: "Pricing" },
      { id: 2, label: "Contact Us" },
    ],
  },
];
