import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import SEO from '../components/layout/SEO';
import { motion } from 'motion/react';
import { Shield, TrendingUp, Users } from 'lucide-react';

export default function Home() {
  return (
    <>
      <SEO 
        title="Intermediación Financiera y Créditos en España" 
        description="Especialistas en préstamos hipotecarios y personales. Dalmad Asesoría Financiera le ayuda a conseguir las mejores condiciones del mercado en toda España." 
      />
      
      <Hero />

      {/* Trust Bar */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: <Shield className="text-gold w-8 h-8 mx-auto mb-4" />, title: "Seguridad Garantizada", desc: "Cumplimos con toda la normativa del Banco de España." },
              { icon: <TrendingUp className="text-gold w-8 h-8 mx-auto mb-4" />, title: "Mejores Intereses", desc: "Negociamos directamente con las entidades por usted." },
              { icon: <Users className="text-gold w-8 h-8 mx-auto mb-4" />, title: "Trato Personalizado", desc: "Dedicación exclusiva en cada caso hasta el éxito." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                {item.icon}
                <h3 className="text-navy font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Services />

      {/* CTA Section */}
      <section className="section-padding bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 italic">¿Hablamos sobre su futuro financiero?</h2>
          <p className="text-slate-300 mb-10 text-lg">Nuestro equipo está listo para asesorarle sin compromiso. Obtenga una respuesta en menos de 24 horas.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:620359361" className="bg-gold hover:bg-gold-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all">
              Llamar ahora: 620 359 361
            </a>
            <a href="/contacto" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-white/30 transition-all">
              Enviar solicitud
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
