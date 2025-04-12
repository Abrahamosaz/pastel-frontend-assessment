import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import ThemeRegistry from "@/provider/MuiThemeRegistry";

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pastel Africa Frontend Assessment",
  description: "Frontend assessment for pastel.africa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
