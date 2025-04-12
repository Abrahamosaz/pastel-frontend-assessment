import type { Metadata } from "next";
import "./globals.css";
import Container from "@/components/Container";

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
      <body>{children}</body>
    </html>
  );
}
