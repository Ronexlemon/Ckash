"use client";

import { Sora } from "next/font/google";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const faqs = [
  {
    question: "What is cKash?",
    answer:
      "cKash is a fast, secure, and low-cost digital payment app built on the Celo blockchain. It enables users to send, receive, and store digital assets seamlessly.",
  },
  {
    question: "How does cKash work?",
    answer:
      "cKash leverages blockchain technology to facilitate seamless transactions. You can send and receive money instantly using just a phone number or wallet address.",
  },
  {
    question: "Why cKash ?",
    answer:
      "cKash is fast, low-cost, secure, and gives you full control over your money—all with a mobile-friendly design.",
  },
  {
    question: "How to protect your wallet?",
    answer:
      "Keep your recovery phrase safe, enable security features, and never share your recovery phrase."
      },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach us via:\n• Email: support@email.com\n• Telegram: Support Channel\n• Help Center within the app - AI Agent Chat Bot",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 bg-[#ffff] ${sora.className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="lg:w-2/4 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0066FF] leading-tight mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-sm mb-8">
              Real stories from real users — see how our seamless app payment
              solution is transforming the way people transact globally
            </p>
            <button className="hidden sm:bock bg-[#0066FF] text-white px-8 py-3 rounded-md text-base font-medium hover:bg-[#0052CC] transition-colors">
              Download App
            </button>
          </div>

          {/* Right Column - FAQs */}
          <div className="lg:w-2/4">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <button
                    className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-[#0066FF] text-base font-medium">
                      {faq.question}
                    </span>
                    <FiChevronDown
                      className={`w-6 h-6 text-[#0066FF] transition-transform ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="pb-4">
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
