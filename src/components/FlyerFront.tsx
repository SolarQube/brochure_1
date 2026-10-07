import React from 'react';
import {
  TrendingDown,
  Sun,
  ShieldCheck,
  Phone,
  Globe,
  MapPin,
  Building2,
  Home,
  CheckCircle2,
} from 'lucide-react';
import { solarQubeLogo } from '../assets/images';
import { DynamicQRCode } from './DynamicQRCode';
import { flyerImages } from '../assets/images';

interface FlyerFrontProps {
  customLogoUrl?: string | null;
  customBgUrl?: string | null;
  bgOpacity?: number;
  qrUrl?: string;
  showGuides?: boolean;
}

export const FlyerFront: React.FC<FlyerFrontProps> = ({
  customLogoUrl,
  customBgUrl,
  bgOpacity = 0.35,
  qrUrl = 'https://www.solarqubeenergy.in/',
  showGuides = false,
}) => {
  return (
    <div
      id="flyer-front"
      className="a4-sheet relative bg-white text-slate-900 select-none overflow-hidden flex flex-col justify-between"
      style={{
        width: '210mm',
        height: '297mm',
        boxSizing: 'border-box',
        // Print-safe baseline padding (approx 12mm)
        padding: '12mm 14mm 10mm 14mm',
      }}
    >
      {/* Front Page Architectural Canopy Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={customBgUrl || flyerImages.canopyBg}
          alt="Solar Canopy Background"
          className="w-full h-full object-cover object-top mix-blend-multiply transition-opacity duration-300"
          style={{ opacity: bgOpacity }}
        />
        {/* Soft ambient gradient wash preserving pristine text legibility & contrast */}
        <div
  className="absolute inset-0"
  style={{
    background: 'linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.62) 35%, rgba(255,255,255,0.78) 100%)',
  }}
/>
      </div>

      {/* Print Safe Zone & Bleed Guides (visible when toggled) */}
      {showGuides && (
        <div className="absolute inset-0 pointer-events-none z-50 border-[3px] border-dashed border-red-400 opacity-60">
          <div className="absolute top-1 left-2 text-[8px] font-mono text-red-500 uppercase tracking-wider">
            3mm Bleed & Safe Margin Limit (210 x 297 mm)
          </div>
        </div>
      )}

      {/* Subtle background solar ambiance graphic */}
      <div
        className="absolute top-0 right-0 w-[140mm] h-[100mm] pointer-events-none opacity-40 z-0"
        style={{
          background: 'radial-gradient(circle at 85% 15%, rgba(14,165,233,0.12) 0%, rgba(245,158,11,0.06) 40%, transparent 70%)',
        }}
      />

      {/* HEADER BAR */}
      <header className="relative z-10 flex items-center justify-between pb-3 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <img
            src={customLogoUrl || solarQubeLogo}
            alt="SolarQube Energy Logo"
            className="h-16 sm:h-20 w-auto object-contain"
          />
        </div>
        <div className="text-right">
          <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-cyan-700">
            Tamil Nadu, India
          </div>
          <div className="text-[9.5px] font-medium text-slate-500 tracking-wide">
            Residential &bull; Commercial &bull; Carport + BESS + EV
          </div>
        </div>
      </header>

      {/* MAIN HEADLINE & SUBHEAD */}
      <section className="relative z-10 pt-3.5 pb-2 text-center">
        <div className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-cyan-600 mb-1">
          Smart Renewable Energy Solutions
        </div>
        <h1 className="text-[31px] font-extrabold tracking-tight text-[#0B1B3D] leading-[1.08] uppercase">
          POWER YOUR FUTURE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0284C7] to-[#0B1B3D]">
            WITH SOLAR
          </span>
        </h1>
        <p className="mt-2 text-[13px] font-semibold text-slate-600 tracking-normal max-w-[170mm] mx-auto leading-relaxed">
          Smarter Energy. Lower Electricity Bills. A Brighter Tomorrow.
        </p>
      </section>

      {/* HERO VISUAL SECTION */}
      <section className="relative z-10 my-1">
        {/* Main Photo: Modern Indian Home with Rooftop Solar */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-100 h-[74mm]">
          <img
            src={flyerImages.heroHome}
            alt="Modern Indian Home with Rooftop Solar Panels"
            className="w-full h-full object-cover object-center"
          />

          {/* Sunlight flare / illumination accent at top right */}
          <div
            className="absolute -top-10 -right-10 w-44 h-44 rounded-full pointer-events-none opacity-45 mix-blend-screen"
            style={{
              background: 'radial-gradient(circle, rgba(254,240,138,0.9) 0%, rgba(245,158,11,0.5) 40%, transparent 75%)',
            }}
          />

          {/* Residential Badge overlay */}
          <div className="absolute top-3 left-3 bg-[#0B1B3D]/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg flex items-center gap-2 border border-white/20 shadow-sm">
            <Home className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[10px] font-bold tracking-wide uppercase">
              Rooftop Solar for Homes
            </span>
          </div>

          {/* Visual transition to Commercial and Solar Carport + BESS + EV */}
          <div className="absolute bottom-2.5 right-2.5 max-w-[98mm] bg-white/95 backdrop-blur-md rounded-xl p-2 shadow-xl border border-slate-200/90 flex items-center gap-2">
            <div className="flex gap-1.5 shrink-0">
              <div className="w-12 h-11 rounded-lg overflow-hidden border border-slate-200 shadow-xs">
                <img
                  src={flyerImages.commercialSolar}
                  alt="Commercial Solar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-12 h-11 rounded-lg overflow-hidden border border-slate-200 shadow-xs">
                <img
                  src={flyerImages.solarCarportEv}
                  alt="Solar Carport + BESS + EV"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="pr-1">
              <div className="flex items-center gap-1 text-[8px] font-bold uppercase tracking-wider text-[#0284C7]">
                <Building2 className="w-3 h-3 text-[#0284C7]" />
                Commercial &bull; Carport + BESS + EV
              </div>
              <div className="text-[9px] font-bold text-slate-800 leading-tight">
                Industrial plants, solar carports & EV charging stations
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBSIDY BAND (CENTRAL + STATE SCHEME = TOTAL SUBSIDY) */}
      <section className="relative z-10 my-1.5">
        <div className="bg-gradient-to-r from-amber-500/10 via-sky-500/10 to-emerald-500/10 border-2 border-amber-500/40 rounded-xl p-2.5 shadow-xs bg-white">
          <div className="flex items-center justify-between gap-2">
            {/* PM SURYA GHAR | CENTRAL */}
            <div className="flex-1 text-center bg-white/90 rounded-lg p-1.5 border border-slate-200 shadow-2xs">
              <div className="text-[8.5px] font-extrabold uppercase tracking-wider text-slate-600">
                PM SURYA GHAR <span className="text-[#0284C7]">| CENTRAL</span>
              </div>
              <div className="text-[14px] font-black text-[#0B1B3D] tracking-tight font-mono mt-0.5">
                up to <span className="text-amber-600">₹78,000</span>
              </div>
              <div className="text-[8px] font-semibold text-slate-500">
                for 3 kW & above
              </div>
            </div>

            {/* PLUS OPERATOR */}
            <div className="text-lg font-black text-amber-500 shrink-0 leading-none px-0.5">
              +
            </div>

            {/* TAMIL NADU | STATE SCHEME */}
            <div className="flex-1 text-center bg-white/90 rounded-lg p-1.5 border border-slate-200 shadow-2xs">
              <div className="text-[8.5px] font-extrabold uppercase tracking-wider text-slate-600">
                TAMIL NADU <span className="text-[#0284C7]">| STATE SCHEME</span>
              </div>
              <div className="text-[14px] font-black text-[#0B1B3D] tracking-tight font-mono mt-0.5">
                up to <span className="text-amber-600">₹22,000</span>
              </div>
              <div className="text-[8px] font-semibold text-slate-500">
                for 3 kW & above
              </div>
            </div>

            {/* EQUALS OPERATOR */}
            <div className="text-lg font-black text-emerald-600 shrink-0 leading-none px-0.5">
              =
            </div>

            {/* TOTAL SUBSIDY */}
            <div className="flex-1 text-center bg-gradient-to-br from-[#0B1B3D] to-[#0A2558] text-white rounded-lg p-1.5 shadow-sm border border-[#1E3A70]">
              <div className="text-[8.5px] font-extrabold uppercase tracking-wider text-amber-400">
                TOTAL SUBSIDY
              </div>
              <div className="text-[15px] font-black text-white tracking-tight font-mono mt-0.5">
                up to <span className="text-amber-300">₹1 LAKH</span>
              </div>
              <div className="text-[7.5px] font-medium text-slate-300">
                for residential rooftop solar
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE CORE BENEFITS (3 COLUMNS) */}
      <section className="relative z-10 my-1">
        <div className="grid grid-cols-3 gap-2.5">
          {/* Benefit 1 */}
          <div className="bg-slate-50/90 rounded-xl p-2.5 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-[#0284C7] mb-1.5 shadow-xs">
                <TrendingDown className="w-4.5 h-4.5 stroke-[2.2]" />
              </div>
              <h2 className="text-[11px] font-extrabold uppercase text-[#0B1B3D] tracking-wide leading-tight">
                LOWER ELECTRICITY BILLS
              </h2>
            </div>
            <p className="mt-1 text-[9.5px] text-slate-600 leading-relaxed font-normal">
              Cut high recurring electricity tariff charges by generating your own reliable rooftop power.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-slate-50/90 rounded-xl p-2.5 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-amber-100/90 flex items-center justify-center text-amber-600 mb-1.5 shadow-xs">
                <Sun className="w-4.5 h-4.5 stroke-[2.2]" />
              </div>
              <h2 className="text-[11px] font-extrabold uppercase text-[#0B1B3D] tracking-wide leading-tight">
                CLEAN & RENEWABLE ENERGY
              </h2>
            </div>
            <p className="mt-1 text-[9.5px] text-slate-600 leading-relaxed font-normal">
              100% sustainable solar power. Zero emissions, powering your daily appliances cleanly.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-slate-50/90 rounded-xl p-2.5 border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-emerald-100/90 flex items-center justify-center text-emerald-700 mb-1.5 shadow-xs">
                <ShieldCheck className="w-4.5 h-4.5 stroke-[2.2]" />
              </div>
              <h2 className="text-[11px] font-extrabold uppercase text-[#0B1B3D] tracking-wide leading-tight">
                LONG-TERM SAVINGS
              </h2>
            </div>
            <p className="mt-1 text-[9.5px] text-slate-600 leading-relaxed font-normal">
              Tier-1 solar modules engineered to deliver compounding returns and savings for 25+ years.
            </p>
          </div>
        </div>
      </section>

      {/* STRONG CTA BANNER WITH DYNAMIC QR CODE 'SCAN TO CONNECT' */}
      <section className="relative z-10 bg-gradient-to-r from-[#0B1B3D] via-[#0D2352] to-[#0A193B] text-white rounded-2xl p-3 shadow-md border border-[#1E3A70] flex items-center justify-between gap-3">
        <div className="flex-1">
          <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-0.5">
            Take Control of Your Energy
          </div>
          <div className="text-[17px] font-extrabold tracking-tight uppercase leading-tight">
            SWITCH TO SOLAR TODAY
          </div>
          <div className="text-[10px] font-medium text-slate-300 mt-0.5 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            Get Your Free Solar Consultation & Site Assessment
          </div>

          <div className="flex items-center gap-2 mt-1.5 pt-1.5 border-t border-white/10 text-slate-300">
            <span className="text-[8px] uppercase tracking-wider text-slate-400 font-semibold">
              Helpline:
            </span>
            <span className="font-extrabold text-white font-mono text-[11.5px]">
              8883663001
            </span>
            <span className="text-slate-500">/</span>
            <span className="font-bold text-cyan-300 font-mono text-[11px]">
              9677182998
            </span>
          </div>
        </div>

        {/* Scan to Connect Section with Dynamic QR Code */}
        <div className="shrink-0 flex flex-col items-center">
          <DynamicQRCode
            url={qrUrl}
            size={52}
            label="SCAN TO CONNECT"
            sublabel="solarqubeenergy.in"
            showBorder={true}
            className="shadow-sm border border-slate-200"
          />
        </div>
      </section>

      {/* FOOTER CONTACT BAR */}
      <footer className="relative z-10 pt-2 border-t border-slate-200 flex items-center justify-between text-slate-600 text-[10px]">
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
          <span className="font-semibold text-slate-800">
            8883663001 / 9677182998
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <Globe className="w-3.5 h-3.5 text-[#0284C7]" />
          <span className="font-semibold text-slate-800">
            www.solarqubeenergy.in
          </span>
        </div>

        <div className="flex items-center gap-1 text-slate-500 text-[9.5px]">
          <MapPin className="w-3 h-3 text-slate-400" />
          <span>Office: Salem, Tamilnadu</span>
        </div>
      </footer>
    </div>
  );
};
