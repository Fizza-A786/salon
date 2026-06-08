import React from 'react';
// Import your background asset here
import bg3 from '../../assets/bg3.png'; 

// --- Precise Alert Icons matching Figma ---
const AlertTriangleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="select-none pointer-events-none shrink-0">
    <path d="M12 2L1 21h22L12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z" fill="#886A44"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="select-none pointer-events-none shrink-0">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#3C995B"/>
  </svg>
);

// --- 1. Small Metric Cards (Left Column) - Increased Size ---
const MetricCard = ({ value, label, isGreenAlert = false }) => (
  <div 
    className="relative flex flex-col justify-between backdrop-blur-[19px] rounded-2xl select-none text-left shrink-0 mx-auto sm:mx-0"
    style={{
      width: '176px', 
      height: '135px',
      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(241, 238, 238, 0.3) 100%)',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.12)',
      border: '1px solid rgba(255, 255, 255, 0.45)',
      padding: '18px'
    }}
  >
    <div className="absolute top-[14px] right-[14px]">
      {isGreenAlert ? <CheckCircleIcon /> : <AlertTriangleIcon />}
    </div>
    <div className="mt-auto flex flex-col gap-1.5">
      <span className={`text-[32px] font-bold tracking-tight leading-none ${isGreenAlert ? 'text-[#3C995B]' : 'text-[#886A44]'}`}>
        {value}
      </span>
      <p className="text-[12px] font-medium text-[#484848] leading-[15px]">
        {label}
      </p>
    </div>
  </div>
);

// --- 2. Big Detail Cards (Bottom Row) - Dynamic Responsive Width ---
const DetailCard = ({ children, isGreenAlert = false }) => (
  <div 
    className="relative flex flex-col justify-start backdrop-blur-[19px] text-left rounded-2xl w-full"
    style={{
      height: '188.73px',
      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(241, 238, 238, 0.3) 100%)',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.4)'
    }}
  >
    <div className="absolute top-[18px] right-[18px] z-20">
      {isGreenAlert ? <CheckCircleIcon /> : <AlertTriangleIcon />}
    </div>
    {/* Frame 2147229387 Alignment */}
    <div className="absolute left-[26px] top-[23px] right-[26px] h-[128px] flex flex-col gap-[14px]">
      {children}
    </div>
  </div>
);

// --- Main Section Component ---
export default function RevenueLeakageSection() {
  return (
    <section className="w-full bg-white flex flex-col items-center font-['Roboto',sans-serif] antialiased pb-16 overflow-hidden">
      <div className="w-full flex flex-col">
        
        {/* Top Header Section */}
        <div className="w-full text-center pt-[80px] pb-[45px] max-w-4xl mx-auto flex flex-col gap-3 px-4">
          <h2 className="text-[#000000] text-3xl md:text-[38px] font-bold tracking-tight leading-[1.2]">
            Why Most Landscaping Businesses<br />Are Quietly Losing Revenue
          </h2>
<p className="text-[#484848] text-sm md:text-[17px] font-normal tracking-wide max-w-2xl mx-auto whitespace-nowrap">
  Hidden inefficiencies in scheduling, follow-ups, and job management are costing thousands every month.
</p>
        </div>

        {/* Dashboard Canvas Container Area */}
        <div 
          className="w-full bg-cover bg-center bg-no-repeat px-6 py-8 md:px-12 flex flex-col justify-start min-h-[550px]"
          style={{ backgroundImage: `url(${bg3})` }}
        >
          {/* Main Layout Container */}
          <div className="w-full max-w-[1140px] mx-auto flex flex-col gap-9 mt-4">
            
            {/* Top Row Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-13 gap-8 items-center">
              
              {/* Left Column Area: 2x2 Small Metric Cards with Increased Size */}
              <div className="grid grid-cols-2 gap-3 lg:col-span-5 shrink-0 mx-auto lg:mx-0">
                <MetricCard value="92" label="Missed Service Calls (Last 7 Days)" />
                <MetricCard value="$22,400" label="Estimated Lost Job Revenue" />
                <MetricCard value="35%" label="Unanswered Customer Inquiries" />
                <MetricCard value="28%" label="No Follow-Up on Estimates" isGreenAlert={true} />
              </div>

              {/* Center Column Area: Critical Leakage Display Box */}
              <div className="relative flex flex-col items-center justify-center lg:col-span-4">
                {/* Floating Analytics Pill Tag */}
                <div 
                  className="absolute -top-3.5 text-[#FAF9F5] text-[11px] font-bold tracking-normal px-[18px] py-1.5 rounded-full uppercase z-20 shadow-sm"
                  style={{ backgroundColor: '#7E6B4A' }}
                >
                  Analytics Dashboard
                </div>
                
                {/* Central Gradient Card */}
                <div 
                  className="rounded-[32px] flex flex-col items-center justify-center text-center shadow-[0_12px_24px_rgba(0,0,0,0.15)] border-[2px] border-white/60 z-10"
                  style={{
                    width: '308px',
                    height: '270px',
background: 'linear-gradient(132.36deg, #A3A379 9.01%, #7E6B4A 29.4%, #626946 75.56%)',
                    boxShadow: '0px 13px 17px rgba(136, 106, 68, 0.5)'
                  }}
                >
                  <h3 className="text-white text-[40px] font-black tracking-tight leading-[1.05]  uppercase select-none"
                  style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                  >
                    Critical <br />
                    Revenue <br />
                    Leakage
                  </h3>
                </div>
              </div>

              {/* Right Spacer Area: Leaves space for the cash illustration background */}
              <div className="lg:col-span-3 hidden lg:block" />

            </div>

            {/* Bottom Row Layout Grid: Wraps dynamically to prevent layout push */}
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-[15px] mt-4 w-full">
              
              {/* Detail Card 1 */}
              <DetailCard className="shadow-2xl">
                <div className="flex flex-col justify-start gap-2">
                  <h4 className="text-[18px] font-bold text-black leading-none tracking-tight">Missed Calls = Lost Jobs</h4>
                  <p className="text-[15px] text-[#484848] font-normal leading-[18px]">
                    Avg <span className="font-bold text-black">$1,500</span> per missed opportunity
                  </p>
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <h5 className="text-[18px] font-bold text-black leading-none tracking-tight">Customer Inquiry Delays</h5>
                  <p className="text-[15px] text-[#484848] font-normal leading-[18px]">Leads go cold within hours</p>
                </div>
              </DetailCard>

              {/* Detail Card 2 */}
              <DetailCard>
                <div className="flex flex-col justify-start gap-2">
                  <h4 className="text-[18px] font-bold text-black leading-none tracking-tight">Crew Scheduling Overload</h4>
                  <p className="text-[15px] text-[#484848] font-normal leading-[18px]">4+ hours wasted on manual coordination</p>
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <h5 className="text-[18px] font-bold text-black leading-none tracking-tight">Job No-Shows / Delays</h5>
                  <p className="text-[15px] text-[#484848] font-bold leading-[18px]">
                    18% loss of daily capacity
                  </p>
                </div>
              </DetailCard>

              {/* Detail Card 3 */}
              <DetailCard>
                <div className="flex flex-col justify-start gap-2">
                  <h4 className="text-[18px] font-bold text-black leading-none tracking-tight">Poor Follow-Up on Estimates</h4>
                </div>
                <div className="flex flex-col justify-start gap-1">
                  <h5 className="text-[18px] font-bold text-black leading-snug tracking-tight">
                    High-Value Projects Lost + $60,000
                  </h5>
                  <p className="text-[15px] text-[#484848] font-normal leading-[18px]">annual missed opportunities</p>
                </div>
              </DetailCard>

              {/* Detail Card 4 */}
              <DetailCard>
                <div className="flex flex-col justify-start items gap-2">
                  <h4 className="text-[17px] font-bold text-black leading-none tracking-tight">Pricing & Service  Confusion</h4>
                  <p className="text-[15px] text-[#484848] font-normal leading-[18px]">Service Confusion</p>
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <h5 className="text-[17px] font-bold text-black leading-none tracking-tight">Marketing Leakage Low ROI</h5>
                  <p className="text-[15px] text-[#484848] font-normal leading-[18px]">From untracked leads</p>
                </div>
              </DetailCard>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}