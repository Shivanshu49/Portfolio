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
  title: "Shivanshu Dixit — Backend & AI Developer",
  description:
    "Backend & AI developer building scalable web apps. Focused on MERN, performance, and real-world solutions. Explore projects, services, and get in touch.",
  keywords: [
    "Shivanshu Dixit",
    "backend developer",
    "MERN stack",
    "AI developer",
    "full stack",
    "portfolio",
  ],
  openGraph: {
    title: "Shivanshu Dixit — Backend & AI Developer",
    description:
      "Backend & AI developer building scalable web apps. Focused on MERN, performance, and real-world solutions.",
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
