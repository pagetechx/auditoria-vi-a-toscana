import React, { useState } from 'react';
import { PROPOSED_FUNNEL_STEPS } from '../data/auditData';
import { Wine, Bot, Search, Globe, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, MapPin, Zap } from 'lucide-react';

export const FunnelArchitectureSection: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  const getStepIcon = (num: number) => {
    switch (num) {
      case 1: return <Search className="w-5 h-5 text-amber-400" />;
      case 2: return <Globe className="w-5 h-5 text-amber-400" />;
      case 3: return <Bot className="w-5 h-5 text-amber-400" />;
      case 4: return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 5: return <Wine className="w-5 h-5 text-amber-400" />;
      default: return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
            <Zap className="w-4 h-4" />
            Ecosistema Integrado de Ventas Online
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
            Arquitectura del Embudo: Página Web Convertible a WhatsApp
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1">
            Mapeo interactivo del sistema automatizado de atracción, conversión y venta directa para Viña Casa Toscana.
          </p>
        </div>
      </div>

      {/* Visual Step-by-Step Flow Chart */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
        {PROPOSED_FUNNEL_STEPS.map((step, idx) => {
          const isSelected = selectedStepIndex === idx;
          return (
            <div
              key={idx}
              onClick={() => setSelectedStepIndex(idx)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-b from-stone-800 to-rose-950/80 border-amber-500 shadow-xl shadow-amber-950/30 scale-105 z-10'
                  : 'bg-stone-900/90 hover:bg-stone-800 border-stone-800'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-xl bg-stone-950 border border-stone-800 text-amber-400 font-black text-xs flex items-center justify-center">
                    #{step.stepNumber}
                  </span>
                  {getStepIcon(step.stepNumber)}
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-300 block truncate">
                    {step.channel}
                  </span>
                  <h3 className="text-xs font-bold text-white font-serif mt-1 leading-snug">
                    {step.name}
                  </h3>
                </div>
              </div>

              <div className="pt-3 border-t border-stone-800/80 mt-3 flex justify-between items-center text-[10px]">
                <span className="text-stone-400">Ver Detalles</span>
                <ArrowRight className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-stone-500'}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Selected Step Detailed View */}
      {(() => {
        const activeStep = PROPOSED_FUNNEL_STEPS[selectedStepIndex];
        return (
          <div className="bg-stone-900 border border-amber-500/50 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-stone-950 border border-stone-800">
                  {getStepIcon(activeStep.stepNumber)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Fase #{activeStep.stepNumber} • {activeStep.channel}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                    {activeStep.name}
                  </h3>
                </div>
              </div>

              <span className="bg-amber-950 text-amber-300 border border-amber-700/60 text-xs font-bold px-3 py-1.5 rounded-full self-start sm:self-auto">
                {activeStep.conversionRole}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="space-y-3">
                <span className="text-amber-300 font-bold uppercase text-[11px] block">
                  Descripción del Proceso:
                </span>
                <p className="text-stone-300 leading-relaxed bg-stone-950/70 p-4 rounded-2xl border border-stone-800">
                  {activeStep.description}
                </p>
              </div>

              <div className="space-y-3">
                <span className="text-emerald-400 font-bold uppercase text-[11px] block">
                  Activos Digitales a Construir:
                </span>
                <div className="space-y-2">
                  {activeStep.keyAssets.map((asset, i) => (
                    <div key={i} className="flex items-center gap-2 bg-stone-950/70 p-3 rounded-xl border border-stone-800 text-stone-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className="font-semibold">{asset}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Funnel Pathway Banner */}
            <div className="bg-gradient-to-r from-stone-950 via-rose-950/60 to-stone-950 p-4 rounded-2xl border border-rose-900/50 text-xs text-stone-300 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span><strong>Flujo Continuo:</strong> Tráfico (SEO/GEO/Meta) → Página Web Convertible → Canal WhatsApp → Confirmación/Reserva</span>
              </div>
              <span className="text-amber-300 font-bold">Respuesta e Información Inmediata</span>
            </div>

          </div>
        );
      })()}

    </div>
  );
};
