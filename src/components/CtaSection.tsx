import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CtaSection({
  title = "Looking for a Better Way to Manage Your Real Estate Business?",
  subtitle = "Tell us about your requirements and our team will get in touch with you.",
  buttonText = "Send Enquiry",
  buttonLink = "/contact",
}: CtaSectionProps) {
  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#102A2E] text-white rounded-none p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-teal-900 reveal-up">
          {/* Subtle gold accent corner decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F766E]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D6A84B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-[#0F766E]/30 border border-[#D6A84B]/40 text-[#D6A84B] text-xs font-bold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Accelerate Your Real Estate Growth
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {title}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {subtitle}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={buttonLink}
                className="btn-primary inline-flex items-center justify-center gap-3 px-8 py-4 rounded-none text-base font-bold shadow-lg group w-full sm:w-auto"
              >
                <span>{buttonText}</span>
                <ArrowRight className="w-5 h-5 text-[#D6A84B]" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-none text-base font-bold text-white border border-slate-600 hover:border-[#D6A84B] hover:text-[#D6A84B] transition-all w-full sm:w-auto shadow-sm"
              >
                Explore All Features
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

