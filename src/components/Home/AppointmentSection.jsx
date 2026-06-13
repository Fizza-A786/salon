import React from 'react';
import qr from "../../assets/Vector.png";
// Imported your updated footer background asset
import footerBg from "../../assets/footer.png";

export default function AppointmentSection() {
  return (
    <section className="relative w-full max-w-[1440px] min-h-[697px] bg-white mx-auto flex flex-col items-center pt-10 px-4 font-['Roboto',sans-serif]">
      
      {/* Header Container */}
      <div className="w-full max-w-[1032px] flex flex-col justify-center items-center gap-4 text-center md:pt-[50px] md:pb-[10px] ">
        <h2 className="w-full max-w-[1008px] text-[32px] sm:text-[42px] font-medium leading-none text-black tracking-tight">
          Turn Every Call Into a Booked Appointment
        </h2>
        <p className="w-full max-w-[1032px] text-base sm:text-[18px] mb-[40px] leading-none text-[#484848]">
          Start using DaitchPro and never lose a client again
        </p>
      </div>

      {/* Main Feature Container with Full Image Background (No Cropping) */}
      <div 
        className="relative w-full max-w-[1400px] min-h-[579px] rounded-t-2xl overflow-hidden flex flex-col items-center justify-between py-12 px-4 sm:px-8 md:px-16 lg:px-24 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${footerBg})`,
          backgroundSize: "100% 100%" // Ensure full image fits boundaries without any edge-cropping
        }}
      >
        
        {/* Background Decorative Network Lines Graphic Effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        {/* Decorative Internal Blob Ellipse */}
        <div className="absolute w-[406px] h-[379px] right-[20%] bottom-[-100px] rounded-full bg-gradient-to-br from-[#C3E4D4] to-[#BEDBC8] filter blur-xl opacity-60 pointer-events-none"></div>

        {/* Inner Flex Layout for Cards */}
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-center gap-6 z-10 my-auto">
          
          {/* Cards Container - Adjusted gap for narrower card widths */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-[32px] lg:gap-[48px] w-full max-w-[700px] mx-auto">
            
            {/* Card 1: Talk to a Specialist */}
            <div className="w-[265px] min-h-[345px] bg-[#F3EBE1]/90 backdrop-blur-[2.5px] rounded-2xl p-[16px] pt-[20px] shadow-[0px_4px_14px_4px_rgba(0,0,0,0.1)] border border-white/20 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex flex-col gap-3">
                {/* Header Row: Icon & QR */}
                <div className="flex justify-between items-center w-full">
                  <div className="w-11 h-11 bg-[#E3D5C6] rounded-[9px] flex items-center justify-center shadow-inner">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  {/* QR Code Wrapper */}
                  <div className="w-[82px] h-[84px] bg-gradient-to-b from-white to-white/60 backdrop-blur-[2.5px] rounded-2xl p-1 flex items-center justify-center shadow-sm">
                    <img 
                      src={qr} 
                      alt="Scan QR code" 
                      className="w-[74px] h-[74px] object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-[18px] font-semibold text-black tracking-tight leading-[130%]">
                    Talk to a Specialist
                  </h3>
                  <p className="text-[13px] font-normal leading-[150%] text-black/90">
                    Experience natural, human-like responses from our AI retail assistant. Ask real questions and get instant answers.
                  </p>
                </div>
              </div>

              {/* Action Info Line */}
              <div className="flex flex-col mt-2 pt-2 border-t border-black/5">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">Dial to Call</span>
                <span className="text-[15px] font-medium text-black leading-tight">+1(800) 555-0199</span>
              </div>
            </div>

            {/* Card 2: Message the AI Specialist */}
            <div className="w-[265px] min-h-[345px] bg-[#F3EBE1]/90 backdrop-blur-[2.5px] rounded-2xl p-[16px] pt-[20px] shadow-[0px_4px_14px_4px_rgba(0,0,0,0.1)] border border-white/20 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="flex flex-col gap-3">
                {/* Header Row: Icon & QR */}
                <div className="flex justify-between items-center w-full">
                  <div className="w-11 h-11 bg-[#E3D5C6] rounded-[9px] flex items-center justify-center shadow-inner">
                    <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  {/* QR Code Wrapper */}
                  <div className="w-[82px] h-[84px] bg-gradient-to-b from-white to-white/60 backdrop-blur-[2.5px] rounded-2xl p-1 flex items-center justify-center shadow-sm">
                    <img 
                      src={qr}  
                      alt="Scan QR code" 
                      className="w-[74px] h-[74px] object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-[18px] font-semibold text-black tracking-tight leading-[130%]">
                    Message the AI Specialist
                  </h3>
                  <p className="text-[13px] font-normal leading-[150%] text-black/90">
                    Text your questions and experience how the DaitchPro AI communicates naturally, just like a real representative within our secure system.
                  </p>
                </div>
              </div>

              {/* Action Info Line */}
              <div className="flex flex-col mt-2 pt-2 border-t border-black/5">
                <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">OR send a text to</span>
                <span className="text-[15px] font-medium text-black leading-tight">+1(800) AI-DATICH</span>
              </div>
            </div>

          </div>

        </div>

        {/* Action Bottom Buttons Layout Footer inside Frame */}
        <div className="flex mt-8 flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full z-20">
          {/* Primary Radial Highlight Button */}

    <button className="inline-flex font-semibold items-center justify-center py-4 px-10 rounded-xl text-black border border-white/60 bg-[radial-gradient(59.41%_515.38%_at_40.59%_15.83%,rgba(175,217,177,0.95)_0%,rgba(60,153,91,0.95)_100%)] shadow-[0px_8px_24px_rgba(60,153,91,0.25)] hover:shadow-[0px_12px_28px_rgba(60,153,91,0.35)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap text-[16px]">

      Start Free Trial

    </button>



    {/* Secondary White/Green Ghost Button */}

    <button className="inline-flex font-semibold items-center justify-center py-4 px-10 rounded-xl text-[#3C995B] border-[1px] border-[#3C995B] bg-[#FFFFFF] shadow-[0px_4px_14px_rgba(0,0,0,0.15)] hover:bg-[#3C995B]/5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap text-[16px]">

      Book a Demo

    </button>
        </div>

      </div>
    </section>
  );
}