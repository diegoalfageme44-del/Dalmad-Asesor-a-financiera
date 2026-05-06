import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-3xl font-bold tracking-tighter">DALMAD</span>
              <span className="text-xs font-medium uppercase tracking-[0.2em] -mt-1 text-slate-400">Asesoría Financiera</span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              Expertos en intermediación financiera en toda España. Ayudamos a particulares e inmobiliarias a conseguir las mejores condiciones hipotecarias del mercado con total transparencia y profesionalidad.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Empresa</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link to="/" className="hover:text-gold transition-colors">Inicio</Link></li>
              <li><Link to="/profesionales" className="hover:text-gold transition-colors">Profesionales</Link></li>
              <li><Link to="/contacto" className="hover:text-gold transition-colors">Contacto</Link></li>
              <li><Link to="/admin" className="hover:text-gold transition-colors">Acceso Interno</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gold"><Phone size={14} /></div>
                <a href="tel:620359361" className="hover:text-gold transition-colors">620 359 361</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gold"><Mail size={14} /></div>
                <a href="mailto:diealfdie@gmail.com" className="hover:text-gold transition-colors text-xs lg:text-sm">diealfdie@gmail.com</a>
              </li>
              <li className="text-[10px] uppercase tracking-widest text-slate-500 pt-4">Atención en toda España</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} Dalmad Asesoría Financiera. Todos los derechos reservados. <br className="md:hidden" />
            Empresa inscrita en el registro de intermediarios financieros.
          </p>
          <div className="flex gap-8 text-xs text-slate-500">
            <a href="#" className="hover:text-slate-300">Aviso Legal</a>
            <a href="#" className="hover:text-slate-300">Privacidad</a>
            <a href="#" className="hover:text-slate-300">Cookies</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-all border border-white/10"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
