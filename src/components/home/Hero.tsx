import { motion } from 'motion/react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Madrid Financial District" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 text-gold rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-gold/30">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            Asesoría Financiera en toda España
          </div>
          
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-white leading-[1.1] mb-6 italic">
            El camino más directo a su <span className="text-gold not-italic">mejor crédito.</span>
          </h1>
          
          <p className="text-lg text-slate-300 mb-10 max-w-lg leading-relaxed">
            En Dalmad intermediamos por usted para conseguir hipotecas y préstamos personales con las condiciones más competitivas del mercado. Ahorre tiempo y dinero con expertos financieros.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Link 
              to="/contacto" 
              className="px-8 py-4 bg-gold hover:bg-gold-hover text-white rounded-full font-bold text-lg shadow-xl shadow-gold/20 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1"
            >
              Solicitar Estudio Gratuito <ArrowRight size={20} />
            </Link>
            <Link 
              to="/profesionales" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold text-lg border border-white/20 flex items-center justify-center gap-3 backdrop-blur-sm transition-all"
            >
              Canal Inmobiliario <PlayCircle size={20} />
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">+1k</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest">Casos de Éxito</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest">Transparencia</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">48h</p>
              <p className="text-xs text-slate-400 uppercase tracking-widest">Pre-aprobación</p>
            </div>
          </div>
        </motion.div>
        
        {/* Visual Element - can be removed or kept for desktop balance */}
        <div className="hidden md:block">
           {/* Decorative elements or a floating dashboard preview */}
        </div>
      </div>
    </section>
  );
}
