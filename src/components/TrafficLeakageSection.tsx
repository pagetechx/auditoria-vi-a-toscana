import React, { useState } from 'react';
import { KEYWORD_SEARCH_LOSSES } from '../data/auditData';
import { Search, MapPin, Bot, Globe, DollarSign, TrendingDown, ArrowRight, ShieldAlert, Sparkles, CheckCircle2, ChevronRight, Share2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const TrafficLeakageSection: React.FC = () => {
  const [selectedKeywordIndex, setSelectedKeywordIndex] = useState<number>(0);
  const [tourPriceCLP, setTourPriceCLP] = useState<number>(18000);
  const [wineBoxPriceCLP, setWineBoxPriceCLP] = useState<number>(35000);
  const [restaurantTicketCLP, setRestaurantTicketCLP] = useState<number>(25000);

  const totalMonthlySearches = KEYWORD_SEARCH_LOSSES.reduce((acc, curr) => acc + curr.monthlySearchesMaule, 0);
  const totalMonthlyLostLeads = KEYWORD_SEARCH_LOSSES.reduce((acc, curr) => acc + curr.lostLeadsPerMonth, 0);
  const totalMonthlyRevenueLossCLP = KEYWORD_SEARCH_LOSSES.reduce((acc, curr) => acc + curr.potentialRevenueCLP, 0);

  // Chart data: Current capture (< 25 leads) vs Captured with funnel (380 leads)
  const chartData = [
    { name: 'Sin Web / Sin Sistema', leads: 25, color: '#ef4444' },
    { name: 'Con Sistema Web + SEO + Maps', leads: 380, color: '#22c55e' },
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Mega High Impact Callout Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-950 via-[#5c1322] to-stone-950 text-white p-6 sm:p-8 lg:p-10 border-2 border-red-600/60 shadow-2xl shadow-red-950/80">
        
        {/* Glow Effects */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-900/90 text-red-200 border border-red-500/50 text-xs font-bold uppercase tracking-widest animate-pulse">
              <ShieldAlert className="w-4 h-4 text-red-400" />
              Diagnóstico de Fuga Crítica de Clientes
            </span>
            <span className="text-xs text-amber-300 font-medium bg-stone-900/80 px-3 py-1 rounded-full border border-stone-800">
              📍 San Javier de Loncomilla & Valle del Maule
            </span>
          </div>

          <div className="max-w-4xl space-y-3">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight text-white leading-tight">
              ¿Cuánto dinero y cuántos clientes está perdiendo <span className="text-amber-400 underline decoration-red-500 decoration-4">Viña Casa Toscana</span> cada mes?
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Actualmente, miles de turistas, amantes del vino y comensales buscan tours, catas, gastronomía y venta de vinos en San Javier de Loncomilla a través de <strong className="text-white">Google Search, Google Maps, ChatGPT y Perplexity</strong>. Al no contar con un sistema integrado de <strong className="text-amber-300">Pagina web convertible a wsp + ficha negocio google + google map + Posionamiento SEO, AEO y GEO</strong>, esta demanda activa es completamente absorbida por viñas competidoras.
            </p>

            {/* 3 Core System Pillars High Visibility Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <div className="inline-flex items-center gap-2 bg-stone-900/90 border border-amber-500/60 rounded-xl px-3.5 py-2 text-xs font-bold text-amber-200 shadow-lg shadow-amber-950/30">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>📍 Ficha Negocio Google + Google Maps</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-stone-900/90 border border-rose-500/60 rounded-xl px-3.5 py-2 text-xs font-bold text-rose-200 shadow-lg shadow-rose-950/30">
                <Globe className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span>🌐 Página Web Convertible a WhatsApp</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-stone-900/90 border border-emerald-500/60 rounded-xl px-3.5 py-2 text-xs font-bold text-emerald-200 shadow-lg shadow-emerald-950/30">
                <Search className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>🔍 Posicionamiento SEO, AEO y GEO</span>
              </div>
            </div>
          </div>

          {/* Key Metric Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-red-900/50">
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-lg">
              <div className="p-3 rounded-xl bg-red-950 text-red-400 border border-red-800/60">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-stone-400 font-semibold uppercase block">Búsquedas Mensuales en Maule</span>
                <span className="text-2xl font-black text-white">{totalMonthlySearches.toLocaleString()}</span>
                <span className="text-[11px] text-stone-400 block">Intención alta de compra/visita</span>
              </div>
            </div>

            <div className="bg-stone-900/90 border border-red-900/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-lg">
              <div className="p-3 rounded-xl bg-red-900/80 text-red-200 border border-red-500/50">
                <TrendingDown className="w-6 h-6 text-red-400" />
              </div>
              <div>
                <span className="text-xs text-red-300 font-semibold uppercase block">Leads Perdidos / Mes</span>
                <span className="text-2xl font-black text-red-400">~{totalMonthlyLostLeads} personas</span>
                <span className="text-[11px] text-red-300/80 block">No encuentran web ni reserva</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-950 to-amber-950 border border-amber-500/40 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-lg">
              <div className="p-3 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <DollarSign className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-xs text-amber-200 font-semibold uppercase block">Fuga Estimada Mensual</span>
                <span className="text-2xl font-black text-amber-300">${(totalMonthlyRevenueLossCLP / 1000000).toFixed(2)}M CLP</span>
                <span className="text-[11px] text-amber-200/90 font-medium block">Anual: ~${((totalMonthlyRevenueLossCLP * 12) / 1000000).toFixed(2)}M CLP / año</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Main Keyword Search Breakdown Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Keywords Table List */}
        <div className="lg:col-span-7 bg-stone-900/90 border border-stone-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-lg font-bold text-white font-serif flex items-center gap-2">
                <Search className="w-5 h-5 text-amber-400" />
                Desglose de Búsquedas Perdidas en San Javier y Maule
              </h3>
              <p className="text-xs text-stone-400">
                Toca cada término para analizar cómo se pierde el tráfico hoy
              </p>
            </div>
            <span className="text-xs font-semibold text-rose-300 bg-rose-950/60 border border-rose-800 px-2.5 py-1 rounded-full">
              {KEYWORD_SEARCH_LOSSES.length} Búsquedas Clave Analizadas
            </span>
          </div>

          <div className="space-y-3">
            {KEYWORD_SEARCH_LOSSES.map((item, idx) => {
              const isSelected = selectedKeywordIndex === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedKeywordIndex(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-stone-800 to-rose-950/60 border-rose-500 shadow-md'
                      : 'bg-stone-950/60 hover:bg-stone-800/80 border-stone-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-sm text-stone-100">{item.keyword}</span>
                        <span className="text-[10px] bg-amber-950/80 text-amber-300 px-2 py-0.5 rounded border border-amber-700/50 font-medium">
                          {item.searchEngine}
                        </span>
                      </div>
                      <div className="text-xs text-stone-400 flex items-center gap-3 flex-wrap">
                        <span>Búsquedas: <strong className="text-stone-200">{item.monthlySearchesMaule}/mes</strong></span>
                        <span>•</span>
                        <span>Intención: <strong className="text-amber-300">{item.intentLevel}</strong></span>
                      </div>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <span className="text-xs text-red-400 font-bold block">
                        -{item.lostLeadsPerMonth} leads/mes
                      </span>
                      <span className="text-xs text-amber-400 font-semibold block">
                        ~${(item.potentialRevenueCLP / 1000).toFixed(0)} mil CLP/mes
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Keyword Focus Box */}
        <div className="lg:col-span-5 space-y-6">
          {(() => {
            const activeKw = KEYWORD_SEARCH_LOSSES[selectedKeywordIndex];
            return (
              <div className="bg-gradient-to-b from-stone-900 to-stone-950 border border-rose-900/60 rounded-2xl p-6 shadow-xl space-y-5">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    Análisis de Fuga Específico
                  </span>
                  <span className="text-xs text-stone-400">Punto de Fuga #{selectedKeywordIndex + 1}</span>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white font-serif">"{activeKw.keyword}"</h4>
                  <p className="text-xs text-stone-300 mt-1">
                    Canal Principal: <strong className="text-amber-300">{activeKw.searchEngine}</strong>
                  </p>
                </div>

                <div className="bg-red-950/50 border border-red-900/60 rounded-xl p-4 space-y-2 text-xs">
                  <span className="text-red-300 font-bold uppercase block text-[11px]">¿Qué ocurre cuando alguien busca esto?</span>
                  <p className="text-stone-300 leading-relaxed">
                    El usuario escribe <strong className="text-white">"{activeKw.keyword}"</strong> buscando reservar un tour, comer en la viña o comprar vinos. Al no existir página web convertible a WhatsApp, ni ficha optimizada con agenda en tiempo real, el usuario no encuentra respuesta inmediata y <strong className="text-red-400">migra a otras viñas de la región del Maule</strong>.
                  </p>
                </div>

                {/* What the system recovers */}
                <div className="bg-stone-900 border border-emerald-900/60 rounded-xl p-4 space-y-2 text-xs">
                  <span className="text-emerald-400 font-bold uppercase block text-[11px]">Solución con el Sistema Integrado</span>
                  <ul className="space-y-1.5 text-stone-300">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>SEO/GEO Local:</strong> Aparecerás en el Top 3 de Google Maps para San Javier.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Página Web Convertible:</strong> El cliente navega por el catálogo y hace clic para consultar o reservar por WhatsApp.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Canal de WhatsApp:</strong> Recibe la consulta al instante y entrega la información requerida.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-stone-800 flex justify-between items-center text-xs">
                  <span className="text-stone-400">Recuperación estimada:</span>
                  <span className="font-bold text-emerald-400 text-sm">
                    ~${(activeKw.potentialRevenueCLP / 1000).toFixed(0)}.000 CLP / mes
                  </span>
                </div>
              </div>
            );
          })()}

          {/* Comparison Bar Chart Card */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 shadow-xl space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300">
              Captura de Leads Mensuales: Actual vs Con Sistema Web + WhatsApp + Maps
            </h4>
            <div className="h-44 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                  <XAxis type="number" stroke="#a8a29e" fontSize={11} />
                  <YAxis type="category" dataKey="name" stroke="#f5f5f4" fontSize={10} width={130} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                    formatter={(val: any) => [`${val} leads/mes`, 'Captura estimada']}
                  />
                  <Bar dataKey="leads" radius={[0, 8, 8, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-[11px] text-stone-400 text-center italic">
              Con el sistema integrado se multiplica por 15x la captación efectiva de clientes.
            </p>
          </div>
        </div>

      </div>

      {/* The 5 Key Leakage Points (Los 5 Agujeros de la Red) */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full border border-amber-800/60 inline-block">
            Análisis de Puntos Ciegos
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
            Los 5 Fuga-Puntos de Viña Casa Toscana y Cómo Taparlos
          </h3>
          <p className="text-stone-300 text-xs sm:text-sm">
            Este es el sistema completo de embudo que falta implementar para transformar la viña en un canal de ventas digital altamente rentable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          
          {/* Hole 1: No Website / Landings */}
          <div className="bg-stone-950/80 border border-red-900/50 rounded-2xl p-5 space-y-3 relative overflow-hidden group hover:border-red-500 transition-all">
            <div className="w-10 h-10 rounded-xl bg-red-950 text-red-400 flex items-center justify-center font-bold text-lg border border-red-800">
              1
            </div>
            <h4 className="text-base font-bold text-stone-100 flex items-center gap-2">
              <Globe className="w-4 h-4 text-red-400" />
              Sin Página Web Convertible a WhatsApp
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              <strong>Fuga:</strong> El 80% de los compradores no quiere escribir por Instagram DM para pedir un catálogo en PDF. Buscan un sitio web rápido con catálogo de vinos, fotos de la viña y botón directo a WhatsApp.
            </p>
            <div className="pt-2 border-t border-stone-800 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Solución: Página Web convertible a WhatsApp con catálogo y reservas.
            </div>
          </div>

          {/* Hole 2: Google Business & Local Maps */}
          <div className="bg-stone-950/80 border border-red-900/50 rounded-2xl p-5 space-y-3 relative overflow-hidden group hover:border-red-500 transition-all">
            <div className="w-10 h-10 rounded-xl bg-red-950 text-red-400 flex items-center justify-center font-bold text-lg border border-red-800">
              2
            </div>
            <h4 className="text-base font-bold text-stone-100 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-red-400" />
              Ficha Negocio Google & Google Maps Desaprovechados
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              <strong>Fuga:</strong> Los turistas viajando por la Ruta 5 Sur buscan en Google Maps "viñedo cerca de mí". Si la ficha no tiene catálogo, enlace directo a WhatsApp ni fotos HD de la gastronomía, pasan de largo.
            </p>
            <div className="pt-2 border-t border-stone-800 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Solución: SEO Local, Ficha Negocio Google + Maps + Botón a WhatsApp.
            </div>
          </div>

          {/* Hole 3: SEO / GEO / AEO AI Search */}
          <div className="bg-stone-950/80 border border-red-900/50 rounded-2xl p-5 space-y-3 relative overflow-hidden group hover:border-red-500 transition-all">
            <div className="w-10 h-10 rounded-xl bg-red-950 text-red-400 flex items-center justify-center font-bold text-lg border border-red-800">
              3
            </div>
            <h4 className="text-base font-bold text-stone-100 flex items-center gap-2">
              <Search className="w-4 h-4 text-red-400" />
              Sin Posicionamiento SEO, AEO y GEO
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              <strong>Fuga:</strong> Google, ChatGPT, Gemini y Perplexity no recomiendan Viña Casa Toscana porque la empresa no tiene código Schema estructurado ni web optimizada para algoritmos de búsqueda e IA en San Javier.
            </p>
            <div className="pt-2 border-t border-stone-800 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Solución: Posicionamiento SEO, AEO y GEO optimizado para San Javier Maule.
            </div>
          </div>

          {/* Hole 4: Direct WhatsApp Channel */}
          <div className="bg-stone-950/80 border border-red-900/50 rounded-2xl p-5 space-y-3 relative overflow-hidden group hover:border-red-500 transition-all">
            <div className="w-10 h-10 rounded-xl bg-red-950 text-red-400 flex items-center justify-center font-bold text-lg border border-red-800">
              4
            </div>
            <h4 className="text-base font-bold text-stone-100 flex items-center gap-2">
              <Bot className="w-4 h-4 text-red-400" />
              Atención Lenta por DM en Vez de WhatsApp
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              <strong>Fuga:</strong> El 65% de las consultas por tours ocurren de noche o fines de semana. Esperar horas para responder por Instagram DM mata el interés de compra del turista.
            </p>
            <div className="pt-2 border-t border-stone-800 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Solución: Canal directo de WhatsApp con catálogo e información rápida.
            </div>
          </div>

          {/* Hole 5: Meta Ads */}
          <div className="bg-stone-950/80 border border-red-900/50 rounded-2xl p-5 space-y-3 relative overflow-hidden group hover:border-red-500 transition-all md:col-span-2 lg:col-span-2">
            <div className="w-10 h-10 rounded-xl bg-red-950 text-red-400 flex items-center justify-center font-bold text-lg border border-red-800">
              5
            </div>
            <h4 className="text-base font-bold text-stone-100 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-red-400" />
              Publicidad en Meta Ads Desconectada de WhatsApp
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              <strong>Fuga:</strong> Oprimir 'Promocionar publicación' en Instagram desperdicia presupuesto en 'Me Gusta' vacíos. Falta dirigir los anuncios hacia una Página Web convertible a WhatsApp para captar visitantes de Santiago, Talca o Concepción.
            </p>
            <div className="pt-2 border-t border-stone-800 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Solución: Campañas Meta Ads dirigidas a Página Web convertible a WhatsApp.
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
