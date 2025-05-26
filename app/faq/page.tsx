import type { Metadata } from "next";
import FAQ from "../components/FAQ";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about cKash - Africa's mobile-first stablecoin wallet. Learn about our features, security, and how to get started.",
  openGraph: {
    title: "cKash",
    description:
      "Find answers to common questions about cKash - Africa's mobile-first stablecoin wallet. Learn about our features, security, and how to get started.",
    url: "https://ckash.app",
  },
  twitter: {
    title: "cKash",
    description:
      "Find answers to common questions about cKash - Africa's mobile-first stablecoin wallet. Learn about our features, security, and how to get started.",
    images: ["/ckash prev.png"],
  },
};

export default function FAQPage() {
  return <FAQ />;
}
