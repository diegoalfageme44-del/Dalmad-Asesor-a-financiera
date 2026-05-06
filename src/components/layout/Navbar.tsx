import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Profesionales', path: '/profesionales' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className={cn(
            "text-2xl font-bold tracking-tighter",
            scrolled ? "text-navy" : "text-navy md:text-white"
          )}>
            DALMAD
          </span>
          <span className={cn(
            "text-[10px] font-medium uppercase tracking-[0.2em] -mt-1",
            scrolled ? "text-slate-500" : "text-slate-500 md:text-slate-300"
          )}>
            Asesoría Financiera
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-gold",
                location.pathname === link.path ? "text-gold" : (scrolled ? "text-slate-600" : "text-white")
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contacto" 
            className="bg-gold hover:bg-gold-hover text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-gold/20"
          >
            Consulta Gratuita <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-slate-800"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <div className="flex flex-col gap-4">
                <a href="tel:620359361" className="flex items-center justify-center gap-2 text-slate-600">
                  <Phone size={18} /> 620 359 361
                </a>
                <a href="mailto:diealfadie44@gmail.com" className="flex items-center justify-center gap-2 text-slate-600">
                  <Mail size={18} /> diealfadie44@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
