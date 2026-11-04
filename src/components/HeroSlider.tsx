"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Building,
  Map,
  Users,
  CalendarCheck,
  TrendingUp,
  ShieldCheck,
  CheckCircle,
  PhoneCall,
  UserCheck,
} from "lucide-react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      badge: "Smart Real Estate Platform",
      title: "Smart Real Estate Management Software for",
      titleHighlight: "Growing Businesses",
      description:
        "Manage your real estate leads, properties, plots, customers, sales activities, agents and bookings through one organized software solution.",
      targetInfo:
        "Built for real estate developers, builders, property dealers and agencies who want a smarter and more efficient way to manage their business.",
      ctaPrimary: "Enquire Now",
      ctaPrimaryLink: "/contact",
      ctaSecondary: "Explore Features",
      ctaSecondaryLink: "/features",
      bannerCard: {
        badgeText: "Real Estate CRM Core",
        icon: Building,
        stat1Label: "Enquiries Today",
        stat1Value: "1,420+",
        stat1Note: "● Multi-channel Intake",
        stat2Label: "Active Leads",
        stat2Value: "850+",
        stat2Note: "● Auto-assigned",
        previewTitle: "Live Sales Pipeline",
        previewItem1Name: "Metro Heights Tower B",
        previewItem1Sub: "Unit 804 • Agreement Ready",
        previewItem1Status: "Booked",
        previewItem2Name: "Greenwood Enclave",
        previewItem2Sub: "Plot #42 • Site Visit Done",
        previewItem2Status: "Follow-up",
      },
    },
    {
      id: 2,
      badge: "Visual Inventory & Townships",
      title: "Complete Plot & Property Inventory Control for",
      titleHighlight: "Developers & Builders",
      description:
        "Track real-time plot layout plans, dimensions, road width, facing, rates, and instant availability of plots, villas, and commercial units.",
      targetInfo:
        "Eliminate double-booking errors and confusion with colored visual grid statuses: Available, On Hold, and Booked.",
      ctaPrimary: "Explore Plot Management",
      ctaPrimaryLink: "/services",
      ctaSecondary: "View Layout Features",
      ctaSecondaryLink: "/features",
      bannerCard: {
        badgeText: "Interactive Plot Grid",
        icon: Map,
        stat1Label: "Total Plots",
        stat1Value: "380 Units",
        stat1Note: "● Sector 14 Township",
        stat2Label: "Available",
        stat2Value: "94 Units",
        stat2Note: "● Ready to Allot",
        previewTitle: "Inventory Real-Time Status",
        previewItem1Name: "Plot #108 (Corner Facing)",
        previewItem1Sub: "1,800 Sq.Ft • East Facing",
        previewItem1Status: "Available",
        previewItem2Name: "Commercial Block C-12",
        previewItem2Sub: "Token Paid • Token Receipt Issued",
        previewItem2Status: "On Hold",
      },
    },
    {
      id: 3,
      badge: "Telecalling & Leads",
      title: "Supercharge Lead Conversion & Team Follow-ups with",
      titleHighlight: "Calling Management",
      description:
        "Distribute enquiries instantly to your sales agents, log every customer call conversation, schedule site visits, and never miss a prospect callback.",
      targetInfo:
        "Built-in smart reminders, call logs, feedback remarks, and lead status tracking (Hot, Warm, Cold) in one unified dashboard.",
      ctaPrimary: "Check Calling CRM",
      ctaPrimaryLink: "/services",
      ctaSecondary: "How Calling Works",
      ctaSecondaryLink: "/how-it-works",
      bannerCard: {
        badgeText: "Telecalling Console",
        icon: PhoneCall,
        stat1Label: "Calls Today",
        stat1Value: "340 Calls",
        stat1Note: "● 92% Connect Rate",
        stat2Label: "Site Visits",
        stat2Value: "28 Booked",
        stat2Note: "● This Weekend",
        previewTitle: "Telecaller Follow-up Queue",
        previewItem1Name: "Rohit Sharma • 3 BHK Enquiry",
        previewItem1Sub: "Follow-up Today @ 4:30 PM",
        previewItem1Status: "Urgent Call",
        previewItem2Name: "Ananya Roy • Villa Enquiry",
        previewItem2Sub: "Site Visit Confirmed for Sunday",
        previewItem2Status: "Site Visit",
      },
    },
    {
      id: 4,
      badge: "Channel Partner Network",
      title: "Empower Your External Brokers & Agents with",
      titleHighlight: "Transparent Commission Tracking",
      description:
        "Manage external brokers and real estate agents, their customer registrations, site visits, booking conversions, and calculate accurate commission payouts.",
      targetInfo:
        "Build trust with your channel partners through transparent deal tracking, avoiding commission conflicts and overlapping claims.",
      ctaPrimary: "Manage Agents & Payouts",
      ctaPrimaryLink: "/services",
      ctaSecondary: "Contact Our Team",
      ctaSecondaryLink: "/contact",
      bannerCard: {
        badgeText: "Broker & Partner Hub",
        icon: UserCheck,
        stat1Label: "Active Brokers",
        stat1Value: "185+",
        stat1Note: "● Verified Network",
        stat2Label: "Commission Paid",
        stat2Value: "₹42.5 Lakh",
        stat2Note: "● Zero Dispute",
        previewTitle: "Agent Deal Tracker",
        previewItem1Name: "Apex Realty Partners",
        previewItem1Sub: "Customer: Rajesh Verma • Unit 4B",
        previewItem1Status: "Verified Deal",
        previewItem2Name: "Prime Space Advisors",
        previewItem2Sub: "Commission ₹1.2L Approved",
        previewItem2Status: "Payout Ready",
      },
    },
  ];

  // Auto slide every 6 seconds if not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];
  const IconComp = slide.bannerCard.icon;

  return (
    <div
      className="relative w-full bg-white border-b border-slate-200 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Indicator Tabs on Top for Quick Navigation */}
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {slides.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(index)}
              className={`text-left p-2.5 rounded-xl transition-all border ${
                currentSlide === index
                  ? "bg-[#102A2E] text-white border-teal-900 shadow-sm"
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                    currentSlide === index
                      ? "bg-[#0F766E] text-white"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  0{index + 1}
                </span>
                <span className="text-xs font-bold truncate">{s.badge}</span>
              </div>
              <div className="w-full bg-slate-200/40 h-1 rounded-full mt-2 overflow-hidden">
                {currentSlide === index && (
                  <div className="bg-[#D6A84B] h-full w-full animate-pulse" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Slide Content */}
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 md:pt-10 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[500px]">
          {/* Left Slide Text */}
          <div className="lg:col-span-7 space-y-6 animate-in fade-in duration-500 key={slide.id}">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-[#0F766E]/20 text-[#0F766E] text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-4 h-4 text-[#D6A84B]" />
              {slide.badge}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              {slide.title} <span className="text-[#0F766E]">{slide.titleHighlight}</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {slide.description}
            </p>

            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#D6A84B] text-slate-700 text-sm font-medium">
              {slide.targetInfo}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href={slide.ctaPrimaryLink}
                className="btn-primary inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-base shadow-md group"
              >
                <span>{slide.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 text-[#D6A84B] rotate-360-hover" />
              </Link>
              <Link
                href={slide.ctaSecondaryLink}
                className="btn-secondary inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-base"
              >
                {slide.ctaSecondary}
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-6 border-t border-slate-100 flex items-center gap-6 text-xs text-slate-500 font-semibold">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#D6A84B]" />
                <span>Single Source of Truth</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#D6A84B]" />
                <span>Zero Double Booking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#D6A84B]" />
                <span>Instant Invoicing</span>
              </div>
            </div>
          </div>

          {/* Right Slide Interactive Card / Visual Mockup */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border-2 border-slate-200 shadow-xl overflow-hidden p-6 space-y-6">
              {/* Card Top bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#0F766E] flex items-center justify-center text-white">
                    <IconComp className="w-5 h-5 text-[#D6A84B]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {slide.bannerCard.badgeText}
                    </h4>
                    <p className="text-[11px] text-slate-400">Live Operations View</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded bg-teal-50 text-[#0F766E] text-xs font-bold border border-teal-200">
                  Active
                </span>
              </div>

              {/* Two Statistics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-xs text-slate-500 font-medium">
                    {slide.bannerCard.stat1Label}
                  </p>
                  <p className="text-2xl font-black text-[#0F766E] mt-1">
                    {slide.bannerCard.stat1Value}
                  </p>
                  <span className="text-[11px] text-[#D6A84B] font-bold">
                    {slide.bannerCard.stat1Note}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-xs text-slate-500 font-medium">
                    {slide.bannerCard.stat2Label}
                  </p>
                  <p className="text-2xl font-black text-slate-900 mt-1">
                    {slide.bannerCard.stat2Value}
                  </p>
                  <span className="text-[11px] text-teal-700 font-bold">
                    {slide.bannerCard.stat2Note}
                  </span>
                </div>
              </div>

              {/* Pipeline List Preview */}
              <div className="space-y-2.5">
                <p className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  {slide.bannerCard.previewTitle}
                </p>
                <div className="p-3 rounded-lg bg-teal-50/60 border border-teal-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#D6A84B]" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        {slide.bannerCard.previewItem1Name}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {slide.bannerCard.previewItem1Sub}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#0F766E] bg-white px-2 py-1 rounded border border-teal-200">
                    {slide.bannerCard.previewItem1Status}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0F766E]" />
                    <div>
                      <p className="text-xs font-bold text-slate-900">
                        {slide.bannerCard.previewItem2Name}
                      </p>
                      <p className="text-[11px] text-slate-500">
                        {slide.bannerCard.previewItem2Sub}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-white px-2 py-1 rounded border border-emerald-200">
                    {slide.bannerCard.previewItem2Status}
                  </span>
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="w-full btn-primary py-2.5 rounded-lg text-xs font-bold text-center block"
                >
                  Schedule Live Software Walkthrough
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Prev / Next Controls & Dots */}
        <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "w-8 bg-[#0F766E]" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="w-10 h-10 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="w-10 h-10 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-700 transition shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

