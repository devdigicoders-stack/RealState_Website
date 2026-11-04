import Link from "next/link";
import {
  Users,
  Building,
  Map,
  PhoneCall,
  UserCheck,
  CalendarCheck,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Shield,
  Layers,
  FileText,
  Search,
  PieChart,
  HardHat,
  Briefcase,
  Home as HomeIcon,
  Zap,
  BarChart3,
  Clock,
} from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CtaSection from "@/components/CtaSection";
import DashboardExperience from "@/components/DashboardExperience";

export default function HomePage() {
  const solutions = [
    {
      title: "Property CRM",
      description:
        "Manage customer enquiries, requirements, follow-ups and sales activities in an organized way.",
      icon: Users,
      badge: "Sales Core",
    },
    {
      title: "Property Management",
      description:
        "Manage projects, properties, availability, pricing and important property information.",
      icon: Building,
      badge: "Inventory",
    },
    {
      title: "Plot Management",
      description:
        "Maintain complete plot details including plot number, size, facing, price and current availability.",
      icon: Map,
      badge: "Layouts",
    },
    {
      title: "Calling Management",
      description:
        "Organize customer calling activities, call results, remarks and future follow-ups.",
      icon: PhoneCall,
      badge: "Telecalling",
    },
    {
      title: "Agent & Broker Management",
      description:
        "Manage agents, their customers, bookings, sales and commission information.",
      icon: UserCheck,
      badge: "Channel Partners",
    },
    {
      title: "Booking Management",
      description:
        "Maintain property bookings, selected property details, booking amount and booking status.",
      icon: CalendarCheck,
      badge: "Conversions",
    },
  ];

  const keyFeatures = [
    { name: "Lead Management", icon: Users },
    { name: "Customer Management", icon: UserCheck },
    { name: "Property Management", icon: Building },
    { name: "Project Management", icon: Layers },
    { name: "Plot Management", icon: Map },
    { name: "Lead Assignment", icon: Zap },
    { name: "Follow-up Management", icon: Clock },
    { name: "Calling Management", icon: PhoneCall },
    { name: "Site Visit Management", icon: Search },
    { name: "Booking Management", icon: CalendarCheck },
    { name: "Agent & Broker Management", icon: Briefcase },
    { name: "Commission Management", icon: TrendingUp },
    { name: "Payment Tracking", icon: BarChart3 },
    { name: "Document Management", icon: FileText },
    { name: "Sales Reports", icon: PieChart },
    { name: "Team Management", icon: Shield },
  ];

  const steps = [
    {
      step: "01",
      title: "Receive Enquiries",
      desc: "Organize customer enquiries coming from different sources.",
      icon: Users,
    },
    {
      step: "02",
      title: "Manage Leads",
      desc: "Maintain customer requirements and assign leads to the right sales person.",
      icon: Zap,
    },
    {
      step: "03",
      title: "Follow Up",
      desc: "Keep track of calls, conversations and upcoming follow-ups.",
      icon: Clock,
    },
    {
      step: "04",
      title: "Schedule Site Visits",
      desc: "Manage customer property visits and interested projects.",
      icon: Search,
    },
    {
      step: "05",
      title: "Select Property",
      desc: "Check available properties or plots according to customer requirements.",
      icon: Building,
    },
    {
      step: "06",
      title: "Manage Booking",
      desc: "Maintain booking information and customer property details.",
      icon: CalendarCheck,
    },
    {
      step: "07",
      title: "Track Payments",
      desc: "Keep payment and installment information organized.",
      icon: BarChart3,
    },
    {
      step: "08",
      title: "Close the Deal",
      desc: "Maintain complete customer and property records after successful conversion.",
      icon: CheckCircle,
    },
  ];

  const whoCanUse = [
    {
      title: "Real Estate Developers",
      description: "Manage projects, properties, customers and sales operations.",
      icon: Building,
    },
    {
      title: "Builders",
      description: "Organize residential and commercial property enquiries and bookings.",
      icon: HardHat,
    },
    {
      title: "Property Dealers",
      description: "Manage customers, available properties and daily follow-ups.",
      icon: HomeIcon,
    },
    {
      title: "Real Estate Agencies",
      description: "Manage sales teams, leads, customers and property listings.",
      icon: Briefcase,
    },
    {
      title: "Plot Developers",
      description: "Manage plot inventory, availability, bookings and customers.",
      icon: Map,
    },
    {
      title: "Agents & Brokers",
      description: "Maintain customer enquiries, property requirements and sales information.",
      icon: UserCheck,
    },
  ];

  const whyChooseUs = [
    {
      title: "Simple to Use",
      desc: "A clean and organized system designed for everyday real estate operations.",
      icon: Zap,
    },
    {
      title: "Centralized Information",
      desc: "Keep customer, property and sales information organized in one place.",
      icon: Layers,
    },
    {
      title: "Better Follow-ups",
      desc: "Maintain customer conversations and upcoming follow-up information.",
      icon: Clock,
    },
    {
      title: "Property Tracking",
      desc: "Quickly identify available, held and booked properties.",
      icon: Building,
    },
    {
      title: "Better Team Management",
      desc: "Organize sales activities and customer assignments.",
      icon: Users,
    },
    {
      title: "Agent Management",
      desc: "Maintain agent customers, bookings and commission details.",
      icon: UserCheck,
    },
    {
      title: "Organized Sales Process",
      desc: "Manage the complete journey from enquiry to successful booking.",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <HeroSection />

      {/* ABOUT SHORT SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 reveal-up">
            <span className="inline-block px-3 py-1 rounded-none text-xs font-bold tracking-wider uppercase bg-teal-100/70 text-[#0F766E] border border-teal-200">
              Streamlined Management
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Simplify Your Real Estate Business
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Managing leads, customers, properties, follow-ups and agents manually can become
              difficult as your business grows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 sm:p-12 rounded-none border border-slate-200 shadow-xl sm:shadow-2xl">
            <div className="space-y-4 reveal-left">
              <h3 className="text-2xl font-bold text-slate-900 leading-snug">
                Our Real Estate Management Software helps organize your complete sales and property
                workflow in one place.
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                From receiving a new enquiry to property booking, every important activity can be
                managed efficiently. Say goodbye to scattered spreadsheets, missed calls, and lost
                commissions.
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-none font-bold text-sm group shadow-sm hover:shadow-md"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-4 h-4 text-[#D6A84B]" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 reveal-right delay-150">
              <div className="p-5 rounded-none bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0F766E] transition-all group">
                <Users className="w-7 h-7 text-[#0F766E] mb-2" />
                <h4 className="font-bold text-slate-900 text-base">Enquiries to Leads</h4>
                <p className="text-xs text-slate-500 mt-1">Automatic intake & timely follow-up</p>
              </div>
              <div className="p-5 rounded-none bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0F766E] transition-all group">
                <Map className="w-7 h-7 text-[#D6A84B] mb-2" />
                <h4 className="font-bold text-slate-900 text-base">Inventory Grid</h4>
                <p className="text-xs text-slate-500 mt-1">Real-time plot & unit availability</p>
              </div>
              <div className="p-5 rounded-none bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0F766E] transition-all group">
                <Search className="w-7 h-7 text-[#D6A84B] mb-2" />
                <h4 className="font-bold text-slate-900 text-base">Site Visit Logs</h4>
                <p className="text-xs text-slate-500 mt-1">Customer schedule & feedback tracking</p>
              </div>
              <div className="p-5 rounded-none bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0F766E] transition-all group">
                <CalendarCheck className="w-7 h-7 text-[#0F766E] mb-2" />
                <h4 className="font-bold text-slate-900 text-base">Instant Booking</h4>
                <p className="text-xs text-slate-500 mt-1">Payment receipts & token management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SOLUTIONS SECTION */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-up">
            <span className="inline-block px-3.5 py-1 rounded-none text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#0F766E] border border-teal-200">
              Our Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything You Need to Manage Your Real Estate Business
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Tailored software modules architected to eliminate guesswork and centralize team operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((item, idx) => {
              const IconComp = item.icon;
              const delayClass =
                idx % 3 === 0 ? "delay-100" : idx % 3 === 1 ? "delay-250" : "delay-400";
              return (
                <div key={idx} className={`reveal-up ${delayClass}`}>
                  <div className="feature-card group bg-white border border-slate-200 rounded-none p-7 shadow-lg hover:shadow-2xl relative flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="card-icon-wrapper w-13 h-13 rounded-none bg-teal-50 border border-teal-100 flex items-center justify-center p-3 transition-colors">
                          <IconComp className="w-6 h-6 text-[#0F766E] transition-colors" />
                        </div>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-none bg-amber-50 text-[#D6A84B] border border-[#D6A84B]/30">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="card-title text-xl font-bold text-slate-900 mb-2 transition-colors">
                        {item.title}
                      </h3>
                      <p className="card-text-muted text-slate-600 text-sm leading-relaxed transition-colors">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href="/services"
                        className="text-xs font-bold text-[#0F766E] group-hover:text-emerald-800 flex items-center gap-1 transition-colors"
                      >
                        <span>Explore Module</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. KEY FEATURES */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-up">
            <span className="inline-block px-3.5 py-1 rounded-none text-xs font-bold uppercase tracking-wider bg-teal-100 text-[#0F766E]">
              Key Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Powerful Features for Better Real Estate Management
            </h2>
            <p className="text-slate-600 text-base">
              A comprehensive toolkit engineered to provide complete control over daily tasks and milestones.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {keyFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              const delayClass =
                idx % 4 === 0 ? "delay-100" : idx % 4 === 1 ? "delay-200" : idx % 4 === 2 ? "delay-300" : "delay-400";
              return (
                <div
                  key={idx}
                  className={`feature-card group bg-white border border-slate-200 rounded-none p-5 shadow-md hover:shadow-xl transition-all flex flex-col items-center text-center justify-center min-h-[140px] reveal-up ${delayClass}`}
                >
                  <div className="card-icon-wrapper w-12 h-12 rounded-none bg-slate-50 border border-slate-100 flex items-center justify-center mb-3 group-hover:bg-teal-900/40">
                    <IconComp className="w-6 h-6 text-[#0F766E] group-hover:text-[#D6A84B]" />
                  </div>
                  <h4 className="card-title text-sm sm:text-base font-bold text-slate-900 transition-colors">
                    {feat.name}
                  </h4>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 reveal-up delay-200">
            <Link
              href="/features"
              className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-none font-bold text-sm shadow-md"
            >
              <span>View In-Depth Feature Breakdown</span>
              <ArrowRight className="w-4 h-4 text-[#D6A84B]" />
            </Link>
          </div>
        </div>
      </section>

      {/* DASHBOARD EXPERIENCE SHOWCASE */}
      <DashboardExperience buttonHref="/services" buttonText="Explore Dashboard" />

      {/* 5. HOW IT HELPS (Process Timeline) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-up">
            <span className="inline-block px-3.5 py-1 rounded-none text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#0F766E] border border-teal-200">
              How It Helps
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Manage Every Step of Your Sales Process
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              From first contact through deal closure, follow an organized 8-step standardized journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => {
              const IconComp = st.icon;
              const delayClass =
                idx % 4 === 0 ? "delay-100" : idx % 4 === 1 ? "delay-200" : idx % 4 === 2 ? "delay-300" : "delay-400";
              return (
                <div key={idx} className={`reveal-up ${delayClass}`}>
                  <div className="feature-card group bg-white border border-slate-200 rounded-none p-6 shadow-md hover:shadow-xl flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-black text-[#D6A84B] tracking-tight">
                          {st.step}
                        </span>
                        <div className="card-icon-wrapper w-10 h-10 rounded-none bg-teal-50 border border-teal-100 flex items-center justify-center">
                          <IconComp className="w-5 h-5 text-[#0F766E]" />
                        </div>
                      </div>
                      <h3 className="card-title text-lg font-bold text-slate-900 mb-2">
                        {st.title}
                      </h3>
                      <p className="card-text-muted text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-semibold">
                      Step {idx + 1} of 8
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="btn-secondary inline-flex items-center gap-2 px-7 py-3 rounded-none font-bold text-sm shadow-sm hover:shadow-md"
            >
              <span>See Full Workflow Details</span>
              <ArrowRight className="w-4 h-4 text-[#D6A84B]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. WHO CAN USE IT? */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-up">
            <span className="inline-block px-3.5 py-1 rounded-none text-xs font-bold uppercase tracking-wider bg-teal-100 text-[#0F766E]">
              Who Can Use It?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Designed for the Real Estate Industry
            </h2>
            <p className="text-slate-600 text-base">
              Custom-built functionality matching the exact workflow of diverse property businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whoCanUse.map((user, idx) => {
              const IconComp = user.icon;
              const delayClass =
                idx % 3 === 0 ? "delay-100" : idx % 3 === 1 ? "delay-250" : "delay-400";
              return (
                <div key={idx} className={`reveal-up ${delayClass}`}>
                  <div className="feature-card group bg-white border border-slate-200 rounded-none p-7 shadow-md hover:shadow-xl flex items-start gap-4 h-full">
                    <div className="card-icon-wrapper w-12 h-12 rounded-none bg-teal-50 border border-teal-100 flex items-center justify-center shrink-0">
                      <IconComp className="w-6 h-6 text-[#0F766E]" />
                    </div>
                    <div>
                      <h3 className="card-title text-lg font-bold text-slate-900 mb-1.5">
                        {user.title}
                      </h3>
                      <p className="card-text-muted text-slate-600 text-sm leading-relaxed">
                        {user.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE OUR SOFTWARE? */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-up">
            <span className="inline-block px-3.5 py-1 rounded-none text-xs font-bold uppercase tracking-wider bg-teal-50 text-[#0F766E] border border-teal-200">
              Why Choose Our Software?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A Better Way to Manage Real Estate Operations
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Built with purpose, clarity, and reliability to help you close deals faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((why, idx) => {
              const IconComp = why.icon;
              const delayClass =
                idx % 3 === 0 ? "delay-100" : idx % 3 === 1 ? "delay-250" : "delay-400";
              return (
                <div key={idx} className={`reveal-up ${delayClass}`}>
                  <div className="feature-card group bg-white border border-slate-200 rounded-none p-6 shadow-md hover:shadow-xl flex flex-col justify-between h-full">
                    <div>
                      <div className="card-icon-wrapper w-11 h-11 rounded-none bg-teal-50 border border-teal-100 flex items-center justify-center mb-4">
                        <IconComp className="w-5 h-5 text-[#0F766E]" />
                      </div>
                      <h3 className="card-title text-lg font-bold text-slate-900 mb-2">
                        {why.title}
                      </h3>
                      <p className="card-text-muted text-slate-600 text-sm leading-relaxed">
                        {why.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION */}
      <CtaSection />
    </div>
  );
}
