import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, CheckCircle2, Layers } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200 py-9 sm:py-12 lg:py-14 flex items-center">
        {/* =========================================================================
            LAYER 1: BACKGROUND (Luxury 3D Green Wave Ribbons & Ambient Glow)
            ========================================================================= */}
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none overflow-hidden">
          {/* Generated Green Waves Background */}
          <div className="absolute inset-0 w-full h-full opacity-40 lg:opacity-55 mix-blend-multiply">
            <Image
              src="/hero-bg-waves.jpg"
              alt="Abstract Green Waves Background"
              fill
              priority
              className="object-cover object-right"
            />
          </div>

          {/* Soft Left Fade: Ensures text has pure white backdrop without any background interference */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/85 lg:via-white/70 via-40% to-transparent pointer-events-none" />

          {/* Decorative soft green ambient glows */}
          <div className="absolute top-0 right-10 w-80 h-80 rounded-full bg-emerald-200/25 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full bg-teal-100/30 blur-3xl pointer-events-none" />
        </div>

        {/* =========================================================================
            MAIN CONTAINER (Matches Navbar width max-w-[1480px])
            ========================================================================= */}
        <div className="relative z-10 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* =====================================================================
                LEFT COLUMN: HERO TEXT & ACTIONS (Smooth Reveal From Left)
                ===================================================================== */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5 text-left reveal-left">
              {/* Top Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-[13px] font-bold tracking-tight shadow-xs">
                <Layers className="w-4 h-4 text-emerald-600" />
                <span>All-in-One Real Estate SaaS Platform</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.14]">
                Manage Your <br className="hidden sm:inline" />
                Real Estate Business <br />
                <span className="text-slate-900 font-extrabold">From </span>
                <span className="text-emerald-700">Lead to Registry</span>
              </h1>

              {/* Subtext */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg">
                A powerful, multi-company Real Estate Management Software with CRM, Lead Management,
                Projects, Plots, Bookings, Payments, Commissions and Team Management.
              </p>

              {/* CTA Buttons */}
              <div className="pt-1.5 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none text-sm sm:text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-none text-sm sm:text-base font-bold text-slate-800 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-slate-600" />
                  <span>Book a Demo</span>
                </Link>
              </div>

              {/* Feature Checkmarks List */}
              <div className="pt-2.5 sm:pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-700 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Multi-Company (SaaS)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Role-Based Access</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Secure & Scalable</span>
                </div>
              </div>
            </div>

            {/* =====================================================================
                LAYER 2: FOREGROUND MOCKUP (Smooth Reveal From Right)
                ===================================================================== */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative reveal-right delay-150">
              <div className="relative w-full max-w-xl lg:max-w-[600px] xl:max-w-[660px] flex justify-center lg:justify-end">
                {/* Laptop + Smartphone Mockup: 100% Full Opacity, Razor Sharp, Zero Card Container */}
                <Image
                  src="/image copy.png"
                  alt="RealEstate CRM Dashboard on Laptop and Mobile Device"
                  width={1520}
                  height={980}
                  priority
                  className="w-full h-auto max-h-[390px] sm:max-h-[430px] lg:max-h-[460px] object-contain relative z-10"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
  );
}
