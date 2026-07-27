import React, { useState } from 'react';
import { BEFORE_AFTER_COMPARISON } from '../data/auditData';
import { XCircle, CheckCircle, ArrowRight, Sparkles, AlertCircle, Bot, Search, Globe, TrendingUp, Users } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'split' | 'matrix'>('split');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Bot': return <Bot className="w-5 h-5 text-amber-400" />;
      case 'Search': return <Search className="w-5 h-5 text-amber-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-amber-400" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-amber-400" />;
      case 'Users': return <Users className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              <Sparkles className="w-4 h-4" />
              Transformación Digital & Comercial
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              Comparador Visual: Antes vs Después
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              Descubre cómo cambiará la operación comercial de Viña Casa Toscana al pasar de un Instagram aislado a un Ecosistema Integrado.
            </p>
          </div>

          <div className="flex items-center bg-stone-950 p-1.5 rounded-xl border border-stone-800">
            <button
              onClick={() => setActiveTab('split')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'split' ? 'bg-amber-500 text-stone-950 shadow-md' : 'text-stone-400 hover:text-white'
              }`}
            >
              Lado a Lado
            </button>
            <button
              onClick={() => setActiveTab('matrix')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'matrix' ? 'bg-amber-500 text-stone-950 shadow-md' : 'text-stone-400 hover:text-white'
              }`}
            >
              Matriz de Impacto
            </button>
          </div>
        </div>
      </div>

      {/* Side-by-side or Matrix View */}
      {activeTab === 'split' ? (
        <div className="space-y-6">
          
          {/* Top High Contrast Cards (Red vs Emerald) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* ANTES (Situación Actual) */}
            <div className="bg-gradient-to-b from-stone-900 to-red-950/40 border-2 border-red-900/60 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-red-900/50 pb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950 text-red-300 border border-red-700/60 text-xs font-bold uppercase tracking-wider">
                  <XCircle className="w-4 h-4 text-red-400" />
                  ANTES (Situación Actual)
                </span>
                <span className="text-xs font-bold text-red-400">Pérdida Continua</span>
              </div>

              <div className="space-y-4">
                <div className="bg-stone-950/80 rounded-2xl p-4 border border-red-900/40 space-y-2">
                  <span className="text-xs font-bold text-red-400 uppercase">1. Canal de Venta Único:</span>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Solo Instagram @vinacasatoscana. Respuestas diferidas a DMs. Sin sitio web ni botón para comprar vinos con Webpay.
                  </p>
                </div>

                <div className="bg-stone-950/80 rounded-2xl p-4 border border-red-900/40 space-y-2">
                  <span className="text-xs font-bold text-red-400 uppercase">2. Visibilidad en Google & IA:</span>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Invisible al buscar "viñedos en San Javier" o "tour de viña Maule". Fuga total de turistas hacia la competencia.
                  </p>
                </div>

                <div className="bg-stone-950/80 rounded-2xl p-4 border border-red-900/40 space-y-2">
                  <span className="text-xs font-bold text-red-400 uppercase">3. Horario de Atención:</span>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Limitado a horario humano. Las consultas de noche y fines de semana quedan sin respuesta oportuna.
                  </p>
                </div>

                <div className="bg-stone-950/80 rounded-2xl p-4 border border-red-900/40 space-y-2">
                  <span className="text-xs font-bold text-red-400 uppercase">4. Estrategia de Publicidad:</span>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Botón 'Promocionar' en Instagram sin píxel de seguimiento ni embudo guiado para visitantes de Santiago/Talca.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-red-900/50 text-center">
                <span className="text-xs font-extrabold text-red-400 uppercase tracking-widest block">
                  Resultado: Fuga de ~$6.85M CLP al Mes
                </span>
              </div>
            </div>

            {/* DESPUÉS (Con Sistema Integrado) */}
            <div className="bg-gradient-to-b from-stone-900 to-emerald-950/40 border-2 border-emerald-600/60 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-emerald-900/50 pb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-600/60 text-xs font-bold uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  DESPUÉS (Ecosistema Web + SEO + Maps)
                </span>
                <span className="text-xs font-bold text-emerald-400">Escalabilidad Total</span>
              </div>

              <div className="space-y-4">
                <div className="bg-stone-950/80 rounded-2xl p-4 border border-emerald-900/40 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase">1. Página Web Convertible a WhatsApp:</span>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Sitio web de Alta Conversión (Tours + Venta de Cajas de Vino) con catálogo interactivo e integración directa a WhatsApp.
                  </p>
                </div>

                <div className="bg-stone-950/80 rounded-2xl p-4 border border-emerald-900/40 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase">2. Ficha Negocio Google & Maps:</span>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Posicionamiento Top 3 en Google Maps San Javier / Maule con catálogo, fotos HD y enlace directo a WhatsApp.
                  </p>
                </div>

                <div className="bg-stone-950/80 rounded-2xl p-4 border border-emerald-900/40 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase">3. Posicionamiento SEO, GEO & AEO:</span>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Aparición en primeras posiciones de Google Search y recomendación automática en asistentes de IA (ChatGPT, Gemini).
                  </p>
                </div>

                <div className="bg-stone-950/80 rounded-2xl p-4 border border-emerald-900/40 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 uppercase">4. Campañas Meta Ads Dirigidas:</span>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Publicidad geo-segmentada a Santiago, Talca y ciudades clave enviando tráfico calificado a la Web y WhatsApp.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-900/50 text-center">
                <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest block">
                  Resultado: Captura Efectiva & Ventas Automatizadas
                </span>
              </div>
            </div>

          </div>

        </div>
      ) : (
        /* Matrix View Cards */
        <div className="space-y-4">
          {BEFORE_AFTER_COMPARISON.map((item, idx) => (
            <div key={idx} className="bg-stone-900 border border-stone-800 rounded-2xl p-5 shadow-lg space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-stone-950 border border-stone-800">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-white font-serif">{item.area}</h3>
                </div>
                <span className="bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-bold px-3 py-1 rounded-full">
                  Impacto: {item.metricChange}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="bg-red-950/30 border border-red-900/40 rounded-xl p-3.5 space-y-1">
                  <span className="text-red-400 font-bold uppercase text-[10px] flex items-center gap-1">
                    <XCircle className="w-3.5 h-3.5" /> Estado Actual
                  </span>
                  <p className="text-stone-300 leading-relaxed">{item.beforeState}</p>
                </div>

                <div className="bg-emerald-950/30 border border-emerald-900/40 rounded-xl p-3.5 space-y-1">
                  <span className="text-emerald-400 font-bold uppercase text-[10px] flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Estado Optimizado
                  </span>
                  <p className="text-stone-300 leading-relaxed">{item.afterState}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
