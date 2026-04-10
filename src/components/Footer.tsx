import { Factory, Settings, Phone, Mail, MapPin, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-steel border-t-8 border-industrial-orange text-white">
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12 px-4 sm:px-6 md:px-12 py-14 md:py-20 w-full font-sans text-sm tracking-wide">
        <div className="col-span-2 xl:col-span-1">
          <div className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-6 font-display uppercase flex items-center gap-3">
            <img src="/images/logo.png" alt="Forez Corp" className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16" />
            FOREZ CORP
          </div>
          <p className="text-gray-400 mb-6 font-bold uppercase">
            THE INDUSTRIAL STANDARD IN BULK PROCUREMENT. RELIABLE. CERTIFIED. FAST.
          </p>
          <div className="flex gap-4">
            <div className="bg-industrial-orange p-2">
              <Factory className="text-black w-6 h-6" />
            </div>
            <div className="bg-industrial-orange p-2">
              <Settings className="text-black w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 col-span-1">
          <h5 className="text-industrial-orange font-black uppercase text-xl mb-4">QUICK LINKS</h5>
          <Link to="/catalog" className="text-gray-400 hover:text-white transition-colors uppercase font-bold">Catalog</Link>
          <Link to="/sourcing" className="text-gray-400 hover:text-white transition-colors uppercase font-bold">Bulk Sourcing</Link>
          <Link to="/shipping" className="text-gray-400 hover:text-white transition-colors uppercase font-bold">Shipping & Returns</Link>
          <Link to="/about" className="text-gray-400 hover:text-white transition-colors uppercase font-bold">About & Credentials</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white transition-colors uppercase font-bold">Contact Engineering</Link>
        </div>

        <div className="col-span-1">
          <h5 className="text-industrial-orange font-black uppercase text-xl mb-4">HEADQUARTERS</h5>
          <div className="text-gray-400 leading-relaxed font-bold space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-industrial-orange flex-shrink-0" />
              <span>2402 OCEAN AVE<br />RONKONKOMA, NY 11779</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-industrial-orange flex-shrink-0" />
              <span>+1 (516)-860-2513</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-industrial-orange flex-shrink-0" />
              <span>INFO@FOREZCORP.COM</span>
            </div>
          </div>
        </div>

        {/* Admin Login / Signup */}
        <div className="col-span-2 xl:col-span-1">
          <h5 className="text-industrial-orange font-black uppercase text-xl mb-4">ADMIN PORTAL</h5>
          <p className="text-gray-400 text-xs font-bold uppercase mb-4">
            Open secure admin login in a new tab.
          </p>
          <a
            href="/admin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-industrial-orange text-white px-5 py-3 text-xs font-black uppercase tracking-widest hover:opacity-90 transition-opacity"
          >
            <Lock className="w-3 h-3" />
            Open Admin Portal
          </a>
        </div>
      </div>

      <div className="bg-black py-5 px-4 sm:px-6 md:px-12 border-t-4 border-black flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500 gap-4">
        <div className="text-center md:text-left">© 2026 FOREZ CORP. NYS/NYC CERTIFIED MBE.</div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a href="#" className="hover:text-white">PRIVACY</a>
          <Link to="/shipping" className="hover:text-white">SHIPPING</Link>
          <a href="#" className="hover:text-white">COMPLIANCE</a>
          <a href="#" className="hover:text-white">LEGAL</a>
        </div>
      </div>
    </footer>
  );
}
