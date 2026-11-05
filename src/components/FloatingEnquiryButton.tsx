"use client";

import { MessageSquareText } from "lucide-react";

export default function FloatingEnquiryButton() {
  const handleOpenModal = () => {
    // Trigger custom event to open EnquiryModal anywhere
    window.dispatchEvent(new CustomEvent("open-enquiry-modal"));
  };

  return (
    <div className="fixed bottom-[88px] right-5 sm:bottom-[100px] sm:right-7 z-40">
      <button
        type="button"
        onClick={handleOpenModal}
        aria-label="Enquire Now / Request Demo"
        title="Enquire Now / Get Free Demo"
        className="relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#0F766E] to-[#102A2E] text-white rounded-full border-2 border-[#D6A84B] shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        {/* Radar wave ping effect like WhatsApp */}
        <span className="absolute -inset-1 rounded-full bg-[#D6A84B] opacity-40 animate-ping pointer-events-none" />

        {/* Circular Inquiry Icon */}
        <MessageSquareText className="w-6 h-6 sm:w-7 sm:h-7 text-[#D6A84B] group-hover:text-white shrink-0 drop-shadow-sm transition-transform duration-300 group-hover:scale-110" />

        {/* Hover Tooltip Badge */}
        <span className="absolute right-full mr-3 px-3 py-1 bg-[#102A2E] text-[#D6A84B] border border-[#D6A84B]/40 text-xs font-bold whitespace-nowrap rounded-lg shadow-xl opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none hidden sm:block">
          Enquire Now
        </span>
      </button>
    </div>
  );
}
