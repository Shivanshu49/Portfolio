import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-zeta-navy-71.vercel.app"),
  title: "Shivanshu Dixit | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, FastAPI, and AI-powered applications. Building scalable and modern web solutions.",
  keywords: [
    "Shivanshu Dixit",
    "full stack developer",
    "React",
    "FastAPI",
    "AI developer",
    "portfolio",
  ],
  authors: [{ name: "Shivanshu Dixit" }],
  openGraph: {
    title: "Shivanshu Dixit | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, FastAPI, and AI-powered applications. Building scalable and modern web solutions.",
    url: "/",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrument.variable}`}>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:text-black focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
