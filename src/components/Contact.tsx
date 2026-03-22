import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setSubmitted(true)
    setLoading(false)
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-5 rounded-full"
        style={{ background: 'radial-gradient(circle, #c9a84c, transparent)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="text-center mb-16">
          <div className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-3">Get In Touch</div>
          <div className="gold-divider mx-auto" />
          <h2 className="section-title">Book a <span className="text-gold-400">Consultation</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">Ready to discuss your legal matter? Contact us today for a confidential consultation.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }} className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Contact Information</h3>
            {[
              { icon: Phone, label: 'Phone', value: '7895000143', href: 'tel:7895000143' },
              { icon: Mail, label: 'Email', value: 'Advocate.pravezalam06@gmail.com', href: 'mailto:Advocate.pravezalam06@gmail.com' },
              { icon: MapPin, label: 'Location', value: 'Uttar Pradesh, India', href: '#' },
              { icon: Clock, label: 'Office Hours', value: 'Mon – Sat: 9:00 AM – 7:00 PM', href: '#' },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} className="flex items-start gap-4 p-4 card group hover:scale-[1.02] transition-transform">
                <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:border-gold-500 transition-all">
                  <Icon className="w-5 h-5 text-gold-400 group-hover:text-navy-950 transition-colors" />
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{label}</div>
                  <div className="text-white text-sm font-medium break-all">{value}</div>
                </div>
              </a>
            ))}
            <div className="rounded-xl overflow-hidden border border-gray-800 h-48 bg-navy-900 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-gold-400/50 mx-auto mb-2" />
                <p className="text-gray-500 text-sm">Google Maps</p>
                <p className="text-gray-600 text-xs">Uttar Pradesh, India</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.3 }} className="lg:col-span-3">
            <div className="card">
              <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Send Us a Message</h3>
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                  <div className="w-16 h-16 bg-gold-500/20 border border-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-gold-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Message Sent!</h4>
                  <p className="text-gray-400">We will get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline mt-6 text-sm px-6 py-2">Send Another</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">Full Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Your full name"
                        className="w-full bg-navy-950 border border-gray-700 focus:border-gold-500 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="text-gray-400 text-sm mb-2 block">Email Address *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="your@email.com"
                        className="w-full bg-navy-950 border border-gray-700 focus:border-gold-500 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Phone Number</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-navy-950 border border-gray-700 focus:border-gold-500 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm mb-2 block">Your Message *</label>
                    <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Briefly describe your legal matter..."
                      className="w-full bg-navy-950 border border-gray-700 focus:border-gold-500 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 outline-none transition-colors resize-none" />
                  </div>
                  <button type="submit" disabled={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
                    {loading ? <span className="inline-block w-4 h-4 border-2 border-navy-950 border-t-transparent rounded-full animate-spin" /> : <Send className="w-4 h-4" />}
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                  <p className="text-gray-600 text-xs text-center">All communications are strictly confidential.</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
