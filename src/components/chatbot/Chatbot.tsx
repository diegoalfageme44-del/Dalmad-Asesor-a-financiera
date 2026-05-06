import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, User, Phone, Mail } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { cn } from '../../lib/utils';

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const INITIAL_MESSAGE = "¡Hola! Soy el asistente virtual de Dalmad Asesoría Financiera. ¿En qué puedo ayudarte hoy? Puedo informarte sobre hipotecas, préstamos personales o cómo podemos colaborar con tu inmobiliaria.";

const SYSTEM_INSTRUCTION = `Eres el asistente experto de "Dalmad Asesoría Financiera", una empresa líder en intermediación financiera en España.
Tu tono es profesional, cercano, experto y confiable.
Servicios clave: 
1. Préstamos Inmobiliarios (Hipotecas 100%, para residentes y no residentes, reformas).
2. Préstamos Personales (reformas, unificación de deudas, consumo).
3. Canal profesional para inmobiliarias.

DIRECTRICES:
- Proporciona respuestas concisas sobre el sector financiero español.
- Si la pregunta es compleja o el usuario quiere una asesoría directa, SIEMPRE redirige a:
  * Teléfono: 620 359 361
  * Email: diealfdie@gmail.com
- Menciona que Dalmad opera en toda España.
- Si el usuario pregunta por "Dalmad", explica que somos expertos en conseguir las mejores condiciones bancarias negociando por ellos.
- No inventes leyes, si no sabes algo, redirige al contacto humano.`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: INITIAL_MESSAGE }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await genAI.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          maxOutputTokens: 500,
        }
      });

      const botText = response.text || "Lo siento, he tenido un problema técnico. Por favor, puedes contactarnos directamente al 620 359 361.";
      setMessages(prev => [...prev, { role: 'bot', text: botText }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Lo siento, ha habido un error. Por favor, llámanos al 620 359 361." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {/* Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[90vw] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-navy p-6 flex justify-between items-center">
              <div className="flex items-center gap-3 text-white">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Asistente Dalmad</h3>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">En línea ahora</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
              {messages.map((msg, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed",
                    msg.role === 'user' 
                      ? "bg-gold text-white self-end rounded-tr-none shadow-md" 
                      : "bg-slate-100 text-slate-700 self-start rounded-tl-none"
                  )}
                >
                  {msg.text}
                </div>
              ))}
              {isLoading && (
                <div className="bg-slate-100 text-slate-500 self-start p-4 rounded-2xl rounded-tl-none text-sm animate-pulse">
                  Escribiendo...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-6 py-2 flex gap-2">
              <a href="tel:620359361" className="text-[10px] bg-slate-50 border border-slate-200 px-3 py-1 rounded-full text-slate-500 flex items-center gap-1">
                <Phone size={10} /> 620359361
              </a>
              <a href="mailto:diealfdie@gmail.com" className="text-[10px] bg-slate-50 border border-slate-200 px-3 py-1 rounded-full text-slate-500 flex items-center gap-1">
                <Mail size={10} /> Email
              </a>
            </div>

            {/* Input */}
            <div className="p-6 border-t">
              <div className="relative flex items-center">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Házme una pregunta..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-full py-3 px-5 pr-12 text-sm focus:outline-none focus:border-gold transition-colors"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 w-10 h-10 bg-navy text-gold rounded-full flex items-center justify-center hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gold text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
      >
        <motion.div
          animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </motion.div>
      </button>
    </div>
  );
}
