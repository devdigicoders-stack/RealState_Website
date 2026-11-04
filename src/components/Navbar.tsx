"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Features", href: "/features" },
    { name: "How It Works", href: "/how-it-works" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2 sm:py-2.5"
            : "bg-white border-b border-slate-100 py-3 sm:py-3.5"
        }`}
      >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group py-0.5">
            <Image
              src="/image.png"
              alt="RealEstate CRM Logo"
              width={260}
              height={72}
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? "text-[#0F766E] bg-teal-50/70"
                      : "text-slate-700 hover:text-[#0F766E] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#0F766E] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-none text-sm font-bold shadow-sm"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 text-[#D6A84B]" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                    isActive
                      ? "bg-teal-50 text-[#0F766E]"
                      : "text-slate-700 hover:bg-slate-50 hover:text-[#0F766E]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-100">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary flex items-center justify-center gap-2 w-full py-3 rounded-none text-center font-bold text-base"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 text-[#D6A84B]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
    {/* Spacer to keep document flow accurate with fixed navbar */}
    <div className="h-[74px] sm:h-[84px] md:h-[92px] w-full shrink-0" aria-hidden="true" />
  </>
  );
}

