import React, { useRef } from 'react';
import {
  Printer,
  Download,
  Eye,
  Sliders,
  Upload,
  RotateCcw,
  Info,
  Maximize2,
  FileText,
  Check,
  QrCode,
  Link,
} from 'lucide-react';

export type ViewMode = 'both' | 'front' | 'back';

interface FlyerToolbarProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  scale: number;
  setScale: (scale: number) => void;
  showGuides: boolean;
  setShowGuides: (show: boolean) => void;
  customLogoUrl: string | null;
  setCustomLogoUrl: (url: string | null) => void;
  customBgUrl: string | null;
  setCustomBgUrl: (url: string | null) => void;
  bgOpacity: number;
  setBgOpacity: (opacity: number) => void;
  qrUrl: string;
  setQrUrl: (url: string) => void;
  onPrint: () => void;
  onDownloadPng: (side: 'front' | 'back' | 'both') => void;
  isDownloading: boolean;
}

export const FlyerToolbar: React.FC<FlyerToolbarProps> = ({
  viewMode,
  setViewMode,
  scale,
  setScale,
  showGuides,
  setShowGuides,
  customLogoUrl,
  setCustomLogoUrl,
  customBgUrl,
  setCustomBgUrl,
  bgOpacity,
  setBgOpacity,
  qrUrl,
  setQrUrl,
  onPrint,
  onDownloadPng,
  isDownloading,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const bgInputRef = useRef<HTMLInputElement>(null);
  const [showPrintTips, setShowPrintTips] = React.useState(false);
  const [showQrEditor, setShowQrEditor] = React.useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomLogoUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setCustomBgUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <header className="no-print sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-200 px-4 py-3 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand & Document Specs */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-sky-400 flex items-center justify-center font-black text-white text-sm shadow-sm">
              SQ
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                SolarQube Promotional Flyer
                <span className="text-[10px] font-medium text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                  A4 Print Ready
                </span>
              </div>
              <div className="text-[11px] text-slate-400">
                210 &times; 297 mm &bull; Residential &bull; Commercial &bull; Carport + BESS + EV
              </div>
            </div>
          </div>
        </div>

        {/* View Mode Segmented Controls (Strictly functional button tabs) */}
        <div className="flex items-center bg-slate-800/90 rounded-lg p-1 border border-slate-700/80">
          <button
            type="button"
            onClick={() => setViewMode('both')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              viewMode === 'both'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            Both Pages
          </button>
          <button
            type="button"
            onClick={() => setViewMode('front')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              viewMode === 'front'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            Front Side
          </button>
          <button
            type="button"
            onClick={() => setViewMode('back')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              viewMode === 'back'
                ? 'bg-cyan-600 text-white shadow-sm'
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            Back Side
          </button>
        </div>

        {/* Zoom & Guide Controls */}
        <div className="flex items-center gap-2">
          {/* Zoom Selector */}
          <div className="flex items-center gap-1.5 bg-slate-800/80 px-2 py-1 rounded-lg border border-slate-700 text-xs text-slate-300">
            <Maximize2 className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={scale}
              onChange={(e) => setScale(Number(e.target.value))}
              aria-label="Flyer preview scale"
              className="bg-transparent text-white font-medium focus:outline-none cursor-pointer pr-1"
            >
              <option value={0.6} className="bg-slate-800 text-white">60%</option>
              <option value={0.75} className="bg-slate-800 text-white">75% (Overview)</option>
              <option value={0.9} className="bg-slate-800 text-white">90%</option>
              <option value={1.0} className="bg-slate-800 text-white">100% (Actual A4 Size)</option>
              <option value={1.2} className="bg-slate-800 text-white">120% (Detail)</option>
            </select>
          </div>

          {/* Toggle Print Guides */}
          <button
            type="button"
            onClick={() => setShowGuides(!showGuides)}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 cursor-pointer ${
              showGuides
                ? 'bg-amber-950/70 border-amber-500 text-amber-300'
                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
            }`}
            title="Toggle 3mm Bleed and Safe Margins"
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print Guides</span>
          </button>

          {/* Background Image Upload & Opacity Controls */}
          <input
            type="file"
            ref={bgInputRef}
            onChange={handleBgUpload}
            accept="image/*"
            className="hidden"
          />
          <button
            type="button"
            onClick={() => bgInputRef.current?.click()}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 cursor-pointer ${
              customBgUrl
                ? 'bg-cyan-950/70 border-cyan-500 text-cyan-300'
                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
            }`}
            title={customBgUrl ? 'Custom Canopy Background Active' : 'Upload custom background image (e.g. pexels-solar-canopy)'}
          >
            <Upload className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {customBgUrl ? 'Custom BG' : 'Upload BG'}
            </span>
          </button>

          {/* Background Opacity Select */}
          <div className="flex items-center gap-1 bg-slate-800/80 px-2 py-1 rounded-lg border border-slate-700 text-xs text-slate-300" title="Front page background opacity">
            <span className="text-[10px] text-slate-400">BG:</span>
            <select
              value={bgOpacity}
              onChange={(e) => setBgOpacity(Number(e.target.value))}
              aria-label="Background opacity"
              className="bg-transparent text-white font-medium focus:outline-none cursor-pointer text-xs"
            >
              <option value={0} className="bg-slate-800 text-white">0% (Off)</option>
              <option value={0.15} className="bg-slate-800 text-white">15% (Subtle)</option>
              <option value={0.22} className="bg-slate-800 text-white">22% (Balanced)</option>
              <option value={0.35} className="bg-slate-800 text-white">35% (Vibrant)</option>
              <option value={0.50} className="bg-slate-800 text-white">50% (Strong)</option>
            </select>
          </div>

          {/* Logo Upload Option */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept="image/*"
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 cursor-pointer ${
              customLogoUrl
                ? 'bg-emerald-950/70 border-emerald-500 text-emerald-300'
                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
            }`}
            title={customLogoUrl ? 'Custom Logo Loaded (click to change)' : 'Upload or replace Logo file'}
          >
            <Upload className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {customLogoUrl ? 'Custom Logo' : 'Upload Logo'}
            </span>
          </button>

          {customLogoUrl && (
            <button
              type="button"
              onClick={() => setCustomLogoUrl(null)}
              className="p-1.5 text-slate-400 hover:text-white bg-slate-800 border border-slate-700 rounded-lg cursor-pointer"
              title="Reset to default vector logo"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}

          {/* Dynamic QR Code URL Settings Button */}
          <button
            type="button"
            onClick={() => setShowQrEditor(!showQrEditor)}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 cursor-pointer ${
              showQrEditor
                ? 'bg-cyan-950 border-cyan-500 text-cyan-300'
                : 'bg-slate-800/80 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
            }`}
            title="Configure Dynamic QR Code URL"
          >
            <QrCode className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">QR Link</span>
          </button>
        </div>

        {/* Primary Action Buttons: Print / PDF & Download */}
        <div className="flex items-center gap-2">
          {/* Print / Save PDF Button */}
          <button
            type="button"
            onClick={onPrint}
            className="px-3.5 py-2 bg-gradient-to-r from-cyan-600 to-sky-500 hover:from-cyan-500 hover:to-sky-400 text-white font-bold text-xs rounded-lg shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>Print / Save PDF</span>
          </button>

          {/* PNG Download */}
          <div className="relative group">
            <button
              type="button"
              disabled={isDownloading}
              onClick={() => onDownloadPng(viewMode)}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-xs rounded-lg transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              title={viewMode === 'both' ? 'Export Both Pages as PNG' : `Export ${viewMode === 'front' ? 'Front' : 'Back'} as PNG`}
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span className="hidden md:inline">
                {isDownloading ? 'Exporting...' : viewMode === 'both' ? 'Export Both PNGs' : 'Export PNG'}
              </span>
            </button>
          </div>

          {/* Print Instructions Helper */}
          <button
            type="button"
            onClick={() => setShowPrintTips(!showPrintTips)}
            className="p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 border border-slate-700 rounded-lg cursor-pointer"
            title="Print Settings Guide"
          >
            <Info className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Dynamic QR Code URL Editor Banner */}
      {showQrEditor && (
        <div className="mt-3 max-w-2xl mx-auto p-3.5 bg-slate-800/95 border border-cyan-500/40 rounded-xl text-xs text-slate-300 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 animate-in fade-in slide-in-from-top-1">
          <div className="flex-1 w-full">
            <div className="font-bold text-cyan-300 flex items-center gap-1.5 mb-1.5">
              <QrCode className="w-4 h-4 text-cyan-400" />
              <span>Dynamic QR Code Target URL</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Link className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={qrUrl}
                  onChange={(e) => setQrUrl(e.target.value)}
                  placeholder="https://www.solarqubeenergy.in/"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white font-mono focus:outline-none focus:border-cyan-400"
                />
              </div>
              <button
                type="button"
                onClick={() => setQrUrl('https://www.solarqubeenergy.in/')}
                className="px-2.5 py-1.5 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-xs font-semibold cursor-pointer shrink-0"
                title="Reset to default URL"
              >
                Reset Default
              </button>
            </div>
            <div className="text-[10px] text-slate-400 mt-1">
              Changes update immediately on the "Scan to Connect" vector QR codes across both flyer sides.
            </div>
          </div>
          <button
            type="button"
            onClick={() => setShowQrEditor(false)}
            className="text-slate-400 hover:text-white text-xs font-bold px-2 py-1 rounded bg-slate-700/60 cursor-pointer self-start sm:self-auto"
          >
            Done
          </button>
        </div>
      )}

      {/* Print Instructions Modal / Banner */}
      {showPrintTips && (
        <div className="mt-3 max-w-4xl mx-auto p-3.5 bg-slate-800/95 border border-cyan-500/40 rounded-xl text-xs text-slate-300 shadow-xl flex items-start justify-between gap-3 animate-in fade-in slide-in-from-top-1">
          <div className="space-y-1">
            <div className="font-bold text-cyan-300 flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              Recommended Print & PDF Export Settings:
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[11px] text-slate-300 pt-1">
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>Destination:</strong> Save as PDF or Color Printer</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>Paper Size:</strong> A4 (210 &times; 297 mm)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>Margins:</strong> None / Default (0 mm)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>Background graphics:</strong> Checked (ON)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>Scale:</strong> 100% or Fit to printable area</span>
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>Pages:</strong> 2 Separate Sheets (Front & Back)</span>
              </li>
            </ul>
          </div>
          <button
            type="button"
            onClick={() => setShowPrintTips(false)}
            className="text-slate-400 hover:text-white text-xs font-bold px-2 py-1 rounded bg-slate-700/60 cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}
    </header>
  );
};
