"use client";

import { Sora } from "next/font/google";
import { FiX } from "react-icons/fi";
import { toast, Toaster } from "react-hot-toast";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value;

    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      toast.success("You have been added to the waitlist!");
      onClose();
    } else {
      toast.error("There was an error. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-white-50 z-50 flex items-center justify-center p-4">
      <Toaster />
      <div
        className={`max-w-2xl w-full relative ${sora.className} px-10 py-16 `}
        style={{
          background:
            "linear-gradient(rgba(0, 37, 134, 1), rgba(0, 60, 214, 1))",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/80 hover:text-white"
        >
          <FiX className="w-6 h-6 border border-white rounded-full" />
        </button>

        {/* Content */}
        <div className="text-center space-y-6">
          <h2 className="text-xl font-bold text-white mb-2">
            Join the Waitlist
          </h2>
          <p className="text-white/80 text-md mb-12">
            Sign up for early access to ckash
          </p>

          {/* Email Input */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center max-w-lg mx-auto"
          >
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full bg-white/20 text-white placeholder-white/60 rounded px-6 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-white/30 border-none"
            />
            <button
              type="submit"
              className="w-full bg-white text-[#002586] px-8 py-4 rounded text-sm font-semibold hover:bg-white/90 transition-colors mt-2"
            >
              Join waitlist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;
