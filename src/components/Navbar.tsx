import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Catalog', href: '/catalog' },
    { name: 'Sourcing', href: '/sourcing' },
    { name: 'Shipping', href: '/shipping' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/catalog') {
      return location.pathname === '/catalog' || location.pathname.startsWith('/catalog/');
    }
    return location.pathname === href;
  };

  return (
    <nav className="sticky top-0 z-50 bg-steel text-white border-b-4 border-black px-4 md:px-8 py-3 md:py-4 flex justify-between items-center w-full">
      <div className="flex items-center gap-4 md:gap-12 min-w-0">
        <Link to="/" className="text-lg sm:text-2xl md:text-4xl font-black tracking-tighter text-white font-display uppercase flex items-center min-w-0">
          <img src="/images/logo.png" alt="Forez Corp" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mr-2 md:mr-3 flex-shrink-0" />
          FOREZ CORP
        </Link>
        <div className="hidden md:flex gap-8 font-display uppercase tracking-tighter font-black">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-white hover:text-industrial-orange transition-all pb-1 border-b-4 border-transparent",
                isActive(link.href) && "text-industrial-orange border-industrial-orange"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        <div className="hidden lg:block text-right">
          <div className="text-[10px] font-black tracking-widest text-industrial-orange uppercase">CERTIFIED MBE</div>
        </div>
        <Link 
          to="/sourcing"
          className="hidden sm:inline-flex bg-industrial-orange text-black px-3 md:px-6 py-2 brutalist-border brutalist-shadow font-black uppercase tracking-tighter hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all text-xs md:text-base"
        >
          REQUEST QUOTE
        </Link>
        <button className="md:hidden text-white p-1" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-steel border-b-4 border-black p-4 flex flex-col gap-4 md:hidden">
          <Link
            to="/sourcing"
            className="bg-industrial-orange text-black px-4 py-2 font-black uppercase tracking-tighter text-sm inline-flex w-fit"
            onClick={() => setIsOpen(false)}
          >
            Request Quote
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-white font-display uppercase font-black text-xl"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
