import React from 'react';
import { Wine, X, CheckCircle2, AlertTriangle, ArrowRight, DollarSign, Award, Send } from 'lucide-react';
import { COMPANY_INFO } from '../data/auditData';

interface PitchPresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PitchPresentationModal: React.FC<PitchPresentationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 border-2 border-amber-500/60 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl space-y-6 text-white relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-stone-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-stone-950 font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded-full">
              Informe Ejecutivo de Directiva
            </span>
            <span className="text-xs text-stone-400">San Javier de Loncomilla, Chile</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
            Propuesta Estratégica de Crecimiento Digital para {COMPANY_INFO.name}
          </h2>
          <p className="text-xs text-stone-300">
            Resumen ejecutivo para la toma de decisiones e implementación inmediata del Ecosistema de Ventas.
          </p>
        </div>

        {/* Key Findings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-red-950/60 border border-red-800/80 rounded-2xl p-4 space-y-1">
            <span className="text-[11px] font-bold text-red-300 uppercase block">Diagnóstico Actual</span>
            <span className="text-xl font-black text-red-400 block font-serif">Sin Sitio Web</span>
            <p className="text-[11px] text-stone-300">Dependencia exclusiva de Instagram DM con fuga del 92% de búsquedas.</p>
          </div>

          <div className="bg-amber-950/60 border border-amber-800/80 rounded-2xl p-4 space-y-1">
            <span className="text-[11px] font-bold text-amber-300 uppercase block">Impacto en Facturación</span>
            <span className="text-xl font-black text-amber-400 block font-serif">-${(COMPANY_INFO.estimatedMonthlyLossCLP / 1000000).toFixed(2)}M CLP / mes</span>
            <p className="text-[11px] text-stone-300">Turistas y compradores que terminan reservando en otras viñas del Maule.</p>
          </div>

          <div className="bg-emerald-950/60 border border-emerald-800/80 rounded-2xl p-4 space-y-1">
            <span className="text-[11px] font-bold text-emerald-300 uppercase block">Solución Propuesta</span>
            <span className="text-xl font-black text-emerald-400 block font-serif">Ecosistema Web + SEO</span>
            <p className="text-[11px] text-stone-300">Página Web convertible a WhatsApp + Ficha Google Negocio + Maps + SEO/GEO/AEO.</p>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="bg-stone-950 border border-stone-800 rounded-2xl p-5 space-y-3">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">
            Compromiso de Entregables e Infraestructura a Implementar:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="flex items-start gap-2 bg-stone-900 p-2.5 rounded-xl border border-stone-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong>Dominio + Página Web Convertible a WhatsApp:</strong> Venta de vinos + Catálogo + Reservas de Tour/Restaurant.</span>
            </div>
            <div className="flex items-start gap-2 bg-stone-900 p-2.5 rounded-xl border border-stone-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong>Canal Directo de WhatsApp:</strong> Respuestas rápidas y catálogo en línea.</span>
            </div>
            <div className="flex items-start gap-2 bg-stone-900 p-2.5 rounded-xl border border-stone-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong>Ficha Negocio Google & Maps:</strong> Posicionamiento estratégico en Google Maps San Javier / Maule.</span>
            </div>
            <div className="flex items-start gap-2 bg-stone-900 p-2.5 rounded-xl border border-stone-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span><strong>Posicionamiento SEO, AEO y GEO:</strong> Optimizado para búsquedas locales e Inteligencia Artificial.</span>
            </div>
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-stone-400">
            <span>¿Listo para transformar la facturación digital de Viña Casa Toscana?</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-stone-800 text-stone-300 font-bold text-xs hover:bg-stone-700 w-full sm:w-auto"
            >
              Cerrar Vista
            </button>
            <a
              href="https://wa.me/56950901627?text=Hola%2C%20quisiera%20agendar%20la%20implementaci%C3%B3n%20del%20Ecosistema%20Digital%20para%20Vi%C3%B1a%20Casa%20Toscana"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-stone-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/50 w-full sm:w-auto"
            >
              <Send className="w-4 h-4" />
              Agendar Sesión de Implementación
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
