import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

interface DashboardExperienceProps {
  buttonHref?: string;
  buttonText?: string;
  className?: string;
}

export default function DashboardExperience({
  buttonHref = "/services",
  buttonText = "Explore Dashboard",
  className = "",
}: DashboardExperienceProps) {
  const highlights = [
    "Real-time business insights",
    "Role-based, customizable dashboards",
    "Track leads, bookings, payments & sales",
    "Monitor team performance",
  ];

  return (
    <section className={`py-10 sm:py-14 lg:py-16 bg-white border-b border-slate-200 relative overflow-hidden ${className}`}>
      {/* Soft ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-emerald-100/35 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-12 -translate-y-1/2 w-80 h-80 rounded-full bg-teal-100/25 blur-3xl pointer-events-none" />

      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border border-slate-200/90 rounded-none p-6 sm:p-8 lg:p-12 shadow-xl sm:shadow-2xl relative overflow-hidden">
          {/* Subtle accent corner glow */}
          <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-emerald-50/60 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-teal-50/50 blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
            {/* Left Mockup Graphic: 5 Floating Multi-Device Tablets (Reveal from Left) */}
            <div className="lg:col-span-7 xl:col-span-8 flex justify-center items-center reveal-left">
              <div className="w-full relative">
                <Image
                  src="/image copy 2.png"
                  alt="A Clean & Powerful Dashboard Experience - RealEstateCRM Multi-Device Dashboards"
                  width={2172}
                  height={724}
                  priority
                  className="w-full h-auto object-contain select-none"
                />
              </div>
            </div>

            {/* Right Content Column (Reveal from Right) */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center space-y-5 sm:space-y-6 text-left reveal-right delay-150">
              {/* Heading */}
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-extrabold text-slate-900 tracking-tight leading-[1.18]">
                  A Clean & Powerful <br />
                  <span className="text-[#0F766E] block sm:inline lg:block">Dashboard Experience</span>
                </h2>
              </div>

              {/* Checklist */}
              <ul className="space-y-3 sm:space-y-3.5">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-800 font-semibold text-sm sm:text-base">
                    <span className="w-5 h-5 rounded-full bg-[#0F766E] text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Check className="w-3.5 h-3.5 stroke-[2.8]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <div className="pt-1.5 sm:pt-2">
                <Link
                  href={buttonHref}
                  className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none text-sm sm:text-base font-bold text-white bg-gradient-to-r from-emerald-800 to-emerald-950 hover:from-emerald-700 hover:to-emerald-900 transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  <span>{buttonText}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

