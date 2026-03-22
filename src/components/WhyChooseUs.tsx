import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gavel, TrendingUp, Shield, Lock, Users, Star } from "lucide-react";

const reasons = [
  {
    icon: Gavel,
    title: "10+ Years Experience",
    desc: "Over a decade of courtroom advocacy before District, Sessions, and High Courts with deep domain expertise.",
  },
  {
    icon: TrendingUp,
    title: "Proven Client Success",
    desc: "High success rates across criminal acquittals, civil recoveries, and corporate transactions — results that speak for themselves.",
  },
  {
    icon: Shield,
    title: "Bespoke Legal Strategy",
    desc: "Every case receives a custom strategy built on rigorous research and a deep understanding of your unique situation.",
  },
  {
    icon: Lock,
    title: "Absolute Confidentiality",
    desc: "Attorney-client privilege is our foundation. Your disclosures and strategies never leave this firm.",
  },
  {
    icon: Users,
    title: "Senior-Led Representation",
    desc: "Your file is personally supervised by a senior advocate. You always speak directly to the lawyer handling your matter.",
  },
  {
    icon: Star,
    title: "Result-Driven Advocacy",
    desc: "We assess cases honestly, recommend the best path forward, and then pursue your outcome with everything we have.",
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 bg-navy-900 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.2) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Why Choose Us
          </div>
          <div className="gold-divider mx-auto" />
          <h2 className="section-title">
            What Sets Us <span className="text-gold-400">Apart</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            In a field where outcomes are permanent, choosing the right counsel
            is everything.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card group"
            >
              <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/30 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold-500/20 group-hover:border-gold-400 transition-all">
                <Icon className="w-7 h-7 text-gold-400" />
              </div>
              <h3
                className="text-lg font-bold text-white mb-3 group-hover:text-gold-300 transition-colors"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
