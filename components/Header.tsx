"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Know Your House", href: "/know-your-house" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-[#1C3A2F] shadow-lg"
          : "bg-[#1C3A2F]/0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-[#C9A84C] font-bold text-xl lg:text-2xl tracking-tight leading-tight">
              Scrape to Shape
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-[#C9A84C] text-sm font-medium transition-colors duration-200 whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone (desktop) */}
          <div className="hidden lg:flex items-center">
            <a
              href="tel:2268991190"
              className="bg-[#C9A84C] hover:bg-[#b8963f] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-colors duration-200 whitespace-nowrap"
            >
              226-899-1190
            </a>
          </div>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="lg:hidden p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-all duration-200" />
            <span
              className={`block w-6 h-0.5 bg-current mb-1.5 transition-all duration-200 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span className="block w-6 h-0.5 bg-current transition-all duration-200" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1C3A2F] border-t border-white/10 px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-[#C9A84C] font-medium py-2.5 px-2 rounded-md hover:bg-white/5 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href="tel:2268991190"
            className="mt-4 block text-center bg-[#C9A84C] hover:bg-[#b8963f] text-white font-semibold py-3 rounded-full transition-colors duration-200"
            onClick={() => setMenuOpen(false)}
          >
            Call 226-899-1190
          </a>
        </div>
      )}
    </header>
  );
}
