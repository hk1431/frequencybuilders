import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FrequencyBuilders — Law of Attraction Coaching by Deepak Sharma",
  description:
    "Work with Deepak Sharma to rewire your subconscious signal, align with abundance, and start attracting what you were always meant to have.",
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
