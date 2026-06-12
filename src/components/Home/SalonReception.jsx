import React from 'react';

// ============================================================================
// SYSTEM ICONS ENGINE (Rendered natively via vector path strings)
// ============================================================================
const MicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#3C995B]">
    <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.42 2.72 6.2 6 6.72V21h2v-3.28c3.28-.52 6-3.3 6-6.72h-1.7z"/>
  </svg>
);

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#3C995B]">
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#3C995B]">
    <path d="M19 4h-1V2h-2v2H8V2h-2v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
  </svg>
);

const RevenueIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#3C995B]">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 13h-2v-1c-1.1 0-2-.9-2-2h2c0 .55.45 1 1 1s1-.45 1-1-.45-1-1-1c-1.66 0-3-1.34-3-3s1.34-3 3-3V5h2v1c1.1 0 2 .9 2 2h-2c0-.55-.45-1-1-1s-1 .45-1 1 .45 1 1 1c1.66 0 3 1.34 3 3s-1.34 3-3 3v1z"/>
  </svg>
);

const AutomationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#3C995B]">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
  </svg>
);

const UnifiedIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-[#3C995B]">
    <path d="M12 2C6.48 2 2 4.02 2 6.5v11c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5v-11C22 4.02 17.52 2 12 2zm0 2c3.71 0 7.93 1.12 8 2.5-.07 1.38-4.29 2.5-8 2.5s-7.93-1.12-8-2.5c.07-1.38 4.29-2.5 8-2.5zm0 15.5c-3.71 0-7.93-1.12-8-2.5V14c1.72 1.3 5.06 2 8 2s6.28-.7 8-2v3.5c-.07 1.38-4.29 2.5-8 2.5zm0-5c-3.71 0-7.93-1.12-8-2.5V9c1.72 1.3 5.06 2 8 2s6.28-.7 8-2v3.5c-.07 1.38-4.29 2.5-8 2.5z"/>
  </svg>
);

// ============================================================================
// COMPONENT MODULES
// ============================================================================
const FeatureCard = ({ icon: Icon, title, lines }) => {
  return (
    <div className="w-[333px] h-[142px] bg-[#EAEBE6] border-[0.5px] border-white rounded-[16px] p-6 shadow-[0px_4px_10px_rgba(0,0,0,0.25)] backdrop-blur-[10.5px] flex items-start gap-3 flex-shrink-0 transition-all duration-300 hover:scale-[1.015]">
      <div className="w-[43px] h-[43px] bg-[#D4E1D8] rounded-[8px] flex items-center justify-center flex-shrink-0 relative">
        <Icon />
      </div>
      <div className="flex flex-col justify-start items-flex-start p-0 gap-3 w-[224px]">
        <h4 className="text-[18px] font-bold font-sans text-black leading-[100%]">
          {title}
        </h4>
        <p className="text-[14px] font-normal font-sans text-[#484848] leading-[16px] whitespace-pre-line">
          {lines}
        </p>
      </div>
    </div>
  );
};

const CenterDashboardCard = () => {
  const clients = [
    { name: "Jeane Rollin", email: "jeane@domain.com", class: "Cut&Room", date: "Aug 12, 2023", status: "Booked", color: "bg-purple-100 text-purple-700", init: "JR" },
    { name: "Devon Alston", email: "devon@domain.com", class: "Cut&Room", date: "Aug 12, 2023", status: "Booked", color: "bg-blue-100 text-blue-700", init: "DA" },
    { name: "Nannie Norton", email: "nannie@domain.com", class: "Cut&Room", date: "May 13, 2023", status: "Booked", color: "bg-pink-100 text-pink-700", init: "NN" },
    { name: "Gavin Giddeon", email: "gavin@domain.com", class: "Cut&Room", date: "May 13, 2023", status: "Booked", color: "bg-orange-100 text-orange-700", init: "GG" },
  ];

  return (
    <div className="w-[527px] h-[331px] bg-white rounded-[12px] shadow-[0px_4px_25px_rgba(0,0,0,0.12)] relative overflow-hidden flex font-['Inter',sans-serif] text-black select-none border border-neutral-200/50 flex-shrink-0">
      
      {/* Brand Badge Absolute Spec */}
      <div 
        className="absolute w-[57px] h-[16px] bg-[#4B4656] z-30 flex items-center justify-center rounded-sm"
        style={{ left: '16px', top: '19px' }}
      >
        <span className="text-[7px] font-bold text-white tracking-widest font-sans scale-[0.85]">DaitchPro</span>
      </div>

      {/* Sidebar Section */}
      <div className="w-[110px] h-full bg-[#36323E] pt-[46px] px-2 flex flex-col justify-between pb-3 flex-shrink-0 z-20">
        <div className="flex flex-col gap-[6px]">
          <div className="w-full h-[22px] bg-white/10 rounded-[4px] flex items-center px-2 gap-2 cursor-pointer">
            <div className="w-1.5 h-1.5 rounded-sm bg-white/40" />
            <span className="text-[9px] text-white font-medium">Dashboard</span>
          </div>
          {["Clients", "Staffs", "Appointments", "Payments", "Settings"].map((lbl, idx) => (
            <div key={idx} className="w-full h-[22px] rounded-[4px] flex items-center px-2 gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
              <div className="w-1.5 h-1.5 rounded-sm bg-white/20" />
              <span className="text-[9px] text-white font-normal">{lbl}</span>
            </div>
          ))}
        </div>
        <div className="w-full pt-2 border-t border-white/5 flex items-center gap-2 px-1 opacity-50">
          <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
          <span className="text-[8px] text-white">Salon Space</span>
        </div>
      </div>

      {/* Workspace Area */}
      <div className="flex-grow h-full bg-[#F8F9FA] flex flex-col p-3 overflow-hidden">
        
        {/* Workspace Top Header Bar */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-[13px] font-bold text-neutral-800 tracking-tight">Dashboard</h2>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-neutral-200" />
            <div className="w-3 h-3 rounded-full bg-neutral-200" />
            <div className="w-4 h-4 rounded-full bg-neutral-300 overflow-hidden border border-neutral-200" />
          </div>
        </div>

        {/* Dashboard Upper Analytics Grid Block */}
        <div className="grid grid-cols-3 gap-2 mb-2">
          
          {/* Charts Donut Wrapper Component */}
          <div className="bg-white rounded-lg border border-neutral-200/60 p-1.5 flex flex-col justify-between h-[82px]">
            <span className="text-[8px] font-bold text-neutral-400">Client Charts</span>
            <div className="flex items-center justify-center relative h-[56px]">
              <svg className="w-11 h-11 transform -rotate-90" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="14" fill="transparent" stroke="#EAEAEA" strokeWidth="3.5" />
                <circle cx="16" cy="16" r="14" fill="transparent" stroke="#3C995B" strokeWidth="3.5" strokeDasharray="60 100" />
                <circle cx="16" cy="16" r="14" fill="transparent" stroke="#845AD5" strokeWidth="3.5" strokeDasharray="25 100" strokeDashoffset="-60" />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-[9px] font-bold tracking-tighter">84%</span>
                <span className="text-[5px] text-neutral-400 scale-[0.85]">Growth</span>
              </div>
            </div>
          </div>

          {/* Bar Chart Framework Wrapper */}
          <div className="bg-white rounded-lg border border-neutral-200/60 p-1.5 flex flex-col justify-between h-[82px]">
            <div className="flex justify-between items-center">
              <span className="text-[8px] font-bold text-neutral-400">Bar Graphs</span>
              <span className="text-[5px] px-1 bg-neutral-50 rounded text-neutral-400 scale-[0.9]">All Showroom</span>
            </div>
            <div className="flex items-end justify-between h-[50px] px-0.5 pt-2">
              {[35, 65, 25, 95, 55, 80, 40].map((h, i) => (
                <div key={i} className="w-[5px] bg-neutral-50 rounded-t h-full flex items-end">
                  <div 
                    className={`w-full rounded-t transition-all ${i === 3 ? 'bg-[#3C995B]' : 'bg-[#D4E1D8]'}`} 
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* User Profile Overview */}
          <div className="bg-white rounded-lg border border-neutral-200/60 p-1.5 flex flex-col items-center justify-center text-center h-[82px]">
            <div className="w-7 h-7 rounded-full bg-neutral-200 overflow-hidden mb-0.5 border border-neutral-100 flex items-center justify-center text-[9px] font-bold text-neutral-600">
              DM
            </div>
            <h3 className="text-[9px] font-bold text-neutral-800 leading-tight">Darra Maulan</h3>
            <p className="text-[6px] text-neutral-400 scale-[0.95] tracking-tight truncate w-full">darramau@gmail.com</p>
            <div className="flex gap-1.5 mt-1">
              <div className="w-2.5 h-2.5 bg-neutral-50 border border-neutral-100 rounded-sm" />
              <div className="w-2.5 h-2.5 bg-neutral-50 border border-neutral-100 rounded-sm" />
              <div className="w-2.5 h-2.5 bg-neutral-50 border border-neutral-100 rounded-sm" />
            </div>
          </div>
        </div>

        {/* Dashboard Lower Content Area Block */}
        <div className="grid grid-cols-3 gap-2 flex-grow overflow-hidden">
          
          {/* Client Table List Module */}
          <div className="col-span-2 bg-white rounded-lg border border-neutral-200/60 p-2 flex flex-col overflow-hidden justify-between">
            <div className="flex justify-between items-center mb-1 pb-1 border-b border-neutral-100">
              <span className="text-[8px] font-bold text-neutral-700">Client List</span>
              <span className="text-[6px] text-neutral-400 hover:underline cursor-pointer">View All</span>
            </div>
            <div className="flex flex-col gap-1 overflow-hidden flex-grow justify-around">
              {clients.map((c, i) => (
                <div key={i} className="flex items-center justify-between text-[7px] py-0.5 hover:bg-neutral-50/80 rounded px-0.5">
                  <div className="flex items-center gap-1.5 w-[42%] truncate">
                    <div className={`w-4 h-4 rounded-full ${c.color} flex items-center justify-center font-bold text-[6.5px] flex-shrink-0`}>
                      {c.init}
                    </div>
                    <div className="flex flex-col truncate">
                      <span className="font-bold text-neutral-800 truncate">{c.name}</span>
                      <span className="text-[5.5px] text-neutral-400 truncate scale-[0.95] origin-left">{c.email}</span>
                    </div>
                  </div>
                  <span className="text-neutral-500 w-[24%] truncate text-left font-medium">{c.class}</span>
                  <span className="text-neutral-400 w-[19%] text-left">{c.date}</span>
                  <div className="w-[15%] text-right">
                    <span className="px-1 py-[1px] bg-emerald-50 text-[#3C995B] border border-emerald-200/50 rounded-[3px] font-bold text-[5.5px]">
                      {c.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form Processing Controller Box */}
          <div className="bg-white rounded-lg border border-neutral-200/60 p-2 flex flex-col justify-between h-full text-[7px]">
            <div>
              <span className="text-[8px] font-bold text-neutral-700 block mb-1 pb-1 border-b border-neutral-100">Profile Cards</span>
              <div className="flex flex-col gap-1">
                <div>
                  <label className="text-neutral-400 block scale-[0.9] origin-left font-medium mb-0.5">Name</label>
                  <div className="w-full h-3.5 bg-neutral-50 border border-neutral-200 rounded-[3px] px-1 flex items-center text-neutral-700 font-semibold truncate">
                    Oasis Palms
                  </div>
                </div>
                <div>
                  <label className="text-neutral-400 block scale-[0.9] origin-left font-medium mb-0.5">Connector</label>
                  <div className="w-full h-3.5 bg-neutral-50 border border-neutral-200 rounded-[3px] px-1 flex items-center text-neutral-600 truncate">
                    whoswhi@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full h-[15px] bg-[#3C995B] text-white rounded-[3px] font-bold text-[7px] hover:bg-[#33824d] transition-colors active:scale-[0.97]">
              Send data
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

// ============================================================================
// MAIN PAGE EXPORT COMPONENT
// ============================================================================
export default function DaitchProShowcase() {
  return (
    <div className="w-full min-h-screen bg-[#EFE9DF] relative overflow-hidden flex flex-col items-center justify-start pt-16 pb-24 px-4 font-['Roboto',sans-serif]">
      
      {/* Absolute Positional Backdrop Mesh Blur System */}
      <div className="absolute w-[663px] h-[397px] -left-[150px] top-[329px] bg-[#D3EBE1] opacity-70 blur-[80px] -rotate-[35.9deg] pointer-events-none z-0" />
      <div className="absolute w-[663px] h-[397px] left-[15%] top-0 bg-[#DEECE3] opacity-80 blur-[80px] -rotate-[35.9deg] pointer-events-none z-0" />
      <div className="absolute w-[423px] h-[397px] right-0 -top-[136px] bg-[#DFD6EE] opacity-70 blur-[80px] -rotate-[35.9deg] pointer-events-none z-0" />
      <div className="absolute w-[423px] h-[397px] right-[10%] top-[234px] bg-[#E7DFE8] opacity-70 blur-[80px] -rotate-[35.9deg] pointer-events-none z-0" />


      {/* Main Three-Column Layout Framework Grid */}
      <div className="w-full max-w-[1325px] flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-[66px] z-10">
        
        {/* LEFT COLUMN: FEATURES CONTAINER */}
        <div className="flex flex-col gap-[17px] w-auto">
          <FeatureCard 
            icon={MicIcon} 
            title="AI Voice Receptionist" 
            lines={"Answers every call\nNatural human-like conversation"} 
          />
          <FeatureCard 
            icon={ChatIcon} 
            title="AI Chat & Messaging" 
            lines={"Website chat + SMS + social DM\nintegration"} 
          />
          <FeatureCard 
            icon={CalendarIcon} 
            title="Smart Appointment Booking" 
            lines={"Real-time availability sync\nNo double booking\nAuto confirmations"} 
          />
        </div>

        {/* CENTER COLUMN: FULL EMBEDDED PREVIEW DASHBOARD */}
        <div className="flex items-center justify-center p-0 w-auto">
          <CenterDashboardCard />
        </div>

        {/* RIGHT COLUMN: FEATURES CONTAINER */}
        <div className="flex flex-col gap-[17px] w-auto">
          <FeatureCard 
            icon={RevenueIcon} 
            title="Revenue Tracking" 
            lines={"Bookings\nMissed opportunities\nClient lifetime value"} 
          />
          <FeatureCard 
            icon={AutomationIcon} 
            title="Automation Engine" 
            lines={"Follow-up campaigns\nReactivation of old clients\nUpsell promotions"} 
          />
          <FeatureCard 
            icon={UnifiedIcon} 
            title="Unified System" 
            lines={"Voice + Chat + CRM + Funnel\nconnected\nNo separate tools needed"} 
          />
        </div>

      </div>
    </div>
  );
}