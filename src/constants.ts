import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  DesignPixelsProps,
  FooterLinkProps,
  NavBarLinkProps,
  ScaleBusinessContentCardProps,
} from "./types";
import { craftEngage, designPixel, scaleBusiness } from "@/public/images";
import { navbar } from "@/public/icons";

export const navBarLinks: NavBarLinkProps[] = [
  { id: 1, label: "Home", items: null, href: "#" },
  {
    id: 2,
    label: "Product",
    items: [
      {
        id: 1,
        icon: navbar.product.editor,
        title: "Editor",
        description: "Effective Visual Builder",
        href: "#",
      },
      {
        id: 2,
        icon: navbar.product.animation,
        title: "Interaction & Animation",
        description: "Design interactive websites",
        href: "#",
      },
      {
        id: 3,
        icon: navbar.product.grids,
        title: "Grids & Layouts",
        description: "Structure more easily",
        href: "#",
      },
      {
        id: 4,
        icon: navbar.product.media,
        title: "Media Manager",
        description: "Manage & edit site assets",
        href: "#",
      },
      {
        id: 5,
        icon: navbar.product.typography,
        title: "Typography",
        description: "Customize your branding",
        href: "#",
      },
      {
        id: 6,
        icon: navbar.product.form,
        title: "Form Builder",
        description: "Design any web forms",
        href: "#",
      },
      {
        id: 7,
        icon: navbar.product.popUp,
        title: "Pop-up Builder",
        description: "Build pop-ups visually",
        href: "#",
      },
      {
        id: 8,
        icon: navbar.product.content,
        title: "Content Manager",
        description: "Centralized dynamic content management",
        href: "#",
      },
      {
        id: 9,
        icon: navbar.product.seo,
        title: "SEO",
        description: "Optimize your SEO workflow",
        href: "#",
      },
      {
        id: 10,
        icon: navbar.product.accessibility,
        title: "Accessibility",
        description: "Accessible to everyone",
        href: "#",
      },
      {
        id: 11,
        icon: navbar.product.figma,
        title: "Figma to Droip",
        description: "Turn static design into live websites",
        href: "#",
      },
    ],
    href: "#",
  },
  {
    id: 3,
    label: "Resources",
    items: [
      {
        id: 1,
        icon: navbar.resource.blogs,
        title: "Droip Blogs",
        description: "Explore what's happening",
        href: "#",
      },
      {
        id: 2,
        icon: navbar.resource.documentation,
        title: "Documentation",
        description: "Learn from documentation",
        href: "#",
      },
      {
        id: 3,
        icon: navbar.resource.notes,
        title: "Release Notes",
        description: "Check what's new",
        href: "#",
      },
    ],
    href: "#",
  },
  {
    id: 4,
    label: "Support",
    items: [
      {
        id: 1,
        icon: navbar.support.support_,
        title: "Get Support",
        description: "Fix your issues with our experts",
        href: "#",
      },
      {
        id: 2,
        icon: navbar.support.feature,
        title: "Feature Request",
        description: "Let us know what's missing",
        href: "#",
      },
      {
        id: 3,
        icon: navbar.support.contact,
        title: "Contact",
        description: "Contact for query",
        href: "#",
      },
    ],
    href: "#",
  },
  { id: 5, label: "Pricing", items: null, href: "#" },
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

export const designPixels: DesignPixelsProps[] = [
  {
    id: 1,
    title: "Advanced typography",
    description:
      "Take full control over your text with precision typography tools. Adjust fonts, spacing, and styles to add more character to your design.",
    image: designPixel.image1,
    showLink: true,
  },
  {
    id: 2,
    title: "CSS grids and layouts",
    description:
      "Build complex layouts with ease using CSS Grids. Create multi-directional structures, manage spacing, and achieve perfect alignment without limitations.",
    image: designPixel.image2,
    showLink: true,
  },
  {
    id: 3,
    title: "Adaptive design",
    description:
      "Ensure flawless responsiveness across all devices. Design with adaptive elements that adjust seamlessly to different screen sizes and resolutions.",
    image: designPixel.image3,
    showLink: false,
  },
  {
    id: 4,
    title: "Designed for efficiency",
    description:
      "Streamline your workflow with intuitive tools that simplify layout structuring. Save time while maintaining complete design accuracy and flexibility.",
    image: designPixel.image4,
    showLink: false,
  },
];

export const craftEngages: DesignPixelsProps[] = [
  {
    id: 1,
    title: "Advanced interaction timeline",
    description:
      "Design smooth, multi-step animations with a timeline-based editor for complete control.",
    image: craftEngage.image5,
    showLink: false,
  },
  {
    id: 2,
    title: "Custom timing editor",
    description:
      "Fine-tune every interaction to deliver flawless performance by adjusting delays, durations, easing functions, and more.",
    image: craftEngage.image6,
    showLink: false,
  },
  {
    id: 3,
    title: "Advanced triggers",
    description:
      "Trigger animations based on scrolling, hovering, page load, and more for a dynamic experience.",
    image: craftEngage.image7,
    showLink: false,
  },
  {
    id: 4,
    title: "Achieve limitless precision",
    description:
      "Create flawless, interactive designs visually with unmatched accuracy and finesse.",
    image: craftEngage.image8,
    showLink: false,
  },
];

export const scaleBusinessContentCards: (ScaleBusinessContentCardProps & {
  id: number;
})[] = [
  {
    id: 1,
    title: "Content Manager",
    description:
      "Handle dynamic data with the built-in content manager. Link data dynamically to any part of your website.",
    image: scaleBusiness.content,
  },
  {
    id: 2,
    title: "Media Manager",
    description:
      "Organize and edit all media assets, including SVGs, Lottie, and icons, with the built-in image and shape editor.",
    image: scaleBusiness.media,
  },
  {
    id: 3,
    title: "SEO",
    description:
      "Dynamically update SEO content across pages to optimize your website's search performance.",
    image: scaleBusiness.seo,
  },
];
