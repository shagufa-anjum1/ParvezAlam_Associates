import { motion } from "framer-motion";
import { Mail, Linkedin, Scale, Award, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const team = [
  {
    name: "Adv. Parvez Alam",
    designation: "Founder & Senior Advocate",
    expertise: "Criminal Law, Civil Litigation, Legal Advisory",
    experience: "10+ Years",
    bio: "Advocate Parvez Alam is one of the most respected litigators in Uttarakhand with over a decade at the bar. His career spans hundreds of appearances before District, Sessions, and High Courts with particular renown in criminal defense and civil recovery matters.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&q=80",
    email: "pravezalam06@gmail.com",
    isFounder: true,
  },
  {
    name: "Adv. Meera Joshi",
    designation: "Senior Associate",
    expertise: "Family Law, Property Disputes",
    experience: "7+ Years",
    bio: "Meera brings 7 years of focused experience in matrimonial and property matters. Known for her compassionate client handling and sharp cross-examination skills in Family Court proceedings.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&q=80",
    email: "meera@parvezalam.com",
    isFounder: false,
  },
  {
    name: "Adv. Rohit Kapoor",
    designation: "Corporate Law Specialist",
    expertise: "Corporate Transactions, Compliance",
    experience: "5+ Years",
    bio: "Rohit is the firm's corporate law specialist, advising multiple businesses on structuring, compliance, and contracts. He combines commercial acumen with precise legal drafting.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=700&fit=crop&q=80",
    email: "rohit@parvezalam.com",
    isFounder: false,
  },
  {
    name: "Adv. Priya Sharma",
    designation: "Associate — Criminal Defense",
    expertise: "Criminal Law, NDPS, Bail Matters",
    experience: "4+ Years",
    bio: "Priya has carved a niche in bail jurisprudence and NDPS cases. Known for her thorough research and ability to identify procedural advantages that matter in critical moments.",
    image:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=600&h=700&fit=crop&q=80",
    email: "priya@parvezalam.com",
    isFounder: false,
  },
  {
    name: "Adv. Siddharth Rawat",
    designation: "Associate — Civil & Property",
    expertise: "Civil Suits, Land Acquisition, RERA",
    experience: "4+ Years",
    bio: "Siddharth specializes in property documentation and RERA disputes, serving both homebuyers and developers in contested acquisition, title, and possession matters.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&q=80",
    email: "siddharth@parvezalam.com",
    isFounder: false,
  },
  {
    name: "Adv. Fatima Siddiqui",
    designation: "Legal Research Lead",
    expertise: "Research, Drafting, Arbitration",
    experience: "5+ Years",
    bio: "Fatima heads the firm's research and drafting division, producing meticulously cited pleadings and legal opinions that underpin the team's courtroom victories.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=700&fit=crop&q=80",
    email: "fatima@parvezalam.com",
    isFounder: false,
  },
];

const commitments = [
  {
    icon: Award,
    title: "Senior Oversight",
    desc: "Every file personally supervised by a senior advocate — no matter how straightforward or complex the matter.",
  },
  {
    icon: Shield,
    title: "Domain Specialists",
    desc: "Each attorney focuses on a specific practice area, ensuring deep expertise rather than generalist handling.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Complex matters benefit from cross-practice collaboration — the full strength of our team behind your case.",
  },
];

export default function Team() {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section
        className="py-32 relative overflow-hidden text-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(4,12,20,0.94) 0%, rgba(13,27,42,0.90) 100%), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80')`,
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
            Our People
          </span>
          <div className="gold-divider mx-auto" />
          <h1 className="section-title mb-6">
            Exceptional Lawyers.{" "}
            <span className="text-gold-400">Committed Advocates.</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Our team is the sum of diverse expertise, shared values, and an
            unwavering commitment to every client's cause. Meet the people who
            will fight for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/contact" className="btn-primary px-8 py-3">
              Book a Consultation
            </Link>
            <Link to="/practice-areas" className="btn-outline px-8 py-3">
              Our Practice Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
              Legal Experts
            </span>
            <div className="gold-divider mx-auto" />
            <h2 className="section-title">
              Meet the <span className="text-gold-400">Team</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              Senior advocates and domain specialists — every member dedicated
              to delivering the best outcome for you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map(
              (
                {
                  name,
                  designation,
                  expertise,
                  experience,
                  bio,
                  image,
                  email,
                  isFounder,
                },
                i,
              ) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`rounded-2xl overflow-hidden border transition-all duration-300 group bg-navy-900 hover:border-gold-400/50 hover:shadow-xl hover:shadow-gold-500/5 ${
                    isFounder ? "border-gold-400/40" : "border-gray-800"
                  }`}
                >
                  {/* Photo */}
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={image}
                      alt={name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent" />

                    {isFounder && (
                      <div className="absolute top-3 right-3 bg-gold-500 text-navy-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                        Founder
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 flex items-center gap-2">
                      <div className="w-7 h-7 bg-gold-500 rounded-full flex items-center justify-center shadow">
                        <Scale className="w-3.5 h-3.5 text-navy-950" />
                      </div>
                      <span className="text-gold-300 text-xs font-semibold bg-navy-950/80 px-2 py-0.5 rounded backdrop-blur-sm">
                        {experience} Experience
                      </span>
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
                    <p className="text-gold-400 text-sm font-medium mb-1">
                      {designation}
                    </p>
                    <p className="text-gray-500 text-xs mb-4 italic">
                      {expertise}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                      {bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                      <a
                        href={`mailto:${email}`}
                        title={`Email ${name}`}
                        className="w-9 h-9 rounded-full bg-navy-800 border border-gray-700 hover:border-gold-500 hover:bg-gold-500/10 flex items-center justify-center transition-all"
                      >
                        <Mail className="w-4 h-4 text-gray-400 group-hover:text-gold-400" />
                      </a>
                      <a
                        href="#"
                        title={`LinkedIn — ${name}`}
                        className="w-9 h-9 rounded-full bg-navy-800 border border-gray-700 hover:border-gold-500 hover:bg-gold-500/10 flex items-center justify-center transition-all"
                      >
                        <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-gold-400" />
                      </a>
                      <span
                        className="text-gray-600 text-xs ml-auto truncate max-w-[120px]"
                        title={email}
                      >
                        {email}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Why Our Team Stands Out */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
              Our Commitment
            </span>
            <div className="gold-divider mx-auto" />
            <h2 className="section-title">
              Why Our Team <span className="text-gold-400">Stands Out</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mt-4">
              Beyond credentials — it's our culture of dedication that makes the
              difference.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {commitments.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="card group text-center"
              >
                <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/30 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gold-500/20 transition-all">
                  <Icon className="w-7 h-7 text-gold-400" />
                </div>
                <h3
                  className="text-lg font-bold text-white mb-3"
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

      {/* Join CTA */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(4,12,20,0.96) 0%, rgba(13,27,42,0.94) 100%), url('https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1920&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Work With Us
          </span>
          <div className="gold-divider mx-auto" />
          <h2 className="section-title mb-4">
            Want to Speak to One of Our{" "}
            <span className="text-gold-400">Lawyers?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Book a free consultation with a senior attorney specialized in your
            area of concern. We respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary px-10 py-4 text-base">
              Contact Our Team
            </Link>
            <Link
              to="/practice-areas"
              className="btn-outline px-10 py-4 text-base"
            >
              View Practice Areas
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
