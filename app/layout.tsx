import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Scrape to Shape Renovations | Your Trusted Home Renovation Experts",
    template: "%s | Scrape to Shape Renovations",
  },
  description:
    "Scrape to Shape Renovations is the GTA's trusted home renovation company. We handle bathrooms, kitchens, basements, roofing, flooring, landscaping, and full-home renovations across Toronto, Mississauga, Brampton, and beyond.",
  keywords: [
    "home renovation GTA",
    "bathroom renovation Toronto",
    "kitchen renovation Mississauga",
    "basement finishing Brampton",
    "roofing contractor GTA",
    "flooring installation Toronto",
    "Scrape to Shape Renovations",
  ],
  openGraph: {
    siteName: "Scrape to Shape Renovations",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F7F5F0] text-[#2D2D2D]">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
