"use client";

import { useState, useEffect } from "react";
import {
  X,
  Send,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Phone,
  User,
  Building,
  Check,
} from "lucide-react";

export default function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    businessType: "Real Estate Developer",
    requirements: "Complete Real Estate Software",
  });

  useEffect(() => {
    // Har page refresh par modal aayega
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Listen for custom open event so any button can also trigger this popup
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-enquiry-modal", handleOpen);
    return () => window.removeEventListener("open-enquiry-modal", handleOpen);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop with Blur */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-white shadow-2xl border-2 border-teal-900/20 rounded-none overflow-hidden z-10 max-h-[92vh] flex flex-col animate-in zoom-in-95 fade-in duration-300">
        {/* Header Bar */}
        <div className="bg-[#102A2E] text-white p-5 sm:p-6 relative border-b border-teal-800">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close Enquiry Popup"
            className="absolute top-4 right-4 p-1.5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors rounded-none"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold bg-amber-400/10 text-[#D6A84B] border border-[#D6A84B]/30 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Special Consultation & Demo</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Schedule a Free Software Demo
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Fill your details and our Real Estate Tech team will connect with you within 15 minutes.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-[#0F766E] text-white flex items-center justify-center mx-auto rounded-none shadow-md">
                <Check className="w-9 h-9 text-[#D6A84B]" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Enquiry Received!</h4>
              <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>!
                Our real estate software expert will call you shortly on{" "}
                <span className="font-bold text-[#0F766E]">{formData.mobileNumber}</span>.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn-primary px-8 py-3 rounded-none font-bold text-sm shadow-md"
                >
                  Continue to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full pl-10 pr-4 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-sm text-slate-900 transition-colors bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Mobile / WhatsApp Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Mobile / WhatsApp Number <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-sm text-slate-900 transition-colors bg-slate-50/50"
                  />
                </div>
              </div>

              {/* Business Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Business Type
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-sm text-slate-900 transition-colors bg-slate-50/50 appearance-none cursor-pointer"
                  >
                    <option value="Real Estate Developer">Real Estate Developer</option>
                    <option value="Builder / Construction">Builder / Construction</option>
                    <option value="Plot / Township Developer">Plot / Township Developer</option>
                    <option value="Real Estate Agency / Channel Partner">Real Estate Agency / Channel Partner</option>
                    <option value="Property Consultant / Broker">Property Consultant / Broker</option>
                  </select>
                </div>
              </div>

              {/* Requirement Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  I Am Interested In
                </label>
                <select
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-none border border-slate-300 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-sm text-slate-900 transition-colors bg-slate-50/50 cursor-pointer"
                >
                  <option value="Complete Real Estate Software">Complete Real Estate Software (All Modules)</option>
                  <option value="Lead Management & CRM">Lead Management & CRM</option>
                  <option value="Plot & Colony Layout Management">Plot & Colony Layout Management</option>
                  <option value="Booking & Payment Records">Booking & Payment Records</option>
                  <option value="Calling & Telecalling App">Calling & Telecalling App</option>
                </select>
              </div>

              {/* CTA Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-primary py-3 px-4 rounded-none font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Submit Enquiry & Get Free Demo</span>
                  <Send className="w-4 h-4 text-[#D6A84B]" />
                </button>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>100% Confidential &bull; No Spam Guaranteed</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

