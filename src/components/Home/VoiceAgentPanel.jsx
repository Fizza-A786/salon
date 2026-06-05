import { FaPlay } from "react-icons/fa6";
import { MdKeyboardVoice } from "react-icons/md";
import VoiceSVG from "../../assets/Voice.svg";

export default function VoiceAgentPanel({ isMobile }) {
  return (
    <div
      style={{
        background: "rgba(248, 248, 248, 0.74)",
        borderColor: "rgba(194, 238, 225, 0.49)",
      }}
      className={`relative backdrop-blur-md border shadow-lg flex flex-col pointer-events-auto ${
        isMobile
          ? "mx-auto w-[239px] h-[238px] rounded-2xl"
          : "absolute w-[239px] h-[238px] rounded-2xl z-20 -left-[10%] top-[18%]"
      }`}
    >
      {/* Inner Content */}
      <div className="p-[11px] flex flex-col justify-between h-full">
        
        {/* Header */}
        <div className="flex items-center gap-2.5">
          <div className="w-[35px] h-[35px] bg-[#C2FFE5] rounded-[5px] flex items-center justify-center shrink-0">
            <MdKeyboardVoice className="text-[#3C995B] text-lg" />
          </div>
          <h3 className="text-[12px] font-bold text-[#000000] leading-[120%]">
            Voice Agent
          </h3>
        </div>

        {/* Waveform Section */}
        <div className="flex items-center gap-3 h-[49px]">
          {/* Play Button */}
          <button className="w-[33px] h-[33px] rounded-full bg-[#3C995B] flex items-center justify-center shrink-0 hover:bg-[#2F855A] transition-colors shadow-sm">
            <FaPlay className="text-white text-[10px]" />
          </button>

          {/* Waveform */}
          <div className="flex-1 h-full flex items-center overflow-hidden">
            <img 
              src={VoiceSVG} 
              alt="voice wave" 
              className="w-full h-auto opacity-95 object-contain" 
            />
          </div>
        </div>

        {/* Status Section */}
        <div className="flex flex-col gap-1.5">
          <div className="text-[16px] text-[#060606] font-light leading-[100%] tracking-[-1px]">
            "Live status: <span className="font-semibold">Ready to Answer</span>"
          </div>
          <p className="text-[16px] leading-[120%] text-[#000000] font-normal">
            "Hello, I'm Daniel - your AI Landscaping Revenue Intelligence Assistant. How can I help you today?"
          </p>
        </div>

      </div>
    </div>
  );
}