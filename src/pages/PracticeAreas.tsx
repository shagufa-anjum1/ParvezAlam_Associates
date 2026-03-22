import { motion } from "framer-motion";
import {
  Scale,
  Shield,
  Building2,
  Home,
  Heart,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import PracticeComponent from "../components/PracticeAreas";

const detailed = [
  {
    icon: Shield,
    title: "Criminal Law",
    image:
      "https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?w=900&q=80",
    intro: "When your freedom is at stake, you need a fearless advocate.",
    description:
      "Our criminal defense practice is built on a decade of courtroom experience. We handle everything from bail applications to full trials — protecting your rights at every stage.",
    services: [
      "Bail & anticipatory bail applications",
      "Defense in IPC, NDPS, and cybercrime cases",
      "Sessions Court trials and High Court appeals",
      "White-collar crime — fraud, embezzlement, PMLA",
      "Pre-arrest legal strategy and FIR quashing",
    ],
    highlight:
      "Successfully defended clients in complex criminal matters with strong acquittal outcomes.",
    color: "from-red-900/20",
  },
  {
    icon: Scale,
    title: "Civil Law",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80",
    intro:
      "Protecting your rights in every civil dispute with strategic precision.",
    description:
      "From money recovery suits to injunctions and tort claims, our civil litigation practice covers the full spectrum of non-criminal disputes before all levels of courts.",
    services: [
      "Money recovery and execution suits",
      "Permanent & temporary injunctions",
      "Specific performance of contracts",
      "Declaratory suits and property rights",
      "Arbitration and dispute resolution",
    ],
    highlight:
      "Recovered substantial dues for clients across commercial and personal civil disputes.",
    color: "from-blue-900/20",
  },
  {
    icon: Building2,
    title: "Corporate Law",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=80",
    intro: "Sound legal counsel at every stage of your business lifecycle.",
    description:
      "We advise founders, SMEs, and corporates on the full range of business legal needs — from incorporation to compliance, contracts to M&A — combining commercial clarity with legal rigor.",
    services: [
      "Company incorporation — Pvt Ltd, OPC, LLP",
      "Shareholder & founder agreements",
      "Vendor contracts, NDAs, SLAs",
      "Mergers, acquisitions, due diligence",
      "Regulatory compliance and secretarial work",
    ],
    highlight:
      "Advising multiple businesses on ongoing legal and compliance retainer matters.",
    color: "from-purple-900/20",
  },
  {
    icon: Home,
    title: "Property Law",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80",
    intro: "Clear title. Secure possession. Expert documentation.",
    description:
      "Property matters in India are governed by complex, layered statutes. Our team conducts thorough title due diligence, handles RERA disputes, and represents clients in possession and partition matters.",
    services: [
      "Title verification and due diligence",
      "Sale deeds, gift deeds, lease agreements",
      "Partition suits for ancestral property",
      "Eviction and tenancy dispute resolution",
      "RERA complaints for homebuyers",
    ],
    highlight:
      "Resolved 100+ property disputes, recovering possession in contentious cases.",
    color: "from-green-900/20",
  },
  {
    icon: Heart,
    title: "Family Law",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80",
    intro: "Sensitive, strategic, and swift resolution of family matters.",
    description:
      "Family disputes require a balance of empathy and precision. We handle matrimonial proceedings, custody battles, and succession matters — always working toward the best outcome for you.",
    services: [
      "Divorce — contested and mutual consent",
      "Child custody and guardianship",
      "Maintenance under Section 125 CrPC",
      "Domestic violence protection orders",
      "Succession, probate, and inheritance",
    ],
    highlight:
      "Achieved client-favorable outcomes in the majority of contested family matters.",
    color: "from-pink-900/20",
  },
  {
    icon: BookOpen,
    title: "Legal Advisory",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
    intro: "Prevent problems before they become disputes.",
    description:
      "Our retainer advisory service gives individuals and businesses proactive legal coverage — regular contract reviews, compliance checks, and real-time counsel before decisions carry legal risk.",
    services: [
      "Monthly legal retainer for businesses",
      "Contract vetting and risk assessment",
      "Labour law — ESIC, PF, Shops Act",
      "Trademark filing and IP advisory",
      "Legal opinion letters and memoranda",
    ],
    highlight:
      "Serving businesses on retainer, preventing legal issues before they escalate.",
    color: "from-yellow-900/20",
  },
];

export default function PracticeAreas() {
  return (
    <div className="pt-20">
      {/* Page Hero */}
      <section
        className="py-32 relative overflow-hidden text-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(4,12,20,0.94) 0%, rgba(13,27,42,0.90) 100%), url('https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=1920&q=80')`,
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
            Our Expertise
          </span>
          <div className="gold-divider mx-auto" />
          <h1 className="section-title mb-6">
            Comprehensive Legal Practice{" "}
            <span className="text-gold-400">Across All Domains</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Every practice area led by a specialist. Every client served by a
            senior advocate.
          </p>
        </div>
      </section>

      {/* Quick Overview */}
      <PracticeComponent />

      {/* Detailed Sections */}
      {detailed.map(
        (
          {
            icon: Icon,
            title,
            image,
            intro,
            description,
            services,
            highlight,
            color,
          },
          i,
        ) => (
          <section
            key={title}
            id={title.toLowerCase().replace(/ /g, "-")}
            className={`py-24 ${i % 2 === 0 ? "bg-navy-950" : "bg-navy-900"} relative overflow-hidden`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${color} to-transparent opacity-40`}
            />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className={`grid md:grid-cols-2 gap-14 items-center`}>
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={i % 2 !== 0 ? "md:order-2" : ""}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/30 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-gold-400" />
                    </div>
                    <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase">
                      {title}
                    </span>
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {intro}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {description}
                  </p>
                  <div className="flex items-start gap-3 bg-gold-500/10 border border-gold-500/30 rounded-xl px-5 py-4 mb-6">
                    <Scale className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gold-300 text-sm font-medium">
                      {highlight}
                    </p>
                  </div>
                  <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                    Services Covered
                  </h4>
                  <ul className="space-y-2 mb-8">
                    {services.map((s) => (
                      <li
                        key={s}
                        className="flex items-start gap-2 text-gray-400 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Consult for {title} <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={i % 2 !== 0 ? "md:order-1" : ""}
                >
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-[420px] object-cover rounded-2xl shadow-2xl shadow-black/50 border border-gold-500/10"
                  />
                </motion.div>
              </div>
            </div>
          </section>
        ),
      )}

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-navy-800 via-navy-900 to-navy-800 border-y border-gold-500/20 text-center">
        <h2 className="section-title mb-4">
          Not Sure Which Area{" "}
          <span className="text-gold-400">Fits Your Case?</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">
          Book a free consultation — our senior advocate will guide you to the
          right legal path.
        </p>
        <Link to="/contact" className="btn-primary px-10 py-4 text-base">
          Book Free Consultation
        </Link>
      </section>
    </div>
  );
}
