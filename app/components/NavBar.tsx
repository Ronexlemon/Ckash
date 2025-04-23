"use client";

import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-22">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-3xl font-black text-[#0066FF]">
                c<span className="text-black">K</span>ash
              </span>
            </Link>
          </div>

          {/* Desktop menu - Centered */}
          <div className="hidden sm:flex flex-1 justify-center">
            <div className="flex items-center space-x-8">
              <Link
                href="https://t.me/ckashapp"
                className="text-[#0066FF] hover:text-[#0052CC] px-3 py-2 text-sm font-medium"
                target="_blank"
              >
                Support
              </Link>
              <Link
                href="/"
                className="text-gray-600 hover:text-[#0052CC] px-3 py-2 text-sm font-medium"
              >
                Blog
              </Link>
              <Link
               href="https://t.me/ckashapp"
                className="text-gray-600 hover:text-[#0052CC] px-3 py-2 text-sm font-medium"
                target="_blank"
              >
                Community
              </Link>
            </div>
          </div>

          {/* Download App Button */}
          <div className="hidden sm:flex items-center">
          <a
  href="https://play.google.com/store/apps/details?id=xyz.mobilestack.mento"
  target="_blank"
  rel="noopener noreferrer"
>
            <button className="bg-[#0066FF] text-white px-6 py-4 rounded-sm text-base font-medium hover:bg-[#0052CC] transition-colors flex items-center gap-2">
              Download App
            </button>
            </a>
          </div>
         

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#0066FF] hover:text-[#0052CC] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-200">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-center text-[#0066FF] hover:text-[#0052CC] hover:bg-gray-50"
            >
              Support
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-center text-[#0066FF] hover:text-[#0052CC] hover:bg-gray-50"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-center text-[#0066FF] hover:text-[#0052CC] hover:bg-gray-50"
            >
              Community
            </Link>
            <div className="px-3 py-2">
              <button className="w-full bg-[#0066FF] text-white px-4 py-3 rounded-md text-sm font-medium hover:bg-[#0052CC] transition-colors flex items-center justify-center gap-2">
                Download App
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
