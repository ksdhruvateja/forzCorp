import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Boxes, ShieldCheck, Truck } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../constants';

export default function Home() {
  const totalProducts = PRODUCT_CATEGORIES.reduce((count, category) => count + category.products.length, 0);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    // Reinforce autoplay requirements for mobile browsers (especially iOS Safari).
    video.muted = true;
    video.defaultMuted = true;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute('muted', '');
    video.setAttribute('autoplay', '');
    video.setAttribute('loop', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('webkit-playsinline', 'true');

    const ensurePlaying = () => {
      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          // Mobile browsers may block until next user gesture; retry happens on future events.
        });
      }
    };

    ensurePlaying();
    video.addEventListener('loadeddata', ensurePlaying);
    video.addEventListener('canplay', ensurePlaying);
    video.addEventListener('pause', ensurePlaying);
    document.addEventListener('visibilitychange', ensurePlaying);

    return () => {
      video.removeEventListener('loadeddata', ensurePlaying);
      video.removeEventListener('canplay', ensurePlaying);
      video.removeEventListener('pause', ensurePlaying);
      document.removeEventListener('visibilitychange', ensurePlaying);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <section className="relative border-b-4 border-black overflow-hidden">
        <video
          ref={heroVideoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none"
          autoPlay
          loop
          muted
          playsInline
          disablePictureInPicture
          preload="metadata"
        >
          <source src="/videos/homepage-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#071a35]/80"></div>

        <div className="relative z-10 px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <span className="inline-flex items-center border border-white/30 bg-black/35 px-3 sm:px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.12em] md:tracking-[0.18em] text-industrial-orange">
                Forez Corp - Industrial Supply Partner
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-black leading-[0.95] md:leading-[0.9] tracking-tight uppercase text-white max-w-5xl">
              Bulk Procurement Experts for Critical Operations
            </h1>
            <p className="mt-5 md:mt-6 text-sm sm:text-base md:text-xl text-blue-100 font-semibold max-w-4xl uppercase tracking-wide">
              Fast sourcing, compliant fulfillment, and dependable delivery for infrastructure, facilities, and enterprise maintenance teams.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wide md:tracking-widest">
              <span className="bg-black/45 border border-white/25 px-3 py-2 text-white">NYS / NYC Certified</span>
              <span className="bg-black/45 border border-white/25 px-3 py-2 text-white">Priority Quote Response</span>
              <span className="bg-black/45 border border-white/25 px-3 py-2 text-white">Nationwide Coverage</span>
            </div>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                to="/sourcing"
                className="inline-flex items-center border border-white/25 w-full sm:w-auto"
              >
                <span className="bg-industrial-orange text-white px-4 py-3 font-black uppercase">+</span>
                <span className="bg-black/55 text-white px-5 sm:px-6 py-3 font-black uppercase tracking-wide hover:bg-black/75 transition-colors flex-1 text-center sm:text-left">
                  Start New Request
                </span>
              </Link>
              <Link
                to="/catalog"
                className="inline-flex items-center border border-white/25 w-full sm:w-auto"
              >
                <span className="bg-white text-black px-4 py-3 font-black uppercase">
                  <ArrowRight className="w-4 h-4" />
                </span>
                <span className="bg-black/45 text-white px-5 sm:px-6 py-3 font-black uppercase tracking-wide hover:bg-black/70 transition-colors flex-1 text-center sm:text-left">
                  Browse Catalog
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 py-10 border-b-4 border-black bg-concrete">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border-2 border-black p-5 flex items-center gap-4">
            <Boxes className="w-6 h-6 text-industrial-orange" />
            <div>
              <p className="text-2xl font-black leading-none">{totalProducts}+</p>
              <p className="text-xs uppercase font-bold tracking-wider text-gray-500">Quote-Ready SKUs</p>
            </div>
          </div>
          <div className="bg-white border-2 border-black p-5 flex items-center gap-4">
            <Truck className="w-6 h-6 text-industrial-orange" />
            <div>
              <p className="text-2xl font-black leading-none">{PRODUCT_CATEGORIES.length}+</p>
              <p className="text-xs uppercase font-bold tracking-wider text-gray-500">Supply Categories</p>
            </div>
          </div>
          <div className="bg-white border-2 border-black p-5 flex items-center gap-4">
            <ShieldCheck className="w-6 h-6 text-industrial-orange" />
            <div>
              <p className="text-2xl font-black leading-none">NYS/NYC</p>
              <p className="text-xs uppercase font-bold tracking-wider text-gray-500">Compliance Standard</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 md:px-8 py-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-6">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link
              to="/catalog"
              className="border-2 border-black p-6 bg-white hover:bg-concrete transition-colors group"
            >
              <h3 className="text-xl font-black uppercase">Catalog</h3>
              <p className="text-sm text-gray-600 font-semibold mt-2">
                Browse industrial categories and prepare structured quote requests.
              </p>
              <span className="inline-flex items-center gap-2 mt-5 text-sm font-black uppercase">
                Open Catalog <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/sourcing"
              className="border-2 border-black p-6 bg-white hover:bg-concrete transition-colors group"
            >
              <h3 className="text-xl font-black uppercase">Custom Sourcing</h3>
              <p className="text-sm text-gray-600 font-semibold mt-2">
                Submit hard-to-source parts and specs for rapid procurement support.
              </p>
              <span className="inline-flex items-center gap-2 mt-5 text-sm font-black uppercase">
                Start Request <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/about"
              className="border-2 border-black p-6 bg-white hover:bg-concrete transition-colors group"
            >
              <h3 className="text-xl font-black uppercase">Credentials</h3>
              <p className="text-sm text-gray-600 font-semibold mt-2">
                Review certifications, supplier qualifications, and delivery capability.
              </p>
              <span className="inline-flex items-center gap-2 mt-5 text-sm font-black uppercase">
                Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

