import React from 'react';
import { motion } from 'motion/react';
import { User, Building2, Mail, Phone, FileText, ArrowRight, CheckCircle2, ArrowLeft, Verified, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sourcing() {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-concrete flex items-center justify-center p-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white brutalist-border brutalist-shadow p-12 text-center max-w-xl w-full"
        >
          <div className="w-24 h-24 bg-industrial-orange rounded-full flex items-center justify-center mx-auto mb-8 brutalist-border">
            <CheckCircle2 className="text-white w-12 h-12" />
          </div>
          <h2 className="text-4xl font-black uppercase font-display mb-4">REQUEST RECEIVED</h2>
          <p className="text-xl font-bold text-gray-600 uppercase mb-8">
            SOURCING IN PROGRESS. OUR TEAM WILL CONTACT YOU WITHIN 24 HOURS.
          </p>
          <Link 
            to="/"
            className="inline-block bg-black text-white px-8 py-4 font-black uppercase tracking-tighter brutalist-border brutalist-shadow hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
          >
            Return to Catalog
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Column: Messaging Panel */}
      <section className="lg:w-1/2 bg-engineering-blue text-white p-10 md:p-16 lg:p-24 flex flex-col justify-center border-b-4 lg:border-b-0 lg:border-r-4 border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none industrial-hatch"></div>
        <div className="relative z-10 max-w-xl">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-12 font-bold uppercase tracking-widest transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Catalog
          </Link>
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.9] mb-8"
          >
            YOU NAME IT,<br />WE HAVE IT.
          </motion.h1>
          <p className="text-xl md:text-2xl font-medium text-blue-100 leading-relaxed max-w-md border-l-8 border-industrial-orange pl-6 mb-16">
            If it's not in the catalog, our sourcing team will find it. All sizes, all products. We leverage our certified network to secure your bulk requirements rapidly.
          </p>
          <div className="flex flex-wrap gap-8 opacity-80">
            <div className="flex items-center gap-3">
              <Verified className="w-8 h-8 text-industrial-orange" fill="currentColor" />
              <span className="text-sm font-black tracking-widest uppercase">Certified Network</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-8 h-8 text-industrial-orange" />
              <span className="text-sm font-black tracking-widest uppercase">Rapid Fulfillment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Right Column: Intake Form */}
      <section className="lg:w-1/2 bg-white p-8 md:p-12 lg:p-20 flex flex-col justify-center">
        <div className="w-full max-w-2xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl font-black uppercase font-display mb-2">Sourcing Request</h2>
            <p className="text-gray-500 font-bold text-sm uppercase tracking-widest">Provide details for dedicated procurement</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    required
                    placeholder="JOHN DOE"
                    className="w-full h-14 pl-12 pr-4 bg-concrete brutalist-border font-bold uppercase focus:ring-4 focus:ring-industrial-orange/20 transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500">Company</label>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    required
                    placeholder="HEAVY IND. CORP"
                    className="w-full h-14 pl-12 pr-4 bg-concrete brutalist-border font-bold uppercase focus:ring-4 focus:ring-industrial-orange/20 transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="email" 
                    required
                    placeholder="PROCUREMENT@CORP.COM"
                    className="w-full h-14 pl-12 pr-4 bg-concrete brutalist-border font-bold uppercase focus:ring-4 focus:ring-industrial-orange/20 transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-black uppercase tracking-widest text-gray-500">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="tel" 
                    required
                    placeholder="(555) 123-4567"
                    className="w-full h-14 pl-12 pr-4 bg-concrete brutalist-border font-bold uppercase focus:ring-4 focus:ring-industrial-orange/20 transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-black uppercase tracking-widest text-gray-500">Requirement Specs</label>
              <div className="relative">
                <FileText className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                <textarea 
                  required
                  rows={4}
                  placeholder="PART NUMBERS, DIMENSIONS, QUANTITY, DEADLINES..."
                  className="w-full pl-12 pr-4 py-4 bg-concrete brutalist-border font-bold uppercase focus:ring-4 focus:ring-industrial-orange/20 transition-all outline-none resize-none"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full h-16 bg-industrial-orange text-white text-xl font-black uppercase tracking-widest brutalist-border brutalist-shadow hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all flex items-center justify-center gap-3 group"
            >
              SOURCE MY PART
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
