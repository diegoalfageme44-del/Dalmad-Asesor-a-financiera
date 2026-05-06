import { useState } from 'react';
import SEO from '../components/layout/SEO';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulating form submission
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <>
      <SEO 
        title="Contacto y Asesoramiento Gratuito" 
        description="Póngase en contacto con Dalmad Asesoría Financiera. Resolvemos sus dudas sobre hipotecas y préstamos. Atención inmediata en toda España." 
      />

      <div className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Contact Info */}
            <div className="md:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <p className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-4">Estamos aquí para ayudar</p>
                <h1 className="text-5xl font-serif font-bold text-navy italic mb-8 leading-tight">Contacto <span className="not-italic">directo.</span></h1>
                
                <div className="space-y-8 mt-12">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-gold flex-shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Teléfono</p>
                      <a href="tel:620359361" className="text-xl font-bold text-navy hover:text-gold transition-colors">620 359 361</a>
                      <p className="text-sm text-slate-500 mt-1 flex items-center gap-1"><Clock size={12} /> Lun-Vie: 9:00 - 19:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-gold flex-shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                      <a href="mailto:diealfdie@gmail.com" className="text-xl font-bold text-navy hover:text-gold transition-colors break-all">diealfdie@gmail.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-gold flex-shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Cobertura</p>
                      <p className="text-xl font-bold text-navy">Toda España</p>
                      <p className="text-sm text-slate-500 mt-1">Servicio 100% Digital y Presencial bajo cita.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-16 p-8 bg-navy text-white rounded-[2rem] shadow-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <p className="text-gold font-bold mb-2">Respuesta rápida</p>
                    <p className="text-sm text-slate-300">Garantizamos una primera toma de contacto en menos de 24 horas laborables.</p>
                  </div>
                  <MessageSquare className="absolute -bottom-4 -right-4 text-white/5 w-24 h-24" />
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="md:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100"
              >
                {formState === 'success' ? (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send size={40} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-navy mb-4 italic">¡Mensaje enviado con éxito!</h2>
                    <p className="text-slate-500">Hemos recibido sus datos de contacto diealfdie@gmail.com. Un asesor se pondrá en contacto con usted en breve.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="mt-8 text-gold font-bold hover:underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Nombre Completo</label>
                        <input 
                          required
                          type="text" 
                          placeholder="Ej: Juan Pérez"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Teléfono</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="Ej: 600 000 000"
                          className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Email</label>
                      <input 
                        required
                        type="email" 
                        placeholder="ejemplo@correo.com"
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Asunto del Interés</label>
                      <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-6 focus:outline-none focus:border-gold transition-colors appearance-none">
                        <option>Hipoteca Nueva Vivienda</option>
                        <option>Préstamo Personal / Unificación</option>
                        <option>Colaboración Inmobiliaria</option>
                        <option>Otros Servicios</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">¿En qué podemos ayudarle?</label>
                      <textarea 
                        rows={5}
                        placeholder="Cuéntenos brevemente su caso..."
                        className="w-full bg-slate-50 border border-slate-100 rounded-3xl py-4 px-6 focus:outline-none focus:border-gold transition-colors resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit"
                        disabled={formState === 'submitting'}
                        className={cn(
                          "w-full py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3",
                          formState === 'submitting' ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-gold hover:bg-gold-hover text-white shadow-xl shadow-gold/20"
                        )}
                      >
                        {formState === 'submitting' ? "Enviando..." : "Enviar Solicitud Gratuita"} <Send size={20} />
                      </button>
                      <p className="text-[10px] text-center text-slate-400 mt-4 px-6 leading-relaxed">
                        Al enviar este formulario acepta nuestra política de privacidad. Sus datos serán tratados con la máxima confidencialidad para fines de estudio financiero.
                      </p>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
