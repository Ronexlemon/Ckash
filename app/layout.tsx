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
  metadataBase: new URL("https://ckash.app/"),
  title: {
    default: "cKash",
    template: "%s | cKash",
  },
  description:
    "cKash is a mobile-first, non-custodial crypto wallet designed for everyday use across Africa.  Send, receive, and store digital assets seamlessly across Africa.",
  keywords: [
    "ckash",
    "ckash wallet ",
    "ckash app",
    "cKash App",
    "cKash crypto wallet",
    "cKash digital wallet",
    "cKash Celo blockchain",
    "cKash Africa",
    "cKash mobile payments",
    "cKash cryptocurrency",
  ],
  authors: [{ name: "cKash Team" }],
  creator: "cKash",
  publisher: "cKash",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ckash.app",
    siteName: "cKash",
    title: "cKash",
    description:
      "cKash is a mobile-first, non-custodial crypto wallet designed for everyday use across Africa.",
    images: [
      {
        url: "/ckash prev.png",
        width: 1200,
        height: 630,
        alt: "cKash",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "cKash",
    description:
      "cKash is a mobile-first, non-custodial crypto wallet designed for everyday use across Africa.",
    images: ["/ckash prev.png"],
    creator: "@ckashApp",
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
