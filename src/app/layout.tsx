import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guitar Chords Library for Myanmar Songs",
  description:
    "A comprehensive library of guitar chords with diagrams, finger positions & more.",
  keywords: [
    "guitar chords",
    "myanmar songs",
    "chord library",
    "music",
    "tutorials",
    "mm songs chords",
    "guitar knowledge",
    "burmese songs chords",
  ],
  openGraph: {
    title: "Guitar Chords Library for Myanmar Songs",
    description:
      "Browse and learn guitar chords for your favorite Myanmar songs.",
    url: "https://guitar-azure.vercel.app/",
    siteName: "GuitarChordsLibrary",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Guitar Chord Library",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
