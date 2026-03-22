import { motion } from "framer-motion";
import {
  Gavel,
  TrendingUp,
  Shield,
  Lock,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";

const reasons = [
  {
    icon: Gavel,
    title: "10+ Years Courtroom Experience",
    stat: "200+",
    statLabel: "Cases Argued",
    points: [
      "Appeared before District, Sessions & High Courts",
      "Deep understanding of judicial precedents",
      "Never unprepared — always strategically positioned",
    ],
  },
  {
    icon: TrendingUp,
    title: "Proven Client Success",
    stat: "95%",
    statLabel: "Satisfaction",
    points: [
      "High success rates in criminal and civil matters",
      "Transparent outcome tracking and reporting",
      "Client referrals our strongest endorsement",
    ],
  },
  {
    icon: Shield,
    title: "Bespoke Legal Strategy",
    stat: "6+",
    statLabel: "Domains",
    points: [
      "Custom case strategy — no cookie-cutter approaches",
      "Deep factual and precedent research",
      "Procedural advantages identified early",
    ],
  },
  {
    icon: Lock,
    title: "Absolute Confidentiality",
    stat: "100%",
    statLabel: "Confidential",
    points: [
      "Attorney-client privilege strictly upheld",
      "Strict information barriers across matters",
      "Secure communication channels at all times",
    ],
  },
  {
    icon: Users,
    title: "Senior-Led Representation",
    stat: "1:5",
    statLabel: "Atty:Case",
    points: [
      "No handoff to juniors on your file",
      "Direct access to your lawyer always",
      "Personalized attention throughout your case",
    ],
  },
  {
    icon: Star,
    title: "Result-Driven Advocacy",
    stat: "10+",
    statLabel: "Years Active",
    points: [
      "Honest case assessment from day one",
      "No unnecessary filings or procedures",
      "Aggressive pursuit of your legal outcome",
    ],
  },
];

export default function WhyUs() {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section
        className="py-32 relative overflow-hidden text-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(4,12,20,0.94) 0%, rgba(13,27,42,0.90) 100%), url('https://images.unsplash.com/photo-1521791055366-0d553872952f?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Why Choose Us
          </span>
          <div className="gold-divider mx-auto" />
          <h1 className="section-title mb-6">
            Experience You Can Trust.{" "}
            <span className="text-gold-400">Results You Can Count On.</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            In a field where outcomes are permanent, choosing the right legal
            counsel is the most important decision you will make.
          </p>
        </div>
      </section>

      {/* Reuse */}
      <WhyChooseUs />

      {/* Detailed Reasons */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
              In Detail
            </span>
            <div className="gold-divider mx-auto" />
            <h2 className="section-title">
              What Sets Us <span className="text-gold-400">Apart</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map(
              ({ icon: Icon, title, stat, statLabel, points }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="card group"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/30 rounded-xl flex items-center justify-center group-hover:bg-gold-500/20 transition-all">
                      <Icon className="w-7 h-7 text-gold-400" />
                    </div>
                    <div className="text-right">
                      <p
                        className="font-bold text-2xl text-gold-400"
                        style={{ fontFamily: "Playfair Display, serif" }}
                      >
                        {stat}
                      </p>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">
                        {statLabel}
                      </p>
                    </div>
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-4 group-hover:text-gold-300 transition-colors"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {title}
                  </h3>
                  <ul className="space-y-2">
                    {points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-gray-400 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-navy-800 via-navy-900 to-navy-800 border-y border-gold-500/20 text-center">
        <h2 className="section-title mb-4">
          Ready to Experience the{" "}
          <span className="text-gold-400">Difference?</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Join hundreds of clients who trusted us with their most important
          legal matters.
        </p>
        <Link to="/contact" className="btn-primary px-10 py-4 text-base">
          Get Free Consultation
        </Link>
      </section>
    </div>
  );
}
