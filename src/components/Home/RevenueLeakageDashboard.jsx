import React from 'react';
// Import your background asset here
import bg3 from '../../assets/bg3.png'; 

// --- Precise Alert Icons matching Figma ---
const AlertTriangleIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#A37F61]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L1 21h22L12 2zm1 14h-2v-2h2v2zm0-4h-2V10h2v2z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#3C995B]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

// --- Reusable Sub-Components ---
const MetricCard = ({ value, label, isGreenAlert = false }) => (
  <div className="bg-[#FAF9F5]/95 backdrop-blur-sm p-[22px] rounded-2xl border border-stone-200/40 shadow-[0_4px_24px_-6px_rgba(120,110,90,0.04)] flex flex-col justify-between relative min-h-[120px] w-full">
    <div className="absolute top-5 right-5">
      {isGreenAlert ? <CheckCircleIcon /> : <AlertTriangleIcon />}
    </div>
    <div className="mt-auto">
      <span className={`text-[36px] font-bold tracking-tight leading-none ${isGreenAlert ? 'text-[#3C995B]' : 'text-[#826440]'}`}>
        {value}
      </span>
      <p className="text-[12px] font-medium text-stone-500 mt-2 leading-snug">
        {label}
      </p>
    </div>
  </div>
);

const DetailCard = ({ children }) => (
  <div className="bg-[#FAF9F5]/95 backdrop-blur-sm p-6 rounded-2xl border border-stone-200/40 shadow-[0_4px_24px_-6px_rgba(120,110,90,0.04)] flex flex-col gap-4 relative min-h-[140px] w-full">
    <div className="absolute top-6 right-6">
      <AlertTriangleIcon />
    </div>
    <div className="flex flex-col gap-3.5 pr-2">
      {children}
    </div>
  </div>
);

// --- Main Section Component ---
export default function RevenueLeakageSection() {
  return (
    <section className="w-full bg-white py-10 flex flex-col items-center font-['Roboto',sans-serif] antialiased">
      <div className="w-full flex flex-col gap-12">
        
        {/* Top Header Section */}
        <div className="w-full text-center max-w-4xl mx-auto flex flex-col gap-4 px-4">
          <h2 className="text-stone-900 text-3xl md:text-[42px] font-bold tracking-tight leading-[1.15]">
            Why Most Landscaping Businesses <br className="hidden md:inline" /> Are Quietly Losing Revenue
          </h2>
<p className="text-stone-500 text-sm md:text-base font-normal tracking-wide mx-auto whitespace-nowrap">
  Hidden inefficiencies in scheduling, follow-ups, and job management are costing thousands every month.
</p>
        </div>

        {/* Dashboard Canvas Container (Utilizing your exact bg3.jpg) */}
        <div 
          className="w-full lg:min-h-[620px] bg-cover bg-center bg-no-repeat px-6 py-6 md:px-4 md:py-20 flex flex-col justify-between"
          style={{ backgroundImage: `url(${bg3})` }}
        >
          {/* Main inner stack with increased gap between top grid and bottom row */}
          <div className="w-full max-w-[1324px] mx-auto flex flex-col gap-20 lg:gap-24">
            
            {/* Top Row Layout Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Side: 4 Quad Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:col-span-5">
                <MetricCard value="92" label="Missed Service Calls (Last 7 Days)" />
                <MetricCard value="$22,400" label="Estimated Lost Job Revenue" />
                <MetricCard value="35%" label="Unanswered Customer Inquiries" />
                <MetricCard value="28%" label="No Follow-Up on Estimates" isGreenAlert={true} />
              </div>

              {/* Center Side: Critical Revenue Leakage Badge (Shifted slightly left via column span allocation) */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center relative min-h-[240px] lg:my-1 lg:-ml-6">
                {/* Floating Pill Tag */}
                <span className="absolute top-0 bg-gradient-to-r from-[#836E4A] to-[#91825F] text-[#F4EFEA] text-[11px] font-bold tracking-wider px-5 py-2 rounded-full uppercase z-20 -translate-y-1/2 shadow-sm">
                  Analytics Dashboard
                </span>
                
                {/* Main Badge Box */}
                <div className="w-[330px] h-[250px] bg-gradient-to-br from-[#A3A379] via-[#7E6B4A] to-[#626946] rounded-2xl flex flex-col items-center justify-center text-center shadow-[0_13px_17px_0_rgba(136,106,68,0.50)] border border-white z-10">
                  <h3 className="text-[#FDFDFB] text-3xl md:text-[50px] font-black tracking-tight leading-[1.08] uppercase">
                    Critical <br />
                    Revenue <br />
                    Leakage
                  </h3>
                </div>
              </div>

              {/* Right Side: Re-balanced spacer columns to perfectly fit money graphic */}
              <div className="lg:col-span-3 hidden lg:block" />

            </div>

            {/* Bottom Row Layout Matrix (Pushed down perfectly via the parent flex layout container) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              
              {/* Detail Card 1 */}
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

              {/* Detail Card 2 */}
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

              {/* Detail Card 3 */}
              <DetailCard>
                <div>
                  <h4 className="text-[14px] font-bold text-stone-900 leading-tight">Poor Follow-Up on Estimates</h4>
                </div>
                <div>
                  <h5 className="text-[12px] font-bold text-stone-900 leading-tight">
                    High-Value Projects Lost: +$60,000
                  </h5>
                  <p className="text-[12px] text-stone-400 font-medium mt-0.5">annual missed opportunities</p>
                </div>
              </DetailCard>

              {/* Detail Card 4 */}
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

      </div>
    </section>
  );
}