/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import { FlyerFront } from './components/FlyerFront';
import { FlyerBack } from './components/FlyerBack';
import { FlyerToolbar, ViewMode } from './components/FlyerToolbar';
import { Download, Printer, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('both');
  const [scale, setScale] = useState<number>(0.85);
  const [showGuides, setShowGuides] = useState<boolean>(false);
  const [customLogoUrl, setCustomLogoUrl] = useState<string | null>(null);
  const [customBgUrl, setCustomBgUrl] = useState<string | null>(null);
  const [bgOpacity, setBgOpacity] = useState<number>(0.35);
  const [qrUrl, setQrUrl] = useState<string>('https://www.solarqubeenergy.in/');
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null);
  const [exportErrorMessage, setExportErrorMessage] = useState<string | null>(null);

  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  // Trigger standard high-resolution browser print engine
  const handlePrint = () => {
    window.print();
  };

  // High-Resolution PNG Export using html-to-image with skipFonts to prevent cross-origin stylesheet errors
  const handleDownloadPng = async (side: 'front' | 'back' | 'both') => {
    setIsDownloading(true);
    setDownloadSuccessMessage(null);
    setExportErrorMessage(null);

    // Ensure elements are rendered in DOM if a specific view was active
    const previousView = viewMode;
    let switchedView = false;
    if (side === 'both' && viewMode !== 'both') {
      setViewMode('both');
      switchedView = true;
      await new Promise((r) => setTimeout(r, 150));
    } else if (side === 'front' && viewMode === 'back') {
      setViewMode('front');
      switchedView = true;
      await new Promise((r) => setTimeout(r, 150));
    } else if (side === 'back' && viewMode === 'front') {
      setViewMode('back');
      switchedView = true;
      await new Promise((r) => setTimeout(r, 150));
    }

    try {
      const exportSheet = async (elementId: string, filename: string) => {
        const el = document.getElementById(elementId);
        if (!el) {
          throw new Error(`Target flyer element '${elementId}' not found in document.`);
        }

        // Render with high device pixel ratio for 300 DPI print quality.
        // skipFonts: true prevents html-to-image from accessing document.styleSheets cssRules,
        // which triggers SecurityError when external Google Fonts stylesheets are loaded.
        const dataUrl = await toPng(el, {
          quality: 0.98,
          pixelRatio: 2,
          backgroundColor: '#ffffff',
          cacheBust: true,
          skipFonts: true,
          filter: (node) => {
            if (node instanceof HTMLElement && node.classList.contains('no-print')) {
              return false;
            }
            return true;
          },
        });

        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        link.click();
      };

      if (side === 'front' || side === 'both') {
        await exportSheet('flyer-front', 'SolarQube_Flyer_A4_Front_Side.png');
      }

      if (side === 'back' || side === 'both') {
        // Small delay between downloads if both
        if (side === 'both') {
          await new Promise((r) => setTimeout(r, 600));
        }
        await exportSheet('flyer-back', 'SolarQube_Flyer_A4_Back_Side.png');
      }

      setDownloadSuccessMessage(
        side === 'both'
          ? 'Front & Back PNG files exported in high resolution!'
          : `${side === 'front' ? 'Front' : 'Back'} side PNG exported successfully!`
      );

      setTimeout(() => setDownloadSuccessMessage(null), 4000);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Export failed. Please try Direct Print / Save PDF.';
      console.error('Failed to export PNG:', message, err);
      setExportErrorMessage(message);
      setTimeout(() => setExportErrorMessage(null), 6000);
    } finally {
      if (switchedView && previousView !== 'both') {
        setViewMode(previousView);
      }
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Application Toolbar */}
      <FlyerToolbar
        viewMode={viewMode}
        setViewMode={setViewMode}
        scale={scale}
        setScale={setScale}
        showGuides={showGuides}
        setShowGuides={setShowGuides}
        customLogoUrl={customLogoUrl}
        setCustomLogoUrl={setCustomLogoUrl}
        customBgUrl={customBgUrl}
        setCustomBgUrl={setCustomBgUrl}
        bgOpacity={bgOpacity}
        setBgOpacity={setBgOpacity}
        qrUrl={qrUrl}
        setQrUrl={setQrUrl}
        onPrint={handlePrint}
        onDownloadPng={handleDownloadPng}
        isDownloading={isDownloading}
      />

      {/* Success Notification */}
      {downloadSuccessMessage && (
        <div className="no-print fixed bottom-6 right-6 z-50 bg-emerald-900 border border-emerald-500 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-bottom-2">
          <CheckCircle className="w-5 h-5 text-emerald-400" />
          <span className="text-xs font-semibold">{downloadSuccessMessage}</span>
        </div>
      )}

      {/* Error Notification */}
      {exportErrorMessage && (
        <div className="no-print fixed bottom-6 right-6 z-50 bg-rose-900 border border-rose-500 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-bottom-2">
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
          <span className="text-xs font-semibold">{exportErrorMessage}</span>
        </div>
      )}

      {/* Main Artwork Preview Canvas */}
      <main className="flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center bg-[#070D1B]">
        {/* Printable & Interactive Wrapper */}
        <div
          className="print-wrapper flex flex-col xl:flex-row items-center justify-center gap-8 md:gap-12 transition-transform duration-200"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
          }}
        >
          {/* FRONT SIDE (PAGE 1) */}
          {(viewMode === 'both' || viewMode === 'front') && (
            <div className="flex flex-col items-center">
              <div className="no-print mb-2.5 flex items-center justify-between w-full max-w-[210mm] px-1 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400 uppercase tracking-wider text-[11px]">
                    PAGE 1 — FRONT
                  </span>
                  <span className="text-[10px] text-slate-500">
                    (Solar Energy, Engineered For You)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDownloadPng('front')}
                  className="hover:text-cyan-400 flex items-center gap-1 text-[11px] font-medium transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Save Front PNG
                </button>
              </div>

              {/* A4 Sheet Container */}
              <div
                ref={frontRef}
                className="shadow-2xl rounded-sm ring-1 ring-white/10"
              >
                <FlyerFront
                  customLogoUrl={customLogoUrl}
                  customBgUrl={customBgUrl}
                  bgOpacity={bgOpacity}
                  qrUrl={qrUrl}
                  showGuides={showGuides}
                />
              </div>
            </div>
          )}

          {/* BACK SIDE (PAGE 2) */}
          {(viewMode === 'both' || viewMode === 'back') && (
            <div className="flex flex-col items-center">
              <div className="no-print mb-2.5 flex items-center justify-between w-full max-w-[210mm] px-1 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-cyan-400 uppercase tracking-wider text-[11px]">
                    PAGE 2 — SOLUTIONS
                  </span>
                  <span className="text-[10px] text-slate-500">
                    (Detailed Solutions & Why SolarQube)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => handleDownloadPng('back')}
                  className="hover:text-cyan-400 flex items-center gap-1 text-[11px] font-medium transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Save Solutions PNG
                </button>
              </div>

              {/* A4 Sheet Container */}
              <div
                ref={backRef}
                className="shadow-2xl rounded-sm ring-1 ring-white/10"
              >
                <FlyerBack
                  customLogoUrl={customLogoUrl}
                  customBgUrl={customBgUrl}
                  bgOpacity={bgOpacity}
                  qrUrl={qrUrl}
                  showGuides={showGuides}
                />
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Screen bottom quick bar for print shop reference */}
      <footer className="no-print bg-slate-900/80 border-t border-slate-800/80 px-4 py-2.5 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-300 font-medium">
              SolarQube Promotional Flyer Artwork
            </span>
            <span>&bull;</span>
            <span>A4 Portrait (210 &times; 297 mm)</span>
            <span>&bull;</span>
            <span>300 DPI Print Optimized</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Direct Print
            </button>
            <span className="text-slate-600">|</span>
            <button
              type="button"
              onClick={() => handleDownloadPng('both')}
              className="text-slate-300 hover:text-white font-medium flex items-center gap-1 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              Download Both Sides (PNG)
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
