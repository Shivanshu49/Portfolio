import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
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

export const metadata = {
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
  openGraph: {
    title: "Shivanshu Dixit | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, FastAPI, and AI-powered applications. Building scalable and modern web solutions.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${instrument.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
