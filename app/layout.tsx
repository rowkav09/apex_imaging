import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

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
      <body className="antialiased">
        {/* Start of Zeacon Code */}
        <Script
          type="text/javascript"
          async
          id="zeacon-sdk"
          src="https://zeacon.com/sdk/correlator.js?api-key=22b37205-4d63-4270-9992-9557d2dbdaaa"
        />
        <Script
          id="zeacon-sdk-correlation-manager"
          type="text/javascript"
          src="https://zeacon.com/sdk/correlation-manager/bundle.js"
        />
        {/* End of Zeacon Code */}
        {children}
      </body>
    </html>
  );
}
