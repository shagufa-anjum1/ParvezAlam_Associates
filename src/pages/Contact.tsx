import { motion } from "framer-motion";
import ContactComponent from "../components/Contact";
import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin, Scale, Shield, Users } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-20">
      {/* ───── Page Hero ───── */}
      <section
        className="py-32 relative overflow-hidden text-center"
        // ✅ Contact Page Hero — WORKING
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(4,12,20,0.88) 0%, rgba(13,27,42,0.82) 50%, rgba(4,12,20,0.90) 100%), url('https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
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
            Contact Us
          </span>
          <div className="gold-divider mx-auto" />
          <h1 className="section-title mb-6">
            Speak to a Lawyer <span className="text-gold-400">Today</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Your first consultation is free and completely confidential. Share
            your matter with us and we will respond within 24 hours.
          </p>

          {/* Quick Contact Chips */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917895000143"
              className="flex items-center gap-2 bg-navy-900/80 border border-gold-500/30 text-gold-300 px-5 py-2 rounded-full text-sm hover:border-gold-400 hover:bg-navy-800 transition-all backdrop-blur-sm"
            >
              <Phone className="w-4 h-4" /> +91 7895000143
            </a>
            <a
              href="mailto:pravezalam06@gmail.com"
              className="flex items-center gap-2 bg-navy-900/80 border border-gold-500/30 text-gold-300 px-5 py-2 rounded-full text-sm hover:border-gold-400 hover:bg-navy-800 transition-all backdrop-blur-sm"
            >
              <Mail className="w-4 h-4" /> pravezalam06@gmail.com
            </a>
            <span className="flex items-center gap-2 bg-navy-900/80 border border-gold-500/30 text-gold-300 px-5 py-2 rounded-full text-sm backdrop-blur-sm">
              <Clock className="w-4 h-4" /> Mon–Sat: 9AM – 7PM
            </span>
          </div>
        </div>
      </section>

      {/* ───── Why Contact Us — Image + Text ───── */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/20 shadow-2xl shadow-black/50">
                <img
                  src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=900&q=80"
                  alt="Law office consultation"
                  className="w-full h-[460px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-gold-500 text-navy-950 rounded-2xl p-5 shadow-xl"
              >
                <div
                  className="text-3xl font-black"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  24h
                </div>
                <div className="text-xs font-semibold">
                  Response
                  <br />
                  Guaranteed
                </div>
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
                Get In Touch
              </span>
              <div className="gold-divider" />
              <h2 className="section-title mb-6">
                Your Legal Journey{" "}
                <span className="text-gold-400">Starts Here</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                At{" "}
                <strong className="text-white">Parvez Alam & Associates</strong>
                , we understand that seeking legal help can feel overwhelming.
                That's why we've made our consultation process simple,
                confidential, and completely judgment-free.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you're facing a criminal charge, a property dispute, a
                family matter, or need corporate advisory — our senior advocates
                are ready to evaluate your case and guide you toward the best
                path forward.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Scale,
                    title: "Free Initial Consultation",
                    desc: "No fees for the first meeting — we assess your case at no cost.",
                  },
                  {
                    icon: Shield,
                    title: "Complete Confidentiality",
                    desc: "Everything you share is protected by attorney-client privilege.",
                  },
                  {
                    icon: Users,
                    title: "Direct Senior Attorney Access",
                    desc: "You speak to the advocate handling your case — not a junior.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div
                    key={title}
                    className="flex items-start gap-4 p-4 bg-navy-950 border border-gray-800 rounded-xl hover:border-gold-500/30 transition-all"
                  >
                    <div className="w-10 h-10 bg-gold-500/10 border border-gold-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm mb-1">
                        {title}
                      </p>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ───── Contact Form + Info (existing component) ───── */}
      <ContactComponent />

      {/* ───── Office Image Strip ───── */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
              Our Office
            </span>
            <div className="gold-divider mx-auto" />
            <h2 className="section-title">
              Visit Us <span className="text-gold-400">In Person</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mt-4">
              Located at the District Court Complex, Haldwani — accessible and
              central for all your legal needs.
            </p>
          </div>

          {/* 3-image grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-14">
            {[
              {
                src: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=800&q=80",
                caption: "Courtroom Advocacy",
              },
              {
                src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
                caption: "Legal Consultation",
              },
              {
                src: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80",
                caption: "Client Meetings",
              },
            ].map(({ src, caption }, i) => (
              <motion.div
                key={caption}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative rounded-2xl overflow-hidden border border-gold-500/10 group shadow-lg shadow-black/40"
              >
                <img
                  src={src}
                  alt={caption}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-gold-300 text-sm font-semibold bg-navy-950/70 px-3 py-1 rounded-full backdrop-blur-sm border border-gold-500/20">
                    {caption}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Office Info Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                label: "Call Us",
                value: "+91 7895000143",
                href: "tel:+917895000143",
                sub: "Available Mon–Sat",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: "pravezalam06@gmail.com",
                href: "mailto:pravezalam06@gmail.com",
                sub: "Reply within 24 hours",
              },
              {
                icon: MapPin,
                label: "Our Office",
                value: "District Court Complex",
                href: "#",
                sub: "Haldwani, Uttarakhand",
              },
              {
                icon: Clock,
                label: "Working Hours",
                value: "Mon – Sat",
                href: "#",
                sub: "9:00 AM – 7:00 PM",
              },
            ].map(({ icon: Icon, label, value, href, sub }) => (
              <a
                key={label}
                href={href}
                className="card group text-center hover:border-gold-500/40 hover:scale-[1.02] transition-all"
              >
                <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/30 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all">
                  <Icon className="w-5 h-5 text-gold-400 group-hover:text-navy-950 transition-colors" />
                </div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">
                  {label}
                </p>
                <p className="text-white font-semibold text-sm mb-1">{value}</p>
                <p className="text-gray-500 text-xs">{sub}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Bottom CTA ───── */}
      <section
        className="py-20 relative overflow-hidden text-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(4,12,20,0.96) 0%, rgba(13,27,42,0.94) 100%), url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h2 className="section-title mb-4">
            Not Sure Where to <span className="text-gold-400">Start?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Explore our practice areas to find the right legal domain for your
            matter, or reach out directly — we'll guide you every step of the
            way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/practice-areas" className="btn-outline px-8 py-3">
              View Practice Areas
            </Link>
            <Link to="/about" className="btn-primary px-8 py-3">
              Learn About Our Firm
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
