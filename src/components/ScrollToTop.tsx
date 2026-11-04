"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className={`fixed bottom-[88px] right-5 sm:bottom-[120px] sm:right-7 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-[#0F766E] hover:bg-[#102A2E] text-white border-2 border-[#D6A84B] shadow-2xl rounded-none transition-all duration-300 ease-in-out cursor-pointer group flex items-center justify-center ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#D6A84B] group-hover:text-white transition-all duration-200 group-hover:-translate-y-1" />
    </button>
  );
}

