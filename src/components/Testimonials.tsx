import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Mehta",
    role: "Business Owner",
    rating: 5,
    quote:
      "Parvez Alam & Associates handled our corporate dispute with exceptional strategy. Their ability to negotiate while keeping litigation as a credible threat was remarkable.",
  },
  {
    name: "Sunita Chauhan",
    role: "Property Client",
    rating: 5,
    quote:
      "After a wrongful property encroachment, I was devastated. The team recovered possession within months. Their knowledge of local land laws is unmatched.",
  },
  {
    name: "Vikram Singh",
    role: "Criminal Defense Client",
    rating: 5,
    quote:
      "Facing false charges was the most terrifying experience of my life. Mr. Alam's thorough defense and calm confidence in court made all the difference — I was acquitted.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      className="py-24 bg-navy-950 relative overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{
          background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)",
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
            Client Voices
          </div>
          <div className="gold-divider mx-auto" />
          <h2 className="section-title">
            What Our Clients <span className="text-gold-400">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ name, role, rating, quote }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card relative"
            >
              <Quote className="w-8 h-8 text-gold-500/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 fill-gold-400 text-gold-400"
                  />
                ))}
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">
                "{quote}"
              </p>
              <div className="border-t border-gold-500/20 pt-4">
                <p className="text-white font-semibold">{name}</p>
                <p className="text-gold-500 text-xs mt-1">{role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
