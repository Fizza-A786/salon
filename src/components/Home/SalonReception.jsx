import React from 'react';
// Import the structural canvas background and the dashboard image assets
import bgFooterCanvas from "../../assets/image 4.png";
import dashboardMockup from "../../assets/mockup.png";

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
    <div className="w-[333px] h-[142px] bg-[#EAEBE6]/85 border-[0.5px] border-white/40 rounded-[16px] p-6 shadow-[0px_4px_14px_rgba(0,0,0,0.15)] backdrop-blur-[12px] flex items-start gap-3 flex-shrink-0 transition-all duration-300 hover:scale-[1.015]">
      <div className="w-[43px] h-[43px] bg-[#D4E1D8] rounded-[8px] flex items-center justify-center flex-shrink-0 relative">
        <Icon />
      </div>
      <div className="flex flex-col justify-start items-start p-0 gap-3 w-[224px]">
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

// ============================================================================
// MAIN PAGE EXPORT COMPONENT
// ============================================================================
export default function DaitchProShowcase() {
  return (
    <div 
      className="w-full min-h-[660px] lg:h-[633px] max-w-[1440px] bg-no-repeat bg-center relative overflow-hidden flex flex-col items-center justify-center py-12 lg:py-0 px-4 font-['Roboto',sans-serif] select-none mx-auto"
      style={{ 
        backgroundImage: `url(${bgFooterCanvas.src || bgFooterCanvas})`,
        backgroundSize: "100% 100%"
      }}
    >
      
      {/* Absolute Positional Backdrop Mesh Blur System */}
      <div className="absolute w-[663px] h-[397px] -left-[150px] top-[329px] bg-[#D3EBE1] opacity-40 blur-[80px] -rotate-[35.9deg] pointer-events-none z-0" />
      <div className="absolute w-[663px] h-[397px] left-[15%] top-0 bg-[#DEECE3] opacity-40 blur-[80px] -rotate-[35.9deg] pointer-events-none z-0" />
      <div className="absolute w-[423px] h-[397px] right-0 -top-[136px] bg-[#DFD6EE] opacity-40 blur-[80px] -rotate-[35.9deg] pointer-events-none z-0" />
      <div className="absolute w-[423px] h-[397px] right-[10%] top-[234px] bg-[#E7DFE8] opacity-40 blur-[80px] -rotate-[35.9deg] pointer-events-none z-0" />

      {/* Main Three-Column Layout Framework Grid */}
      <div className="w-full max-w-[1325px] flex flex-col lg:flex-row items-center justify-center gap-[30px] xl:gap-[48px] z-10 relative">
        
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

        {/* CENTER COLUMN: LIVE DASHBOARD CONTAINER MOCKUP (Scaled Down ~20%) */}
        <div className="flex items-center justify-center p-0 w-[420px] h-[264px] flex-shrink-0 transition-transform duration-300 hover:scale-[1.01]">
          <img 
            src={dashboardMockup.src || dashboardMockup} 
            alt="DaitchPro Dashboard Analytics View" 
            className="w-full h-full object-contain select-none pointer-events-none drop-shadow-[0px_10px_25px_rgba(0,0,0,0.1)]"
          />
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