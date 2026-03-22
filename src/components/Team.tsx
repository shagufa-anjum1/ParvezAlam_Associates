import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Scale } from "lucide-react";

const team = [
  {
    name: "Adv. Parvez Alam",
    role: "Senior Advocate & Founding Partner",
    specialization: "Civil & Criminal Law",
    experience: "10+ Years",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&q=80",
  },
  {
    name: "Associate Counsel",
    role: "Legal Associate",
    specialization: "Corporate & Property Law",
    experience: "5+ Years",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&q=80",
  },
  {
    name: "Legal Advisor",
    role: "Senior Legal Advisor",
    specialization: "Family & Advisory Law",
    experience: "7+ Years",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&q=80",
  },
];

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-24 bg-navy-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Legal Experts
          </div>
          <div className="gold-divider mx-auto" />
          <h2 className="section-title">
            Meet Our <span className="text-gold-400">Lawyers</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4">
            Senior advocates and legal specialists committed to your cause.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map(({ name, role, specialization, experience, image }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card group text-center relative overflow-hidden p-0"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Photo */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                <div className="absolute bottom-3 right-3 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center shadow">
                  <Scale className="w-4 h-4 text-navy-950" />
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-white mb-1 group-hover:text-gold-300 transition-colors"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {name}
                </h3>
                <p className="text-gold-400 text-sm font-medium mb-1">{role}</p>
                <p className="text-gray-500 text-xs mb-4">{specialization}</p>
                <div className="inline-block bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs px-3 py-1 rounded-full mb-5">
                  {experience} Experience
                </div>
                <div className="flex justify-center gap-3">
                  <a
                    href="mailto:pravezalam06@gmail.com"
                    className="w-8 h-8 rounded-full bg-navy-800 border border-gray-700 hover:border-gold-500 hover:bg-gold-500/10 flex items-center justify-center transition-all"
                  >
                    <Mail className="w-4 h-4 text-gray-400" />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-navy-800 border border-gray-700 hover:border-gold-500 hover:bg-gold-500/10 flex items-center justify-center transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-gray-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
