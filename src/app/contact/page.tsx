"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  CheckCircle2,
  Building2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    mobileNumber: "",
    emailAddress: "",
    businessType: "Real Estate Developer",
    interestedIn: "Complete Real Estate Software",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
      const res = await fetch(`${apiUrl}/public/enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          companyName: formData.companyName,
          mobileNumber: formData.mobileNumber,
          emailAddress: formData.emailAddress,
          businessType: formData.businessType,
          interestedIn: formData.interestedIn,
          message: formData.message,
          source: "Website Contact Page",
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.message || "Failed to submit enquiry. Please try again.");
      }
    } catch (err: any) {
      console.error("Enquiry submission error:", err);
      setErrorMsg("Network error. Please make sure the server is reachable.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200 py-9 sm:py-12 lg:py-14 flex items-center">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          <div className="absolute top-0 right-10 w-80 h-80 rounded-full bg-emerald-200/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full bg-teal-100/30 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5 text-left reveal-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-[13px] font-bold tracking-tight shadow-xs">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Consultation & Live Demo</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.14]">
                Let&apos;s Accelerate Your <span className="text-emerald-700">Real Estate Operations</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg">
                Looking for a better way to manage leads, plots, and sales teams? Fill out your requirements below and our product specialists will arrange a tailored 1-on-1 walkthrough.
              </p>

              <div className="pt-1.5 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href="#enquiry-form"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none text-sm sm:text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  <span>Fill Enquiry Form</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <a
                  href="tel:+919876543210"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-none text-sm sm:text-base font-bold text-slate-800 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-slate-600" />
                  <span>Call Sales Desk</span>
                </a>
              </div>

              <div className="pt-2.5 sm:pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-700 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>1-on-1 Guided Demo</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom Pricing Plan</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Rapid Onboarding</span>
                </div>
              </div>
            </div>

            {/* Right Mockup Graphic */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative reveal-right delay-150">
              <div className="relative w-full max-w-xl lg:max-w-[600px] xl:max-w-[660px] flex justify-center lg:justify-end">
                <Image
                  src="/contact-hero.png"
                  alt="Contact Real Estate CRM Software Team"
                  width={1376}
                  height={768}
                  priority
                  className="w-full h-auto max-h-[390px] sm:max-h-[430px] lg:max-h-[460px] object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FORM & CONTACT INFO SECTION */}
      <section id="enquiry-form" className="py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: ENQUIRY FORM */}
            <div className="lg:col-span-7 bg-white rounded-none p-8 sm:p-10 border border-slate-200 shadow-xl reveal-left">
              <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D6A84B]">
                  ENQUIRY FORM
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Get in Touch
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Fill in your details below and our product consultants will get back to you with a
                  personalized live walkthrough.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-none bg-teal-50 border border-teal-200 text-center space-y-4">
                  <div className="w-16 h-16 rounded-none bg-[#0F766E] text-white flex items-center justify-center mx-auto">
                    <CheckCircle className="w-9 h-9 text-[#D6A84B]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Enquiry Received!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you for reaching out. Our real estate software experts will contact you
                    shortly at <span className="font-semibold text-slate-900">{formData.mobileNumber}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary px-6 py-2.5 rounded-none text-xs font-bold mt-2"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Full Name*
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-none border border-slate-200 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-sm text-slate-900 transition-colors bg-slate-50/50"
                      />
                    </div>

                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Company / Agency Name*
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Metro Builders & Developers"
                        className="w-full px-4 py-3 rounded-none border border-slate-200 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-sm text-slate-900 transition-colors bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Mobile Number*
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-none border border-slate-200 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-sm text-slate-900 transition-colors bg-slate-50/50"
                      />
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.emailAddress}
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-none border border-slate-200 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-sm text-slate-900 transition-colors bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Business Type */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Business Type
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-4 py-3 rounded-none border border-slate-200 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-sm text-slate-900 transition-colors bg-slate-50/50"
                      >
                        <option value="Real Estate Developer">Real Estate Developer</option>
                        <option value="Builder">Builder</option>
                        <option value="Plot Developer">Plot Developer</option>
                        <option value="Real Estate Agency">Real Estate Agency</option>
                        <option value="Property Dealer / Broker">Property Dealer / Broker</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {/* Interested In */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                        Interested In
                      </label>
                      <select
                        value={formData.interestedIn}
                        onChange={(e) => setFormData({ ...formData, interestedIn: e.target.value })}
                        className="w-full px-4 py-3 rounded-none border border-slate-200 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-sm text-slate-900 transition-colors bg-slate-50/50"
                      >
                        <option value="Complete Real Estate Software">
                          Complete Real Estate Software
                        </option>
                        <option value="Property CRM (Leads & Follow-ups)">
                          Property CRM (Leads & Follow-ups)
                        </option>
                        <option value="Plot Management Solution">Plot Management Solution</option>
                        <option value="Agent & Broker Commission Management">
                          Agent & Broker Commission Management
                        </option>
                        <option value="Calling Management Solution">
                          Calling Management Solution
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Requirements / Message
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your team size, projects, current challenges, or specific features you need..."
                      className="w-full px-4 py-3 rounded-none border border-slate-200 focus:outline-none focus:border-[#0F766E] focus:ring-1 focus:ring-[#0F766E] text-sm text-slate-900 transition-colors bg-slate-50/50 resize-y"
                    />
                  </div>

                  {/* Error Message */}
                  {errorMsg && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                      {errorMsg}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full py-4 rounded-none font-bold text-base shadow-md flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
                  >
                    <span>{loading ? "Submitting Enquiry..." : "Submit Enquiry"}</span>
                    <Send className="w-4 h-4 text-[#D6A84B]" />
                  </button>

                  <p className="text-center text-xs text-slate-500 pt-1">
                    🔒 Your information is completely secure. We never share your data with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Right: CONTACT INFO CARDS */}
            <div className="lg:col-span-5 space-y-6 reveal-right delay-150">
              <div className="bg-[#102A2E] text-white rounded-none p-8 border border-teal-900 shadow-xl space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D6A84B]">
                    DIRECT CHANNELS
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-1">Contact Information</h3>
                  <p className="text-slate-300 text-sm mt-1">
                    Have questions? Contact our real estate CRM support and consulting desk directly.
                  </p>
                </div>

                <div className="space-y-5 pt-2">
                  <div className="flex items-start gap-4 p-4 rounded-none bg-teal-950/40 border border-teal-800/60 shadow-sm">
                    <div className="w-10 h-10 rounded-none bg-[#0F766E] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#D6A84B]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Phone
                      </p>
                      <p className="text-base font-semibold text-white mt-0.5">+91 98765 43210</p>
                      <p className="text-xs text-slate-400">Toll Free Support Available</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-none bg-teal-950/40 border border-teal-800/60 shadow-sm">
                    <div className="w-10 h-10 rounded-none bg-[#0F766E] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#D6A84B]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Email
                      </p>
                      <a
                        href="mailto:info@realestatecrm.com"
                        className="text-base font-semibold text-white mt-0.5 hover:text-[#D6A84B] transition"
                      >
                        info@realestatecrm.com
                      </a>
                      <p className="text-xs text-slate-400">Response within 2-4 business hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-none bg-teal-950/40 border border-teal-800/60 shadow-sm">
                    <div className="w-10 h-10 rounded-none bg-[#0F766E] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#D6A84B]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Office
                      </p>
                      <p className="text-base font-semibold text-white mt-0.5">
                        Tower 4, Cyber City Business Hub, Gurgaon / India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-none bg-teal-950/40 border border-teal-800/60 shadow-sm">
                    <div className="w-10 h-10 rounded-none bg-[#0F766E] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#D6A84B]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Working Hours
                      </p>
                      <p className="text-base font-semibold text-white mt-0.5">Monday – Saturday</p>
                      <p className="text-xs text-slate-300">10:00 AM – 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security & Reliability Badge Box */}
              <div className="p-6 rounded-none bg-white border border-slate-200 shadow-md flex items-center gap-4">
                <div className="w-12 h-12 rounded-none bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                  <Building2 className="w-6 h-6 text-[#0F766E]" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Enterprise Data Privacy</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Your real estate leads, client numbers, and pricing stay completely protected & private.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
