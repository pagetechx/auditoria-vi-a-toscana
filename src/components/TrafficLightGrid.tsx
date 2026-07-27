import React, { useState } from 'react';
import { AUDIT_AREAS } from '../data/auditData';
import { AuditArea, StatusLevel } from '../types';
import { ShieldAlert, AlertTriangle, CheckCircle, ChevronRight, BarChart3, Target, ArrowUpRight, Filter, Zap } from 'lucide-react';

export const TrafficLightGrid: React.FC = () => {
  const [filterStatus, setFilterStatus] = useState<'all' | 'rojo' | 'amarillo' | 'verde'>('all');
  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);

  const countRojo = AUDIT_AREAS.filter((a) => a.status === 'rojo').length;
  const countAmarillo = AUDIT_AREAS.filter((a) => a.status === 'amarillo').length;
  const countVerde = AUDIT_AREAS.filter((a) => a.status === 'verde').length;

  const filteredAreas = AUDIT_AREAS.filter((area) => {
    if (filterStatus === 'all') return true;
    return area.status === filterStatus;
  });

  const getStatusBadge = (status: StatusLevel) => {
    switch (status) {
      case 'rojo':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-950 text-red-300 border border-red-600/60 shadow-sm animate-pulse">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-sm shadow-red-500"></span>
            Nivel Crítico (Rojo)
          </span>
        );
      case 'amarillo':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-950 text-amber-300 border border-amber-600/60 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm shadow-amber-500"></span>
            En Riesgo (Amarillo)
          </span>
        );
      case 'verde':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-950 text-emerald-300 border border-emerald-600/60 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500"></span>
            Optimizado (Verde)
          </span>
        );
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header & Status Summary Bar */}
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              <BarChart3 className="w-4 h-4" />
              Matriz Ecosistémica de Evaluación
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              Gráfico de Semáforo Digital: 6 Áreas Clave
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              Evaluación técnica y comercial de la viabilidad digital de Viña Casa Toscana en San Javier.
            </p>
          </div>

          {/* Semáforo Counter Badges */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border ${
                filterStatus === 'all'
                  ? 'bg-amber-500 text-stone-950 border-amber-400'
                  : 'bg-stone-800 text-stone-300 border-stone-700 hover:bg-stone-700'
              }`}
            >
              Todas (6)
            </button>
            <button
              onClick={() => setFilterStatus('rojo')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                filterStatus === 'rojo'
                  ? 'bg-red-600 text-white border-red-400'
                  : 'bg-red-950/70 text-red-300 border-red-800/80 hover:bg-red-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-red-400"></span>
              Críticas ({countRojo})
            </button>
            <button
              onClick={() => setFilterStatus('amarillo')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                filterStatus === 'amarillo'
                  ? 'bg-amber-500 text-stone-950 border-amber-300'
                  : 'bg-amber-950/70 text-amber-300 border-amber-800/80 hover:bg-amber-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              Riesgo ({countAmarillo})
            </button>
          </div>
        </div>

        {/* Global Progress Line Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-stone-300 font-medium">
            <span>Distribución de Salud Ecosistémica</span>
            <span className="text-amber-400 font-bold">Score Global: 28%</span>
          </div>
          <div className="h-3.5 w-full bg-stone-950 rounded-full overflow-hidden flex border border-stone-800">
            <div style={{ width: `${(countRojo / 6) * 100}%` }} className="bg-red-600 h-full transition-all"></div>
            <div style={{ width: `${(countAmarillo / 6) * 100}%` }} className="bg-amber-500 h-full transition-all"></div>
            <div style={{ width: `${(countVerde / 6) * 100}%` }} className="bg-emerald-500 h-full transition-all"></div>
          </div>
          <div className="flex justify-between text-[11px] text-stone-400 pt-1">
            <span className="text-red-400 font-semibold">{((countRojo / 6) * 100).toFixed(0)}% Estado Crítico</span>
            <span className="text-amber-400 font-semibold">{((countAmarillo / 6) * 100).toFixed(0)}% Requiere Ajuste</span>
            <span className="text-emerald-400 font-semibold">0% Optimizado</span>
          </div>
        </div>
      </div>

      {/* Grid of Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAreas.map((area) => {
          const isSelected = selectedAreaId === area.id;
          return (
            <div
              key={area.id}
              className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl ${
                area.status === 'rojo'
                  ? 'bg-gradient-to-b from-stone-900 via-stone-900 to-rose-950/40 border-red-900/60 hover:border-red-500'
                  : 'bg-gradient-to-b from-stone-900 via-stone-900 to-amber-950/40 border-amber-900/60 hover:border-amber-500'
              }`}
            >
              <div className="p-6 space-y-4">
                
                {/* Area Header & Status */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 bg-stone-950/80 px-2.5 py-1 rounded-lg border border-stone-800">
                      {area.category}
                    </span>
                    {getStatusBadge(area.status)}
                  </div>
                  {area.isOptional && (
                    <div className="inline-flex items-center gap-1.5 self-start bg-purple-950/90 text-purple-300 border border-purple-600/80 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm">
                      <Zap className="w-3 h-3 text-purple-400" />
                      <span>{area.optionalBadgeText || 'Opcional / Acelerador'}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white font-serif leading-snug">
                    {area.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex-1 bg-stone-950 h-2 rounded-full overflow-hidden border border-stone-800">
                      <div
                        className={`h-full ${area.status === 'rojo' ? 'bg-red-500' : 'bg-amber-500'}`}
                        style={{ width: `${area.score}%` }}
                      ></div>
                    </div>
                    <span className="text-xs font-extrabold text-stone-300">{area.score}/100</span>
                  </div>
                </div>

                {/* Problem Summary */}
                <div className="bg-stone-950/70 rounded-xl p-3.5 border border-stone-800 text-xs text-stone-300 space-y-1">
                  <span className="text-amber-300 font-bold block text-[11px] uppercase">Problema Detectado:</span>
                  <p className="leading-relaxed">{area.problemSummary}</p>
                </div>

                {/* Metrics Comparison */}
                <div className="space-y-2 pt-2 border-t border-stone-800/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block">
                    Métricas Clave: Actual vs Potencial
                  </span>
                  <div className="space-y-1.5">
                    {area.keyMetrics.map((m, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs bg-stone-950/40 px-3 py-1.5 rounded-lg">
                        <span className="text-stone-300">{m.label}:</span>
                        <div className="flex items-center gap-2">
                          <span className="text-red-400 font-semibold line-through text-[11px]">{m.current}</span>
                          <span className="text-stone-500">→</span>
                          <span className="text-emerald-400 font-bold">{m.potential}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Recommendation Action Footer */}
              <div className="bg-stone-950/90 p-4 border-t border-stone-800 space-y-2">
                <span className="text-[11px] font-bold uppercase text-emerald-400 flex items-center gap-1">
                  <Target className="w-3.5 h-3.5" />
                  Acción Correctora:
                </span>
                <p className="text-xs text-stone-300 leading-relaxed font-medium">
                  {area.recommendation}
                </p>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
