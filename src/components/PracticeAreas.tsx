import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Scale, Shield, Building2, Home, Heart, BookOpen, ArrowRight } from 'lucide-react'

const areas = [
  { icon: Scale, title: 'Civil Law', description: 'Expert representation in civil disputes including property rights, contract enforcement, tort claims, and civil litigation before all courts.', color: 'from-blue-900/30 to-transparent' },
  { icon: Shield, title: 'Criminal Law', description: 'Aggressive defense in criminal matters. We protect your rights and ensure due process at every stage of proceedings.', color: 'from-red-900/30 to-transparent' },
  { icon: Building2, title: 'Corporate Law', description: 'Comprehensive corporate legal services including company formation, mergers, acquisitions, compliance, and commercial disputes.', color: 'from-purple-900/30 to-transparent' },
  { icon: Home, title: 'Property Law', description: 'Full-spectrum property legal services covering real estate transactions, title disputes, tenancy matters, and documentation.', color: 'from-green-900/30 to-transparent' },
  { icon: Heart, title: 'Family Law', description: 'Sensitive handling of divorce, child custody, maintenance, adoption, and family-related legal proceedings with empathy.', color: 'from-pink-900/30 to-transparent' },
  { icon: BookOpen, title: 'Legal Advisory', description: 'Strategic legal counsel for individuals, businesses, and organizations to navigate complex legal landscapes confidently.', color: 'from-yellow-900/30 to-transparent' },
]

export default function PracticeAreas() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="practice" className="py-24 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          className="text-center mb-16" ref={ref}>
          <div className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">What We Do</div>
          <div className="gold-divider mx-auto" />
          <h2 className="section-title">Our Practice <span className="text-gold-400">Areas</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">Comprehensive legal coverage for all your needs.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map(({ icon: Icon, title, description, color }, i) => (
            <motion.div key={title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div className="card group h-full flex flex-col relative overflow-hidden cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gold-500/10 border border-gold-500/30 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold-500/20 group-hover:border-gold-400 transition-all duration-300">
                    <Icon className="w-7 h-7 text-gold-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
                  <div className="flex items-center gap-2 text-gold-400 text-sm font-semibold mt-6 group-hover:gap-3 transition-all">
                    <span>Learn More</span><ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
