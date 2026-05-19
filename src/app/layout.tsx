import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FrequencyBuilders — Digital Agency | Brands, Socials & AI",
  description:
    "Full-service digital agency building brands, running social media, producing video ads, and creating AI systems. Book a free call today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#020209] text-white">
        {children}
      </body>
    </html>
  );
}
