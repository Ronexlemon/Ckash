"use client";

import { Sora } from "next/font/google";
import Image from "next/image";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const Partners = () => {
  const partners = [
    {
      name: "CELO",
      logo: "/ADAO.svg",
    },
    {
      name: "Mento",
      logo: "/mento.svg",
    },
    {
      name: "Pretium",
      logo: "/pret.svg",
    },
    {
      name: "Divvi",
      logo: "/divi.svg",
    },
  ];

  return (
    <section className={`pb-16 bg-[#ffff] ${sora.className}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0066FF] leading-tight">
            Partners &amp; integrations
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="relative">
          {/* Partners Logos */}
          <div className="flex items-center justify-between gap-8 md:gap-12 overflow-hidden py-8">
            <div className="flex items-center justify-between min-w-full gap-8 md:gap-12 px-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="w-[120px] md:w-[160px] h-[60px] md:h-[80px] relative grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
