"use client";

import Features from "./Features";
import Hero from "./Hero";
import Steps from "./Steps";
import FAQ from "./FAQ";
import Download from "./Download";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import Partners from "./Partners";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Steps />
      <FAQ />
      <Download />
      <Newsletter />
      <Partners />
      <Footer />
    </div>
  );
};

export default LandingPage;
