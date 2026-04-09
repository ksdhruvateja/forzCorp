import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Verified, ArrowRight, Download, Plus, Phone } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { PRODUCT_CATEGORIES, FALLBACK_PRODUCT_IMAGE } from '../constants';

export default function Home() {
  const handleDownloadCatalog = () => {
    const pdf = new jsPDF({ unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 48;
    const maxTextWidth = pageWidth - margin * 2;
    let y = margin;

    const ensureSpace = (requiredHeight: number) => {
      if (y + requiredHeight > pageHeight - margin) {
        pdf.addPage();
        y = margin;
      }
    };

    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(18);
    pdf.text('Forez Corp - Full Product Catalog', margin, y);
    y += 22;

    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(11);
    pdf.text(`Generated: ${new Date().toLocaleDateString()}`, margin, y);
    y += 20;

    const totalProducts = PRODUCT_CATEGORIES.reduce((count, category) => count + category.products.length, 0);
    pdf.text(`Categories: ${PRODUCT_CATEGORIES.length} | Products: ${totalProducts}`, margin, y);
    y += 24;

    PRODUCT_CATEGORIES.forEach((category, categoryIndex) => {
      ensureSpace(28);
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(13);
      pdf.text(`${categoryIndex + 1}. ${category.name}`, margin, y);
      y += 18;

      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(11);

      category.products.forEach((product, productIndex) => {
        const productLine = `- ${productIndex + 1}. ${product.name}`;
        const wrapped = pdf.splitTextToSize(productLine, maxTextWidth - 12);
        const lineHeight = 14;
        const blockHeight = wrapped.length * lineHeight;

        ensureSpace(blockHeight + 2);
        pdf.text(wrapped, margin + 12, y);
        y += blockHeight;
      });

      y += 10;
    });

    pdf.save('ForezCorp-Full-Product-Catalog.pdf');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="px-6 md:px-8 py-20 md:py-40 border-b-4 border-black relative overflow-hidden">
        <div className="industrial-hatch absolute inset-0 opacity-20 pointer-events-none"></div>
        <div className="relative z-10 max-w-screen-2xl mx-auto">
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-[10rem] font-black leading-[0.85] tracking-tighter font-display uppercase mb-12"
          >
            WE SUPPLY IN BULK. <br />
            <span className="text-industrial-orange">YOU NAME IT WE HAVE IT.</span>
          </motion.h1>
          
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-black text-white px-6 py-4 font-black uppercase tracking-widest text-lg md:text-xl"
            >
              MINORITY-OWNED | NY/NJ PORT AUTHORITY CERTIFIED
            </motion.div>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-black font-bold uppercase tracking-tight text-xl md:text-2xl flex items-center gap-2"
            >
              <Verified className="text-black w-6 h-6 md:w-8 md:h-8" fill="currentColor" />
              PROCUREMENT SPECIALISTS SINCE 1994
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Banner (Marquee Style) */}
      <div className="bg-industrial-orange border-b-4 border-black py-4 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee-slow font-black text-2xl md:text-4xl text-black uppercase tracking-tighter">
          <span className="mx-8">NYS/NYC CERTIFIED • RAPID SOURCING • BULK DELIVERY •</span>
          <span className="mx-8">NYS/NYC CERTIFIED • RAPID SOURCING • BULK DELIVERY •</span>
          <span className="mx-8">NYS/NYC CERTIFIED • RAPID SOURCING • BULK DELIVERY •</span>
          <span className="mx-8">NYS/NYC CERTIFIED • RAPID SOURCING • BULK DELIVERY •</span>
        </div>
      </div>

      {/* Product Grid */}
      <main className="max-w-full mx-auto px-6 md:px-8 py-20 bg-concrete">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tighter mb-2">INDUSTRIAL CATALOG</h2>
            <p className="text-lg md:text-xl font-bold uppercase tracking-tight text-gray-600">42,000+ SKUs READY FOR DISPATCH</p>
          </div>
          <button
            onClick={handleDownloadCatalog}
            className="brutalist-border px-8 py-3 font-black uppercase tracking-tighter hover:bg-black hover:text-white transition-colors flex items-center gap-2 bg-white"
          >
            <Download className="w-5 h-5" />
            DOWNLOAD PDF CATALOG
          </button>
        </div>

        {/* 4-Column Bento/Industrial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t-4 border-l-4 border-black">
          {PRODUCT_CATEGORIES.slice(0, 7).map((category, idx) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white border-r-4 border-b-4 border-black p-6 md:p-8 flex flex-col justify-between transition-all hover:bg-gray-50"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-black font-display uppercase mb-4">{category.name}</h3>
                <div className="w-full aspect-square mb-6 brutalist-border overflow-hidden bg-gray-200">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = FALLBACK_PRODUCT_IMAGE;
                    }}
                  />
                </div>
              </div>
              <Link 
                to={`/catalog/${category.id}`}
                className="w-full brutalist-border py-4 font-black uppercase tracking-tighter brutalist-button-hover brutalist-shadow transition-all bg-white hover:bg-industrial-orange hover:text-white text-center"
              >
                REQUEST QUOTE
              </Link>
            </motion.div>
          ))}

          {/* See All Categories Card */}
          <div className="group bg-steel border-r-4 border-b-4 border-black p-8 flex flex-col justify-center items-center text-center transition-all">
            <Plus className="text-industrial-orange w-16 h-16 mb-4" />
            <h3 className="text-2xl md:text-3xl font-black font-display uppercase text-white mb-4">SEE ALL 42+ CATEGORIES</h3>
            <Link 
              to="/catalog"
              className="bg-industrial-orange text-black w-full py-4 font-black uppercase tracking-tighter hover:bg-white transition-all text-center"
            >
              FULL CATALOG
            </Link>
          </div>
        </div>

        {/* Custom Source Section */}
        <section className="mt-20 bg-steel border-4 border-black p-8 md:p-20 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full industrial-hatch opacity-10 pointer-events-none"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase font-display leading-none mb-6">
                CAN'T FIND <br /> IT?
              </h2>
              <p className="text-lg md:text-xl text-gray-400 font-bold uppercase tracking-wide">
                OUR ENGINEERING TEAM WILL SOURCE ANY INDUSTRIAL COMPONENT REGARDLESS OF AGE, ORIGIN, OR SPECIFICATION.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <Link 
                to="/sourcing"
                className="bg-industrial-orange text-black text-xl md:text-2xl px-8 md:px-10 py-6 md:py-8 brutalist-border brutalist-shadow font-black uppercase tracking-tighter hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all text-center"
              >
                CUSTOM SOURCE REQUEST
              </Link>
              <div className="flex gap-4 items-center text-white">
                <Phone className="text-industrial-orange w-8 h-8" />
                <span className="text-xl md:text-2xl font-black tracking-tighter">DIRECT SOURCING: +1 (516)-860-2513</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Logistics Section */}
      <section className="bg-white border-y-8 border-black flex flex-col md:flex-row">
        <div className="flex-1 p-8 md:p-12 border-b-4 md:border-b-0 md:border-r-4 border-black">
          <img src="https://images.squarespace-cdn.com/content/v1/54f63721e4b028af4a737125/1565026201471-RZG8HP1E54WWLDC0AF2N/PANYNJ.jpeg" alt="Port Authority of NY and NJ" className="w-32 h-auto mb-6 object-contain" />
          <h4 className="text-3xl md:text-4xl font-black font-display uppercase mb-4">PORT AUTHORITY LOGISTICS</h4>
          <p className="text-lg font-medium text-gray-600 mb-8">Strategically located for rapid deployment across the Tri-State area. We manage the last mile so your operations never halt.</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-concrete border-2 border-black p-4">
              <div className="text-3xl font-black tracking-tighter">24H</div>
              <div className="text-xs font-bold uppercase">Rapid Response</div>
            </div>
            <div className="bg-concrete border-2 border-black p-4">
              <div className="text-3xl font-black tracking-tighter">100%</div>
              <div className="text-xs font-bold uppercase">Compliance Rate</div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-8 md:p-12 bg-gray-100 industrial-hatch">
          <img src="https://static1.squarespace.com/static/62fe71b24783ac627463dbeb/638791279a1cf272f8885d1d/6388cb3ea0392739e9fde45a/1671768750513/website_MWBE.jpg?format=1500w" alt="Certified MBE" className="w-32 h-auto mb-6 object-contain" />
          <h4 className="text-3xl md:text-4xl font-black font-display uppercase mb-4">CERTIFIED MBE PARTNER</h4>
          <p className="text-lg font-medium text-gray-600 mb-8">Leverage our NYS/NYC certifications to meet your diversity procurement goals without compromising on heavy-duty performance.</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-black text-white px-4 py-2 font-black uppercase text-sm">NYS CERTIFIED</div>
            <div className="bg-black text-white px-4 py-2 font-black uppercase text-sm">NYC CERTIFIED</div>
            <div className="bg-black text-white px-4 py-2 font-black uppercase text-sm">PANYNJ CERTIFIED</div>
          </div>
        </div>
      </section>
    </div>
  );
}

