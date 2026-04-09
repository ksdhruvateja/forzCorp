import { motion } from 'motion/react';
import { Verified, Ship, Landmark, ArrowRight, ShieldCheck, Globe, Zap, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-steel text-white py-24 md:py-32 px-6 border-b-8 border-black">
        <div className="max-w-6xl mx-auto flex flex-col items-start gap-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-1 border-t-4 border-industrial-orange"></div>
            <p className="text-industrial-orange font-black uppercase tracking-widest text-sm">Official Credentials</p>
          </div>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter max-w-4xl"
          >
            HIGH-PERFORMING SUPPLIER. RAPID GROWTH.
          </motion.h1>
          <p className="text-gray-400 text-xl md:text-2xl font-bold max-w-2xl uppercase">
            Committed to excellence in bulk industrial supply. FOREZ is recognized and certified by leading authorities to meet strict procurement standards.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-24 px-6 bg-concrete">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16 border-b-4 border-black pb-6">
            <Verified className="text-engineering-blue w-10 h-10" fill="currentColor" />
            <h2 className="text-4xl font-black uppercase tracking-tight">Certifications & Authority</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Minority-Owned Business",
                desc: "Certified Minority-Owned Business Enterprise (MBE) demonstrating commitment to diverse supply chains.",
                icon: <Award className="w-16 h-16 text-gray-400" />,
                color: "bg-gray-50",
                image: "https://static1.squarespace.com/static/62fe71b24783ac627463dbeb/638791279a1cf272f8885d1d/6388cb3ea0392739e9fde45a/1671768750513/website_MWBE.jpg?format=1500w"
              },
              {
                title: "Port Authority Certified",
                desc: "Official certification for NY/NJ Port Authority contracts and heavy industrial procurement.",
                icon: <Ship className="w-16 h-16 text-engineering-blue" />,
                color: "bg-blue-50",
                image: "https://images.squarespace-cdn.com/content/v1/54f63721e4b028af4a737125/1565026201471-RZG8HP1E54WWLDC0AF2N/PANYNJ.jpeg"
              },
              {
                title: "NYS/NYC Certified",
                desc: "Approved vendor for New York State and New York City municipal and enterprise sourcing.",
                icon: <Landmark className="w-16 h-16 text-industrial-orange" />,
                color: "bg-blue-50",
                image: "https://stratcomllc.com/wp-content/uploads/2018/09/NYS-WBE-Certified-Business.gif"
              }
            ].map((cert, idx) => (
              <motion.div 
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white brutalist-border p-8 flex flex-col h-[450px] brutalist-shadow hover:border-industrial-orange group transition-all"
              >
                <div className={`flex-1 flex items-center justify-center mb-8 brutalist-border ${cert.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 industrial-hatch opacity-10"></div>
                  {cert.image ? (
                    <img src={cert.image} alt={cert.title} className="w-full h-full object-contain p-4 relative z-10" />
                  ) : (
                    cert.icon
                  )}
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black uppercase group-hover:text-industrial-orange transition-colors">{cert.title}</h3>
                  <p className="text-gray-500 font-bold text-sm uppercase leading-relaxed">{cert.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-white py-20 border-y-8 border-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: "24hr", label: "Quote Turnaround", icon: <Zap /> },
              { val: "10k+", label: "Parts Available", icon: <Globe /> },
              { val: "100%", label: "Sourcing Guarantee", icon: <ShieldCheck /> },
              { val: "Tier 1", label: "Supplier Status", icon: <Verified /> }
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-5xl md:text-7xl font-black text-black tracking-tighter">{stat.val}</span>
                <span className="text-xs font-black uppercase text-gray-400 mt-4 tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-industrial-orange py-24 px-6">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-white tracking-tighter leading-none">Ready to Procure?</h2>
          <p className="text-white text-xl md:text-2xl font-bold uppercase max-w-2xl">
            Partner with a certified, high-performing supplier for your next bulk order or complex sourcing requirement.
          </p>
          <Link 
            to="/contact"
            className="bg-white text-black px-12 py-6 text-2xl font-black uppercase tracking-widest brutalist-border brutalist-shadow hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all flex items-center gap-4 group"
          >
            Contact Us
            <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
