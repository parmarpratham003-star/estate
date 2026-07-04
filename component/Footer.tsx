import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37a4 4 0 1 1-7.914 1.174A4 4 0 0 1 16 11.37Z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.6 15.6V8.4l6.27 3.6-6.27 3.6Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#065F46] text-white tracking-wide overflow-hidden">
      <style>{`
        @keyframes footerFadeUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .footer-animate {
          animation: footerFadeUp 0.7s ease-out both;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-8 sm:pt-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">

          {/* Logo */}

          <div className="footer-animate" style={{ animationDelay: "0ms" }}>

            <div className="mb-1 h-14 sm:h-16 overflow-hidden flex items-start">

              <img
                src="/footer.png"
                alt="PrimeNest Realty"
                className="w-52 sm:w-60 h-auto object-contain object-left -mt-10 -ml-4"
              />

            </div>

            <p className="text-[#F9FAFB]/80 leading-5 text-[13px]">
              PrimeNest Realty is committed to providing
              the best real estate services with integrity,
              transparency, and excellence.
            </p>

            <div className="flex gap-3 mt-4">

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#FFFFFF] text-[#065F46] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#FFFFFF] transition-colors duration-300"
              >
                <FacebookIcon />
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#FFFFFF] text-[#065F46] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#FFFFFF] transition-colors duration-300"
              >
                <InstagramIcon />
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#FFFFFF] text-[#065F46] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#FFFFFF] transition-colors duration-300"
              >
                <LinkedinIcon />
              </a>

              <a
                href="#"
                className="w-8 h-8 rounded-full bg-[#FFFFFF] text-[#065F46] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#FFFFFF] transition-colors duration-300"
              >
                <YoutubeIcon />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div className="footer-animate" style={{ animationDelay: "100ms" }}>

            <h3 className="text-[15px] font-[family-name:var(--font-playfair)] font-semibold mb-3">
              Quick Links
            </h3>

            <ul className="space-y-1.5 text-[13px] text-[#F9FAFB]/80">

              <li>
                <Link href="/" className="hover:text-[#D4AF37] transition-colors duration-300">Home</Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors duration-300">About Us</Link>
              </li>

              <li>
                <Link href="/properties" className="hover:text-[#D4AF37] transition-colors duration-300">Properties</Link>
              </li>

              <li>
                <Link href="/agents" className="hover:text-[#D4AF37] transition-colors duration-300">Agents</Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-[#D4AF37] transition-colors duration-300">Services</Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-[#D4AF37] transition-colors duration-300">Contact Us</Link>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div className="footer-animate" style={{ animationDelay: "200ms" }}>

            <h3 className="text-[15px] font-[family-name:var(--font-playfair)] font-semibold mb-3">
              Our Services
            </h3>

            <ul className="space-y-1.5 text-[13px] text-[#F9FAFB]/80">

              <li>Buy a Property</li>

              <li>Sell a Property</li>

              <li>Rent a Property</li>

              <li>Property Management</li>

              <li>Investment Advisory</li>

              <li>Legal Assistance</li>

            </ul>

          </div>

          {/* Contact */}

          <div className="footer-animate" style={{ animationDelay: "300ms" }}>

            <h3 className="text-[15px] font-[family-name:var(--font-playfair)] font-semibold mb-3">
              Contact Us
            </h3>

            <div className="space-y-2.5 text-[13px] text-[#F9FAFB]/80">

              <div className="flex gap-2.5">

                <MapPin
                  size={15}
                  className="text-[#D4AF37] mt-0.5 shrink-0"
                />

                <p className="leading-5">
                  403, Shilp Corporate Park,
                  <br />
                  Sindhu Bhavan Road,
                  <br />
                  Ahmedabad, Gujarat 380059
                </p>

              </div>

              <div className="flex gap-2.5 items-center">

                <Phone
                  size={15}
                  className="text-[#D4AF37] shrink-0"
                />

                <span>+91 98765 43210</span>

              </div>

              <div className="flex gap-2.5 items-center">

                <Mail
                  size={15}
                  className="text-[#D4AF37] shrink-0"
                />

                <span>info@primenestrealty.com</span>

              </div>

              <div className="flex gap-2.5 items-center">

                <Clock
                  size={15}
                  className="text-[#D4AF37] shrink-0"
                />

                <span>Mon - Sat: 9:00 AM - 7:00 PM</span>

              </div>

            </div>

          </div>

          {/* Newsletter */}

          <div className="footer-animate" style={{ animationDelay: "400ms" }}>

            <h3 className="text-[15px] font-[family-name:var(--font-playfair)] font-semibold mb-3">
              Newsletter
            </h3>

            <p className="text-[#F9FAFB]/80 mb-3 leading-5 text-[13px]">
              Subscribe to get the latest
              property listings and updates.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-10 bg-transparent border border-[#D4AF37]/60 rounded-md px-3 text-[13px] outline-none placeholder:text-[#F9FAFB]/50 focus:border-[#D4AF37] transition-colors duration-300"
            />

            <button className="w-full mt-3 h-10 rounded-md bg-[#D4AF37] text-[#1F2937] text-[13px] font-semibold hover:bg-[#047857] hover:text-[#FFFFFF] transition-colors duration-300">
              Subscribe
            </button>

          </div>

        </div>

        {/* Bottom */}

        <div className="footer-animate mt-6 border-t border-[#FFFFFF]/15 py-3 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center" style={{ animationDelay: "500ms" }}>

          <p className="text-[#F9FAFB]/70 text-[12px] text-center sm:text-left">
            © 2024 PrimeNest Realty. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4 text-[12px] text-[#F9FAFB]/80">

            <Link href="#" className="hover:text-[#D4AF37] transition-colors duration-300">
              Privacy Policy
            </Link>

            <span>|</span>

            <Link href="#" className="hover:text-[#D4AF37] transition-colors duration-300">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}