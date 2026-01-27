import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Apex Aerial Imaging | Professional Aerial Photography & Videography",
  description: "Apex Aerial Imaging - Professional aerial photography and videography services. Capturing stunning perspectives from above with cinematic quality and natural artistry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-bg text-primary ${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
