"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import Section4 from '../../assets/Section4.png';

// --- Improved Typewriter Animation Component (Runs every 1 minute) ---
function AnimatedPriceCounter({ finalValue }) {
  const [displayText, setDisplayText] = useState("");
  const typingIntervalRef = useRef(null);
  const loopIntervalRef = useRef(null);

  useEffect(() => {
    const fullString = `$${parseInt(finalValue, 10).toLocaleString()}`;

    const startTypingAnimation = () => {
      let currentIndex = 0;
      
      // Purani typing animation ko clear karna
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
      
      setDisplayText(""); // Reset to empty before typing

      // Har character ko 75ms ke gap se type karega
      typingIntervalRef.current = setInterval(() => {
        if (currentIndex < fullString.length) {
          setDisplayText(fullString.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingIntervalRef.current);
        }
      }, 10);
    };

    // 1. Pehli baar page load/refresh par foran chalega
    startTypingAnimation();

    // 2. Har 1 minute (60000 milliseconds) baad isko automatic dobara chalayega
    loopIntervalRef.current = setInterval(() => {
      startTypingAnimation();
    }, 60000); 

    // Component unmount hone par memory leaks se bachne ke liye cleanup
    return () => {
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
      if (loopIntervalRef.current) clearInterval(loopIntervalRef.current);
    };
  }, [finalValue]);

  return <>{displayText}</>;
}

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
  const monthlyCalls = 1500;
  const missedInquiryPct = 30;
  const conversionRate = 22;
  const avgJobValue = 1200;

  const { lastMonthlyRevenue, lostAnnually, estimatedRecovered } = useMemo(() => {
    return {
      lastMonthlyRevenue: 118800,
      lostAnnually: 1425600,
      estimatedRecovered: 2494800
    };
  }, []);

  return (
    // Outer section breaks constraints layout safely
    <section className="w-full relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen flex flex-col items-center justify-center bg-white font-robotoPin selection:bg-[#C2FFE5] overflow-x-hidden">
      
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* Header Container */}
      <div className="w-full max-w-[791px] md:pt-[30px] md:pb-[48px] flex flex-col items-center justify-center text-center gap-3 px-4">
        <h2 className="w-full font-roboto font-medium text-[32px] md:text-[42px] leading-tight text-black tracking-normal">
          How Much Revenue Are You Losing?
        </h2>
        <p className="w-full font-roboto font-normal text-[16px] md:text-[18px] leading-[167%] text-[#484848]">
          Estimate your potential revenue impact based on your practice's communication metrics.
        </p>
      </div>

      {/* IMAGE CONTAINER LAYER */}
      <div 
        className="w-full min-h-[567px] bg-cover bg-center bg-no-repeat rounded-none border-none flex items-center justify-center py-12 px-4 sm:px-6 md:px-8 lg:px-[100px]"
        style={{ 
          backgroundImage: `url(${Section4})`,
          backgroundSize: '100% 100%'
        }}
      >
        {/* Inside Main Interactive content Grid */}
        <div className="w-full max-w-[965px] flex flex-col md:flex-row items-center md:items-stretch justify-center gap-[57px]">
          
          {/* LEFT CARD */}
          <div className="relative w-full max-w-[486px] min-h-[444px] bg-[#D4D4D4]/69 border-2 border-[#C2FFE5] rounded-[16px] shadow-[0px_4px_10px_3px_rgba(194,255,229,0.6)] backdrop-blur-[2px] p-8 flex flex-col justify-between">
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

            <div className="w-full h-0 border-t border-black/25 my-6" />

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

          {/* RIGHT CARD */}
          <div className="relative w-full max-w-[422px] min-h-[439px] bg-[#ECEBEE]/54 border border-white rounded-[16px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] backdrop-blur-[30.5px] p-[19px] flex flex-col gap-8 justify-between">
            <div className="w-full flex flex-col gap-4">
              <InputRow label="Monthly Calls" value={monthlyCalls} />
              <InputRow label="Missed Inquiry %" value={missedInquiryPct} suffix="%" />
              <InputRow label="Average Job value" value={avgJobValue} prefix="$" />
            </div>

            {/* Green Box matching Figma image component */}
            <div className="relative w-full min-h-[177px] bg-[#C2FFE5]/72 rounded-[16px] shadow-[0px_4px_10px_#C2FFE5] backdrop-blur-[30.5px] py-4 px-5 flex flex-col items-center justify-between gap-[17px]">
              <p className="w-full font-roboto font-bold text-[17px] leading-[120%] text-center text-black tracking-normal">
                ESTIMATED ANNUAL REVENUE RECOVERED
              </p>
              
              {/* Typewriter Counter Container Area */}
              <div className="flex items-center justify-center relative select-none">
                <span className="font-roboto font-bold text-[42px] leading-[120%] text-black tracking-tight pl-2">
                  <AnimatedPriceCounter finalValue={estimatedRecovered} />
                </span>
                
                {/* Visual cursor line animation mimicking image properties */}
                <div className="w-1.5 h-[42px] bg-[#3C995B] ml-2 animate-pulse rounded-sm" />
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