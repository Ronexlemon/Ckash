"use client";

import { Sora } from "next/font/google";
import Link from "next/link";
import { FaGooglePlay, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const Footer = () => {
  return (
    <footer
      className={`bg-[#0A1E8F] text-white py-12 sm:py-16 ${sora.className}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 justify-between">
          {/* Logo and Description */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-3">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              cKash
            </h2>
            <p className="text-white/70 text-sm mb-6 sm:mb-8">
              Unlock seamless payments with a secure,{" "}
              <br className="hidden sm:block" /> user-friendly experience.
            </p>
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
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

              {/* <button className="flex  justify-center items-center gap-2 sm:gap-3 bg-[#0066FF] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-md hover:bg-[#0052CC] transition-colors">
                <FaApple className="w-5 h-5 sm:w-6 sm:h-6" />
                <div className="text-left">
                  <div className="text-[10px] sm:text-xs">Download on</div>
                  <div className="text-xs sm:text-sm font-semibold">
                    App Store
                  </div>
                </div>
              </button> */}
            </div>
          </div>

          {/* Menu Links */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 lg:ml-16">
            <h3 className="text-base font-semibold mb-3 sm:mb-4">Menu</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm  text-white/70 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                 href="#features"
                  className="text-sm  text-white/70 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#newsletter"
                  className="text-sm  text-white/70 hover:text-white transition-colors"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <Link
                  href="#faqs"
                  className="text-sm  text-white/70 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <h3 className="text-base font-semibold mb-3 sm:mb-4">Resources</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm  text-white/70 hover:text-white transition-colors"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm  text-white/70 hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Policy Links */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-6 text-sm">
            <Link
              href="/terms"
              className="text-white/70 hover:text-white transition-colors"
            >
              Terms of use
            </Link>
            <Link
              href="/privacy"
              className="text-white/70 hover:text-white transition-colors"
            >
              Privacy policy
            </Link>
            <Link
              href="/account"
              className="text-white/70 hover:text-white transition-colors"
            >
              Account deactivation
            </Link>
            {/* <Link
              href="#"
              className="text-white/70 hover:text-white transition-colors"
            >
              Cookies policy
            </Link> */}
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4">
            <Link
              href="https://x.com/cKashApp"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              target="_blank"
            >
              <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="https://t.me/ckashapp"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              target="_blank"
            >
              <FaTelegramPlane className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/ckash-app/"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/ckashapp"
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              target="_blank"
            >
              <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
