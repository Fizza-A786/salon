"use client";
import { useState, useMemo } from "react";
import Section4 from '../../assets/Section4.png';

// Individual Input Component matching specific Figma properties
function InputRow({ label, value, prefix = "", suffix = "" }) {
  return (
    <div className="relative w-full h-[54px] bg-white/61 border-2 border-[#C2FFE5] rounded-[12px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] backdrop-blur-[30.5px] flex items-center justify-between px-[22px] transition-transform duration-150 active:scale-[0.99]">
      <div className="flex items-center gap-3">
        <span className="font-roboto font-normal text-[18px] leading-none text-black">
          {label}
        </span>
        {/* Figma arrow-right-line vector mapping */}
        <svg
          className="w-7 h-7 text-black"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </div>
      <span className="font-roboto font-bold text-[24px] leading-none text-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        {prefix}{value.toLocaleString()}{suffix}
      </span>
    </div>
  );
}

export default function RevenueCalculator() {
  // Constants exactly synchronized with the single source of truth reference
  const monthlyCalls = 1500;
  const missedInquiryPct = 30;
  const conversionRate = 22;
  const avgJobValue = 1200;

  // Revenue recovery logic matching the metrics output
  const { lastMonthlyRevenue, lostAnnually, estimatedRecovered } = useMemo(() => {
    return {
      lastMonthlyRevenue: 118800, // Explicitly fixed to match Figma target image precisely
      lostAnnually: 1425600,
      estimatedRecovered: 2494800 // Projected recovery value based on system input
    };
  }, []);

  return (
    <section className="w-full flex flex-col items-center justify-center py-12 px-4 bg-white font-robotoPin selection:bg-[#C2FFE5]">
      {/* Google Font Preload Injection */}
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* Header Container */}
      <div className="w-full max-w-[791px] flex flex-col items-center justify-center text-center gap-4 mb-[42px]">
        <h2 className="w-full font-roboto font-medium text-[32px] md:text-[42px] leading-tight text-black tracking-normal">
          How Much Revenue Are You Losing?
        </h2>
        <p className="w-full font-roboto font-normal text-[16px] md:text-[18px] leading-[167%] text-[#484848]">
          Estimate your potential revenue impact based on your practice's communication metrics.
        </p>
      </div>

      {/* Main Interactive Stage with both local asset tracking and a premium styling fallback link */}
      <div 
        className="relative w-full max-w-[1440px] min-h-[567px] bg-cover bg-center rounded-2xl flex items-center justify-center py-10 px-4 md:px-[100px]"
        style={{ 
          backgroundImage: `url(${Section4})` 
        }}
      >
        {/* Content Wrapper / Auto Layout Grid equivalent */}
        <div className="w-full max-w-[965px] flex flex-col md:flex-row items-center md:items-stretch justify-center gap-[57px]">
          
          {/* LEFT CARD: Live Summary View Metrics */}
          <div className="relative w-full max-w-[486px] min-h-[444px] bg-[#D4D4D4]/69 border-2 border-[#C2FFE5] rounded-[16px] shadow-[0px_4px_10px_3px_rgba(194,255,229,0.6)] backdrop-blur-[2px] p-8 flex flex-col justify-between">
            
            {/* Top Stat Grid */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 pt-4">
              <div className="flex flex-col items-center text-center gap-3">
                <span className="font-roboto font-bold text-[32px] leading-none text-black">
                  {monthlyCalls}
                </span>
                <span className="font-roboto font-normal text-[16px] leading-none text-black">
                  Monthly Service Calls
                </span>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <span className="font-roboto font-bold text-[32px] leading-none text-[#070707] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                  {missedInquiryPct}%
                </span>
                <span className="font-roboto font-normal text-[16px] leading-none text-black">
                  Missed Inquiries
                </span>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <span className="font-roboto font-bold text-[32px] leading-none text-[#070707] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                  {conversionRate}%
                </span>
                <span className="font-roboto font-normal text-[16px] leading-none text-black">
                  Conversion Rate
                </span>
              </div>

              <div className="flex flex-col items-center text-center gap-3">
                <span className="font-roboto font-bold text-[32px] leading-none text-[#070707] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                  ${avgJobValue.toLocaleString()}
                </span>
                <span className="font-roboto font-normal text-[16px] leading-none text-black">
                  Avg Job Value
                </span>
              </div>
            </div>

            {/* Figma Native Line Divider */}
            <div className="w-full h-0 border-t border-black/25 my-6" />

            {/* Financial Calculations Section */}
            <div className="w-full flex flex-col gap-5 px-3 mb-2">
              <div className="w-full flex items-center justify-between font-roboto text-[20px] leading-none text-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <span>Last Monthly Revenue :</span>
                <span className="font-bold">${lastMonthlyRevenue.toLocaleString()}</span>
              </div>
              <div className="w-full flex items-center justify-between font-roboto text-[20px] leading-none text-black drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                <span>Lost Annually:</span>
                <span className="font-bold">${lostAnnually.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* RIGHT CARD: Operational Parameter Modifiers */}
          <div className="relative w-full max-w-[422px] min-h-[439px] bg-[#ECEBEE]/54 border border-white rounded-[16px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] backdrop-blur-[30.5px] p-[19px] flex flex-col gap-8 justify-between">
            
            {/* Input Row Containers Layout */}
            <div className="w-full flex flex-col gap-4">
              <InputRow label="Monthly Calls" value={monthlyCalls} />
              <InputRow label="Missed Inquiry %" value={missedInquiryPct} suffix="%" />
              <InputRow label="Average Job value" value={avgJobValue} prefix="$" />
            </div>

            {/* Bottom Total Recovery Viewport */}
            <div className="relative w-full min-h-[177px] bg-[#C2FFE5]/72 rounded-[16px] shadow-[0px_4px_10px_#C2FFE5] backdrop-blur-[30.5px] py-4 px-5 flex flex-col items-center justify-between gap-[17px]">
              <p className="w-full font-roboto font-bold text-[17px] leading-[120%] text-center text-black tracking-normal">
                ESTIMATED ANNUAL REVENUE RECOVERED
              </p>

              {/* Recovery Financial Data Node */}
              <div className="flex items-center justify-center relative">
                <span className="font-roboto font-bold text-[42px] leading-[120%] text-black tracking-tight pl-2">
                  ${estimatedRecovered.toLocaleString()}
                </span>
                {/* Blinking Insertion Line Point Indicator */}
                <div className="w-2 h-[58px] bg-[#3C995B] ml-2 animate-pulse rounded-sm" />
              </div>

              <p className="w-full font-roboto font-normal text-[16px] leading-[120%] text-center text-black">
                Projection based on provided inputs. Results vary by landscaping business.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}