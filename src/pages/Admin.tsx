import { useState, useEffect } from 'react';
import SEO from '../components/layout/SEO';
import { motion } from 'motion/react';
import { Settings, MessageSquare, Layout, Bell, Save, RefreshCw, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'chatbot' | 'content'>('chatbot');
  const [isSaving, setIsSaving] = useState(false);
  const [chatbotSystem, setChatbotSystem] = useState('');

  useEffect(() => {
    // Simulating loading current config
    const saved = localStorage.getItem('dalmad_chatbot_system');
    setChatbotSystem(saved || 'Configure el sistema experto aquí...');
  }, []);

  const handleSave = () => {
    setIsSaving(true);
    localStorage.setItem('dalmad_chatbot_system', chatbotSystem);
    setTimeout(() => {
      setIsSaving(false);
      alert("Configuración guardada con éxito (Simulado)");
    }, 1000);
  };

  return (
    <>
      <SEO title="Panel de Administración" description="Gestión interna de contenidos y chatbot de Dalmad Asesoría Financiera." />
      
      <div className="pt-32 pb-20 bg-slate-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-64 flex flex-col gap-2">
              <button 
                onClick={() => setActiveTab('chatbot')}
                className={cn(
                  "flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all",
                  activeTab === 'chatbot' ? "bg-navy text-white shadow-lg" : "bg-white text-slate-500 hover:bg-slate-50"
                )}
              >
                <MessageSquare size={20} /> Chatbot
              </button>
              <button 
                onClick={() => setActiveTab('content')}
                className={cn(
                  "flex items-center gap-3 px-6 py-4 rounded-2xl font-bold transition-all",
                  activeTab === 'content' ? "bg-navy text-white shadow-lg" : "bg-white text-slate-500 hover:bg-slate-50"
                )}
              >
                <Layout size={20} /> Contenidos
              </button>
              <div className="mt-8 p-6 bg-gold/10 rounded-3xl border border-gold/20">
                <div className="flex items-center gap-2 text-gold mb-2">
                  <AlertCircle size={16} /> 
                  <span className="text-[10px] font-bold uppercase tracking-widest">Aviso</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cualquier cambio realizado aquí se reflejará inmediatamente en la web pública para todos los usuarios.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-slate-100"
              >
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h1 className="text-3xl font-serif font-bold text-navy italic">
                      {activeTab === 'chatbot' ? "Gestión del Chatbot" : "Editor de Contenidos"}
                    </h1>
                    <p className="text-slate-500 text-sm">Configure los parámetros clave del sistema.</p>
                  </div>
                  <button 
                    onClick={handleSave}
                    disabled={isSaving}
                    className="flex items-center gap-2 bg-gold hover:bg-gold-hover text-white px-6 py-3 rounded-full font-bold transition-all disabled:opacity-50"
                  >
                    {isSaving ? <RefreshCw className="animate-spin" size={18} /> : <Save size={18} />}
                    {isSaving ? "Guardando..." : "Guardar Cambios"}
                  </button>
                </div>

                {activeTab === 'chatbot' ? (
                  <div className="space-y-8">
                    <div className="space-y-2 text-slate-900">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4">Instrucciones del Sistema (Contexto AI)</label>
                      <textarea 
                        value={chatbotSystem}
                        onChange={(e) => setChatbotSystem(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-100 rounded-3xl p-8 h-64 focus:outline-none focus:border-gold transition-colors font-mono text-sm leading-relaxed"
                        placeholder="Define aquí la personalidad y conocimientos del bot..."
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h3 className="font-bold text-navy flex items-center gap-2">
                          <Settings size={18} /> Parámetros Generales
                        </h3>
                        <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                          <span className="text-sm text-slate-600">Model: Gemini-3-Flash</span>
                          <span className="text-xs text-green-500 font-bold uppercase">Active</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                          <span className="text-sm text-slate-600">Integración Externa API</span>
                          <span className="text-xs text-gold font-bold uppercase underline cursor-pointer">Exportar Key</span>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h3 className="font-bold text-navy flex items-center gap-2">
                          <Bell size={18} /> Notificaciones
                        </h3>
                        <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                          <span className="text-sm text-slate-600">Leads por Email</span>
                          <span className="w-10 h-5 bg-gold rounded-full relative"><span className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="py-20 text-center text-slate-400">
                    <Layout className="mx-auto mb-4 opacity-20" size={48} />
                    <p>El editor visual de bloques de contenido estará disponible en la próxima actualización.</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
