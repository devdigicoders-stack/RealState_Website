import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#102A2E] text-white border-t border-teal-900">
      {/* Top CTA Bar */}
      <div className="border-b border-slate-700/60 bg-[#0F766E]/20 py-8">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none text-xs font-semibold bg-amber-400/10 text-[#D6A84B] border border-[#D6A84B]/30 mb-2">
                <ShieldCheck className="w-3.5 h-3.5" /> High Performance Real Estate Software
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Looking for a Better Way to Manage Your Real Estate Business?
              </h3>
              <p className="text-slate-300 text-sm mt-1 max-w-2xl">
                Tell us about your requirements and our team will get in touch with you.
              </p>
            </div>
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-none font-bold text-sm whitespace-nowrap shadow-md group shrink-0"
            >
              <span>Send Enquiry</span>
              <ArrowRight className="w-4 h-4 text-[#D6A84B] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-block group py-1">
              <Image
                src="/logo-white.png"
                alt="RealEstate CRM Logo"
                width={260}
                height={72}
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105 mx-auto md:mx-0"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              Smart technology solutions for modern real estate businesses. Manage leads, properties,
              plots, customers, sales activities, agents and bookings through one organized software
              solution.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-slate-400 pt-2">
              <CheckCircle2 className="w-4 h-4 text-[#D6A84B] shrink-0" />
              <span>Built for Developers, Builders, Agencies & Property Dealers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D6A84B] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:underline transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-white hover:underline transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white hover:underline transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D6A84B] mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link href="/services" className="hover:text-white hover:underline transition-colors">
                  Property CRM
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:underline transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:underline transition-colors">
                  Plot Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:underline transition-colors">
                  Calling Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:underline transition-colors">
                  Agent Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:underline transition-colors">
                  Booking Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="text-center md:text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D6A84B] mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-slate-300 flex flex-col items-center md:items-start">
              <li className="flex items-center justify-center md:justify-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D6A84B] shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D6A84B] shrink-0" />
                <a href="mailto:info@realestatecrm.com" className="hover:underline">
                  info@realestatecrm.com
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start gap-2.5 text-center md:text-left max-w-xs">
                <MapPin className="w-4 h-4 text-[#D6A84B] shrink-0 mt-0.5" />
                <span>Tech Park, Cyber Hub, Business District, India</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D6A84B] shrink-0" />
                <span>Mon – Sat: 10:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>© 2026 RealEstate CRM. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-[#D6A84B] font-semibold">Reliable & Organized Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

