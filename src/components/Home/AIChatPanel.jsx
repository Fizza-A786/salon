import { MdSend } from 'react-icons/md';

export default function AIChatPanel({ isMobile }) {
  return (
    <div 
      className={`flex flex-col w-full bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.15)] pointer-events-auto ${isMobile ? 'mx-auto w-[283px] max-w-[283px] h-[253px]' : 'absolute top-[5%] xl:top-[20%] right-0 xl:right-32 w-[283px] h-[253px]'}`}
    >
      {/* Title Section */}
      <div className="px-4 pt-4 pb-3">
        <h2 className="text-[18px] font-medium text-[#000000] tracking-[-1px] leading-[100%]">
          AI Chat Panel
        </h2>
      </div>
      
      {/* Message Container */}
      <div className="px-4 flex flex-col gap-3 flex-1 overflow-y-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
        {/* AI Message Box */}
        <div className="flex items-center justify-center p-2.5 gap-2.5 rounded-[10px] bg-[rgba(194,255,229,0.4)] border border-white h-[71px]">
          <p className="text-[14px] text-[#000000] font-normal leading-[120%] line-clamp-3">
            Hello! I'm Daniel, your AI Landscaping Revenue Intelligence Assistant. How can I help you today?
          </p>
        </div>
        
        {/* Input Suggestion Box */}
        <div className="flex items-center px-2.5 py-2.5 gap-2.5 rounded-[10px] bg-[rgba(255,255,255,0.69)] border border-white h-[54px]">
          <p className="text-[14px] text-[#000000] font-normal leading-[120%] line-clamp-2">
            Ask about lawn care, projects, or pricing...
          </p>
        </div>
      </div>
      
      {/* Input Area */}
      <div className="p-4 pt-3 mt-auto">
        <div className="relative flex items-center">
         <textarea
  placeholder="Type your message here..."
  className="w-full bg-white/80 border border-white/80 rounded-[10px] py-2 pl-3 pr-8 text-[14px] text-gray-800 placeholder-gray-500 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#8BC5A1] transition-shadow resize-none h-12 scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
/>
          <button className="absolute right-2 top-1/2 -translate-y-1/2 w-[33px] h-[33px] rounded-full bg-[linear-gradient(180deg,#AFD9B1_0%,#3C995B_100%)] flex items-center justify-center text-white shadow-md hover:scale-105 active:scale-95 transition-all">
            <MdSend className="w-[13px] h-[11px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
