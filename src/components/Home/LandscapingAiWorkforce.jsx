import React from "react";

// ── LOCAL IMAGE IMPORTS (UNCHANGED) ─────────────────────────────────────────
import layoutBg from "../../assets/Obj.png"; 
import qrCodeUrl from "../../assets/qr.png"; 
import obj1 from "../../assets/assistant.png";


const nodes = [
  { id: 1, title: "Customer & Service Requests", desc: "AI handles calls, messages, and job inquires" },
  { id: 2, title: "Scheduling & Routing",         desc: "Smart crew scheduling and route optimization" },
  { id: 3, title: "Billing & Payments",           desc: "Invoices, payments, and job tracking" },
  { id: 4, title: "Marketing & Retention",        desc: "Follow-ups, promotions, repeat clients" },
];

const bullets = [
  "Handles customer inquiries and service requests automatically",
  "24/7 voice and chat booking",
  "Smart scheduling and route optimization",
  "Automated invoicing and payments",
  "Marketing and repeat client growth",
];

export default function LandscapingAiWorkforce() {
  return (
    <div className="w-full max-w-[1280px] bg-white flex flex-col items-center p-4 md:p-8 gap-[36px] font-['Roboto',sans-serif] antialiased mx-auto overflow-hidden select-none">
      
      {/* Title */}
      <h1 className="w-full max-w-[700px] text-[36px] md:text-[42px] font-bold tracking-tight text-[#000000] text-center leading-[115%] mt-2">
        Run your landscaping business<br />
        with a complete AI workforce.
      </h1>

      {/* Main Container Row */}
      <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-[32px] mt-2">
        
        {/* ── LEFT AREA: DIAGRAM IMAGE BOX (740px x 480px) ── */}
        <div className="relative w-full max-w-[740px] h-[480px] bg-white rounded-[24px] overflow-hidden flex-shrink-0 shadow-md">
          
          <img 
            src={layoutBg} 
            alt="Landscaping Representative Stage" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
          />

          {/* ── PERFECT SMOOTH CURVEY LINES (RE-CALCULATED) ── */}
          {/* C point controls the sexy bezier curves to make it match Figma smoothly */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
            viewBox="0 0 740 480" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Base anchor point from right side of CRM Badge: X=405, Y=240 */}
            
            {/* Curve 1 to Customer & Service Requests */}
            <path 
              d="M 405,240 C 450,240 440,58 482,58" 
              stroke="#C2FFE5" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
            
            {/* Curve 2 to Scheduling & Routing */}
            <path 
              d="M 405,240 C 450,240 445,178 482,178" 
              stroke="#C2FFE5" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
            
            {/* Curve 3 to Billing & Payments */}
            <path 
              d="M 405,240 C 450,240 445,302 482,302" 
              stroke="#C2FFE5" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
            
            {/* Curve 4 to Marketing & Retention (PERFECTLY CONNECTED NOW) */}
            <path 
              d="M 405,240 C 450,240 440,422 482,422" 
              stroke="#C2FFE5" 
              strokeWidth="2.5" 
              strokeLinecap="round"
            />
          </svg>

          {/* ── CENTRAL HUB BADGE ── */}
          <div className="absolute left-[260px] top-[200px] w-[145px] h-[80px] bg-[#DCF3ED] border-2 border-white rounded-[14px] shadow-[0px_4px_12px_rgba(194,255,229,0.5)] z-30 flex items-center justify-center p-3">
            <div className="font-semibold text-[15px] text-black text-center leading-[120%]">
              Landscaping <br />CRM Activated
            </div>
          </div>

          {/* ── FLOATING PANEL CARDS ── */}
          <div className="absolute right-[24px] top-[14px] bottom-[14px] w-[234px] flex flex-col justify-between z-30">
            
            {/* Card 1 */}
            <div className="w-full h-[90px] bg-[#DCF3ED]/95 backdrop-blur-sm border border-white rounded-[14px] p-2.5 shadow-sm flex flex-col justify-center">
              <div className="flex flex-row items-start gap-2">
                <div className="w-[15px] h-[15px] bg-[#B5F3DE] border border-[#FDFDFD] rounded-[5px] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col min-w-0">
                  <div className="text-black font-semibold text-[13px] leading-tight truncate">{nodes[0].title}</div>
                  <div className="text-[#484848] text-[11px] leading-[130%] font-normal mt-0.5 line-clamp-2">{nodes[0].desc}</div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full h-[90px] bg-[#DCF3ED]/95 backdrop-blur-sm border border-white rounded-[14px] p-2.5 shadow-sm flex flex-col justify-center">
              <div className="flex flex-row items-start gap-2">
                <div className="w-[15px] h-[15px] bg-[#B5F3DE] border border-[#FDFDFD] rounded-[5px] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col min-w-0">
                  <div className="text-black font-semibold text-[13px] leading-tight truncate">{nodes[1].title}</div>
                  <div className="text-[#484848] text-[11px] leading-[130%] font-normal mt-0.5 line-clamp-2">{nodes[1].desc}</div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full h-[90px] bg-[#DCF3ED]/95 backdrop-blur-sm border border-white rounded-[14px] p-2.5 shadow-sm flex flex-col justify-center">
              <div className="flex flex-row items-start gap-2">
                <div className="w-[15px] h-[15px] bg-[#B5F3DE] border border-[#FDFDFD] rounded-[5px] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col min-w-0">
                  <div className="text-black font-semibold text-[13px] leading-tight truncate">{nodes[2].title}</div>
                  <div className="text-[#484848] text-[11px] leading-[130%] font-normal mt-0.5 line-clamp-2">{nodes[2].desc}</div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="w-full h-[90px] bg-[#DCF3ED]/95 backdrop-blur-sm border border-white rounded-[14px] p-2.5 shadow-sm flex flex-col justify-center">
              <div className="flex flex-row items-start gap-2">
                <div className="w-[15px] h-[15px] bg-[#B5F3DE] border border-[#FDFDFD] rounded-[5px] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col min-w-0">
                  <div className="text-black font-semibold text-[13px] leading-tight truncate">{nodes[3].title}</div>
                  <div className="text-[#484848] text-[11px] leading-[130%] font-normal mt-0.5 line-clamp-2">{nodes[3].desc}</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── RIGHT AREA: DESCRIPTION & UPDATED ACTIONS ── */}
        <div className="w-full max-w-[440px] flex flex-col justify-between min-h-[480px] flex-shrink-0 px-2">
          
          <div className="w-full text-[16px] md:text-[17px] font-normal text-black text-left leading-[175%]">
            <ul className="space-y-3.5 list-none p-0 m-0">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-black font-bold select-none text-[15px] mt-0.5">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Row */}
          <div className="w-full flex flex-row items-end justify-between mt-6 lg:mt-auto gap-4">
            
            {/* Male AI Assistant Card */}
            <div className="w-[210px] h-[250px] bg-[#EAFBF5] border border-[#3C995B]/20 rounded-[18px] shadow-sm relative flex-shrink-0 p-3 flex flex-col justify-between">
              <div className="w-full h-[105px] bg-white rounded-[12px] overflow-hidden relative">
                <img 
                  src={obj1} 
                  alt="AI Assistant Silhouette Avatar View" 
                  className="absolute w-full h-full object-cover "
                />
              </div>
              <div className="w-full flex flex-col gap-0.5 mt-1">
                <div className="text-[12px] font-normal text-gray-500 leading-none">Male AI Assistant</div>
                <div className="text-[15px] font-bold text-black leading-tight mt-1">AI Landscaping Expert Agent</div>
              </div>
              <button className="w-full h-[38px] bg-[#3C995B] hover:bg-[#2e7746] transition-colors rounded-[10px] flex items-center justify-center shadow-sm mt-2">
                <span className="text-[13px] font-medium text-white tracking-wide">Learn More</span>
              </button>
            </div>

            {/* QR Scanner Container */}
            <div className="w-[140px] h-[155px] bg-[#F8FDFB] rounded-[18px] overflow-hidden flex flex-col items-center justify-center shadow-sm border border-emerald-50/50">
              <img 
                src={qrCodeUrl} 
                alt="Quick Navigation target module" 
                className="w-full h-auto object-contain"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}