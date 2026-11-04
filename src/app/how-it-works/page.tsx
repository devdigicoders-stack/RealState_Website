import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Building,
  Map,
  PhoneCall,
  UserCheck,
  CalendarCheck,
  CheckCircle,
  CheckCircle2,
  ArrowDown,
  ArrowRight,
  Sparkles,
  Search,
  CreditCard,
  FileCheck,
} from "lucide-react";
import CtaSection from "@/components/CtaSection";

export default function HowItWorksPage() {
  const steps = [
    {
      step: "01",
      title: "Step 1 — Customer Enquiry",
      desc: "A new customer enquiry is received and customer information is recorded.",
      details:
        "Capture enquiries across website forms, social ads, phone calls, walk-ins, and property portals into one centralized inbox.",
      icon: Users,
    },
    {
      step: "02",
      title: "Step 2 — Lead Management",
      desc: "Customer requirements such as location, budget and property type are maintained.",
      details:
        "Tag preferred locations, BHK/plot sizes, budget brackets, and automatically assign the lead to the best suited sales executive.",
      icon: Users,
    },
    {
      step: "03",
      title: "Step 3 — Sales Follow-up",
      desc: "The sales team contacts the customer and maintains call remarks and future follow-ups.",
      details:
        "Schedule callback reminders, log conversational discussion points, and monitor lead temperature (hot, warm, cold).",
      icon: PhoneCall,
    },
    {
      step: "04",
      title: "Step 4 — Property Selection",
      desc: "Suitable projects, properties or plots are identified according to customer requirements.",
      details:
        "Check live inventory availability grids, share project brochures and unit layouts instantly with the buyer.",
      icon: Building,
    },
    {
      step: "05",
      title: "Step 5 — Site Visit",
      desc: "Property site visits are scheduled and customer feedback is recorded.",
      details:
        "Assign site visit drivers or executives, collect on-spot client impressions, and log interested unit numbers.",
      icon: Search,
    },
    {
      step: "06",
      title: "Step 6 — Property Booking",
      desc: "The selected property or plot is booked and initial token details are maintained.",
      details:
        "Lock plot availability instantly with color-coded status change (Available to Hold/Booked) preventing double allocation.",
      icon: CalendarCheck,
    },
    {
      step: "07",
      title: "Step 7 — Payment Tracking",
      desc: "Installment payments, receipts and outstanding balances are monitored.",
      details:
        "Automated installment schedules, printable payment vouchers, and reminder notifications for upcoming milestones.",
      icon: CreditCard,
    },
    {
      step: "08",
      title: "Step 8 — Successful Conversion",
      desc: "Complete documentation and customer records are safely archived.",
      details:
        "Generate final allotment letters, calculate channel partner commissions, and close the sales cycle with complete data history.",
      icon: FileCheck,
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
                <span>Standardized 8-Stage Pipeline</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.14]">
                The Simple Path From <span className="text-emerald-700">Enquiry to Booking</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg">
                Experience how our structured process eliminates guesswork, prevents duplicate plot allocations, and drives prospect follow-ups all the way to deed handover.
              </p>

              <div className="pt-1.5 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none text-sm sm:text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-none text-sm sm:text-base font-bold text-slate-800 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 shadow-xs"
                >
                  <span>View Modules</span>
                </Link>
              </div>

              <div className="pt-2.5 sm:pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-700 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Lead Qualification</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Color-Coded Holds</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Installment Schedules</span>
                </div>
              </div>
            </div>

            {/* Right Mockup Graphic */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative reveal-right delay-150">
              <div className="relative w-full max-w-xl lg:max-w-[600px] xl:max-w-[660px] flex justify-center lg:justify-end">
                <Image
                  src="/how-it-works-hero.png"
                  alt="Real Estate Workflow from Enquiry to Conversion"
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

      {/* 2. STEP-BY-STEP VERTICAL TIMELINE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {steps.map((st, idx) => {
              const IconComp = st.icon;
              const delayClass =
                idx % 4 === 0 ? "delay-100" : idx % 4 === 1 ? "delay-200" : idx % 4 === 2 ? "delay-300" : "delay-400";
              return (
                <div key={idx} className={`relative reveal-up ${delayClass}`}>
                  <div className="feature-card group bg-white border border-slate-200 rounded-none p-6 sm:p-8 shadow-md hover:shadow-xl transition-all flex flex-col sm:flex-row items-start gap-6">
                    {/* Badge and Icon */}
                    <div className="flex sm:flex-col items-center gap-3 shrink-0">
                      <div className="card-icon-wrapper w-14 h-14 rounded-none bg-teal-50 border border-teal-100 flex items-center justify-center">
                        <IconComp className="w-7 h-7 text-[#0F766E] group-hover:text-[#D6A84B]" />
                      </div>
                      <span className="text-xs font-black px-2.5 py-1 rounded-none bg-amber-50 text-[#D6A84B] border border-[#D6A84B]/30">
                        {st.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-2">
                      <h3 className="card-title text-xl sm:text-2xl font-bold text-slate-900">
                        {st.title}
                      </h3>
                      <p className="text-slate-800 font-medium text-sm sm:text-base group-hover:text-slate-200">
                        {st.desc}
                      </p>
                      <p className="card-text-muted text-slate-500 text-xs sm:text-sm leading-relaxed pt-1">
                        {st.details}
                      </p>
                    </div>
                  </div>

                  {/* Connecting Arrow */}
                  {idx < steps.length - 1 && (
                    <div className="flex justify-center my-3">
                      <div className="w-8 h-8 rounded-none bg-teal-100/70 border border-teal-200 flex items-center justify-center text-[#0F766E]">
                        <ArrowDown className="w-4 h-4 text-[#0F766E]" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <CtaSection
        title="Ready to Digitize Your Sales Pipeline?"
        subtitle="Experience how easy it is to track leads, manage plot registers, and disburse broker commissions."
        buttonText="Get Started Today"
      />
    </div>
  );
}
