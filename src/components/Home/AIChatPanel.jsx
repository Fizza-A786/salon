import { MdSend } from 'react-icons/md';

export default function AIChatPanel({ isMobile }) {
  return (
    <div
      className={`flex flex-col w-full h-[255px] max-w-[275px] bg-white/20 backdrop-blur-[3px] border border-white/60 rounded-[24px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] pointer-events-auto z-30 ${
        isMobile ? 'mx-auto' : ''
      }`}
    >
      {/* 1. Header Title (Clean, Floating Text with No Background Block) */}
      <div className="px-4 pt-4 pb-2">
        <h3 className="font-bold text-black text-[13px] tracking-tight">
          AI Chat Panel
        </h3>
      </div>
      
      {/* 2. Messages Frame Container */}
      <div className="px-4 flex flex-col gap-2.5 flex-1 overflow-hidden">
        
        {/* Assistant Main Text Bubble Layout */}
        <div className="flex items-start gap-2">
          {/* Avatar frame matching figma aspect ratio */}
          <img 
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop" 
            alt="AI Assistant Avatar" 
            className="w-5 h-5 rounded-full object-cover shrink-0 border border-white/40 shadow-sm mt-[2px]" 
          />
          <div className="bg-white/40 backdrop-blur-md rounded-[16px] rounded-tl-none p-3 border border-white/40 shadow-sm">
            <p className="text-[11.5px] text-black leading-[1.35] font-medium">
              Hello! I'm Katherine, your AI Dental Revenue Intelligence Assistant. How can I help you today?
            </p>
          </div>
        </div>

        {/* Dynamic Context Hint Prompt Box */}
        <div className="w-full bg-white/30 backdrop-blur-md border border-white/40 rounded-xl px-3 py-2.5 shadow-sm mt-0.5">
          <p className="text-[11px] text-[#333333] font-medium leading-normal">
            Ask about appointments, services, or pricing...
          </p>
        </div>

      </div>
      
      {/* 3. Action Interactive Textarea Input Box */}
      <div className="p-4 pt-2">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Type your message here...."
            className="w-full bg-white/70 border border-white/80 rounded-[14px] py-2.5 pl-3.5 pr-10 text-[11px] text-gray-800 placeholder-[#666666] shadow-sm focus:outline-none focus:ring-1 focus:ring-[#8BC5A1]/40 transition-shadow"
            disabled
          />
          
          {/* Circular Linear-Gradient Send CTA Icon */}
          <button className="absolute right-1.5 w-[26px] h-[26px] rounded-full bg-gradient-to-b from-[#AFD9B1] to-[#3C995B] flex items-center justify-center text-white shadow-md hover:brightness-105 active:scale-95 transition-all">
            <svg 
              width="10" 
              height="10" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-[1px]"
            >
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}