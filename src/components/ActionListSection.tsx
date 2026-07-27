import React, { useState } from 'react';
import { TEN_IMMEDIATE_ACTIONS } from '../data/auditData';
import { ActionItem, PriorityLevel } from '../types';
import { CheckSquare, Square, ChevronDown, ChevronUp, Zap, Clock, ShieldAlert, Sparkles, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ActionListSectionProps {
  actions: ActionItem[];
  onToggleAction: (id: number) => void;
}

export const ActionListSection: React.FC<ActionListSectionProps> = ({ actions, onToggleAction }) => {
  const [selectedPriority, setSelectedPriority] = useState<string>('all');
  const [expandedActionId, setExpandedActionId] = useState<number | null>(1); // Open first by default

  const completedCount = actions.filter((a) => a.isCompleted).length;
  const progressPercent = Math.round((completedCount / actions.length) * 100);

  const filteredActions = actions.filter((act) => {
    if (selectedPriority === 'all') return true;
    return act.priority === selectedPriority;
  });

  const getPriorityBadge = (priority: PriorityLevel) => {
    switch (priority) {
      case 'Crítica':
        return (
          <span className="bg-red-950 text-red-300 border border-red-600/80 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            Prioridad Crítica
          </span>
        );
      case 'Alta':
        return (
          <span className="bg-amber-950 text-amber-300 border border-amber-600/80 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider">
            Prioridad Alta
          </span>
        );
      case 'Media':
        return (
          <span className="bg-stone-800 text-stone-300 border border-stone-700 px-2.5 py-0.5 rounded-full text-[11px] font-semibold uppercase tracking-wider">
            Prioridad Media
          </span>
        );
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Section Header & Progress Summary */}
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              <Zap className="w-4 h-4" />
              Plan Táctico de Ejecución
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              10 Acciones Inmediatas para Aumentar Ventas
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              Hoja de ruta secuencial diseñada para capturar la demanda perdida de San Javier y escalar ventas de vino y reservas.
            </p>
          </div>

          {/* Progress Tracker Widget */}
          <div className="bg-stone-950 border border-stone-800 rounded-2xl p-4 min-w-[240px] space-y-2">
            <div className="flex justify-between items-center text-xs font-bold">
              <span className="text-stone-300">Progreso de Implementación</span>
              <span className="text-amber-400">{completedCount} / 10 ({progressPercent}%)</span>
            </div>
            <div className="h-3 w-full bg-stone-900 rounded-full overflow-hidden border border-stone-800">
              <div
                className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
            <span className="text-[11px] text-stone-400 block text-right">
              {completedCount === 10 ? '¡Plan completado al 100%!' : 'Haz clic en el checkbox para marcar acciones listadas'}
            </span>
          </div>
        </div>

        {/* Priority Filter Tabs */}
        <div className="flex items-center gap-2 pt-2 border-t border-stone-800 overflow-x-auto pb-1">
          <span className="text-xs text-stone-400 font-semibold mr-2">Filtrar por:</span>
          {['all', 'Crítica', 'Alta', 'Media'].map((p) => (
            <button
              key={p}
              onClick={() => setSelectedPriority(p)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                selectedPriority === p
                  ? 'bg-amber-500 text-stone-950 border-amber-400'
                  : 'bg-stone-950 text-stone-300 border-stone-800 hover:bg-stone-800'
              }`}
            >
              {p === 'all' ? 'Todas (10)' : p}
            </button>
          ))}
        </div>
      </div>

      {/* Action Items List */}
      <div className="space-y-4">
        {filteredActions.map((item) => {
          const isExpanded = expandedActionId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-lg ${
                item.isCompleted
                  ? 'bg-emerald-950/20 border-emerald-800/60 opacity-90'
                  : isExpanded
                  ? 'bg-stone-900 border-amber-500/80 shadow-amber-950/20'
                  : 'bg-stone-900/90 hover:bg-stone-800/80 border-stone-800'
              }`}
            >
              
              {/* Card Header row */}
              <div
                className="p-4 sm:p-5 flex items-start sm:items-center justify-between gap-3 cursor-pointer select-none"
                onClick={() => setExpandedActionId(isExpanded ? null : item.id)}
              >
                <div className="flex items-start sm:items-center gap-3.5 flex-1">
                  
                  {/* Checkbox */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleAction(item.id);
                    }}
                    className="mt-0.5 sm:mt-0 text-amber-400 hover:text-amber-300 transition-transform active:scale-90"
                  >
                    {item.isCompleted ? (
                      <CheckSquare className="w-6 h-6 text-emerald-400" />
                    ) : (
                      <Square className="w-6 h-6 text-stone-500 hover:text-amber-400" />
                    )}
                  </button>

                  {/* Step Number Circle */}
                  <div className="w-7 h-7 rounded-lg bg-stone-950 border border-stone-800 flex items-center justify-center font-bold text-xs text-amber-400 flex-shrink-0">
                    #{item.id}
                  </div>

                  {/* Title & Metadata */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className={`text-base font-bold font-serif ${item.isCompleted ? 'line-through text-stone-400' : 'text-white'}`}>
                        {item.title}
                      </h3>
                      {getPriorityBadge(item.priority)}
                    </div>

                    <div className="flex items-center gap-3 text-xs text-stone-400 flex-wrap">
                      <span className="flex items-center gap-1 text-amber-300/90 font-medium">
                        <Clock className="w-3 h-3 text-amber-400" />
                        {item.timeframe}
                      </span>
                      <span>•</span>
                      <span className="text-stone-300 font-semibold">{item.category}</span>
                      <span>•</span>
                      <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60 text-[11px]">
                        {item.impactROI}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Expand Toggle Chevron */}
                <button
                  type="button"
                  className="p-1.5 rounded-lg bg-stone-950 text-stone-400 hover:text-white border border-stone-800"
                >
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {/* Expandable Step-by-Step Details */}
              {isExpanded && (
                <div className="p-5 sm:p-6 bg-stone-950/90 border-t border-stone-800 space-y-5 animate-fadeIn">
                  
                  {/* Problem Solved Callout */}
                  <div className="bg-red-950/40 border border-red-900/60 rounded-xl p-4 text-xs space-y-1">
                    <span className="text-red-300 font-bold uppercase text-[11px] block">
                      Punto Débil que Soluciona esta Acción:
                    </span>
                    <p className="text-stone-200 leading-relaxed">
                      {item.problemSolved}
                    </p>
                  </div>

                  {/* Implementation Steps Checklist */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                      Pasos Clave de Ejecución Técnica:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.implementationSteps.map((step, idx) => (
                        <div key={idx} className="bg-stone-900/90 border border-stone-800 rounded-xl p-3 text-xs text-stone-300 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools Required */}
                  <div className="flex items-center gap-2 pt-2 border-t border-stone-900 flex-wrap">
                    <span className="text-xs text-stone-400 font-semibold flex items-center gap-1">
                      <Wrench className="w-3.5 h-3.5 text-amber-400" />
                      Herramientas Recomendadas:
                    </span>
                    {item.toolsRequired.map((tool, idx) => (
                      <span key={idx} className="bg-stone-800 text-stone-200 border border-stone-700 text-[11px] px-2.5 py-0.5 rounded-full font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
};
