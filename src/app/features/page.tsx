import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Building,
  Map,
  PhoneCall,
  UserCheck,
  CalendarCheck,
  Zap,
  Clock,
  Search,
  TrendingUp,
  FileText,
  PieChart,
  Shield,
  CreditCard,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle,
  CheckCircle2,
} from "lucide-react";
import CtaSection from "@/components/CtaSection";

export default function FeaturesPage() {
  const featuresList = [
    {
      title: "Lead Management",
      desc: "Manage new enquiries and maintain complete customer requirements.",
      icon: Users,
    },
    {
      title: "Customer Management",
      desc: "Maintain customer profiles and their complete activity history.",
      icon: UserCheck,
    },
    {
      title: "Lead Assignment",
      desc: "Assign customer enquiries to the appropriate sales person.",
      icon: Zap,
    },
    {
      title: "Follow-up Management",
      desc: "Maintain upcoming customer calls and follow-up schedules.",
      icon: Clock,
    },
    {
      title: "Property Management",
      desc: "Manage property information, pricing and availability.",
      icon: Building,
    },
    {
      title: "Project Management",
      desc: "Maintain residential and commercial project details.",
      icon: Layers,
    },
    {
      title: "Plot Management",
      desc: "Manage plot numbers, sizes, road facing and rates.",
      icon: Map,
    },
    {
      title: "Interactive Availability",
      desc: "Instant color-coded status of available, on-hold and booked units.",
      icon: Search,
    },
    {
      title: "Site Visit Management",
      desc: "Schedule customer visits and record visit feedback.",
      icon: Search,
    },
    {
      title: "Calling Management",
      desc: "Maintain daily calling activities and conversation remarks.",
      icon: PhoneCall,
    },
    {
      title: "Booking Management",
      desc: "Record property bookings and customer allotment details.",
      icon: CalendarCheck,
    },
    {
      title: "Payment Tracking",
      desc: "Maintain booking amounts, installments and pending payments.",
      icon: CreditCard,
    },
    {
      title: "Agent & Broker Management",
      desc: "Maintain external brokers, agent customers and bookings.",
      icon: UserCheck,
    },
    {
      title: "Commission Management",
      desc: "Calculate agent sales incentives and track commission payouts.",
      icon: TrendingUp,
    },
    {
      title: "Document Storage",
      desc: "Store important project layouts, rate cards and customer files.",
      icon: FileText,
    },
    {
      title: "Reports & Analytics",
      desc: "Track sales performance, team follow-ups and business activity.",
      icon: PieChart,
    },
  ];

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
                <span>Complete Capability Matrix</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.14]">
                Everything You Need to <span className="text-emerald-700">Scale Real Estate Sales</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg">
                Explore over 16+ integrated capabilities built for real estate precision—from automatic lead assignment to live plot grid reservations, automated telecalling queues, and dispute-free broker payouts.
              </p>

              <div className="pt-1.5 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none text-sm sm:text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  <span>Book Feature Walkthrough</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/how-it-works"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-none text-sm sm:text-base font-bold text-slate-800 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 shadow-xs"
                >
                  <span>How It Works</span>
                </Link>
              </div>

              <div className="pt-2.5 sm:pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-700 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Real-Time Inventory</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Automated Assignment</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Broker Transparency</span>
                </div>
              </div>
            </div>

            {/* Right Mockup Graphic */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative reveal-right delay-150">
              <div className="relative w-full max-w-xl lg:max-w-[600px] xl:max-w-[660px] flex justify-center lg:justify-end">
                <Image
                  src="/features-hero.png"
                  alt="Real Estate CRM Features and Capabilities"
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

      {/* 2. FEATURES GRID */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresList.map((feat, idx) => {
              const IconComp = feat.icon;
              const delayClass =
                idx % 3 === 0 ? "delay-100" : idx % 3 === 1 ? "delay-250" : "delay-400";
              return (
                <div key={idx} className={`reveal-up ${delayClass}`}>
                  <div className="feature-card group bg-white border border-slate-200 rounded-none p-7 shadow-md hover:shadow-xl flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="card-icon-wrapper w-12 h-12 rounded-none bg-teal-50 border border-teal-100 flex items-center justify-center">
                          <IconComp className="w-6 h-6 text-[#0F766E]" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-400">
                          #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                        </span>
                      </div>

                      <h3 className="card-title text-xl font-bold text-slate-900 mb-2 transition-colors">
                        {feat.title}
                      </h3>
                      <p className="card-text-muted text-slate-600 text-sm leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#0F766E] font-semibold">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Included in Core Platform</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <CtaSection />
    </div>
  );
}
