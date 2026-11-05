import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollRevealObserver from "@/components/ScrollRevealObserver";
import FloatingEnquiryButton from "@/components/FloatingEnquiryButton";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquiryModal from "@/components/EnquiryModal";

export const metadata: Metadata = {
  title: "Real Estate Management Software | Smart CRM & Property Management",
  description: "Smart Real Estate Management Software for Growing Businesses. Manage leads, properties, plots, customers, sales activities, agents and bookings through one organized software solution.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/image.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Real Estate Management Software | Smart CRM & Property Management",
    description: "Smart Real Estate Management Software for Growing Businesses.",
    images: [{ url: "/image.png", width: 1200, height: 630, alt: "RealEstate CRM Logo" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-[#0F766E] selection:text-white"
      >
        <ScrollRevealObserver />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingEnquiryButton />
        <WhatsAppButton />
        <EnquiryModal />
      </body>
    </html>
  );
}
