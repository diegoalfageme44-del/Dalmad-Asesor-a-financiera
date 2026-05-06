import { motion } from 'motion/react';
import { Home as HomeIcon, Wallet, Briefcase, Calculator, Landmark, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <HomeIcon className="w-10 h-10 text-gold" />,
    title: "Créditos Inmobiliarios",
    desc: "Conseguimos su hipoteca hasta el 100% financiando compra, reformas y gastos. Hipotecas fijas, variables y mixtas con los mejores tipos de interés.",
    tags: ["Nueva Vivienda", "Auto-promoción", "Segunda Residencia"]
  },
  {
    icon: <Wallet className="w-10 h-10 text-gold" />,
    title: "Préstamos Personales",
    desc: "Financiación a medida para cualquier proyecto personal. Desde reformas hasta unificación de deudas para reducir su cuota mensual.",
    tags: ["Consumo", "Reformas", "Vehículos"]
  },
  {
    icon: <Calculator className="w-10 h-10 text-gold" />,
    title: "Refinanciación",
    desc: "Agrupamos todas sus deudas en una sola cuota mensual mucho más baja, dándole el respiro económico que necesita.",
    tags: ["Unificación", "Ahorro", "Liquidez"]
  },
  {
    icon: <Landmark className="w-10 h-10 text-gold" />,
    title: "Hipotecas para No Residentes",
    desc: "Servicio especializado para extranjeros que desean adquirir una propiedad en España con condiciones bancarias locales.",
    tags: ["Inversión", "Asesoría Fiscal", "Multilenguaje"]
  },
  {
    icon: <Briefcase className="w-10 h-10 text-gold" />,
    title: "Préstamos a Autónomos",
    desc: "Soluciones de liquidez y financiación de activos para profesionales por cuenta propia con las mínimas trabas burocráticas.",
    tags: ["Proyectos", "Equipamiento", "Circulante"]
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-gold" />,
    title: "Blindaje Financiero",
    desc: "Le asesoramos para proteger su patrimonio y asegurar que sus préstamos tengan cláusulas justas y sin abusos bancarios.",
    tags: ["Asesoría Jurídica", "Transparencia", "Seguridad"]
  }
];

export default function Services() {
  return (
    <section className="section-padding bg-slate-50" id="servicios">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-gold font-bold uppercase tracking-[0.3em] text-sm mb-3">Expertos en Intermediación</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy italic">Servicios financieros <span className="not-italic">sin fronteras.</span></h2>
          </div>
          <p className="text-slate-500 max-w-sm mb-2">
            Cubrimos todas las necesidades de financiación con un enfoque 100% digital y humano, operando en toda la península e islas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 group transition-all"
            >
              <div className="mb-6 p-4 bg-slate-50 rounded-2xl inline-block group-hover:bg-gold/10 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{service.title}</h3>
              <p className="text-slate-500 mb-8 leading-relaxed">{service.desc}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-slate-100 text-slate-500 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
