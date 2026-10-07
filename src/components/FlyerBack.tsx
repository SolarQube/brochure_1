import React from 'react';
import {
  Home,
  Building2,
  Sun,
  Zap,
  Users,
  Wrench,
  Phone,
  Mail,
  Globe,
  Instagram,
  MapPin,
  CheckCircle,
  QrCode,
  BatteryCharging,
  Car,
} from 'lucide-react';
import { solarQubeLogo } from '../assets/images';
import { DynamicQRCode } from './DynamicQRCode';
import { flyerImages } from '../assets/images';

interface FlyerBackProps {
  customLogoUrl?: string | null;
  customBgUrl?: string | null;
  bgOpacity?: number;
  qrUrl?: string;
  showGuides?: boolean;
}

export const FlyerBack: React.FC<FlyerBackProps> = ({
  customLogoUrl,
  customBgUrl,
  bgOpacity = 0.35,
  qrUrl = 'https://www.solarqubeenergy.in/',
  showGuides = false,
}) => {
  return (
    <div
      id="flyer-back"
      className="a4-sheet relative bg-white text-slate-900 select-none overflow-hidden flex flex-col justify-between"
      style={{
        width: '210mm',
        height: '297mm',
        boxSizing: 'border-box',
        padding: '10mm 13mm 9mm 13mm',
      }}
    >
      {/* Back Page Architectural Canopy Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={customBgUrl || flyerImages.canopyBg}
          alt="Solar Canopy Background"
          className="w-full h-full object-cover object-center mix-blend-multiply transition-opacity duration-300"
          style={{ opacity: bgOpacity }}
        />
        {/* Soft ambient gradient wash preserving pristine text legibility & contrast */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.78) 0%, rgba(255,255,255,0.68) 35%, rgba(255,255,255,0.82) 100%)',
          }}
        />
      </div>

      {/* Print Safe Zone & Bleed Guides */}
      {showGuides && (
        <div className="absolute inset-0 pointer-events-none z-50 border-[3px] border-dashed border-red-400 opacity-60">
          <div className="absolute top-1 left-2 text-[8px] font-mono text-red-500 uppercase tracking-wider">
            3mm Bleed & Safe Margin Limit (210 x 297 mm)
          </div>
        </div>
      )}

      {/* HEADER SECTION */}
      <header className="relative z-10 pb-2.5 border-b border-slate-200 flex items-center justify-between">
        <img
            src={customLogoUrl || solarQubeLogo}
            alt="SolarQube Energy Logo"
            className="h-14 sm:h-18 w-auto object-contain"
          />
        <div className="text-right">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-cyan-700">
            Smart Solar Solutions
          </span>
          <div className="text-[9px] text-slate-500 font-medium">
            Salem &bull; Tamilnadu
          </div>
        </div>
      </header>

      {/* INTRO TITLE & WHY SOLARQUBE 4 PILLARS */}
      <section className="relative z-10 pt-1.5 pb-0.5">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-[19px] font-extrabold tracking-tight text-[#0B1B3D] uppercase leading-tight">
            WHY SOLARQUBE?
          </h2>
          <span className="text-[9px] font-bold text-cyan-700 uppercase tracking-widest">
            Engineering &bull; Quality &bull; Innovation
          </span>
        </div>

        {/* 4 Core Pillars requested by user */}
        <div className="grid grid-cols-2 gap-2 my-1">
          <div className="p-2 bg-slate-50/90 rounded-lg border border-slate-200/90 flex items-start gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
            <div>
              <div className="text-[9.5px] font-extrabold uppercase text-[#0B1B3D] leading-tight">
                End-to-End Solutions
              </div>
              <p className="text-[8.5px] text-slate-600 font-medium leading-snug mt-0.5">
                From site assessment and system design to installation and commissioning.
              </p>
            </div>
          </div>

          <div className="p-2 bg-slate-50/90 rounded-lg border border-slate-200/90 flex items-start gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
            <div>
              <div className="text-[9.5px] font-extrabold uppercase text-[#0B1B3D] leading-tight">
                Engineering-Driven
              </div>
              <p className="text-[8.5px] text-slate-600 font-medium leading-snug mt-0.5">
                Every system is designed around your energy consumption, site and requirements.
              </p>
            </div>
          </div>

          <div className="p-2 bg-slate-50/90 rounded-lg border border-slate-200/90 flex items-start gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
            <div>
              <div className="text-[9.5px] font-extrabold uppercase text-[#0B1B3D] leading-tight">
                Quality & Reliability
              </div>
              <p className="text-[8.5px] text-slate-600 font-medium leading-snug mt-0.5">
                We focus on dependable products, professional installation and long-term performance.
              </p>
            </div>
          </div>

          <div className="p-2 bg-slate-50/90 rounded-lg border border-slate-200/90 flex items-start gap-2">
            <CheckCircle className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
            <div>
              <div className="text-[9.5px] font-extrabold uppercase text-[#0B1B3D] leading-tight">
                Beyond Solar
              </div>
              <p className="text-[8.5px] text-slate-600 font-medium leading-snug mt-0.5">
                SolarQube brings together Solar + BESS + EV Charging + Solar Carports under one energy platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE MAJOR SECTIONS: RESIDENTIAL, COMMERCIAL, SOLAR CARPORT + BESS + EV */}
      <section className="relative z-10 my-1 grid grid-cols-3 gap-2.5">
        {/* RESIDENTIAL SOLAR */}
        <div className="bg-slate-50/95 rounded-xl p-2.5 border border-slate-200 flex flex-col justify-between">
          <div>
            {/* Visual thumbnail */}
            <div className="w-full h-[28mm] rounded-lg overflow-hidden mb-2 border border-slate-200 relative">
              <img
                src={flyerImages.heroHome}
                alt="Residential Solar Rooftop"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1.5 left-1.5 bg-[#0B1B3D]/90 text-white text-[8px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                <Home className="w-2.5 h-2.5 text-cyan-400" />
                Villas & Homes
              </div>
            </div>

            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-4.5 h-4.5 rounded bg-sky-100 flex items-center justify-center text-[#0284C7] shrink-0">
                <Home className="w-3 h-3" />
              </div>
              <h3 className="text-[11.5px] font-extrabold uppercase tracking-tight text-[#0B1B3D] leading-tight">
                RESIDENTIAL SOLAR
              </h3>
            </div>

            {/* 5 Bullet Points */}
            <ul className="space-y-1 text-[9px] text-slate-700 font-medium pt-0.5">
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span>Reduce monthly electricity expenses</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span>Generate your own clean energy</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span>Long-term savings</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span>Professional installation</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span>Reliable system performance</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COMMERCIAL SOLAR */}
        <div className="bg-slate-50/95 rounded-xl p-2.5 border border-slate-200 flex flex-col justify-between">
          <div>
            {/* Visual thumbnail */}
            <div className="w-full h-[28mm] rounded-lg overflow-hidden mb-2 border border-slate-200 relative">
              <img
                src={flyerImages.commercialSolar}
                alt="Commercial Solar Rooftop"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1.5 left-1.5 bg-[#0B1B3D]/90 text-white text-[8px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                <Building2 className="w-2.5 h-2.5 text-cyan-400" />
                Enterprises
              </div>
            </div>

            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-4.5 h-4.5 rounded bg-sky-100 flex items-center justify-center text-[#0284C7] shrink-0">
                <Building2 className="w-3 h-3" />
              </div>
              <h3 className="text-[11.5px] font-extrabold uppercase tracking-tight text-[#0B1B3D] leading-tight">
                COMMERCIAL SOLAR
              </h3>
            </div>

            {/* 5 Bullet Points */}
            <ul className="space-y-1 text-[9px] text-slate-700 font-medium pt-0.5">
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span>Reduce business electricity costs</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span>Improve energy efficiency</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span>Maximize rooftop potential</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span>Professional project execution</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span>Solutions tailored to business requirements</span>
              </li>
            </ul>
          </div>
        </div>

        {/* SOLAR CARPORT + BESS + EV CHARGING */}
        <div className="bg-slate-50/95 rounded-xl p-2.5 border border-cyan-200/80 shadow-xs flex flex-col justify-between">
          <div>
            {/* Visual thumbnail */}
            <div className="w-full h-[28mm] rounded-lg overflow-hidden mb-2 border border-slate-200 relative">
              <img
                src={flyerImages.solarCarportEv}
                alt="Solar Carport with BESS and EV Charging"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1.5 left-1.5 bg-[#0B1B3D]/90 text-white text-[8px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                <Car className="w-2.5 h-2.5 text-cyan-400" />
                Clean Mobility
              </div>
            </div>

            <div className="flex items-center gap-1.5 mb-1.5">
              <div className="w-4.5 h-4.5 rounded bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                <BatteryCharging className="w-3 h-3" />
              </div>
              <h3 className="text-[11.5px] font-extrabold uppercase tracking-tight text-[#0B1B3D] leading-tight">
                CARPORT + BESS + EV
              </h3>
            </div>

            {/* 5 Bullet Points */}
            <ul className="space-y-1 text-[9px] text-slate-700 font-medium pt-0.5">
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span>Solar shade canopies for parking</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span>Battery storage (BESS) for 24/7 power</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span>Integrated high-speed EV charging</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span>Peak load shaving & grid independence</span>
              </li>
              <li className="flex items-start gap-1">
                <CheckCircle className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                <span>Custom design for homes & commercial lots</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* OUR SOLAR SOLUTIONS (6 ITEMS) */}
      <section className="relative z-10 my-0.5">
        <div className="border-t border-slate-200 pt-1.5 pb-1">
          <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0284C7] mb-0.5">
            Comprehensive Offerings
          </div>
          <h3 className="text-[14px] font-extrabold uppercase tracking-tight text-[#0B1B3D]">
            OUR SOLAR SOLUTIONS
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {/* Solution 1 */}
          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-1.5 mb-0.5 text-[#0B1B3D]">
              <Home className="w-3 h-3 text-[#0284C7]" />
              <div className="text-[9.5px] font-extrabold uppercase leading-none">
                Residential Solar
              </div>
            </div>
            <p className="text-[8px] text-slate-600 leading-tight">
              High-efficiency rooftop solar systems tailored for independent homes and villas.
            </p>
          </div>

          {/* Solution 2 */}
          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-1.5 mb-0.5 text-[#0B1B3D]">
              <Building2 className="w-3 h-3 text-[#0284C7]" />
              <div className="text-[9.5px] font-extrabold uppercase leading-none">
                Commercial Solar
              </div>
            </div>
            <p className="text-[8px] text-slate-600 leading-tight">
              Scalable solar plants designed to optimize energy expenses for businesses and factories.
            </p>
          </div>

          {/* Solution 3 */}
          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-1.5 mb-0.5 text-[#0B1B3D]">
              <Car className="w-3 h-3 text-[#0284C7]" />
              <div className="text-[9.5px] font-extrabold uppercase leading-none">
                Carports & EV Hubs
              </div>
            </div>
            <p className="text-[8px] text-slate-600 leading-tight">
              Solar parking structures paired with high-efficiency EV charge points.
            </p>
          </div>

          {/* Solution 4 */}
          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-1.5 mb-0.5 text-[#0B1B3D]">
              <BatteryCharging className="w-3 h-3 text-[#0284C7]" />
              <div className="text-[9.5px] font-extrabold uppercase leading-none">
                BESS Battery Storage
              </div>
            </div>
            <p className="text-[8px] text-slate-600 leading-tight">
              Advanced lithium battery storage systems providing uninterruptible backup power.
            </p>
          </div>

          {/* Solution 5 */}
          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-1.5 mb-0.5 text-[#0B1B3D]">
              <Zap className="w-3 h-3 text-[#0284C7]" />
              <div className="text-[9.5px] font-extrabold uppercase leading-none">
                On-Grid Systems
              </div>
            </div>
            <p className="text-[8px] text-slate-600 leading-tight">
              Seamless bi-directional net metering that exports surplus electricity back to the grid.
            </p>
          </div>

          {/* Solution 6 */}
          <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-1.5 mb-0.5 text-[#0B1B3D]">
              <Wrench className="w-3 h-3 text-[#0284C7]" />
              <div className="text-[9.5px] font-extrabold uppercase leading-none">
                Installation & Support
              </div>
            </div>
            <p className="text-[8px] text-slate-600 leading-tight">
              Complete site survey, expert installation, and dedicated lifetime maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA & CONTACT AREA */}
      <section className="relative z-10 mt-1 bg-[#0B1B3D] text-white rounded-2xl p-3.5 border border-[#1A3366] shadow-md">
        <div className="grid grid-cols-12 gap-3 items-center">
          {/* CTA & Contact Details (9 columns) */}
          <div className="col-span-9 pr-2">
            <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-400 mb-0.5">
              Begin Your Solar Journey
            </div>
            <h4 className="text-[16px] font-extrabold uppercase tracking-tight leading-tight">
              READY TO GO SOLAR?
            </h4>
            <p className="text-[10.5px] text-slate-300 font-medium mb-2.5">
              Let SolarQube help you make the switch.
            </p>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[9.5px] pt-1.5 border-t border-slate-700/80">
              {/* Phone */}
              <div className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 rounded-md bg-white/10 flex items-center justify-center shrink-0 text-cyan-300">
                  <Phone className="w-3 h-3" />
                </div>
                <div>
                  <div className="text-[7.5px] uppercase tracking-wider text-slate-400 font-semibold">
                    Call / WhatsApp
                  </div>
                  <div className="font-bold text-white font-mono text-[10.5px] leading-tight">
                    8883663001 / 9677182998
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 rounded-md bg-white/10 flex items-center justify-center shrink-0 text-cyan-300">
                  <Mail className="w-3 h-3" />
                </div>
                <div>
                  <div className="text-[7.5px] uppercase tracking-wider text-slate-400 font-semibold">
                    Email
                  </div>
                  <div className="font-bold text-white text-[9.5px] leading-tight">
                    info@solarqubeenergy.in
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 rounded-md bg-white/10 flex items-center justify-center shrink-0 text-cyan-300">
                  <Globe className="w-3 h-3" />
                </div>
                <div>
                  <div className="text-[7.5px] uppercase tracking-wider text-slate-400 font-semibold">
                    Website
                  </div>
                  <div className="font-bold text-cyan-300 text-[9.5px] leading-tight">
                    www.solarqubeenergy.in
                  </div>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-2">
                <div className="w-5.5 h-5.5 rounded-md bg-white/10 flex items-center justify-center shrink-0 text-cyan-300">
                  <Instagram className="w-3 h-3" />
                </div>
                <div>
                  <div className="text-[7.5px] uppercase tracking-wider text-slate-400 font-semibold">
                    Instagram
                  </div>
                  <div className="font-bold text-white text-[9.5px] leading-tight">
                    @solarqubeenergy.in
                  </div>
                </div>
              </div>

              {/* Physical Address */}
              <div className="col-span-2 flex items-start gap-2 pt-1 border-t border-slate-800">
                <div className="w-5.5 h-5.5 rounded-md bg-white/10 flex items-center justify-center shrink-0 text-cyan-300 mt-0.5">
                  <MapPin className="w-3 h-3" />
                </div>
                <div className="text-[9px] text-slate-300 leading-snug">
                  <span className="text-[7.5px] uppercase tracking-wider text-slate-400 font-semibold block">
                    Location
                  </span>
                  Office: Salem, Tamilnadu
                </div>
              </div>
            </div>
          </div>

          {/* Dynamic QR Code Section (3 columns) */}
          <div className="col-span-3 flex flex-col items-center justify-center">
            <DynamicQRCode
              url={qrUrl}
              size={56}
              label="SCAN TO CONNECT WITH US"
              sublabel="solarqubeenergy.in"
              className="p-2 border border-slate-200/90 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* FOOTER ACCENT LINE */}
      <footer className="relative z-10 pt-1.5 flex items-center justify-between text-[8.5px] text-slate-400 font-medium">
        <span>SolarQube Energy &bull; Residential &bull; Commercial &bull; Solar Carport + BESS + EV</span>
        <span>A4 Print Specification (210 &times; 297 mm)</span>
      </footer>
    </div>
  );
};

