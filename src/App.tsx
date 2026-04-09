import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Sourcing from './pages/Sourcing';
import About from './pages/About';
import Contact from './pages/Contact';
import Shipping from './pages/Shipping';
import AdminPortal from './pages/AdminPortal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const isSourcingPage = location.pathname === '/sourcing';

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-engineering-blue selection:text-white">
      <ScrollToTop />
      {!isSourcingPage && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:categoryId" element={<Catalog />} />
          <Route path="/sourcing" element={<Sourcing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
      </main>
      {!isSourcingPage && <Footer />}
    </div>
  );
}
