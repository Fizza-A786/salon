"use client";
import { useState, useMemo, useEffect } from "react";
// Import the background asset from your local project assets folder
import bgImage from "../../assets/bg4.png";

export default function RevenueCalculator() {
  // Calculator Form State
  const [monthlyCalls, setMonthlyCalls] = useState(1200);
  const [missedPct, setMissedPct] = useState(28);
  const [conversionRate, setConversionRate] = useState(35);
  const [avgOrderValue, setAvgOrderValue] = useState(95);

  const { lostMonthly, lostAnnually, recoveredAnnually } = useMemo(() => {
    // 1. Calculate missed client inquiries
    const totalMissedInquiries = monthlyCalls * (missedPct / 100);
    
    // 2. Out of missed, how many bookings were actually lost
    const lostBookingsCount = totalMissedInquiries * (conversionRate / 100);
    
    // 3. Compute lost monthly and annual revenues
    const lostMonthly = lostBookingsCount * avgOrderValue;
    const lostAnnually = lostMonthly * 12;

    // 4. Calculate recovered revenue based on an active target performance increase (e.g., recovering 70%)
    const recoveryRate = 0.70; 
    const recoveredAnnually = lostAnnually * recoveryRate;

    return {
      lostMonthly,
      lostAnnually,
      recoveredAnnually
    };
  }, [monthlyCalls, missedPct, conversionRate, avgOrderValue]);

  const fmt = (n) => "$" + Math.round(n).toLocaleString();

  // Typewriter Animation Logic
  const fullText = useMemo(() => fmt(recoveredAnnually), [recoveredAnnually]);
  const [displayedText, setDisplayedText] = useState(fullText);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    
    // If the underlying calculated value changes mid-type, instantly re-sync or let the animation re-run
    if (!isDeleting && fullText !== displayedText && !fullText.startsWith(displayedText)) {
      setDisplayedText(fullText);
      return;
    }

    if (!isDeleting) {
      // Typing phase
      if (displayedText !== fullText) {
        timer = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1));
        }, 120); // Speed of typing character
      } else {
        // Hold full text visibility before starting deletion cycle
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3500); 
      }
    } else {
      // Backspacing phase
      if (displayedText.length > 1) { // Keep the "$" prefix constant for cleaner presentation
        timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 60); // Speed of backspacing
      } else {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, fullText]);

  return (
    <section className="w-full bg-[#FFFFFF] flex flex-col items-center pt-[40px] gap-[42px] select-none" style={{ fontFamily: "'Roboto', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />

      {/* Header Block */}
      <div className="flex flex-col justify-center items-center pb-3 gap-4 w-full max-w-[1032px] min-h-[76px] mt-10 px-4">
        <h2 className="w-full font-medium text-[32px] md:text-[42px] leading-tight flex items-center justify-center text-center text-[#000000] tracking-tight">
          How Much Revenue Is Your Salon Losing?
        </h2>
        <p className="w-full font-normal text-[16px] md:text-[18px] leading-normal flex items-center justify-center text-center text-[#484848]">
          Calculate how missed calls, no-shows, and poor follow-ups are silently costing your salon thousands every month.
        </p>
      </div>

      {/* Hero Canvas Area - Background set directly here to ensure NO edge cropping */}
      <div 
        className="relative w-full max-w-[1440px] min-h-[633px] bg-white overflow-hidden pb-12 lg:pb-0 bg-no-repeat bg-center"
        style={{ 
          backgroundImage: `url(${bgImage.src || bgImage})`,
          backgroundSize: "100% 100%" // Ensures full image rendering safely locked within limits
        }}
      >
        
        {/* Flex container wrapper for layout on left side - Kept exact positions */}
        <div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-start gap-[40px] px-4 md:px-[60px] pt-[46px]">
          
          {/* =========================================================
              LEFT ANALYTICS CARD - Decreased Width to 395px
             ========================================================= */}
          <div className="relative w-full max-w-[395px] flex flex-col justify-between rounded-[20px] border border-white/20 shadow-[0px_4px_14px_4px_rgba(0,0,0,0.1)] backdrop-blur-[13.5px] overflow-hidden p-6"
               style={{ background: "linear-gradient(132.73deg, rgba(161, 164, 163, 0.2) 12.88%, rgba(255, 255, 255, 0) 163.96%)" }}>
            
            <div className="w-full flex flex-col gap-6">
              {/* Main Stats Node Stack */}
              <div className="w-full flex flex-col items-start gap-5">
                <h3 className="w-full font-medium text-[18px] leading-[140%] tracking-tight text-[#000000]">
                  MAIN ANALYTICS
                </h3>
                
                <div className="w-full flex flex-col items-start gap-5">
                  {/* Metric 1 */}
                  <div className="flex flex-row items-center gap-3 w-full">
                    <span className="w-[75px] shrink-0 font-black text-[26px] leading-none text-black drop-shadow-[0_4px_4px_rgba(255,255,255,0.8)]">
                      {monthlyCalls.toLocaleString()}
                    </span>
                    <span className="font-normal text-[17px] md:text-[18px] leading-tight text-black drop-shadow-[0_4px_4px_rgba(255,255,255,0.8)]">
                      Monthly Client Calls
                    </span>
                  </div>

                  {/* Metric 2 */}
                  <div className="flex flex-row items-start gap-3 w-full">
                    <span className="w-[75px] shrink-0 font-black text-[26px] leading-none text-black drop-shadow-[0_4px_4px_rgba(255,255,255,0.8)]">
                      {missedPct}%
                    </span>
                    <span className="font-normal text-[17px] md:text-[18px] leading-tight text-black drop-shadow-[0_4px_4px_rgba(255,255,255,0.8)]">
                      Missed Calls & No-Shows <span className="text-black/60 text-[13px] block font-light">(industry avg 15-30%)</span>
                    </span>
                  </div>

                  {/* Metric 3 */}
                  <div className="flex flex-row items-start gap-3 w-full">
                    <span className="w-[75px] shrink-0 font-black text-[26px] leading-none text-black drop-shadow-[0_4px_4px_rgba(255,255,255,0.8)]">
                      {conversionRate}%
                    </span>
                    <span className="font-normal text-[17px] md:text-[18px] leading-tight text-black drop-shadow-[0_4px_4px_rgba(255,255,255,0.8)]">
                      Booking Conversion Rate <span className="text-black/60 text-[13px] block font-light">(many salons underperform here)</span>
                    </span>
                  </div>

                  {/* Metric 4 */}
                  <div className="flex flex-row items-center gap-3 w-full">
                    <span className="w-[75px] shrink-0 font-black text-[26px] leading-none text-black drop-shadow-[0_4px_4px_rgba(255,255,255,0.8)]">
                      ${avgOrderValue}
                    </span>
                    <span className="font-normal text-[17px] md:text-[18px] leading-tight text-black drop-shadow-[0_4px_4px_rgba(255,255,255,0.8)]">
                      Average Service Value
                    </span>
                  </div>
                </div>
              </div>

              {/* Splitter Line Vector */}
              <div className="w-full border-t border-[#000000]/20" />

              {/* Downstream Calculations Array */}
              <div className="w-full flex flex-col gap-3">
                <h3 className="w-full font-medium text-[18px] leading-[140%] tracking-tight text-black">
                  REVENUE LOSS (REALISTIC)
                </h3>
                
                <div className="w-full flex flex-col gap-3">
                  <div className="w-full flex flex-row justify-between items-center gap-2">
                    <span className="font-normal text-[17px] text-black drop-shadow-[0_4px_4px_rgba(255,255,255,0.8)]">
                      Lost Monthly Revenue:
                    </span>
                    <span className="font-black text-[24px] md:text-[26px] leading-none text-black drop-shadow-[0_4px_4px_rgba(255,255,255,0.8)] text-right whitespace-nowrap">
                      {fmt(lostMonthly)}
                    </span>
                  </div>

                  <div className="w-full flex flex-row justify-between items-center gap-2">
                    <span className="font-normal text-[17px] text-black drop-shadow-[0_4px_4px_rgba(255,255,255,0.8)]">
                      Lost Annually:
                    </span>
                    <span className="font-black text-[24px] md:text-[26px] leading-none text-black drop-shadow-[0_4px_4px_rgba(255,255,255,0.8)] text-right whitespace-nowrap">
                      {fmt(lostAnnually)}
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>


          {/* =========================================================
              RIGHT INTERACTIVE CONTROLS CARD - Decreased Width to 355px
             ========================================================= */}
          <div className="relative w-full max-w-[355px] flex flex-col justify-between rounded-[20px] border border-white/20 shadow-[0px_4px_14px_4px_rgba(0,0,0,0.1)] backdrop-blur-[13.5px] overflow-hidden p-5"
               style={{ background: "linear-gradient(132.73deg, rgba(161, 164, 163, 0.2) 12.88%, rgba(255, 255, 255, 0) 163.96%)" }}>

            {/* Working Layout Layer */}
            <div className="w-full flex flex-col gap-5">
              
              {/* Input Components Assembly Frame */}
              <div className="w-full flex flex-col gap-3.5">
                
                {/* Row 1: Monthly Calls Input */}
                <div className="w-full min-h-[42px] bg-white/66 rounded-[10px] flex flex-row justify-between items-center pl-3 pr-0 gap-2 border border-black/5">
                  <span className="font-normal text-[14px] md:text-[15px] text-black py-1.5">
                    Monthly Client Inquired <span className="text-black/40 font-light mx-0.5">→</span>
                  </span>
                  <div className="w-[76px] h-10 bg-[#E2FBF0] border border-[#93FFD1] shadow-[0px_4px_13px_rgba(194,255,229,0.1)] rounded-[10px] flex items-center justify-center shrink-0">
                    <input 
                      type="number" 
                      value={monthlyCalls} 
                      onChange={(e) => setMonthlyCalls(Math.max(0, Number(e.target.value)))}
                      className="w-full bg-transparent border-none outline-none font-medium text-[15px] text-center text-black drop-shadow-[0_10px_10px_#C2FFE5]"
                    />
                  </div>
                </div>

                {/* Row 2: Missed Rate Input */}
                <div className="w-full min-h-[42px] bg-white/66 rounded-[10px] flex flex-row justify-between items-center pl-3 pr-0 gap-2 border border-black/5">
                  <span className="font-normal text-[14px] md:text-[15px] text-black py-1.5">
                    Missed Opportunity Rate (%) <span className="text-black/40 font-light mx-0.5">→</span>
                  </span>
                  <div className="w-[76px] h-10 bg-[#E2FBF0] border border-[#93FFD1] shadow-[0px_4px_13px_rgba(194,255,229,0.1)] rounded-[10px] flex items-center justify-center shrink-0">
                    <input 
                      type="number" 
                      value={missedPct} 
                      onChange={(e) => setMissedPct(Math.max(0, Math.min(100, Number(e.target.value))))}
                      className="w-full bg-transparent border-none outline-none font-medium text-[15px] text-center text-black drop-shadow-[0_10px_10px_#C2FFE5]"
                    />
                  </div>
                </div>

                {/* Row 3: Conversion Rate Input */}
                <div className="w-full min-h-[42px] bg-white/66 rounded-[10px] flex flex-row justify-between items-center pl-3 pr-0 gap-2 border border-black/5">
                  <span className="font-normal text-[14px] md:text-[15px] text-black py-1.5">
                    Booking Conversion Rate (%) <span className="text-black/40 font-light mx-0.5">→</span>
                  </span>
                  <div className="w-[76px] h-10 bg-[#E2FBF0] border border-[#93FFD1] shadow-[0px_4px_13px_rgba(194,255,229,0.1)] rounded-[10px] flex items-center justify-center shrink-0">
                    <input 
                      type="number" 
                      value={conversionRate} 
                      onChange={(e) => setConversionRate(Math.max(0, Math.min(100, Number(e.target.value))))}
                      className="w-full bg-transparent border-none outline-none font-medium text-[15px] text-center text-black drop-shadow-[0_10px_10px_#C2FFE5]"
                    />
                  </div>
                </div>

                {/* Row 4: Average Order Value Input */}
                <div className="w-full min-h-[42px] bg-white/66 rounded-[10px] flex flex-row justify-between items-center pl-3 pr-0 gap-2 border border-black/5">
                  <span className="font-normal text-[14px] md:text-[15px] text-black py-1.5">
                    Average Service Value <span className="text-black/40 font-light mx-0.5">→</span>
                  </span>
                  <div className="w-[76px] h-10 bg-[#E2FBF0] border border-[#93FFD1] shadow-[0px_4px_13px_rgba(194,255,229,0.1)] rounded-[10px] flex items-center justify-center shrink-0 relative">
                    <input 
                      type="number" 
                      value={avgOrderValue} 
                      onChange={(e) => setAvgOrderValue(Math.max(0, Number(e.target.value)))}
                      className="w-full bg-transparent border-none outline-none font-medium text-[15px] text-center text-black drop-shadow-[0_10px_10px_#C2FFE5]"
                    />
                  </div>
                </div>

              </div>

              {/* Splitter Line Vector */}
              <div className="w-full border-t border-[#000000]/20" />

              {/* AI Recovery Widget Section Block */}
              <div className="w-full flex flex-col items-start gap-3">
                <h3 className="w-full font-medium text-[18px] leading-[140%] tracking-tight text-black text-left">
                  AI RECOVERY BLOCK
                </h3>
                
                <div className="relative w-full min-h-[135px] p-4 flex flex-col items-center justify-center rounded-2xl bg-[#C2FFE5]/36 shadow-[0px_4px_10px_#C2FFE5] backdrop-blur-[30.5px]">
                  <h4 className="w-full font-bold text-[14px] md:text-[15px] leading-[130%] text-center text-black mb-2">
                    ESTIMATED ANNUAL REVENUE<br />RECOVERED WITH DAITCHPRO AI:
                  </h4>
                  
                  {/* Real-time Dynamic Counter Line with Typewriter effect */}
                  <div className="flex flex-row items-center justify-center gap-1 relative h-[45px]">
                    <span className="font-bold text-[32px] md:text-[36px] leading-none text-[#1E5631] tracking-tight min-w-[120px] text-center">
                      {displayedText}
                    </span>
                    {/* Native CSS Terminal Caret Cursor */}
                    <div className="w-1 h-[28px] md:h-[32px] bg-[#3C995B] animate-pulse rounded shrink-0" />
                  </div>
                </div>
              </div>

              {/* Disclaimers Typography Layer */}
              <p className="w-full font-normal text-[12px] leading-[130%] text-black/70 text-center lg:text-left">
                Based on AI reducing missed calls, improving conversion, and lowering no-shows. Results vary by salon.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}