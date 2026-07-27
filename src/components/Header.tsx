import React from 'react';
import { Wine, AlertTriangle, MapPin, ExternalLink, Presentation, CheckCircle2, DollarSign } from 'lucide-react';
import { COMPANY_INFO } from '../data/auditData';

interface HeaderProps {
  onOpenPitch: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  completedActionsCount: number;
  totalActionsCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenPitch,
  activeTab,
  setActiveTab,
  completedActionsCount,
  totalActionsCount,
}) => {
  return (
    <header className="bg-gradient-to-r from-stone-900 via-[#4a121e] to-stone-900 text-white border-b border-rose-900/40 shadow-xl sticky top-0 z-40">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-rose-950 via-amber-950 to-rose-950 text-rose-200 text-xs py-1.5 px-4 font-medium flex items-center justify-between border-b border-rose-800/30">
        <div className="flex items-center gap-2 max-w-7xl mx-auto w-full">
          <span className="inline-flex items-center gap-1 bg-red-900/80 text-red-200 px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider animate-pulse border border-red-500/30">
            <AlertTriangle className="w-3 h-3 text-red-400" />
            Auditoría de Impacto Crítico
          </span>
          <span className="truncate">
            Análisis Ecosistema Digital para <strong className="text-amber-300 font-semibold">{COMPANY_INFO.name}</strong> • San Javier de Loncomilla, Maule
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Company Brand & Context */}
          <div className="flex items-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-700 to-amber-700 p-0.5 shadow-lg shadow-rose-950/50 flex-shrink-0">
              <div className="w-full h-full bg-stone-950 rounded-[10px] flex items-center justify-center">
                <Wine className="w-6 h-6 text-amber-400" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-stone-100 font-serif">
                  {COMPANY_INFO.name}
                </h1>
                <a
                  href={COMPANY_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs bg-rose-900/40 hover:bg-rose-900/70 text-rose-300 px-2.5 py-1 rounded-full border border-rose-700/50 transition-all"
                >
                  <span>{COMPANY_INFO.handle}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="bg-red-950/80 text-red-300 text-xs px-2.5 py-0.5 rounded-full border border-red-800/60 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                  {COMPANY_INFO.websiteStatus}
                </span>
              </div>

              <p className="text-xs text-stone-300 mt-1 flex items-center gap-1.5 flex-wrap">
                <span className="flex items-center gap-1 text-stone-300">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {COMPANY_INFO.location}
                </span>
                <span className="text-stone-600">•</span>
                <span className="text-stone-300">Página Web Convertible a WhatsApp + Ficha Google Negocio + Maps + SEO/GEO/AEO</span>
              </p>
            </div>
          </div>

          {/* Quick Metrics & Pitch Action Button */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap justify-between lg:justify-end">
            
            {/* Score Badge */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-xl px-3.5 py-2 flex items-center gap-3 shadow-inner">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <svg className="w-10 h-10 transform -rotate-90">
                  <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="3.5" className="text-stone-800" fill="transparent" />
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeDasharray={100}
                    strokeDashoffset={100 - COMPANY_INFO.overallHealthScore}
                    className="text-red-500 transition-all duration-1000"
                    fill="transparent"
                  />
                </svg>
                <span className="absolute text-xs font-bold text-red-400">
                  {COMPANY_INFO.overallHealthScore}%
                </span>
              </div>
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 block">Salud Digital</span>
                <span className="text-xs font-semibold text-red-300 block">Nivel Crítico</span>
              </div>
            </div>

            {/* Estimated Lost Monthly Revenue Badge */}
            <div className="bg-gradient-to-br from-red-950/80 to-amber-950/80 border border-red-700/50 rounded-xl px-3.5 py-2 flex items-center gap-2.5 shadow-md">
              <div className="w-8 h-8 rounded-lg bg-red-900/50 flex items-center justify-center text-red-300 border border-red-700/40">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-red-300 block">Fuga Estimada</span>
                <span className="text-sm font-bold text-amber-300 block">
                  -${(COMPANY_INFO.estimatedMonthlyLossCLP / 1000000).toFixed(2)}M CLP/mes
                </span>
              </div>
            </div>

            {/* Pitch Mode CTA Button */}
            <button
              onClick={onOpenPitch}
              className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-lg shadow-amber-900/30 border border-amber-300/40 transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 ml-auto"
            >
              <Presentation className="w-4 h-4" />
              <span className="whitespace-nowrap">Modo Presentación Directiva</span>
            </button>
          </div>

        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 sm:gap-2 mt-5 overflow-x-auto pb-1 scrollbar-none border-t border-stone-800/80 pt-3">
          {[
            { id: 'leakage', label: '🚨 Fuga de Tráfico (Atrapafugas)', icon: AlertTriangle, highlight: true },
            { id: 'semaforo', label: '🚦 Semáforo Audit (6 Áreas)', icon: CheckCircle2 },
            { id: 'actions', label: `📋 10 Acciones Inmediatas (${completedActionsCount}/${totalActionsCount})`, icon: CheckCircle2 },
            { id: 'beforeafter', label: '⚖️ Antes vs Después', icon: ExternalLink },
            { id: 'funnel', label: '🗺️ Arquitectura del Embudo Web', icon: Wine },
            { id: 'calculator', label: '🧮 Calculadora de Pérdidas CLP', icon: DollarSign },
            { id: 'solucion', label: '🚀 Solución Definitiva CTA', icon: ExternalLink, ctaHighlight: true },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isActive
                    ? tab.ctaHighlight
                      ? 'bg-emerald-500 text-stone-950 font-black shadow-lg shadow-emerald-950 ring-2 ring-emerald-400'
                      : tab.highlight
                      ? 'bg-red-900/90 text-amber-200 border border-red-500 shadow-md shadow-red-950'
                      : 'bg-amber-500 text-stone-950 font-bold shadow-md'
                    : tab.ctaHighlight
                    ? 'bg-emerald-950/80 text-emerald-300 hover:bg-emerald-900 hover:text-white border border-emerald-600/60 font-bold'
                    : 'bg-stone-900/60 text-stone-300 hover:bg-stone-800 hover:text-white border border-stone-800/60'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
};
