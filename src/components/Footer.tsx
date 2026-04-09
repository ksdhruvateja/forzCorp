import { useState } from 'react';
import { Factory, Settings, Phone, Mail, MapPin, Truck, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [policyTab, setPolicyTab] = useState<'shipping' | 'returns'>('shipping');

  return (
    <footer className="bg-steel border-t-8 border-industrial-orange text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12 py-16 md:py-20 w-full font-sans text-sm tracking-wide">
        <div>
          <div className="text-3xl md:text-5xl font-black text-white mb-6 font-display uppercase flex items-center gap-3">
            <img src="/images/logo.png" alt="Forez Corp" className="w-12 h-12 md:w-16 md:h-16" />
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

        <div className="flex flex-col gap-4">
          <h5 className="text-industrial-orange font-black uppercase text-xl mb-4">QUICK LINKS</h5>
          <Link to="/" className="text-gray-400 hover:text-white transition-colors uppercase font-bold">Catalog</Link>
          <Link to="/sourcing" className="text-gray-400 hover:text-white transition-colors uppercase font-bold">Bulk Sourcing</Link>
          <Link to="/about" className="text-gray-400 hover:text-white transition-colors uppercase font-bold">About & Credentials</Link>
          <Link to="/contact" className="text-gray-400 hover:text-white transition-colors uppercase font-bold">Contact Engineering</Link>
        </div>

        <div>
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
      </div>

      <div className="border-t-4 border-black px-6 md:px-12 py-10 bg-steel">
        <div className="max-w-6xl mx-auto">
          <h5 className="text-industrial-orange font-black uppercase text-xl mb-5">ForezCorp Shipping Information</h5>

          <div className="inline-flex border-2 border-black bg-black/30 mb-6">
            <button
              type="button"
              onClick={() => setPolicyTab('shipping')}
              className={`px-5 py-2 font-black uppercase tracking-wide transition-colors ${
                policyTab === 'shipping' ? 'bg-industrial-orange text-black' : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="inline-flex items-center gap-2"><Truck className="w-4 h-4" />Shipping</span>
            </button>
            <button
              type="button"
              onClick={() => setPolicyTab('returns')}
              className={`px-5 py-2 font-black uppercase tracking-wide transition-colors ${
                policyTab === 'returns' ? 'bg-industrial-orange text-black' : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="inline-flex items-center gap-2"><RefreshCw className="w-4 h-4" />Returns</span>
            </button>
          </div>

          {policyTab === 'shipping' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-200">
              <div className="space-y-4 text-sm font-semibold">
                <p className="text-white font-black uppercase">Shipping Carriers</p>
                <p>Primarily ships via UPS.</p>
                <p>International orders may use other carriers when provided by the customer.</p>

                <p className="text-white font-black uppercase pt-2">Delivery Options & Timeframes</p>
                <p>UPS Ground: about 5 business days.</p>
                <p>UPS 3-Day Select: about 3 business days.</p>
                <p>UPS 2nd Day Air: about 2 business days.</p>
                <p>UPS Next Day Air: about 1 business day.</p>
                <p>Orders should typically be placed before 10 AM PST (Mon-Fri) for these timelines.</p>
                <p className="text-industrial-orange">Alaska & Hawaii: add 1 extra day.</p>
              </div>

              <div className="space-y-4 text-sm font-semibold">
                <p className="text-white font-black uppercase">Order Processing & Dispatch</p>
                <p>Orders may ship same day if placed early enough.</p>
                <p>Otherwise, processing can take up to 3 business days.</p>
                <p>Orders before about 11 AM PST have a higher chance of same-day shipping.</p>
                <p>Orders after about 2 PM PST may ship next day.</p>
                <p>UPS pickup cutoff is about 4 PM PST.</p>

                <p className="text-white font-black uppercase pt-2">International Shipping</p>
                <p>International shipping is available.</p>
                <p>You may need to provide your own carrier details.</p>
                <p>ForezCorp will confirm feasibility before shipment.</p>

                <p className="text-white font-black uppercase pt-2">Important Policies</p>
                <p>ForezCorp is not responsible for lost, damaged, or delivered-but-not-received shipments.</p>
                <p>Customers must contact the shipping carrier directly for shipping issues.</p>
                <p>Tracking updates can be delayed; wait a few days before escalating.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-200">
              <div className="space-y-4 text-sm font-semibold">
                <p className="text-white font-black uppercase">General Policy</p>
                <p>Most products are non-cancellable / non-returnable (NCNR).</p>
                <p>Customers are expected to review carefully before purchasing.</p>

                <p className="text-white font-black uppercase pt-2">International / Export Orders</p>
                <p>No returns or exchanges are allowed.</p>
                <p>Exception: only if item is defective or damaged on arrival.</p>
                <p>Claims must be reported within 3 days of delivery with photos and a description.</p>

                <p className="text-white font-black uppercase pt-2">Domestic Orders</p>
                <p>Returns are allowed within 3 days of delivery, when applicable.</p>
                <p>Items must be unused and in original packaging with proof of purchase.</p>
                <p>Return authorization is required before sending anything back.</p>
              </div>

              <div className="space-y-4 text-sm font-semibold">
                <p className="text-white font-black uppercase">Non-Returnable Items</p>
                <p>Customized and made-to-order products are strictly non-returnable.</p>

                <p className="text-white font-black uppercase pt-2">Return Shipping</p>
                <p>Customer pays return shipping unless the item is confirmed defective.</p>

                <p className="text-white font-black uppercase pt-2">Refund Process</p>
                <p>Refunds are issued only after inspection and approval.</p>
                <p>Approved refunds go to the original payment method.</p>
                <p>Refund processing may take up to 15 business days plus bank processing time.</p>

                <p className="text-white font-black uppercase pt-2">Warranty</p>
                <p>1-year limited warranty covers manufacturing defects and normal-use failures.</p>
                <p>Warranty does not cover misuse, physical damage, unauthorized modifications, or improper installation/conditions.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-black py-8 px-6 md:px-12 border-t-4 border-black flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500 gap-4">
        <div>© 2026 FOREZ CORP. NYS/NYC CERTIFIED MBE.</div>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">PRIVACY</a>
          <a href="#" className="hover:text-white">COMPLIANCE</a>
          <a href="#" className="hover:text-white">LEGAL</a>
        </div>
      </div>
    </footer>
  );
}
