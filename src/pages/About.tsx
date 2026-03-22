import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import AboutComponent from "../components/About";

const milestones = [
  {
    year: "2014",
    event:
      "Firm founded by Advocate Parvez Alam after years of independent criminal litigation practice.",
  },
  {
    year: "2016",
    event:
      "Expanded into Civil and Property Law; first dedicated associate counsel hired.",
  },
  {
    year: "2018",
    event:
      "Family Law division established; recognized for handling sensitive matrimonial proceedings.",
  },
  {
    year: "2020",
    event:
      "Corporate Law practice launched; began advising local businesses and MSMEs on compliance.",
  },
  {
    year: "2022",
    event:
      "Crossed 150+ successfully resolved matters; opened dedicated consultation chambers.",
  },
  {
    year: "2024",
    event:
      "Launched Legal Advisory retainer service; recognized among leading advocates in Uttarakhand.",
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section
        className="py-32 relative overflow-hidden text-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(4,12,20,0.94) 0%, rgba(13,27,42,0.90) 100%), url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&q=80')`,
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
            Our Story
          </span>
          <div className="gold-divider mx-auto" />
          <h1 className="section-title mb-6">
            A Decade of <span className="text-gold-400">Legal Excellence</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Parvez Alam & Associates was built on one belief — that every person
            deserves powerful, principled legal representation, regardless of
            the complexity of their matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/contact" className="btn-primary px-8 py-3">
              Schedule Consultation
            </Link>
            <Link to="/team" className="btn-outline px-8 py-3">
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Reuse About Component */}
      <AboutComponent />

      {/* Mission & Vision */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
              Guiding Principles
            </span>
            <div className="gold-divider mx-auto" />
            <h2 className="section-title">
              Mission & <span className="text-gold-400">Vision</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                body: "To provide fearless, ethical, and results-driven legal representation to every client. We are committed to making justice accessible, demystifying the legal process, and advocating fiercely — in and out of the courtroom.",
                points: [
                  "Champion the rights of the vulnerable",
                  "Deliver strategic counsel to businesses",
                  "Resolve disputes with precision and speed",
                  "Uphold the rule of law in every action",
                ],
              },
              {
                icon: Eye,
                title: "Our Vision",
                body: "To be recognized as the most trusted legal practice in Uttarakhand — a firm synonymous with expertise, empathy, and unwavering advocacy, where every client feels heard, protected, and empowered.",
                points: [
                  "Lead the region in legal innovation",
                  "Build a legacy of landmark precedents",
                  "Mentor the next generation of advocates",
                  "Set the standard for client satisfaction",
                ],
              },
            ].map(({ icon: Icon, title, body, points }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="card"
              >
                <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/30 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-5">{body}</p>
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
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
              Our Journey
            </span>
            <div className="gold-divider mx-auto" />
            <h2 className="section-title">
              10 Years of <span className="text-gold-400">Milestones</span>
            </h2>
          </div>
          <div className="relative border-l-2 border-gold-500/30 pl-8 space-y-10">
            {milestones.map(({ year, event }, i) => (
              <motion.div
                key={year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-gold-500 border-4 border-navy-900" />
                <span
                  className="text-gold-400 font-bold text-lg"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {year}
                </span>
                <p className="text-gray-300 mt-1 text-sm leading-relaxed">
                  {event}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "200+", label: "Cases Resolved" },
              { value: "10+", label: "Years Active" },
              { value: "95%", label: "Client Satisfaction" },
              { value: "6", label: "Practice Areas" },
            ].map(({ value, label }) => (
              <div key={label} className="card text-center">
                <div
                  className="text-4xl font-bold text-gold-400 mb-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {value}
                </div>
                <div className="text-gray-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-navy-800 via-navy-900 to-navy-800 border-y border-gold-500/20 text-center">
        <h2 className="section-title mb-4">
          Ready to Work With <span className="text-gold-400">Us?</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Your first consultation is free and completely confidential.
        </p>
        <Link to="/contact" className="btn-primary px-10 py-4 text-base">
          Schedule Free Consultation
        </Link>
      </section>
    </div>
  );
}
