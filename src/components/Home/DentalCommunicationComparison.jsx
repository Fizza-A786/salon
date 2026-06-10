import React from 'react';
import p1 from "@/assets/p1.png";
import p2 from "@/assets/p2.png";

export default function DentalCommunicationComparison() {
  return (
    <div className="w-full min-h-screen bg-white pb-20 px-4 flex flex-col items-center justify-center font-['Roboto',sans-serif]">
      
      {/* Title Header Block */}
      <div className="flex flex-col md:pt-[70px] justify-center items-center gap-4 w-full max-w-[1008px] mb-[42px] text-center">
        <h2 className="w-full text-[32px] md:text-[42px] font-medium leading-[100%] tracking-tight text-black">
          Why Traditional Dental Communication Is Broken
        </h2>
        <p className="max-w-[791px] text-base md:text-[18px] leading-[167%] text-[#484848]">
          Operational limitations vs intelligent automation
        </p>
      </div>

      {/* Main Dual Grid Comparison Framework */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 w-full max-w-[1324px]">
        
        {/* LEFT COLUMN: Human-Only Model Card */}
        <div className="relative w-full max-w-[656px] h-[543px] bg-neutral-200 rounded-[20px] lg:rounded-r-none overflow-hidden">
          {/* Main Content Background Image */}
          {/* update images  */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: `url(${p2})` }}
          />
          
          {/* Glassmorphic Layer Structure */}
          <div className="absolute left-[30px] top-[55px] w-[288px] h-[314px] bg-white/40 border border-white/40 backdrop-blur-[8.5px] rounded-[20px] p-[20px] shadow-[0px_4px_14px_4px_rgba(0,0,0,0.1)] z-10 flex flex-col gap-4">
            <h3 className="text-[20px] font-medium tracking-[-1px] text-black uppercase leading-[140%]">
              HUMAN-ONLY MODEL
            </h3>
            <ul className="flex flex-col gap-2.5 text-black text-[15px] font-normal leading-[140%] list-none">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-[6px] bg-black rounded-full flex-shrink-0" />
                <span>8-5 availability only</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-[6px] bg-black rounded-full flex-shrink-0" />
                <span>Lunch-hour overflow</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-[6px] bg-black rounded-full flex-shrink-0" />
                <span>Sick-day disruption</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-[6px] bg-black rounded-full flex-shrink-0" />
                <span>Manual CRM entry errors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-[6px] bg-black rounded-full flex-shrink-0" />
                <span>No structured data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-[6px] bg-black rounded-full flex-shrink-0" />
                <span>No sentiment tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-[6px] bg-black rounded-full flex-shrink-0" />
                <span>No revenue automation</span>
              </li>
            </ul>
          </div>

          {/* Underlay Ambient Backlight Glow Effect */}
          <div className="absolute bottom-[44px] right-[40px] w-[162px] h-[42px] bg-[rgba(226,18,14,0.47)] blur-[35px] z-0" />

          {/* Bottom Custom Efficiency Meter Overlay */}
          <div className="absolute bottom-[57px] left-5 right-5 h-[51px] bg-white/40 border border-white/30 backdrop-blur-[8.5px] rounded-[12px] shadow-[0px_4px_14px_4px_rgba(0,0,0,0.1)] overflow-hidden z-10 flex items-center">
            {/* Horizontal Mask Progress Fill Area (35% Metric alignment) */}
            <div className="absolute left-0 top-0 bottom-0 w-[240px] bg-gradient-to-r from-red-300/80 to-[#FF9391]/20 backdrop-blur-[8.5px] rounded-[11px]" />
            {/* Precise Central Label Block */}
            <div className="w-full text-center text-[18px] font-normal text-black z-20">
              Workflow efficiency: <span className="font-bold">35% Effective</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: AI-Powered Daitchpro Model Card */}
        <div className="relative w-full max-w-[656px] h-[543px] bg-neutral-200 rounded-[20px] lg:rounded-l-none overflow-hidden">
          {/* Main Content Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: `url(${p1})` }}
          />
          
          {/* Glassmorphic Layer Structure */}
          <div className="absolute left-[30px] top-[55px] w-[332px] h-[314px] bg-white/40 border border-white/40 backdrop-blur-[8.5px] rounded-[20px] p-[20px] shadow-[0px_4px_14px_4px_rgba(0,0,0,0.1)] z-10 flex flex-col gap-4">
            <h3 className="text-[20px] font-medium tracking-[-1px] text-black uppercase leading-[140%]">
              AI-POWERED DAITCHPRO MODEL
            </h3>
            <ul className="flex flex-col gap-2.5 text-black text-[15px] font-normal leading-[140%] list-none">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-[6px] bg-black rounded-full flex-shrink-0" />
                <span>24/7 availability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-[6px] bg-black rounded-full flex-shrink-0" />
                <span>No breaks required</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-[6px] bg-black rounded-full flex-shrink-0" />
                <span>Never tired</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-[6px] bg-black rounded-full flex-shrink-0" />
                <span>Automatic CRM logging</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-[6px] bg-black rounded-full flex-shrink-0" />
                <span>Structured intelligence data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-[6px] bg-black rounded-full flex-shrink-0" />
                <span>Real-time sentiment analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 mt-[6px] bg-black rounded-full flex-shrink-0" />
                <span>Revenue automation engine</span>
              </li>
            </ul>
          </div>

          {/* Underlay Ambient Backlight Glow Effect */}
          <div className="absolute bottom-[44px] right-[40px] w-[162px] h-[42px] bg-[#A3D5C2] blur-[35px] z-0" />

          {/* Bottom Custom Efficiency Meter Overlay */}
          <div className="absolute bottom-[57px] left-5 right-5 h-[51px] bg-white/40 border border-white/30 backdrop-blur-[8.5px] rounded-[12px] shadow-[0px_4px_14px_4px_rgba(0,0,0,0.1)] overflow-hidden z-10 flex items-center">
            {/* Horizontal Mask Progress Fill Area (96% Metric alignment) */}
            <div className="absolute left-0 top-0 bottom-0 w-[584px] max-w-[96%] bg-[#A3D5C2]/20 backdrop-blur-[8.5px] rounded-[11px]" />
            {/* Precise Central Label Block */}
            <div className="w-full text-center text-[18px] font-normal text-black z-20">
              Workflow efficiency: <span className="font-bold">96% Effective</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}