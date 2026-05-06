import SEO from '../components/layout/SEO';
import { motion } from 'motion/react';
import { Handshake, Building2, TrendingUp, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Professionals() {
  const benefits = [
    {
      title: "Financiación 100% para sus clientes",
      desc: "No deje que una operación se caiga por falta de ahorro. Ayudamos a sus clientes a conseguir el 100% de la hipoteca.",
      icon: <TrendingUp className="text-gold" />
    },
    {
      title: "Rapidez en el estudio",
      desc: "Le damos una respuesta de viabilidad en menos de 48 horas para que pueda continuar con la reserva.",
      icon: <CheckCircle2 className="text-gold" />
    },
    {
      title: "Cartera de Inmuebles",
      desc: "Acceso preferente para nuestros clientes a inmuebles exclusivos de nuestra red de inmobiliarias colaboradoras.",
      icon: <Building2 className="text-gold" />
    }
  ];

  return (
    <>
      <SEO 
        title="Área para Inmobiliarias y Profesionales" 
        description="Colabore con Dalmad Asesoría Financiera. Ofrezca a sus clientes las mejores hipotecas y asegure sus ventas con nuestro estudio de viabilidad express." 
      />
      
      <div className="pt-32 pb-20 bg-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-gold text-sm font-bold uppercase tracking-widest mb-6 px-4 py-2 bg-gold/10 rounded-full w-fit">
              <Handshake size={18} /> Alianza Estratégica
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold italic mb-8 leading-[1.1]">
              Su partner financiero <span className="text-gold not-italic">de confianza.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Sabemos que el éxito de una inmobiliaria depende de la financiación de sus clientes. En Dalmad nos convertimos en su departamento financiero externo para que usted se centre en vender.
            </p>
            <Link to="/contacto" className="inline-flex items-center gap-3 px-8 py-4 bg-gold hover:bg-gold-hover text-white rounded-full font-bold transition-all shadow-xl shadow-gold/20">
              Hacerse colaborador <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border border-slate-100 rounded-3xl hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-4">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-navy italic mb-4">¿Cómo trabajamos juntos?</h2>
            <p className="text-slate-500 uppercase text-xs tracking-widest font-bold">Un proceso ágil y transparente</p>
          </div>

          <div className="space-y-8 relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>
            {[
              { step: "01", title: "Envío del Cliente", desc: "Usted nos deriva al cliente que necesita financiación a través de nuestro portal o via WhatsApp/Email." },
              { step: "02", title: "Estudio Express", desc: "Realizamos un análisis de viabilidad en menos de 48h y le mantenemos informado en todo momento." },
              { step: "03", title: "Negociación Bancaria", desc: "Presentamos el caso a nuestra red de más de 20 entidades para conseguir el aprobado." },
              { step: "04", title: "Cierre y Firma", desc: "Acompañamos al cliente hasta notaría, asegurando que la operación de venta se complete con éxito." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-8 items-start relative z-10"
              >
                <div className="w-16 h-16 bg-navy text-gold rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-lg">
                  {item.step}
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex-1">
                  <h3 className="text-xl font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Trust */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gold/5 rounded-[4rem] p-12 md:p-24 relative">
            <MessageSquare className="absolute top-12 right-12 text-gold/10 w-48 h-48 -rotate-12" />
            <div className="max-w-2xl relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy italic mb-8">
                "Dalmad nos ha permitido cerrar más ventas este año al rescatar operaciones que los bancos tradicionales rechazaban."
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold rounded-full"></div>
                <div>
                  <p className="font-bold text-navy">F. González</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Director de Inmobiliaria Mediterráneo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
