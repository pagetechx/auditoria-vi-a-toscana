import React, { useState } from 'react';
import {
  ShieldAlert,
  Zap,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Globe,
  MapPin,
  Search,
  CheckCircle2,
  Lock,
  Clock,
  Wine,
  PhoneCall,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/auditData';

export const DefinitiveSolutionCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // Formatted WhatsApp message link
  const whatsappNumber = '56950901627'; // Contact phone number
  const customMessage = encodeURIComponent(
    `Hola, revisé la Auditoría Digital de ${COMPANY_INFO.name}. Quiero implementar la Solución Definitiva (Página Web + Google Maps + SEO/GEO + WhatsApp) para detener la fuga de $6.85M CLP/mes y asegurar la exclusividad en San Javier.`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${customMessage}`;

  const handleActionClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(whatsappUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="solucion-definitiva" className="relative mt-12 space-y-8 scroll-mt-24">
      {/* Decorative Glow Background */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-amber-500/10 via-rose-500/5 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Main Container Card */}
      <div className="relative bg-gradient-to-b from-stone-900 via-stone-950 to-black border-2 border-amber-500/50 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-amber-950/40 space-y-8 overflow-hidden">
        
        {/* Top Urgency Header Banner */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-red-950/80 via-amber-950/60 to-stone-900 border border-red-800/80 rounded-2xl px-4 py-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-rose-300 font-bold">
            <ShieldAlert className="w-5 h-5 text-red-400 animate-pulse flex-shrink-0" />
            <span>ADVERTENCIA COMERCIAL DE ALTO IMPACTO:</span>
          </div>
          <div className="flex items-center gap-2 text-amber-200 font-mono font-bold">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Fuga estimada hoy: <span className="text-red-400">$228.333 CLP / día</span></span>
          </div>
        </div>

        {/* PNL Powerful Hook & Framing */}
        <div className="text-center space-y-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/40 rounded-full px-4 py-1.5 text-xs font-black text-amber-300 uppercase tracking-widest shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400" />
            LA SOLUCIÓN DEFINITIVA • ECOSISTEMA DE DOMINACIÓN DIGITAL
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white font-serif leading-tight">
            ¿Vas a seguir regalando <span className="text-amber-400 underline decoration-rose-500 decoration-4">$6.850.000 CLP al mes</span> a la competencia o vas a tomar el control hoy?
          </h2>

          {/* PNL Sensory Reframing Text */}
          <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-5 sm:p-7 text-left space-y-4 shadow-xl text-stone-300 text-sm sm:text-base leading-relaxed">
            <p className="font-medium text-stone-200">
              <strong className="text-amber-300">Tómate 30 segundos para reflexionar en esto:</strong> Este fin de semana, decenas de turistas de Santiago, Talca y Concepción tomarán la decisión de dónde almorzar, dónde realizar un tour enológico y dónde comprar cajas de vino artesanal en San Javier de Loncomilla.
            </p>
            <p>
              Buscarán en <strong className="text-white">Google Maps, Google Search y ChatGPT</strong> palabras como <em>"dónde comprar vino en San Javier"</em>, <em>"viñedos artesanales"</em> o <em>"tours de viña"</em>.
            </p>
            <p className="border-l-4 border-rose-500 pl-4 py-1 text-stone-200 italic font-serif">
              "Si no cuentas con el Sistema Definitivo instalado, esa gente no te verá. No sabrán que existes. Y sin dudarlo, harán clic en la viña vecina, les enviarán un mensaje y gastarán sus $150.000, $300.000 o $500.000 en el mostrador de tu competencia directos a su caja registrada."
            </p>
            <p className="font-semibold text-amber-200">
              Postergarlo no es 'ahorrar': es perder $228.000 CLP cada día que pasa. La solución no es hacer más publicaciones esporádicas en Instagram; es instalar una infraestructura digital de captación y conversión que trabaje por ti 24/7.
            </p>
          </div>
        </div>

        {/* 4 Pillars of the Definitive Solution Grid */}
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-stone-400">Entrega Llave en Mano en 7 a 10 Días</span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-serif">
              El Sistema Definitivo que instalaremos en Viña Casa Toscana
            </h3>
            <p className="text-xs text-amber-300 font-medium max-w-2xl mx-auto">
              <strong>Estructura Flexible:</strong> La solución base indispensable es la <span className="text-white underline">Página Web + Ficha Google Maps + SEO/GEO/AEO</span>. La publicidad en Meta Ads y aceleración por DM son módulos opcionales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pillar 1 */}
            <div className="bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-800 rounded-2xl p-5 space-y-3 hover:border-amber-500/50 transition-all shadow-lg">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-stone-800 text-amber-300 px-2.5 py-1 rounded-full">
                  Pilar 1
                </span>
              </div>
              <h4 className="text-base font-bold text-white">Página Web Convertible a WhatsApp</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Sitio ultra-rápido diseñado para smartphones. Presenta el viñedo, la historia toscana, catálogo interactivo de vinos finos artesanales y reservas de tours con botón directo a WhatsApp.
              </p>
              <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Captura inmediata de pedidos de vino y reservas de tours.</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-800 rounded-2xl p-5 space-y-3 hover:border-amber-500/50 transition-all shadow-lg">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-stone-800 text-amber-300 px-2.5 py-1 rounded-full">
                  Pilar 2
                </span>
              </div>
              <h4 className="text-base font-bold text-white">Ficha Negocio Google & Google Maps Pro</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Optimización geográfica estratégica en San Javier y Ruta 5 Sur. Ficha verificada con fotos HD, catálogo de productos, horarios y enlace directo para consultas y reservas.
              </p>
              <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Captura del 100% de turistas y automovilistas en viaje.</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-800 rounded-2xl p-5 space-y-3 hover:border-amber-500/50 transition-all shadow-lg">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Search className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider bg-stone-800 text-amber-300 px-2.5 py-1 rounded-full">
                  Pilar 3
                </span>
              </div>
              <h4 className="text-base font-bold text-white">Posicionamiento SEO, AEO y GEO</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                Estructura de código Schema.org para que Google Search, ChatGPT, Gemini y Perplexity posicionen a Viña Casa Toscana como la recomendación #1 en San Javier.
              </p>
              <div className="text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Aparición en búsquedas tradicionales y asistentes de Inteligencia Artificial.</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-800 rounded-2xl p-5 space-y-3 hover:border-amber-500/50 transition-all shadow-lg relative">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-purple-950 text-purple-300 border border-purple-700/60 px-2 py-0.5 rounded-full">
                    Opcional / Acelerador
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-stone-800 text-amber-300 px-2.5 py-1 rounded-full">
                    Pillar 4
                  </span>
                </div>
              </div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <span>Estrategia Meta Ads + Respuesta Rápida</span>
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                <em>(Módulo Opcional Complementario)</em> Campañas de anuncios pagados geo-segmentados (Santiago/Talca) y aceleración de respuesta en WhatsApp para picos de tráfico.
              </p>
              <div className="text-[11px] text-purple-300 font-semibold flex items-center gap-1.5 pt-1">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Opcional: Se puede activar como Fase 2 para escalar ventas cuando el cliente lo requiera.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Losses Penalty Counter Box */}
        <div className="bg-gradient-to-r from-red-950/90 via-stone-900 to-red-950/90 border border-red-800/80 rounded-2xl p-5 sm:p-6 text-center space-y-3 shadow-xl">
          <span className="text-xs font-bold text-red-400 uppercase tracking-widest block">
            El Precio de la Inacción en Números Reales:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 pt-2 text-center">
            <div className="bg-stone-950/80 border border-red-900/60 rounded-xl p-3">
              <span className="text-xs text-stone-400 block">En 7 días de duda:</span>
              <span className="text-base font-black text-rose-400 font-serif">-$1.598.000 CLP</span>
            </div>
            <div className="bg-stone-950/80 border border-red-900/60 rounded-xl p-3">
              <span className="text-xs text-stone-400 block">En 15 días de duda:</span>
              <span className="text-base font-black text-rose-400 font-serif">-$3.425.000 CLP</span>
            </div>
            <div className="bg-stone-950/80 border border-red-900/60 rounded-xl p-3">
              <span className="text-xs text-stone-400 block">En 30 días (1 mes):</span>
              <span className="text-lg font-black text-red-400 font-serif">-$6.850.000 CLP</span>
            </div>
            <div className="bg-stone-950/80 border border-amber-500/60 rounded-xl p-3 bg-gradient-to-b from-stone-950 to-red-950/80">
              <span className="text-xs text-amber-300 font-bold block">Fuga Anual (12 meses):</span>
              <span className="text-lg font-black text-amber-400 font-serif">-$82.200.000 CLP</span>
            </div>
          </div>
          <p className="text-xs text-stone-300 pt-1">
            Monto de fuga: <strong className="text-white">$6.85M CLP al mes</strong> que suman <strong className="text-amber-300">$82.20M CLP al año</strong> directo a la competencia por no contar con el sistema digital.
          </p>
        </div>

        {/* Exclusivity Guarantee & Scarcity Badge */}
        <div className="bg-stone-900/90 border border-amber-500/40 rounded-2xl p-5 space-y-3 text-xs sm:text-sm text-stone-300">
          <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
            <Lock className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span>⚠️ GARANTÍA DE EXCLUSIVIDAD TERRITORIAL EN SAN JAVIER</span>
          </div>
          <p className="leading-relaxed">
            Para garantizar la dominación del mercado y el máximo retorno de inversión, <strong className="text-white">solo trabajamos con UNA viña o bodega por micro-zona en San Javier de Loncomilla</strong>.
            Si implementamos este sistema contigo, rechazaremos a la competencia local.
          </p>
          <div className="flex items-center gap-2 text-rose-300 font-semibold pt-1">
            <Zap className="w-4 h-4 text-rose-400 flex-shrink-0" />
            <span>Cupos limitados: Solo aceptamos 2 implementaciones simultáneas este mes para asegurar entrega en 7 días.</span>
          </div>
        </div>

        {/* Direct Action Calls (CTAs) */}
        <div className="space-y-4 pt-2 text-center">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-white font-serif">
              Toma Acción Inmediata: Detén la Fuga y Asegura tu Dominio Digital
            </h3>
            <p className="text-[11px] sm:text-xs text-stone-300 leading-relaxed max-w-xl mx-auto">
              Por haber llegado hasta aquí, puede ver <u className="font-serif font-black text-amber-300 decoration-amber-400 decoration-2 underline-offset-4 uppercase tracking-wider text-xs sm:text-sm">TU NUEVA PÁGINA WEB</u> e iniciar la conversación directa por WhatsApp para reservar la implementación exclusiva de Viña Casa Toscana.
            </p>
          </div>

          {/* Primary High-Impact Pulsing CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto pt-2">
            <button
              onClick={handleActionClick}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-400 text-stone-950 font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-emerald-950/60 transition-all transform hover:-translate-y-1 hover:scale-102 cursor-pointer border border-emerald-300/40 group"
            >
              <MessageSquare className="w-6 h-6 fill-stone-950 group-hover:rotate-12 transition-transform" />
              <span>ACTIVAR SISTEMA Y VER PÁGINA</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Secondary Quick Call / Link Copy Option */}
          <div className="flex items-center justify-center gap-4 text-xs text-stone-400 pt-2 flex-wrap">
            <button
              onClick={handleActionClick}
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-bold hover:underline"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Atención Comercial WhatsApp (+56 9 5090 1627)</span>
            </button>
            <span>•</span>
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 text-stone-300 hover:text-white transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5" />
              <span>{copied ? '¡Enlace de propuesta copiado!' : 'Copiar enlace directo de propuesta'}</span>
            </button>
          </div>

          <div className="pt-4 border-t border-stone-800/80 flex items-center justify-center gap-2 text-[11px] text-stone-500">
            <Wine className="w-3.5 h-3.5 text-amber-500/70" />
            <span>Viña Casa Toscana • San Javier de Loncomilla • Valle del Maule, Chile</span>
          </div>
        </div>

      </div>
    </section>
  );
};
