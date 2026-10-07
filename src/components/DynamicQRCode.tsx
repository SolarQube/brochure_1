import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface DynamicQRCodeProps {
  url?: string;
  size?: number;
  className?: string;
  label?: string;
  sublabel?: string;
  showBorder?: boolean;
}

export const DynamicQRCode: React.FC<DynamicQRCodeProps> = ({
  url = 'https://www.solarqubeenergy.in/',
  size = 64,
  className = '',
  label = 'SCAN TO CONNECT',
  sublabel = 'www.solarqubeenergy.in',
  showBorder = true,
}) => {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center text-center bg-white rounded-xl ${
        showBorder ? 'p-1.5 border border-slate-200/90 shadow-xs' : ''
      } ${className}`}
    >
      {/* Precision Vector QR Code (Infinite resolution at 300+ DPI print) */}
      <div className="relative bg-white p-1 rounded-lg">
        <QRCodeSVG
          value={url}
          size={size}
          level="H"
          includeMargin={false}
          fgColor="#0B1B3D"
          bgColor="#FFFFFF"
        />
      </div>

      {label && (
        <div className="mt-1 text-[7.5px] font-black uppercase tracking-tight text-[#0B1B3D] leading-tight">
          {label}
        </div>
      )}

      {sublabel && (
        <div className="text-[6.5px] font-semibold text-[#0284C7] leading-none tracking-tight">
          {sublabel}
        </div>
      )}
    </div>
  );
};
