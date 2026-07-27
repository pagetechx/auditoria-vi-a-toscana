import React, { useState } from 'react';
import { DollarSign, Calculator, TrendingUp, Sparkles, RefreshCw, AlertTriangle, CheckCircle2 } from 'lucide-react';

export const FinancialCalculator: React.FC = () => {
  // Interactive Slider States with defaults realistic for Maule/San Javier
  const [wineBoxPrice, setWineBoxPrice] = useState<number>(38000); // 6 bottles
  const [tourTicketPrice, setTourTicketPrice] = useState<number>(18000); // Tour + Cata
  const [restaurantTicketPrice, setRestaurantTicketPrice] = useState<number>(28000); // Gastronomy average spend per person

  const [monthlySearches, setMonthlySearches] = useState<number>(8500); // Total regional searches
  const [conversionRateWithFunnel, setConversionRateWithFunnel] = useState<number>(4.5); // % of searches that convert to paying customers

  // Calculations
  const totalPotentialClients = Math.round(monthlySearches * (conversionRateWithFunnel / 100)); // Total monthly buyers
  
  // Breakdown of buyers: 40% Tours, 35% Wine Boxes, 25% Restaurant
  const tourBuyers = Math.round(totalPotentialClients * 0.40);
  const wineBoxBuyers = Math.round(totalPotentialClients * 0.35);
  const restaurantBuyers = Math.round(totalPotentialClients * 0.25);

  const tourMonthlyRevenue = tourBuyers * tourTicketPrice;
  const wineBoxMonthlyRevenue = wineBoxBuyers * wineBoxPrice;
  const restaurantMonthlyRevenue = restaurantBuyers * restaurantTicketPrice;

  const totalMonthlyPotentialRevenue = tourMonthlyRevenue + wineBoxMonthlyRevenue + restaurantMonthlyRevenue;
  const totalAnnualPotentialRevenue = totalMonthlyPotentialRevenue * 12;

  // Currently capturing only ~5% of this potential without website
  const currentCapturedMonthly = Math.round(totalMonthlyPotentialRevenue * 0.05);
  const monthlyLostMoney = totalMonthlyPotentialRevenue - currentCapturedMonthly;
  const annualLostMoney = monthlyLostMoney * 12;

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* Header */}
      <div className="bg-stone-900 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              <Calculator className="w-4 h-4" />
              Simulador Financiero Personalizable
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">
              Calculadora de Fuga Económica
            </h2>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              Ajusta los valores reales de tus productos para calcular exactamente cuánto dinero está dejando de ingresar a Viña Casa Toscana.
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-950 to-amber-950 border border-amber-500/50 rounded-2xl p-4 text-right">
            <span className="text-[11px] font-bold text-amber-300 uppercase block">Fuga Mensual Estimada</span>
            <span className="text-2xl font-black text-white">
              -${(monthlyLostMoney / 1000000).toFixed(2)}M CLP
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Sliders Control Panel */}
        <div className="lg:col-span-7 bg-stone-900/90 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
          <h3 className="text-lg font-bold text-white font-serif flex items-center gap-2 border-b border-stone-800 pb-3">
            <Sparkles className="w-5 h-5 text-amber-400" />
            Parámetros de Precios y Demanda en Maule
          </h3>

          <div className="space-y-5">
            
            {/* Slider 1: Tour Ticket Price */}
            <div className="space-y-2 bg-stone-950/80 p-4 rounded-2xl border border-stone-800">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-stone-200">Valor Ticket Promedio Tour + Cata por Persona:</span>
                <span className="text-amber-400 text-sm">${tourTicketPrice.toLocaleString()} CLP</span>
              </div>
              <input
                type="range"
                min={10000}
                max={45000}
                step={1000}
                value={tourTicketPrice}
                onChange={(e) => setTourTicketPrice(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-500">
                <span>$10.000 CLP</span>
                <span>$45.000 CLP</span>
              </div>
            </div>

            {/* Slider 2: Wine Box Price */}
            <div className="space-y-2 bg-stone-950/80 p-4 rounded-2xl border border-stone-800">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-stone-200">Valor Caja de Vino (6 botellas / Reserva):</span>
                <span className="text-amber-400 text-sm">${wineBoxPrice.toLocaleString()} CLP</span>
              </div>
              <input
                type="range"
                min={20000}
                max={90000}
                step={2000}
                value={wineBoxPrice}
                onChange={(e) => setWineBoxPrice(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-500">
                <span>$20.000 CLP</span>
                <span>$90.000 CLP</span>
              </div>
            </div>

            {/* Slider 3: Restaurant Spend */}
            <div className="space-y-2 bg-stone-950/80 p-4 rounded-2xl border border-stone-800">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-stone-200">Ticket Promedio Gastronomía / Restaurant por Comensal:</span>
                <span className="text-amber-400 text-sm">${restaurantTicketPrice.toLocaleString()} CLP</span>
              </div>
              <input
                type="range"
                min={15000}
                max={60000}
                step={1000}
                value={restaurantTicketPrice}
                onChange={(e) => setRestaurantTicketPrice(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-500">
                <span>$15.000 CLP</span>
                <span>$60.000 CLP</span>
              </div>
            </div>

            {/* Slider 4: Monthly Regional Searches */}
            <div className="space-y-2 bg-stone-950/80 p-4 rounded-2xl border border-stone-800">
              <div className="flex justify-between items-center text-xs font-bold">
                <span className="text-stone-200">Volumen Estimado de Búsquedas Mensuales (Google + Maps + IA):</span>
                <span className="text-amber-400 text-sm">{monthlySearches.toLocaleString()} búsquedas</span>
              </div>
              <input
                type="range"
                min={3000}
                max={20000}
                step={500}
                value={monthlySearches}
                onChange={(e) => setMonthlySearches(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-stone-500">
                <span>3.000 búsquedas</span>
                <span>20.000 búsquedas</span>
              </div>
            </div>

          </div>
        </div>

        {/* Real-time Calculation Results */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gradient-to-b from-stone-900 to-stone-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <h3 className="text-lg font-bold text-white font-serif border-b border-stone-800 pb-3 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
              Proyección de Pérdida vs Recuperación
            </h3>

            {/* Annual Losses Display */}
            <div className="bg-red-950/60 border border-red-800/80 rounded-2xl p-5 space-y-1 text-center">
              <span className="text-xs font-bold text-red-300 uppercase block tracking-wider">
                Fuga Económica Anual (Sin Sitio Web)
              </span>
              <span className="text-3xl sm:text-4xl font-black text-red-400 block font-serif">
                -${(annualLostMoney / 1000000).toFixed(1)} Millones CLP
              </span>
              <span className="text-[11px] text-red-300/80 block pt-1">
                Calculado sobre {monthlySearches.toLocaleString()} búsquedas activas al año en San Javier y Maule.
              </span>
            </div>

            {/* Potential Buyers Breakdown */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-stone-300 uppercase tracking-wider block">
                Nuevas Ventas Mensuales Capturables ({totalPotentialClients} Clientes/Mes):
              </span>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center bg-stone-900 p-3 rounded-xl border border-stone-800">
                  <span className="text-stone-300">🍷 Cajas de Vino Vendidas:</span>
                  <div className="text-right">
                    <span className="font-bold text-white block">+{wineBoxBuyers} Cajas/mes</span>
                    <span className="text-emerald-400 font-semibold text-[11px]">
                      +${(wineBoxMonthlyRevenue / 1000).toFixed(0)} mil CLP
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-stone-900 p-3 rounded-xl border border-stone-800">
                  <span className="text-stone-300">🎟️ Reservas de Tours & Catas:</span>
                  <div className="text-right">
                    <span className="font-bold text-white block">+{tourBuyers} Personas/mes</span>
                    <span className="text-emerald-400 font-semibold text-[11px]">
                      +${(tourMonthlyRevenue / 1000).toFixed(0)} mil CLP
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-stone-900 p-3 rounded-xl border border-stone-800">
                  <span className="text-stone-300">🍽️ Comensales Restaurant Viña:</span>
                  <div className="text-right">
                    <span className="font-bold text-white block">+{restaurantBuyers} Comensales/mes</span>
                    <span className="text-emerald-400 font-semibold text-[11px]">
                      +${(restaurantMonthlyRevenue / 1000).toFixed(0)} mil CLP
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-950/40 border border-emerald-800/60 rounded-2xl p-4 text-xs space-y-1">
              <span className="text-emerald-300 font-bold uppercase text-[11px] block flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> Conclusión Estratégica:
              </span>
              <p className="text-stone-300 leading-relaxed">
                La implementación del sistema digital completo (Página Web convertible a WhatsApp + Ficha Negocio Google + Google Maps + Posicionamiento SEO, AEO y GEO) se autofinancia ampliamente en los primeros <strong className="text-white">30 días de operación</strong>.
              </p>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
