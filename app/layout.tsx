import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "FPV Cinematic Drone Filming | Professional Aerial Videography",
  description: "Professional FPV cinematic drone filming services. Specializing in high-quality aerial videography with custom bundles for events, real estate, and commercial projects.",
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
        {/* End of Zeacon Code */}
        {children}
      </body>
    </html>
  );
}
