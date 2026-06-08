import React from 'react';
import Object from '../../assets/Object.png';
import Object1 from '../../assets/Object1.png';

export default function LandscapingCommunication() {
  return (
    <div className="w-full min-h-screen bg-white  px-4 flex flex-col items-center justify-center font-['Roboto',sans-serif]">
      {/* Frame 2147229384 - Title Container */}
      <div className="flex flex-col justify-center  md:pt-[70px] md:pb-[20px]  items-center gap-4 w-full max-w-[1106px] mb-[42px] text-center">
        <h2 className="w-full text-[32px] md:text-[42px] font-medium leading-[100%] tracking-tight text-black">
          Why Traditional Landscaping Communication Is Broken
        </h2>
        <p className="max-w-[791px] text-base md:text-lg leading-[167%] text-[#484848]">
          Operational inefficiencies vs intelligent automation in landscaping businesses
        </p>
      </div>

      {/* Frame 2147229258 - Comparison Cards Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 w-full max-w-[1324px]">
        
        {/* Left Side: HUMAN-ONLY MODEL */}
        <div className="relative w-full max-w-[656px] h-auto min-h-[500px] bg-[#826440] rounded-[20px] p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-16">
            
            {/* Plan Text Container */}
            <div className="flex flex-col items-start gap-6 max-w-[335px] z-10">
              <span className="text-sm md:text-base font-medium uppercase tracking-wider text-[#E3CBA8]">
                HUMAN-ONLY MODEL
              </span>
              <ul className="flex flex-col gap-3 text-white text-base md:text-[17px] font-normal leading-[150%] list-none">
                <li className="flex items-start gap-2">
                  <span className="inline-block mt-[6px] w-[5px] h-[5px] min-w-[5px] bg-white rounded-full"></span>
                  <span>Limited 8-5 availability</span>
                </li>
                <li className="flex whitespace-nowrap items-start gap-2">
                  <span className="inline-block mt-[6px] w-[5px] h-[5px]  min-w-[5px] bg-white rounded-full"></span>
                  <span>Missed service calls during peak hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block mt-[6px] w-[5px] h-[5px] min-w-[5px] bg-white rounded-full"></span>
                  <span>Weather & schedule disruptions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block mt-[6px] w-[5px] h-[5px] min-w-[5px] bg-white rounded-full"></span>
                  <span>Manual job scheduling errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block mt-[6px] w-[5px] h-[5px] min-w-[5px] bg-white rounded-full"></span>
                  <span>No centralized customer data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block mt-[6px] w-[5px] h-[5px] min-w-[5px] bg-white rounded-full"></span>
                  <span>No lead tracking or follow-ups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block mt-[6px] w-[5px] h-[5px] min-w-[5px] bg-white rounded-full"></span>
                  <span>No revenue automation</span>
                </li>
              </ul>
            </div>

            {/* Frame 2147229394 - Image container */}
            <div className="w-[226px] h-[290px] md:h-[350px] bg-white border border-white rounded-[20px] overflow-hidden shadow-md flex-shrink-0 z-10 self-center md:self-auto">
              <img 
                     src={Object}
                alt="Stressed employee dealing with traditional model issues" 
                className="w-[100%] h-full object-cover object-center grayscale-[20%]"
              />
            </div>
          </div>

          {/* Efficiency Track Bar Bottom */}
          <div className="relative w-full h-[51px] bg-white/20 border border-white/20 rounded-[12px] p-[3px] backdrop-blur-[8.5px] shadow-[0px_4px_14px_4px_rgba(0,0,0,0.1)] flex items-center z-10 mt-auto">
            <div className="w-[45%] h-full bg-[#E1CAAE] rounded-[11px] backdrop-blur-[8.5px] transition-all duration-500"></div>
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <span className="text-sm md:text-base font-normal text-black text-center">
                Workflow efficiency: <strong className="font-bold">35% Effective</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: AI-POWERED DAITCHPRO MODEL */}
        <div className="relative w-full max-w-[656px] h-auto min-h-[500px] bg-[linear-gradient(130deg,#82BC95_7.71%,#275A3B_55.75%)] rounded-[20px] p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-16">
            
            {/* Frame 2147229394 - Image container */}
            <div className="w-[226px] h-[290px] md:h-[350px] bg-white border border-white rounded-[20px] overflow-hidden shadow-md flex-shrink-0 z-10 order-2 md:order-1 self-center md:self-auto">
              <img 
                     src={Object1}
                alt="Automated UI Landscape CRM Dashboard software representation" 
                className="w-full h-full object-cover object-left-top"
              />
            </div>

            {/* Plan Text Container */}
            <div className="flex flex-col items-start gap-6 max-w-[349px] z-10 order-1 md:order-2 w-full">
              <span className="text-sm md:text-base font-medium uppercase tracking-wider text-[#C2FFE5]">
                AI-POWERED DAITCHPRO MODEL
              </span>
              <ul className="flex flex-col gap-3 text-white text-base md:text-[17px] font-normal leading-[150%] list-none">
                <li className="flex items-start gap-2">
                  <span className="inline-block mt-[6px] w-[5px] h-[5px] min-w-[5px] bg-white rounded-full"></span>
                  <span>24/7 customer inquiry handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block mt-[6px] w-[5px] h-[5px] min-w-[5px] bg-white rounded-full"></span>
                  <span>Instant job scheduling & routing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block mt-[6px] w-[5px] h-[5px] min-w-[5px] bg-white rounded-full"></span>
                  <span>Weather-aware smart rescheduling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block mt-[6px] w-[5px] h-[5px] min-w-[5px] bg-white rounded-full"></span>
                  <span>Automatic CRM & job tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block mt-[6px] w-[5px] h-[5px] min-w-[5px] bg-white rounded-full"></span>
                  <span>Centralized customer intelligence</span>
                </li>
                <li className="flex whitespace-nowrap items-start gap-2">
                  <span className="inline-block mt-[6px] w-[5px] h-[5px] min-w-[5px] bg-white rounded-full"></span>
                  <span>Real-time lead & follow-up automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="inline-block mt-[6px] w-[5px] h-[5px] min-w-[5px] bg-white rounded-full"></span>
                  <span>Revenue optimization engine</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Efficiency Track Bar Bottom */}
          <div className="relative w-full h-[51px] bg-white/20 border border-white/20 rounded-[12px] p-[3px] backdrop-blur-[8.5px] shadow-[0px_4px_14px_4px_rgba(0,0,0,0.1)] flex items-center z-10 mt-auto">
            <div className="w-[98%] h-full bg-[#C2FFE5] rounded-[11px] backdrop-blur-[8.5px] transition-all duration-500"></div>
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <span className="text-sm md:text-base font-normal text-black text-center">
                Workflow efficiency: <strong className="font-bold">97% Effective</strong>
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}