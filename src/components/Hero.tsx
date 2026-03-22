import { motion } from "framer-motion";
import { ChevronDown, Scale, Shield, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const practiceAreas = [
  "Civil",
  "Criminal",
  "Corporate",
  "Property",
  "Family",
  "Legal Advisory",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(4,12,20,0.93) 0%, rgba(13,27,42,0.88) 40%, rgba(10,21,32,0.91) 70%, rgba(4,12,20,0.96) 100%), url('https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1920&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
        }}
      />

      {/* Floating icons */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-10 md:left-24 opacity-20"
      >
        <Scale className="w-16 h-16 text-gold-400" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-40 right-10 md:right-24 opacity-15"
      >
        <Shield className="w-12 h-12 text-gold-400" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute top-1/2 right-20 opacity-10 hidden lg:block"
      >
        <BookOpen className="w-10 h-10 text-gold-400" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center mt-14">


        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Parvez Alam
          <span className="block text-gold-400">&amp; Associates</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold-500" />
          <p className="text-gray-300 text-base md:text-lg tracking-widest uppercase font-light italic">
            Your Trusted Legal Partners
          </p>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold-500" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {practiceAreas.map((area, i) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="px-4 py-1.5 text-sm border border-gold-500/30 text-gold-300 rounded-full bg-gold-500/5 hover:bg-gold-500/15 hover:border-gold-400 transition-all cursor-default"
            >
              {area}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/contact" className="btn-primary text-base px-10 py-4">
            Book Free Consultation
          </Link>
          <Link to="/about" className="btn-outline text-base px-10 py-4">
            Learn More
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-gold-500/20 pt-10"
        >
          {[
            ["200+", "Cases Handled"],
            ["10+", "Years Experience"],
            ["95%", "Client Satisfaction"],
          ].map(([num, label]) => (
            <div key={label} className="text-center">
              <div
                className="text-3xl font-bold text-gold-400"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {num}
              </div>
              <div className="text-gray-400 text-xs mt-1 tracking-wide">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

     {/*  <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-400/60 hover:text-gold-400 transition-colors cursor-pointer"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div> */}
    </section>
  );
}
