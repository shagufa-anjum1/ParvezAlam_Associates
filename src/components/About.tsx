import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, CheckCircle, Briefcase } from "lucide-react";

const stats = [
  { icon: Briefcase, value: "200+", label: "Cases Handled" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "95%", label: "Client Satisfaction" },
  { icon: CheckCircle, value: "6+", label: "Practice Areas" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-navy-900 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-5 rounded-full"
        style={{ background: "radial-gradient(circle, #c9a84c, transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── IMAGE SIDE ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl shadow-black/50">
              {/* ✅ REAL IMAGE — Parvez Alam */}
              <img
                src="https://pplx-res.cloudinary.com/image/upload/v1/pplx_search_images/aad7c5d11d449ea2df3268eed70902f359110e40.jpg"
                alt="Advocate Parvez Alam"
                className="w-full h-[480px] object-cover object-top"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />

              {/* Name label at bottom */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-navy-950/75 backdrop-blur-sm border border-gold-500/20 rounded-xl px-4 py-3">
                  <p
                    className="text-gold-400 font-bold text-lg leading-tight"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    Adv. Parvez Alam
                  </p>
                  <p className="text-gray-300 text-sm mt-0.5">
                    Founder & Senior Advocate
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    District Court, Haldwani • 10+ Years
                  </p>
                </div>
              </div>

              {/* Gold bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            </div>

            {/* Floating "10+ Years" badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-gold-500 text-navy-950 rounded-2xl p-5 shadow-xl"
            >
              <div
                className="text-3xl font-black"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                10+
              </div>
              <div className="text-xs font-semibold">
                Years of
                <br />
                Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* ── TEXT SIDE ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
              About Our Firm
            </div>
            <div className="gold-divider" />
            <h2 className="section-title mb-6">
              Excellence in Legal
              <br />
              <span className="text-gold-400">Representation</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              At{" "}
              <strong className="text-white">Parvez Alam & Associates</strong>,
              we combine deep legal expertise with a compassionate client-first
              approach. Founded on the principles of justice, integrity, and
              excellence, our firm has been delivering outstanding legal
              outcomes for over a decade.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our team handles cases across Civil, Criminal, Corporate,
              Property, Family, and Legal Advisory domains with personalized
              attention and relentless advocacy.
            </p>
            <div className="space-y-3 mb-10">
              {[
                "Expert legal professionals with specialized expertise",
                "Transparent, client-first communication throughout",
                "Proven track record with 200+ successful cases",
                "Confidential handling of all legal matters",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href="/contact" className="btn-primary">
              Schedule Consultation
            </a>
          </motion.div>
        </div>

        {/* ── STATS ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="card text-center group">
              <div className="w-12 h-12 bg-gold-500/10 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-gold-500/20 transition-all">
                <Icon className="w-6 h-6 text-gold-400" />
              </div>
              <div
                className="text-3xl font-bold text-white mb-1"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {value}
              </div>
              <div className="text-gray-400 text-sm">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
