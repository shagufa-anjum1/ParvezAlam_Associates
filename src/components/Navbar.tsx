import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { Scale, Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Practice Areas", path: "/practice-areas" },
  { label: "Why Us", path: "/why-us" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg border-b border-gold-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gold-500/20 border border-gold-500 rounded-full flex items-center justify-center group-hover:bg-gold-500/30 transition-all">
              <Scale className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <div
                className="text-white font-bold text-sm leading-none"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Parvez Alam
              </div>
              <div className="text-gold-400 text-xs tracking-widest uppercase">
                & Associates
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, path }) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors duration-200 relative group pb-1 ${
                    isActive
                      ? "text-gold-400"
                      : "text-gray-300 hover:text-gold-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-gold-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:7895000143"
              className="flex items-center gap-2 text-gold-400 text-sm hover:text-gold-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>7895000143</span>
            </a>
            <Link to="/contact" className="btn-primary text-sm px-5 py-2">
              Book Consultation
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-300 hover:text-gold-400 transition-colors"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy-950/98 border-t border-gold-500/20 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(({ label, path }) => (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 px-3 rounded text-sm font-medium transition-colors ${
                      isActive
                        ? "text-gold-400 bg-gold-500/10"
                        : "text-gray-300 hover:text-gold-400 hover:bg-white/5"
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary block text-center mt-3 text-sm"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
