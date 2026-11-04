import Link from "next/link";
import Image from "next/image";
import {
  Users,
  Building,
  Map,
  PhoneCall,
  UserCheck,
  CalendarCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import CtaSection from "@/components/CtaSection";
import DashboardExperience from "@/components/DashboardExperience";

export default function ServicesPage() {
  const services = [
    {
      title: "Property CRM",
      subtitle: "Customer Journey & Lead Cycle",
      description:
        "Manage your customer journey from first enquiry to successful property booking.",
      icon: Users,
      badge: "Sales Management",
      includes: [
        "Customer Enquiries",
        "Lead Management",
        "Lead Assignment",
        "Customer Requirements",
        "Follow-ups",
        "Lead Status",
        "Customer History",
      ],
    },
    {
      title: "Property Management",
      subtitle: "Projects, Units & Pricing",
      description:
        "Maintain complete information about your real estate projects and properties.",
      icon: Building,
      badge: "Inventory Management",
      includes: [
        "Project Management",
        "Property Details",
        "Property Types",
        "Location",
        "Pricing",
        "Availability",
        "Documents",
      ],
    },
    {
      title: "Plot Management",
      subtitle: "Townships, Dimensions & Facing",
      description:
        "Manage plot layouts, sizes, facing, availability and booking information.",
      icon: Map,
      badge: "Layout Control",
      includes: [
        "Layout / Township Details",
        "Plot Number",
        "Plot Size / Dimensions",
        "Road Facing",
        "Rate & Pricing",
        "Availability Status",
        "Hold Management",
      ],
    },
    {
      title: "Calling Management",
      subtitle: "Telecalling & Conversion Logs",
      description:
        "Maintain customer calling activities, team follow-ups and discussion feedback.",
      icon: PhoneCall,
      badge: "Telecalling Hub",
      includes: [
        "Calling Lists",
        "Call Remarks",
        "Next Follow-up Date",
        "Customer Interest Status",
        "Follow-up Reminders",
        "Daily Calling Reports",
      ],
    },
    {
      title: "Agent & Broker Management",
      subtitle: "Channel Partners & Payouts",
      description:
        "Organize your channel partners, broker customer registrations and sales incentives.",
      icon: UserCheck,
      badge: "Partner Network",
      includes: [
        "Agent / Broker Profiles",
        "Agent Customers",
        "Site Visits by Agents",
        "Bookings by Agents",
        "Commission Calculation",
        "Commission Payouts",
      ],
    },
    {
      title: "Booking Management",
      subtitle: "Agreements, Tokens & Registry",
      description:
        "Manage the complete property booking process from token receipt to final registration.",
      icon: CalendarCheck,
      badge: "Booking Engine",
      includes: [
        "Customer Details",
        "Selected Property / Plot",
        "Booking Date",
        "Payment Information",
        "Installments",
        "Outstanding Amount",
        "Booking Status",
      ],
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
                <span>Enterprise Property Modules</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.14]">
                Complete Real Estate <span className="text-emerald-700">Software Solutions</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg">
                Explore dedicated modules engineered to optimize every phase of your property business—from lead generation and interactive plot layout maps to telecalling queues and automated agent commissions.
              </p>

              <div className="pt-1.5 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-none text-sm sm:text-base font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  <span>Request Custom Demo</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-none text-sm sm:text-base font-bold text-slate-800 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-200 shadow-xs"
                >
                  <span>All Capabilities</span>
                </Link>
              </div>

              <div className="pt-2.5 sm:pt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm font-semibold text-slate-700 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Property CRM Core</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Interactive Plot Grids</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Commission Automation</span>
                </div>
              </div>
            </div>

            {/* Right Mockup Graphic */}
            <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative reveal-right delay-150">
              <div className="relative w-full max-w-xl lg:max-w-[600px] xl:max-w-[660px] flex justify-center lg:justify-end">
                <Image
                  src="/services-hero.png"
                  alt="Real Estate Software Services and Solutions"
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

      {/* DASHBOARD EXPERIENCE SHOWCASE */}
      <DashboardExperience buttonHref="/contact" buttonText="Explore Dashboard" />

      {/* 2. SERVICES DETAILED GRID */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, idx) => {
              const IconComp = svc.icon;
              const delayClass =
                idx % 3 === 0 ? "delay-100" : idx % 3 === 1 ? "delay-250" : "delay-400";
              return (
                <div key={idx} className={`reveal-up ${delayClass}`}>
                  <div className="feature-card group bg-white border border-slate-200 rounded-none p-8 shadow-lg hover:shadow-2xl flex flex-col justify-between h-full">
                    <div>
                      {/* Header */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="card-icon-wrapper w-14 h-14 rounded-none bg-teal-50 border border-teal-100 flex items-center justify-center transition-colors">
                          <IconComp className="w-7 h-7 text-[#0F766E] group-hover:text-[#0F766E]" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-none bg-amber-50 text-[#D6A84B] border border-[#D6A84B]/30">
                          {svc.badge}
                        </span>
                      </div>

                      <h3 className="card-title text-2xl font-bold text-slate-900 mb-1 transition-colors">
                        {svc.title}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-700 mb-3">
                        {svc.subtitle}
                      </p>

                      <p className="card-text-muted text-slate-600 text-sm leading-relaxed mb-6">
                        {svc.description}
                      </p>

                      {/* Includes List */}
                      <div className="pt-4 border-t border-slate-100">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                          Includes:
                        </p>
                        <ul className="space-y-2">
                          {svc.includes.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="flex items-center gap-2.5 text-xs text-slate-700 font-medium"
                            >
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100">
                      <Link
                        href="/contact"
                        className="text-xs font-bold text-[#0F766E] group-hover:text-emerald-800 flex items-center justify-between transition-colors"
                      >
                        <span>Enquire About This Solution</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. CTA */}
      <CtaSection
        title="Looking for a Tailored Solution for Your Project?"
        subtitle="Schedule a consultation with our real estate specialists to discuss your inventory structure."
        buttonText="Discuss Your Requirements"
      />
    </div>
  );
}
