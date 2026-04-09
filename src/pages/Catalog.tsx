import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Search, ChevronRight, Check } from 'lucide-react';
import { PRODUCT_CATEGORIES, getProductImage, FALLBACK_PRODUCT_IMAGE } from '../constants';
import { cn } from '../lib/utils';

export default function Catalog() {
  const { categoryId } = useParams();
  const [selectedBrands, setSelectedBrands] = React.useState<string[]>([]);
  const [selectedProducts, setSelectedProducts] = React.useState<string[]>([]);

  const category = PRODUCT_CATEGORIES.find(c => c.id === categoryId) || PRODUCT_CATEGORIES[0];

  const allBrands = Array.from(new Set(category.products.flatMap(p => p.brands))).sort();

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleProduct = (productId: string) => {
    setSelectedProducts(prev => 
      prev.includes(productId) ? prev.filter(p => p !== productId) : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-white pb-32">
      {/* Header */}
      <div className="bg-steel text-white py-4 px-6 md:px-12 flex items-center justify-between border-b-4 border-black">
        <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
          <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
          <ChevronRight className="w-4 h-4 text-gray-600" />
          <span className="text-industrial-orange">{category.name}</span>
        </div>
        <div className="hidden lg:flex items-center bg-white brutalist-border px-4 py-2 w-80">
          <Search className="text-steel w-5 h-5 mr-3" />
          <input 
            type="text" 
            placeholder="SEARCH CATALOG"
            className="bg-transparent border-none outline-none text-steel font-black uppercase text-xs w-full"
          />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="w-full md:w-80 flex-shrink-0 space-y-8">
          <div className="brutalist-border p-6 bg-white brutalist-shadow">
            <h3 className="text-2xl font-black uppercase border-b-4 border-black pb-4 mb-6">Filter Brands</h3>
            <div className="space-y-4">
              {allBrands.map(brand => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                  <div 
                    onClick={() => toggleBrand(brand)}
                    className={cn(
                      "w-6 h-6 brutalist-border flex items-center justify-center transition-all",
                      selectedBrands.includes(brand) ? "bg-industrial-orange" : "bg-white"
                    )}
                  >
                    {selectedBrands.includes(brand) && <Check className="text-white w-4 h-4" />}
                  </div>
                  <span className="font-bold uppercase text-sm group-hover:text-industrial-orange transition-colors">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="brutalist-border p-6 bg-concrete brutalist-shadow">
            <h3 className="text-xl font-black uppercase mb-4">Bulk Sourcing</h3>
            <p className="text-sm font-bold text-gray-600 mb-6 uppercase">Need a brand not listed here? We source everything.</p>
            <Link 
              to="/sourcing"
              className="block w-full py-3 brutalist-border text-center font-black uppercase text-sm hover:bg-black hover:text-white transition-all bg-white"
            >
              Custom Source Request
            </Link>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">{category.name}</h1>
            <p className="text-xl font-bold text-gray-500 uppercase">
              Displaying sub-categories for {selectedBrands.length > 0 ? selectedBrands.join(', ') : 'All Brands'}. Select items below to add to your bulk quote request.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.products.map((product, idx) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => toggleProduct(product.id)}
                className={cn(
                  "group brutalist-border p-6 cursor-pointer transition-all flex flex-col h-80 brutalist-shadow",
                  selectedProducts.includes(product.id) ? "bg-white border-industrial-orange ring-4 ring-industrial-orange/10" : "bg-concrete hover:bg-white"
                )}
              >
                <div className="flex-1 bg-white brutalist-border mb-6 relative overflow-hidden flex items-center justify-center">
                  <div className={cn(
                    "absolute top-3 left-3 w-6 h-6 brutalist-border z-10 flex items-center justify-center transition-all",
                    selectedProducts.includes(product.id) ? "bg-industrial-orange" : "bg-white"
                  )}>
                    {selectedProducts.includes(product.id) && <Check className="text-white w-4 h-4" />}
                  </div>
                  <img 
                    src={getProductImage(product, category)} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = FALLBACK_PRODUCT_IMAGE;
                    }}
                  />
                </div>
                <div>
                  <h4 className="text-2xl font-black uppercase mb-1">{product.name}</h4>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {product.brands.length} Brands Available
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Sticky Bottom Action Bar */}
      {selectedProducts.length > 0 && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 w-full bg-industrial-orange border-t-4 border-black z-50 py-6 px-6 md:px-12"
        >
          <div className="max-w-[1440px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="bg-white brutalist-border w-16 h-16 flex items-center justify-center text-3xl font-black brutalist-shadow">
                {selectedProducts.length}
              </div>
              <div className="hidden sm:block">
                <h2 className="text-white text-2xl font-black uppercase leading-none">Sub-categories Selected</h2>
                <p className="text-black font-bold uppercase text-xs tracking-widest mt-1">Ready for bulk quote processing</p>
              </div>
            </div>
            <Link 
              to="/sourcing"
              className="bg-white text-black px-10 py-4 brutalist-border brutalist-shadow font-black uppercase text-xl hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
            >
              Request Bulk Quote
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
