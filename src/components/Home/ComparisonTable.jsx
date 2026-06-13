import React from 'react';
import bgImage from '../../assets/image 6.png';

export default function ComparisonTable() {
  const rows = [
    { feature: 'Availability', traditional: 'Limited', daitch: '24/7' },
    { feature: 'Missed Calls', traditional: 'High', daitch: 'Zero' },
    { feature: 'Booking Speed', traditional: 'Slow', daitch: 'Instant' },
    { feature: 'CRM Updates', traditional: 'Manual', daitch: 'Automatic' },
    { feature: 'Cost', traditional: 'High', daitch: 'Optimised' },
  ];

  return (
    <section 
      className="font-roboto flex flex-col items-center justify-center w-full min-h-[800px] py-16 md:py-24 relative overflow-hidden select-none bg-no-repeat bg-center bg-cover"
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "100% 100%" // Isse image ke horizontal aur vertical corners container ke frames se stretch lock ho jayenge bina crop hue
      }}
    >
      
      {/* Main Table Container Card */}
      <div className="w-full max-w-[1024px] bg-white rounded-[30px] shadow-sm p-4 md:p-[21px] z-20 mx-4">
        <div className="relative border border-[#BFBDBF] rounded-[15px] overflow-hidden min-h-[490px]">
          
          {/* Background Visual Layer (Isolated Columns) */}
          <div className="absolute inset-0 flex pointer-events-none z-0">
            {/* Column 1 Background - Feature Label Column */}
            <div className="w-1/3 bg-gradient-to-b from-[#E8E3DC] via-[#E8E3DC] to-[#F3EBE4] border-r border-[#BFBDBF]" />
            
            {/* Column 2 Background - Traditional Column */}
            <div className="w-1/3 bg-gradient-to-b from-[#EAE8EF] via-[#EAE8EF] to-[#F3F2F7] border-r border-[#BFBDBF]" />
            
            {/* Column 3 Background - DaitchPro Column */}
            <div className="w-1/3 bg-gradient-to-b from-[#DCF3EB] via-[#DCF3EB] to-[#E7F8F2]" />
          </div>

          {/* Foreground Grid Content Layer */}
          <div className="relative z-10 grid grid-cols-3 text-sm sm:text-lg md:text-[24px] leading-none h-full">
            
            {/* Header Row */}
            <div className="flex items-center justify-center py-6 min-h-[82px] font-semibold text-black text-center">
              Feature
            </div>
            <div className="flex items-center justify-center py-6 min-h-[82px] font-semibold text-[#908985] text-center">
              Traditional
            </div>
            <div className="flex items-center justify-center py-6 min-h-[82px] font-semibold text-black text-center transition-transform duration-300 hover:scale-105 cursor-default">
              DaitchPro
            </div>

            {/* Data Rows */}
            {rows.map((row, index) => (
              <React.Fragment key={index}>
                {/* Feature Name */}
                <div className="flex items-center justify-center py-6 border-t border-[#BFBDBF] font-semibold text-black text-center min-h-[82px]">
                  {row.feature}
                </div>
                {/* Traditional Value */}
                <div className="flex items-center justify-center py-6 border-t border-[#BFBDBF] text-[#908985] font-normal text-center min-h-[82px]">
                  {row.traditional}
                </div>
                {/* DaitchPro Value */}
                <div className="flex items-center justify-center py-6 border-t border-[#BFBDBF] text-black font-normal text-center min-h-[82px] transition-all duration-200 hover:bg-white/30 cursor-default">
                  {row.daitch}
                </div>
              </React.Fragment>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}