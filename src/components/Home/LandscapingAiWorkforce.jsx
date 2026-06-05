'use client';

import React from 'react';

export default function LandscapingAiWorkforce() {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-start py-12 md:py-16 px-4 sm:px-6 md:px-12 font-sans antialiased select-none overflow-x-hidden">
      
      {/* --- HEADER TITLE --- */}
      <h1 className="w-full text-center text-[32px] sm:text-[38px] md:text-[42px] font-medium tracking-tight text-black mb-12 max-w-[700px] mx-auto leading-[110%] font-['Roboto',_sans-serif]">
        Run your landscaping business with a complete AI workforce.
      </h1>

      {/* --- DESKTOP AUTO LAYOUT FRAME CONTAINER --- */}
      <div className="w-full max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[881px_1fr] gap-[31px] items-start">
        
        {/* ========================================================
            LEFT COLUMN AREA: HERO OVERLAY BLOCK (881px fixed spec)
           ======================================================== */}
        <div className="relative rounded-[30px] overflow-hidden aspect-[881/528] w-full bg-[#f8f9fa] border border-black/5">
          {/* Base Background Image Source Asset */}
          <div 
            className="absolute inset-0 bg-cover"
            style={{ 
              backgroundImage: `url('/Section-06.png')`, 
              backgroundPosition: 'center center'
            }}
          />
          
          {/* Complete Flow Diagram Stack Layer */}
          <div className="absolute inset-0 flex items-center justify-end p-6 z-10">
            <div className="relative w-full max-w-[520px] h-full flex items-center justify-between">
              
              {/* --- CONNECTIVE SVG ROUTING LINES SYSTEM --- */}
              <div className="absolute inset-0 pointer-events-none z-20 text-[#C2FFE5]">
                <svg className="w-full h-full" viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Top Stem Branch Bracket to Customer & Service Requests Box */}
                  <path d="M 152 220 C 200 220 190 60 250 60 L 257 60" stroke="currentColor" strokeWidth="2" fill="none" />
                  
                  {/* Stem Branch to Scheduling & Routing Box */}
                  <path d="M 152 220 C 200 220 190 168 250 168 L 257 168" stroke="currentColor" strokeWidth="2" fill="none" />
                  
                  {/* Stem Branch to Billing & Payments Box */}
                  <path d="M 152 220 C 200 220 190 280 250 280 L 257 280" stroke="currentColor" strokeWidth="2" fill="none" />

                  {/* Lower Sweep Branch Hook into Marketing & Retention Box */}
                  <path d="M 76 250 L 76 370 C 76 392 140 392 200 392 L 250 392 C 255 392 257 394 257 398 L 257 402" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>

              {/* Master Control Action Node (Landscaping CRM Activated) */}
              <div className="relative flex flex-col justify-center h-full z-30 pl-2">
                <div className="bg-[#DCF3ED] border-2 border-white shadow-[0px_4px_4px_3px_rgba(194,255,229,0.4)] text-black font-semibold text-[18px] w-[158px] h-[78px] rounded-[15px] flex items-center justify-center text-center p-3 leading-[120%] font-['Roboto',_sans-serif]">
                  Landscaping CRM Activated
                </div>
              </div>

              {/* Destination Feature Node Block Stack */}
              <div className="flex flex-col justify-between h-full w-[263px] z-30 py-4">
                {[
                  { title: "Customer & Service Requests", desc: "AI handles calls, messages, and job inquires", lightBg: true },
                  { title: "Scheduling & Routing", desc: "Smart crew scheduling and route optimization" },
                  { title: "Billing & Payments", desc: "Invoices, payments, and job tracking" },
                  { title: "Marketing & Retention", desc: "Follow-ups, promotions, repeat clients" }
                ].map((node, idx) => (
                  <div 
                    key={idx} 
                    className="box-sizing-border-box w-[263px] h-[98px] bg-[#DCF3ED] border border-white rounded-[15px] p-[13px_11px] relative flex gap-[9px] items-start shadow-sm"
                  >
                    {/* Visual Check/Indicator Anchor Element */}
                    <div className="w-[20px] h-[20px] bg-[#B5F3DE] border border-[#FDFDFD] rounded-[6px] shrink-0 mt-0.5" />
                    
                    {/* Content Matrix Block */}
                    <div className="flex flex-col gap-2 font-['Roboto',_sans-serif]">
                      <h4 className="text-black font-medium text-[17px] leading-[100%] m-0">
                        {node.title}
                      </h4>
                      <p className="text-[#484848] text-[15px] font-normal leading-[100%] m-0">
                        {node.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ========================================================
            RIGHT COLUMN AREA: VALUE AGGREGATES & AGENT PANEL
           ======================================================== */}
        <div className="flex flex-col justify-start h-full pt-2">
          
          {/* Bullet Spec Description List */}
          <ul className="space-y-0 mb-10 text-black font-['Roboto',_sans-serif] text-[20px] font-normal leading-[190%] list-none pl-0">
            {[
              "Handles customer inquiries and service requests automatically",
              "24/7 voice and chat booking",
              "Smart scheduling and route optimization",
              "Automated invoicing and payments",
              "Marketing and repeat client growth"
            ].map((bullet, i) => (
              <li key={i} className="flex items-start mb-1">
                <span className="mr-3 text-black font-bold select-none">•</span>
                <span className="flex-1">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Identity Matrix Row Frame */}
          <div className="flex items-end justify-between w-full mt-auto gap-4">
            
            {/* --- COMPONENT BOX FRAME 2147229398 --- */}
            <div className="w-[218px] h-[266px] bg-[#C2FFE5]/[0.41] border-2 border-[#3C995B]/[0.27] shadow-[0px_2px_15px_5px_rgba(194,255,229,0.47)] rounded-[15px] p-2.5 flex flex-col relative justify-between font-['Roboto',_sans-serif] shrink-0">
              
              {/* Internal Crop Graphic Base (Frame 2147229399) */}
              <div className="w-[198px] h-[92px] bg-white rounded-[10px] overflow-hidden relative">
                <div 
                  className="w-[202px] h-[95px] absolute left-1/2 -translate-x-1/2 -top-[1px] bg-cover bg-center"
                  style={{ backgroundImage: `url('/Section-06.png')` }}
                />
              </div>

              {/* Description Content Stack Framework */}
              <div className="flex flex-col gap-[12px] px-[2px] mt-2">
                <p className="text-[16px] font-normal text-[#484848] m-0 leading-[100%]">
                  Male AI Assistant
                </p>
                <h2 className="text-[20px] font-semibold text-black m-0 leading-[120%]">
                  AI Landscaping Expert Agent
                </h2>
              </div>

              {/* Call-to-Action Interactive Element Button */}
              <button className="w-[198px] h-[49px] bg-[#3C995B] opacity-90 border border-white shadow-[0px_0px_30px_rgba(0,0,0,0.15)] backdrop-blur-[39.45px] rounded-[12px] flex items-center justify-center p-0 transition-all hover:opacity-100 cursor-pointer mt-2">
                <span className="text-[16px] font-medium text-white leading-[19px]">
                  Learn More
                </span>
              </button>
            </div>

            {/* --- QR SYSTEM TARGET BASE CONTAINER --- */}
            <div className="w-[120px] h-[120px] border border-gray-200 rounded-[18px] bg-white p-2.5 shadow-sm flex items-center justify-center shrink-0 mb-1">
              <div 
                className="w-full h-full bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: `url('/Section-06.png')` }}
                title="Access Link QR"
              />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}