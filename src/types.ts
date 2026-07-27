export type PriorityLevel = 'Crítica' | 'Alta' | 'Media';
export type StatusLevel = 'rojo' | 'amarillo' | 'verde';

export interface AuditArea {
  id: string;
  name: string;
  category: string;
  status: StatusLevel;
  score: number; // 0 - 100
  problemSummary: string;
  impactDescription: string;
  keyMetrics: { label: string; current: string; potential: string }[];
  recommendation: string;
  isOptional?: boolean;
  optionalBadgeText?: string;
}

export interface ActionItem {
  id: number;
  title: string;
  category: string;
  priority: PriorityLevel;
  timeframe: string; // e.g. "Días 1-3", "Semana 1"
  impactROI: string; // e.g. "Muy Alto (+300% leads)"
  problemSolved: string;
  implementationSteps: string[];
  toolsRequired: string[];
  isCompleted?: boolean;
}

export interface KeywordSearchLoss {
  keyword: string;
  monthlySearchesMaule: number;
  intentLevel: 'Muy Alta (Compra/Reserva)' | 'Alta (Exploración)' | 'Media';
  lostLeadsPerMonth: number;
  potentialRevenueCLP: number;
  searchEngine: 'Google Search' | 'Google Maps' | 'IA (ChatGPT/Gemini)' | 'Social/Meta';
}

export interface BeforeAfterFeature {
  area: string;
  beforeState: string;
  afterState: string;
  metricChange: string;
  iconName: string;
}

export interface FunnelStep {
  stepNumber: number;
  name: string;
  channel: string;
  description: string;
  conversionRole: string;
  keyAssets: string[];
}
