import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";

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
    default: "cKash - Africa's Mobile-First Stablecoin Wallet",
    template: "%s | cKash",
  },
  description:
    "cKash is a fast, secure, and low-cost digital payment app built on the Celo blockchain. Send, receive, and store digital assets seamlessly across Africa.",
  keywords: [
    "cKash",
    "stablecoin",
    "digital wallet",
    "Celo blockchain",
    "Africa",
    "mobile payments",
    "cryptocurrency",
    "digital assets",
  ],
  authors: [{ name: "cKash Team" }],
  creator: "cKash",
  publisher: "cKash",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ckash.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ckash.app",
    siteName: "cKash",
    title: "cKash - Africa's Mobile-First Stablecoin Wallet",
    description:
      "Fast, secure, and low-cost digital payment app built on the Celo blockchain.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "cKash - Africa's Mobile-First Stablecoin Wallet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "cKash - Africa's Mobile-First Stablecoin Wallet",
    description:
      "Fast, secure, and low-cost digital payment app built on the Celo blockchain.",
    images: ["/og-image.png"],
    creator: "@ckashApp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
    yandex: "your-yandex-verification",
    yahoo: "your-yahoo-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="canonical" href="https://ckash.app" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
