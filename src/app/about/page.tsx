import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  CheckCircle,
  ShieldCheck,
  Target,
  Eye,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Zap,
} from "lucide-react";
import CtaSection from "@/components/CtaSection";

export default function AboutPage() {
  const values = [
    {
      title: "Simplicity",
      desc: "Intuitive workflows that require no extensive training, making daily tasks straightforward for everyone.",
      icon: Zap,
    },
    {
      title: "Reliability",
      desc: "Dependable cloud infrastructure with real-time data integrity for uninterrupted business operations.",
      icon: ShieldCheck,
    },
    {
      title: "Transparency",
      desc: "Clear visibility into plot statuses, agent commission calculations, and sales representative activity.",
      icon: Eye,
    },
    {
      title: "Business Efficiency",
      desc: "Automation of redundant administrative burdens so your team can focus on client conversions.",
      icon: TrendingUp,
    },
    {
      title: "Customer Focus",
      desc: "Designed to help you deliver prompt responses, transparent pricing, and professional customer experiences.",
      icon: Users,
    },
    {
      title: "Continuous Improvement",
      desc: "Regular system improvements adapted to modern property trends and customer feedback.",
      icon: Award,
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
                <span>Our Story & Vision</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.14]">
                Building Smarter Solutions for the{" "}
                <span className="text-emerald-700">Real Estate Industry</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg">
                We empower builders, developers, and brokers with modern digital infrastructure—replacing
                disjointed spreadsheets with automated lead assignment, visual plot registries, and transparent commission calculations.
              </p>

              <div className="pt-1.5 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none text-sm sm:text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  <span>Connect With Us</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-none text-sm sm:text-base font-bold text-slate-800 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 shadow-xs"
                >
                  <span>Explore Features</span>
                </Link>
              </div>

              <div className="pt-2.5 sm:pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-700 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Cloud-Managed</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Zero Data Redundancy</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Enterprise Security</span>
                </div>
              </div>
            </div>

            {/* Right Mockup Graphic */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative reveal-right delay-150">
              <div className="relative w-full max-w-xl lg:max-w-[600px] xl:max-w-[660px] flex justify-center lg:justify-end">
                <Image
                  src="/about-hero.png"
                  alt="About Real Estate Management Software"
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

      {/* 2. ABOUT CONTENT & CHALLENGE */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 reveal-left">
              <span className="inline-block px-3 py-1 rounded-none text-xs font-bold uppercase tracking-wider bg-teal-100 text-[#0F766E] border border-teal-200">
                Technology Built Around Real Estate Workflows
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Solving Fragmentation in Property Operations
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed text-base">
                <p>
                  Real estate businesses manage multiple customers, properties, projects, sales
                  employees, agents and daily follow-ups.
                </p>
                <p>
                  When this information is maintained across spreadsheets, notebooks and different
                  applications, managing business operations becomes difficult. Important enquiries
                  get lost, agent commissions cause disputes, and inventory availability becomes
                  confusing.
                </p>
                <div className="p-5 rounded-none bg-white border border-slate-200 shadow-md border-l-4 border-l-[#0F766E]">
                  <p className="font-semibold text-slate-900">
                    Our Real Estate Management Software is designed to bring these activities into a
                    more organized system.
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    The solution helps businesses manage customer enquiries, property information,
                    follow-ups, site visits, bookings, agents and related sales activities
                    efficiently.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 reveal-right delay-150">
              <div className="bg-white rounded-none p-8 border border-slate-200 shadow-xl space-y-6">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-[#D6A84B]" />
                  What You Eliminate
                </h3>
                <ul className="space-y-3.5 text-sm text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>Scattered Excel files and outdated plot registers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>Missed calling schedules and forgotten prospect callbacks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>Double-booking errors for the same plot or apartment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>Disputes regarding channel partner / agent payouts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#0F766E] shrink-0 mt-0.5" />
                    <span>Uncertainty regarding installment and payment collections</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission (Slides from Left) */}
            <div className="reveal-left">
              <div className="feature-card group bg-white border border-slate-200 rounded-none p-8 sm:p-10 shadow-lg hover:shadow-2xl relative flex flex-col justify-between h-full">
                <div>
                  <div className="card-icon-wrapper w-14 h-14 rounded-none bg-teal-50 border border-teal-100 flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-[#0F766E] group-hover:text-[#D6A84B]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D6A84B]">
                    Our Purpose
                  </span>
                  <h3 className="card-title text-2xl font-bold text-slate-900 mt-2 mb-4">
                    Our Mission
                  </h3>
                  <h4 className="card-title text-lg font-semibold text-slate-800 mb-3">
                    Simplifying Real Estate Management Through Technology
                  </h4>
                  <p className="card-text-muted text-slate-600 leading-relaxed text-sm sm:text-base">
                    Our mission is to provide practical, easy-to-use software that helps real estate
                    businesses organize their operations, improve customer management and manage sales
                    processes more efficiently.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision (Slides from Right) */}
            <div className="reveal-right delay-150">
              <div className="feature-card group bg-white border border-slate-200 rounded-none p-8 sm:p-10 shadow-lg hover:shadow-2xl relative flex flex-col justify-between h-full">
                <div>
                  <div className="card-icon-wrapper w-14 h-14 rounded-none bg-teal-50 border border-teal-100 flex items-center justify-center mb-6">
                    <Eye className="w-7 h-7 text-[#0F766E] group-hover:text-[#D6A84B]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D6A84B]">
                    Our Horizon
                  </span>
                  <h3 className="card-title text-2xl font-bold text-slate-900 mt-2 mb-4">
                    Our Vision
                  </h3>
                  <h4 className="card-title text-lg font-semibold text-slate-800 mb-3">
                    Helping Real Estate Businesses Work Smarter
                  </h4>
                  <p className="card-text-muted text-slate-600 leading-relaxed text-sm sm:text-base">
                    Our vision is to help developers, builders, agencies and property professionals
                    adopt better digital systems for managing their growing businesses without complexity
                    or excessive overhead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-up">
            <span className="inline-block px-3.5 py-1 rounded-none text-xs font-bold uppercase tracking-wider bg-teal-100 text-[#0F766E]">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Values
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              The fundamental standards that drive our product development and customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => {
              const IconComp = val.icon;
              const delayClass =
                idx % 3 === 0 ? "delay-100" : idx % 3 === 1 ? "delay-250" : "delay-400";
              return (
                <div key={idx} className={`reveal-up ${delayClass}`}>
                  <div className="feature-card group bg-white border border-slate-200 rounded-none p-7 shadow-md hover:shadow-xl flex flex-col justify-between h-full">
                    <div>
                      <div className="card-icon-wrapper w-12 h-12 rounded-none bg-teal-50 border border-teal-100 flex items-center justify-center mb-4">
                        <IconComp className="w-6 h-6 text-[#0F766E] group-hover:text-[#D6A84B]" />
                      </div>
                      <h3 className="card-title text-xl font-bold text-slate-900 mb-2">
                        {val.title}
                      </h3>
                      <p className="card-text-muted text-slate-600 text-sm leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <CtaSection />
    </div>
  );
}
