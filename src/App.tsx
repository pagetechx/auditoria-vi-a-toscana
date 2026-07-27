import React, { useState } from 'react';
import { Header } from './components/Header';
import { TrafficLeakageSection } from './components/TrafficLeakageSection';
import { TrafficLightGrid } from './components/TrafficLightGrid';
import { ActionListSection } from './components/ActionListSection';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { FunnelArchitectureSection } from './components/FunnelArchitectureSection';
import { FinancialCalculator } from './components/FinancialCalculator';
import { DefinitiveSolutionCTA } from './components/DefinitiveSolutionCTA';
import { PitchPresentationModal } from './components/PitchPresentationModal';
import { TEN_IMMEDIATE_ACTIONS, COMPANY_INFO } from './data/auditData';
import { ActionItem } from './types';
import { Wine } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('leakage');
  const [isPitchOpen, setIsPitchOpen] = useState<boolean>(false);
  const [actionItems, setActionItems] = useState<ActionItem[]>(TEN_IMMEDIATE_ACTIONS);

  const handleToggleAction = (id: number) => {
    setActionItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isCompleted: !item.isCompleted } : item))
    );
  };

  const completedActionsCount = actionItems.filter((a) => a.isCompleted).length;

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-rose-900 selection:text-amber-200">
      
      {/* App Header */}
      <Header
        onOpenPitch={() => setIsPitchOpen(true)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        completedActionsCount={completedActionsCount}
        totalActionsCount={actionItems.length}
      />

      {/* Main Content Viewport */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {activeTab === 'leakage' && <TrafficLeakageSection />}
        
        {activeTab === 'semaforo' && <TrafficLightGrid />}

        {activeTab === 'actions' && (
          <ActionListSection actions={actionItems} onToggleAction={handleToggleAction} />
        )}

        {activeTab === 'beforeafter' && <BeforeAfterSection />}

        {activeTab === 'funnel' && <FunnelArchitectureSection />}

        {activeTab === 'calculator' && <FinancialCalculator />}

        {activeTab === 'solucion' && <DefinitiveSolutionCTA />}

        {/* Global Definitive Solution CTA Closing Section at the bottom of every audit view */}
        {activeTab !== 'solucion' && <DefinitiveSolutionCTA />}

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-800 bg-stone-900/60 py-8 text-stone-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Wine className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-stone-300">
              {COMPANY_INFO.name} • Audit & Digital Sales System Engine
            </span>
            <span className="text-stone-600">|</span>
            <span>San Javier de Loncomilla, Chile</span>
          </div>

          <div className="flex items-center gap-4 text-stone-500">
            <span>Estrategia SEO • GEO • AEO • Meta Ads • Página Web</span>
            <span>•</span>
            <button
              onClick={() => setIsPitchOpen(true)}
              className="text-amber-400 hover:underline font-bold"
            >
              Informe Ejecutivo
            </button>
          </div>
        </div>
      </footer>

      {/* Pitch Executive Modal */}
      <PitchPresentationModal isOpen={isPitchOpen} onClose={() => setIsPitchOpen(false)} />

    </div>
  );
}
