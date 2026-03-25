import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mirage Sites | Custom Websites for Small Businesses",
    template: "%s | Mirage Sites",
  },
  description:
    "Custom, affordable websites built to turn small businesses into big brands. Web design, redesign, e-commerce, and more.",
  keywords: [
    "web design",
    "small business websites",
    "affordable web design",
    "custom websites",
    "Los Angeles web designer",
  ],
  metadataBase: new URL("https://miragesites.com"),
  openGraph: {
    title: "Mirage Sites | Custom Websites for Small Businesses",
    description:
      "Custom websites for cafes, gyms, boutiques, and every small business in between. No templates. From $499.",
    url: "https://miragesites.com",
    siteName: "Mirage Sites",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mirage Sites | Custom Websites for Small Businesses",
    description:
      "Custom websites for cafes, gyms, boutiques, and every small business in between. No templates. From $499.",
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
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-text-primary">
        <Navbar />
        <main className="flex-1 pt-[73px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
