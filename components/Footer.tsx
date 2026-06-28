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

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true">
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true">
      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true">
      <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="block text-[#C9A84C] font-bold text-2xl mb-2 tracking-tight">
              Scrape to Shape
            </span>
            <p className="text-sm text-white/40 italic mb-4">
              From Scrape to Shape — We Build It Right
            </p>
            <p className="text-sm text-white/50 leading-relaxed">
              GTA&apos;s trusted home renovation experts. Quality craftsmanship,
              transparent pricing, and workmanship you can count on.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-5">
              Contact Us
            </h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="tel:2268991190"
                  className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors duration-200 flex items-start gap-2.5"
                >
                  <PhoneIcon />
                  <span>226-899-1190</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@scrapetoshape.ca"
                  className="text-sm text-white/50 hover:text-[#C9A84C] transition-colors duration-200 flex items-start gap-2.5"
                >
                  <MailIcon />
                  <span>info@scrapetoshape.ca</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPinIcon />
                <span>Greater Toronto Area, ON</span>
              </li>
            </ul>

            <div className="mt-7">
              <h4 className="text-white font-semibold text-xs uppercase tracking-widest mb-2.5">
                Service Area
              </h4>
              <p className="text-xs text-white/35 leading-relaxed">{GTA_CITIES}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Scrape to Shape Renovations. All
            rights reserved.
          </p>
          <p className="text-xs text-white/30">Serving the Greater Toronto Area</p>
        </div>
      </div>
    </footer>
  );
}
