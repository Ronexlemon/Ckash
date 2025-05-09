"use client";

import Image from "next/image";
import { Sora } from "next/font/google";
import { useState } from "react";
import WaitlistModal from "./WaitlistModal";
import { FaGooglePlay } from "react-icons/fa";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const Hero = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <div  id="hero"
      className={`relative min-h-screen -mb-40 overflow-hidden ${sora.className}`}
    >
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("hero-bg.png")',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 max-w-5xl mx-auto mt-20 md:mt-0 px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16 lg:py-20 lg:flex lg:items-center lg:gap-x-8">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 lg:flex-shrink-0">
            <h1 className="text-4xl md:text-2xl lg:text-5xl font-bold text-[#0066FF] leading-tight mb-6">
              Simplifying Global Transactions
            </h1>
            <p className="text-gray-600 text-lg md:text-base mb-8 max-w-lg">
              Unlock seamless payments with a secure, <br /> user-friendly
              experience.
            </p>
            <div className="flex flex-wrap gap-4">
            <a
  href="https://play.google.com/store/apps/details?id=xyz.mobilestack.mento"
  target="_blank"
  rel="noopener noreferrer"
>
              <button className="flex  justify-center items-center gap-2 sm:gap-3 bg-[#0066FF] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-[#0052CC] transition-colors">
                              <FaGooglePlay className="w-5 h-5 sm:w-6 sm:h-6" />
                              <div className="text-left">
                                <div className="text-[10px] sm:text-xs">Download on</div>
                                <div className="text-xs sm:text-sm font-semibold">
                                  Google Play
                                </div>
                              </div>
                            </button>
              </a>
              {/* <button
                onClick={() => setIsWaitlistOpen(true)}
                className="border-2 border-[#0066FF] text-[#0066FF] px-6 py-3 rounded-sm text-base font-medium hover:bg-[#0066FF] hover:text-white transition-colors"
              >
                Join Waitlist
              </button> */}
            </div>
            {/* Stats */}
            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-xs text-gray-600">Powered by:</p>
                <p className="text-xl font-bold text-gray-900">DIVVI</p>
                
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div>
                <p className="text-xs text-gray-600">Built on:</p>
                <p className="text-xl font-bold text-gray-900">CELO</p>
              </div>
            </div>
          </div>

          {/* Right Column - Phone Images */}
          <div className="mt-12 lg:mt-0 lg:w-1/2 relative">
            <div className="relative flex items-center justify-center h-[700px] w-full">
              <div className="absolute -right-20  w-[700px] h-[900px] transform -rotate-[5deg]">
                <Image
                  src="/CKASH.svg"
                  alt="cKash App Foreground Interface"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  );
};

export default Hero;
