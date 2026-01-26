import type { Metadata } from "next";
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
      <head>
        {/* Start of Zeacon Code */}
        <script type="text/javascript" async={true} id="zeacon-sdk" src="https://zeacon.com/sdk/correlator.js?api-key=22b37205-4d63-4270-9992-9557d2dbdaaa"></script>
        {/* End of Zeacon Code */}
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
