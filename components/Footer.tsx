import Link from "next/link";

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

const SERVICES = [
  "Bathroom Renovation",
  "Kitchen Renovation",
  "Basement Finishing",
  "Full House Renovation",
  "Landscaping & Sodding",
  "Roofing",
  "Flooring & Tiling",
];

const GTA_CITIES =
  "Toronto · Mississauga · Brampton · Etobicoke · Scarborough · North York · Vaughan · Richmond Hill · Markham · Oakville";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <span className="block text-[#C9A84C] font-bold text-2xl mb-2">
              Scrape to Shape
            </span>
            <p className="text-sm text-white/60 italic mb-4">
              From Scrape to Shape — We Build It Right
            </p>
            <p className="text-sm text-white/60 leading-relaxed">
              GTA&apos;s trusted home renovation experts. Quality craftsmanship,
              transparent pricing, and workmanship you can count on.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:2268991190"
                  className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors duration-200 flex items-start gap-2"
                >
                  <span className="mt-0.5">📞</span>
                  <span>226-899-1190</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@scrapetoshape.ca"
                  className="text-sm text-white/60 hover:text-[#C9A84C] transition-colors duration-200 flex items-start gap-2"
                >
                  <span className="mt-0.5">✉️</span>
                  <span>info@scrapetoshape.ca</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span className="text-sm text-white/60">
                  Greater Toronto Area, ON
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-2">
                Service Area
              </h4>
              <p className="text-xs text-white/50 leading-relaxed">{GTA_CITIES}</p>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Scrape to Shape Renovations. All
            rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Serving the Greater Toronto Area
          </p>
        </div>
      </div>
    </footer>
  );
}
