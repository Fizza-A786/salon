import React from 'react';
import bg3 from '../../assets/bg3.png';

// --- Precise Alert Icons matching Figma ---
const AlertTriangleIcon = () => (
  <svg className="w-[14px] h-[14px] text-[#A37F61]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L1 21h22L12 2zm1 14h-2v-2h2v2zm0-4h-2V10h2v2z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-[14px] h-[14px] text-[#3C995B]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

// --- Sub-Components (Clean & Modular) ---
const MetricCard = ({ value, label, isGreenAlert = false }) => (
  <div className="bg-[#FAF9F5]/95 backdrop-blur-sm p-[22px] rounded-2xl border border-stone-200/40 shadow-[0_4px_24px_-6px_rgba(120,110,90,0.04)] flex flex-col justify-between relative min-h-[120px]">
    <div className="absolute top-5 right-5">
      {isGreenAlert ? <CheckCircleIcon /> : <AlertTriangleIcon />}
    </div>
    <div className="mt-auto">
      <span className={`text-[36px] font-bold tracking-tight leading-none ${isGreenAlert ? 'text-[#3C995B]' : 'text-[#826246]'}`}>
        {value}
      </span>
      <p className="text-[12px] font-medium text-stone-500 mt-2 leading-snug">
        {label}
      </p>
    </div>
  </div>
);

const DetailCard = ({ children }) => (
  <div className="bg-[#FAF9F5]/95 backdrop-blur-sm p-6 rounded-2xl border border-stone-200/40 shadow-[0_4px_24px_-6px_rgba(120,110,90,0.04)] flex flex-col gap-4 relative">
    <div className="absolute top-6 right-6">
      <AlertTriangleIcon />
    </div>
    <div className="flex flex-col gap-3.5">
      {children}
    </div>
  </div>
);

// --- Main Section Component ---
export default function RevenueLeakageSection() {
  return (
    <section className="w-full bg-white py-10 md:8    flex flex-col items-center font-sans antialiased">
      <div className=" w-full flex flex-col gap-12">
        
        {/* Top Header Section */}
        <div className="w-full text-center md:py-[50px] md:pb-[16px] bg-white max-w-4xl mx-auto flex flex-col gap-4">
          <h2 className="text-stone-900 text-3xl md:text-[42px] font-bold tracking-tight leading-[1.15]">
            Why Most Landscaping Businesses <br className="hidden md:inline" /> 
            Are Quietly Losing Revenue
          </h2>
          <p className="text-stone-500 text-sm md:text-base font-normal tracking-wide">
            Hidden inefficiencies in scheduling, follow-ups, and job management are costing thousands every month.
          </p>
        </div>

        {/* Dashboard Frame (Pure Background Image) */}
<div
  className="w-full lg:min-h-[620px] bg-cover bg-center bg-no-repeat p-6 md:p-10 lg:p-12 flex flex-col gap-10 justify-between"
  style={{ backgroundImage: `url(${bg3})` }}
>
          {/* Top Row Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Quad Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:col-span-5">
              <MetricCard value="92" label="Missed Service Calls (Last 7 Days)" />
              <MetricCard value="$22,400" label="Estimated Lost Job Revenue" />
              <MetricCard value="35%" label="Unanswered Customer Inquiries" />
              <MetricCard value="28%" label="No Follow-Up on Estimates" isGreenAlert={true} />
            </div>

            {/* Center Hero Card */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative min-h-[240px] lg:my-1">
              {/* Floating Pill Tag */}
              <span className="absolute top-0   bg-[linear-gradient(90deg,#836E4A_0%,#91825F_100%)] text-[#F4EFEA] text-[11px] font-bold tracking-wider px-5 py-2 rounded-full uppercase z-10 -translate-y-1/2 shadow-sm">
                Analytics Dashboard
              </span>
              
              {/* Main Badge Body */}
              <div className="w-full h-full bg-[linear-gradient(132deg,#A3A379_9.01%,#7E6B4A_29.4%,#626946_75.56%)] rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-[0_13px_17px_0_rgba(136,106,68,0.50)]
 border border-white">
                <h3 className="text-[#FDFDFB] text-3xl md:text-[36px] font-black tracking-tight leading-[1.08] uppercase">
                  Critical <br />
                  Revenue <br />
                  Leakage
                </h3>
              </div>
            </div>

            {/* Right Transparent Grid Space (Exposes money/leaves illustration on bg3.png) */}
            <div className="lg:col-span-3 hidden lg:block" />

          </div>

          {/* Bottom Grid Vector Rows */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Vector Card 1 */}
            <DetailCard>
              <div>
                <h4 className="text-[14px] font-bold text-stone-900 leading-tight">Missed Calls = Lost Jobs</h4>
                <p className="text-[12px] text-stone-500 font-medium mt-1">
                  Avg <span className="font-bold text-stone-800">$1,500</span> per missed service opportunity
                </p>
              </div>
              <div>
                <h5 className="text-[12px] font-bold text-stone-900">Customer Inquiry Delays</h5>
                <p className="text-[12px] text-stone-400 font-medium mt-0.5">Leads go cold within hours</p>
              </div>
            </DetailCard>

            {/* Vector Card 2 */}
            <DetailCard>
              <div>
                <h4 className="text-[14px] font-bold text-stone-900 leading-tight">Crew Scheduling Overload</h4>
                <p className="text-[12px] text-stone-500 font-medium mt-1">4+ hours wasted on manual coordination</p>
              </div>
              <div>
                <h5 className="text-[12px] font-bold text-stone-900">Job No-Shows / Delays</h5>
                <p className="text-[12px] text-stone-400 font-medium mt-0.5">
                  <span className="font-bold text-stone-800">18%</span> loss of daily capacity
                </p>
              </div>
            </DetailCard>

            {/* Vector Card 3 */}
            <DetailCard>
              <div>
                <h4 className="text-[14px] font-bold text-stone-900 leading-tight">Poor Follow-Up on Estimates</h4>
              </div>
              <div>
                <h5 className="text-[12px] font-bold text-stone-900 leading-tight">
                  High-Value Projects Lost + $60,000
                </h5>
                <p className="text-[12px] text-stone-400 font-medium mt-0.5">annual missed opportunities</p>
              </div>
            </DetailCard>

            {/* Vector Card 4 */}
            <DetailCard>
              <div>
                <h4 className="text-[14px] font-bold text-stone-900 leading-tight">Pricing & Service Confusion</h4>
                <p className="text-[12px] text-stone-500 font-medium mt-1">Service Confusion</p>
              </div>
              <div>
                <h5 className="text-[12px] font-bold text-stone-900">Marketing Leakage Low ROI</h5>
                <p className="text-[12px] text-stone-400 font-medium mt-0.5">From untracked leads</p>
              </div>
            </DetailCard>

          </div>

        </div>

      </div>
    </section>
  );
}