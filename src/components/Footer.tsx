import { Link } from "react-router-dom";
import {
  Scale,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const practiceLinks = [
  "Civil Law",
  "Criminal Law",
  "Corporate Law",
  "Property Law",
  "Family Law",
  "Legal Advisory",
];

const quickLinks = [
  { label: "About Us", path: "/about" },
  { label: "Practice Areas", path: "/practice-areas" },
  { label: "Why Choose Us", path: "/why-us" },
  { label: "Our Team", path: "/team" },
  { label: "Contact Us", path: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gray-800/60">
      {/* CTA Strip */}
      <div className="bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3
              className="text-navy-950 font-bold text-2xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Need Legal Help? We Are Here.
            </h3>
            <p className="text-navy-950/70 text-sm mt-1">
              Contact us today for a confidential legal consultation.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-navy-950 text-gold-400 font-semibold px-8 py-3 rounded hover:bg-navy-800 transition-all flex-shrink-0"
          >
            Book Consultation →
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold-500/20 border border-gold-500 rounded-full flex items-center justify-center">
                <Scale className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <div
                  className="text-white font-bold leading-tight"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Parvez Alam
                </div>
                <div className="text-gold-400 text-xs tracking-widest uppercase">
                  & Associates
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Committed to Justice. Dedicated to You. Expert legal services
              across all practice areas with over 10 years of courtroom
              experience.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-navy-900 border border-gray-700 hover:border-gold-500 hover:bg-gold-500/10 flex items-center justify-center transition-all"
                >
                  <Icon className="w-4 h-4 text-gray-400 hover:text-gold-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Practice Areas
            </h4>
            <ul className="space-y-2">
              {practiceLinks.map((area) => (
                <li key={area}>
                  <Link
                    to="/practice-areas"
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="text-gold-500 text-xs">›</span>
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(({ label, path }) => (
                <li key={label}>
                  <Link
                    to={path}
                    className="text-gray-400 hover:text-gold-400 text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="text-gold-500 text-xs">›</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-widest">
              Contact Us
            </h4>
            <div className="space-y-4">
              {[
                {
                  icon: Phone,
                  text: "+91 7895000143",
                  href: "tel:+917895000143",
                },
                {
                  icon: Mail,
                  text: "pravezalam06@gmail.com",
                  href: "mailto:pravezalam06@gmail.com",
                },
                {
                  icon: MapPin,
                  text: "District Court, Haldwani, Uttarakhand",
                  href: "#",
                },
              ].map(({ icon: Icon, text, href }) => (
                <a
                  key={text}
                  href={href}
                  className="flex items-start gap-3 text-gray-400 hover:text-gold-400 transition-colors group"
                >
                  <Icon className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-500 group-hover:text-gold-400" />
                  <span className="text-sm break-all">{text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Parvez Alam & Associates. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 hover:text-gold-400 text-xs transition-colors"
                >
                  {link}
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
