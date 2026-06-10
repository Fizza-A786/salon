"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
// Import your background asset here
import bg4 from "@/assets/bg4.png"

// --- Utility: Animated Price Counter with Typewriter Effect ---
function AnimatedPriceCounter({ finalValue }) {
  const [displayText, setDisplayText] = useState("");
  const typingIntervalRef = useRef(null);

  useEffect(() => {
    const formatted = `$${finalValue.toLocaleString()}`;
    let currentIndex = 0;

    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);

    typingIntervalRef.current = setInterval(() => {
      if (currentIndex < formatted.length) {
        setDisplayText(formatted.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingIntervalRef.current);
      }
    }, 50);

    return () => clearInterval(typingIntervalRef.current);
  }, [finalValue]);

  return <span>{displayText}</span>;
}

export default function RevenueCalculator() {
  const [inputs] = useState({
    monthlyCalls: 1200,
    missedPercent: 25,
    avgValue: 800,
  });

  const results = useMemo(() => {
    return {
      monthlyRevenue: 48000,
      lostAnnually: 576000,
      estimatedRecovered: 115200
    };
  }, []);

  return (
    <section className="w-full bg-white flex flex-col items-center justify-center pt-[76px] font-roboto overflow-hidden">

      {/* Header Section */}
      <div className="flex flex-col items-center gap-[16px] mb-[54px] max-w-[791px] text-center px-4">
        <h2 className="font-medium text-[32px] md:text-[42px] leading-[100%] text-black">
          How Much Revenue Are You Losing?
        </h2>
        <p className="font-normal text-[16px] md:text-[18px] leading-[167%] text-[#484848]">
          Estimate your potential revenue impact based on your practice's communication metrics.
        </p>
      </div>

      {/* BACKGROUND GRAPHIC SECTION WRAPPER */}
      <div
        className="w-full bg-[length:100%_100%] bg-center bg-no-repeat flex items-center justify-center py-[60px] md:py-[100px] px-4"
        style={{ backgroundImage: `url(${bg4.src || bg4})` }}
      >
        {/* FIXED ROW CONTAINER FOR GLASSMORPHIC CARDS */}
        <div className="w-full  flex flex-col lg:flex-row justify-center items-center lg:items-start gap-[40px] lg:gap-[152px]">

          {/* LEFT CARD: Results Display */}
          <div className="relative w-full max-w-[443px] h-[474px] bg-white/10 border-l-[6px] border-[#C2FFE5] rounded-[16px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] backdrop-blur-[2px] p-[52px_49px]">

            <div className="grid grid-cols-2 gap-x-[30px] gap-y-[52px] justify-items-center">
              {/* Monthly Calls */}
              <div className="flex flex-col items-center text-center gap-[12px] w-[121px]">
                <span className="font-bold text-[32px] leading-[100%] text-black">1200</span>
                <span className="text-[16px] md:text-[20px] leading-[100%] text-black whitespace-nowrap">Monthly Calls</span>
              </div>
              {/* Missed */}
              <div className="flex flex-col items-center text-center gap-[12px] w-[121px]">
                <span className="font-bold text-[32px] leading-[100%] text-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">25%</span>
                <span className="text-[16px] md:text-[20px] leading-[100%] text-black">Missed</span>
              </div>
              {/* Conversion Rate */}
              <div className="flex flex-col items-center text-center gap-[12px] w-[121px]">
                <span className="font-bold text-[32px] leading-[100%] text-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">20%</span>
                <span className="text-[16px] md:text-[20px] leading-[100%] text-black whitespace-nowrap">Conversion Rate</span>
              </div>
              {/* Avg Patient Value */}
              <div className="flex flex-col items-center text-center gap-[12px] w-[152px]">
                <span className="font-bold text-[32px] leading-[100%] text-black text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">$800</span>
                <span className="text-[16px] md:text-[20px] leading-[100%] text-black whitespace-nowrap">Avg Patient Value</span>
              </div>
            </div>

            {/* Divider Line */}
            <div className="w-[367px] border-t border-white absolute bottom-[156px] left-[38px]" />

            {/* Bottom Green Status Block */}
            <div className="absolute bottom-[36px] left-[37px] w-[369px] h-[105px] bg-[#3C995B] rounded-[10px] flex flex-col justify-center items-center gap-[20px] p-[12px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
              <div className="text-white text-[20px] font-normal leading-[100%] text-shadow">
                Last Monthly Revenue : <span className="font-bold">${results.monthlyRevenue.toLocaleString()}</span>
              </div>
              <div className="text-white text-[20px] font-normal leading-[100%] text-shadow">
                Lost Annually: <span className="font-bold">${results.lostAnnually.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* RIGHT CARD: Interactive Input Rows */}
          <div className="relative w-full max-w-[422px] h-[474px] bg-white/10 border border-white rounded-[16px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] backdrop-blur-[2px] p-[19px_15px]">

            <div className="flex flex-col gap-[16px] items-center">
              {/* Row 1: Monthly Calls */}
              <div className="w-[383px] h-[54px] bg-[rgba(170,163,163,0.39)] border-[2px] border-[#C2FFE5] rounded-[12px] flex items-center justify-between px-[22px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
                <div className="flex items-center gap-[12px]">
                  <span className="text-[18px] text-black">Monthly Calls</span>
                  <span className="text-[18px] text-black">➔</span>
                </div>
                <span className="font-bold text-[24px] text-black">1,200</span>
              </div>

              {/* Row 2: Missed Call % */}
              <div className="w-[383px] h-[54px] bg-[rgba(170,163,163,0.39)] border-[2px] border-[#C2FFE5] rounded-[12px] flex items-center justify-between px-[22px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
                <div className="flex items-center gap-[12px]">
                  <span className="text-[18px] text-black">Missed Call %</span>
                  <span className="text-[18px] text-black">➔</span>
                </div>
                <span className="font-bold text-[24px] text-black">25%</span>
              </div>

              {/* Row 3: Average Case Value */}
              <div className="w-[383px] h-[54px] bg-[rgba(170,163,163,0.39)] border-[2px] border-[#C2FFE5] rounded-[12px] flex items-center justify-between px-[22px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
                <div className="flex items-center gap-[12px]">
                  <span className="text-[18px] text-black">Average Case value</span>
                  <span className="text-[18px] text-black">➔</span>
                </div>
                <span className="font-bold text-[24px] text-black">$800</span>
              </div>
            </div>

            {/* Lower Dynamic Value Block */}
            <div className="absolute bottom-[16px] left-[19px] w-[383px] h-[202px] bg-[rgba(194,255,229,0.36)] rounded-[16px] shadow-[0px_4px_10px_#C2FFE5] backdrop-blur-[30.5px] flex flex-col items-center justify-between p-[16px_39px]">
              <h3 className="font-bold text-[20px] leading-[120%] text-center text-black tracking-normal">
                ESTIMATED ANNUAL REVENUE RECOVERED
              </h3>

              <div className="flex items-center justify-center gap-1">
                <span className="text-[42px] font-bold text-black tracking-tight">
                  <AnimatedPriceCounter finalValue={results.estimatedRecovered} />
                </span>
                <div className="w-[8px] h-[50px] bg-[##3C995B] animate-pulse" />
              </div>

              <p className="text-[16px] leading-[120%] text-center text-black">
                Projection based on provided inputs. Results vary by practice.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}