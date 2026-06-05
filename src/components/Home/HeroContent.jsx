import AIChatPanel from "./AIChatPanel";
import VoiceAgentPanel from "./VoiceAgentPanel";

export default function HeroContent() {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-10 flex flex-col justify-center max-w-2xl mx-auto lg:mx-0 z-10 relative py-12 lg:py-20">
      
      {/* Mobile Glass Glow Background Circle */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/80 rounded-full blur-[70px] -z-10 lg:hidden pointer-events-none" />

      {/* Figma Typography Header */}
      <h1 className="text-[32px] sm:text-[40px] mb-6 md:text-[40px] lg:text-[48px] font-bold text-[#000000] text-left leading-[1.12] tracking-tight font-sans mt-19">
        DaitchPro – AI<br />
        Landscaping Revenue<br />
        Intelligence Agent
      </h1>

      {/* Mobile View Responsive Grid Layer */}
      <div className="flex lg:hidden flex-row items-stretch justify-center gap-3 mb-8 w-full mt-2">
        <div className="w-1/2 flex flex-col items-center">
          <VoiceAgentPanel isMobile={true} />
        </div>
        <div className="w-1/2 flex flex-col items-center">
          <AIChatPanel isMobile={true} />
        </div>
      </div>

      {/* Figma Bullet Lists */}
      <ul className="space-y-3.5 mb-10 pl-5 text-[#000000] text-[15px] sm:text-[16px] lg:text-[17px] font-medium leading-relaxed">
        <li className="list-disc pl-1">Lawn care & seasonal service call automation</li>
        <li className="list-disc pl-1">Job follow-up & maintenance scheduling systems</li>
        <li className="list-disc pl-1">Revenue leakage → missed job recovery analytics</li>
        <li className="list-disc pl-1">Landscape project & client lifecycle enhancement</li>
      </ul>

      {/* Action Buttons Frame Interface */}
      <div className="flex flex-row items-center justify-start gap-4 mb-6 w-full">
        {/* Primary Radial Highlight Button */}
        <button className="inline-flex font-semibold items-center justify-center py-3.5 px-8 sm:px-10 rounded-xl text-black border border-white/60 bg-[radial-gradient(59.41%_515.38%_at_40.59%_15.83%,rgba(175,217,177,0.95)_0%,rgba(60,153,91,0.95)_100%)] shadow-[0px_8px_24px_rgba(60,153,91,0.25)] hover:shadow-[0px_12px_28px_rgba(60,153,91,0.35)] transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap text-[15px] sm:text-[16px]">
          Start Free Trial
        </button>
        
        {/* Secondary Ghost Button */}
        <button className="inline-flex font-semibold items-center justify-center py-3.5 px-8 sm:px-10 rounded-xl text-[#3C995B] border-2 border-[#3C995B] bg-transparent hover:bg-[#3C995B]/5 transition-all hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap text-[15px] sm:text-[16px]">
          Book a Demo
        </button>
      </div>

      {/* Sub-caption Text Frame */}
      <p className="text-[#484848] text-[14px] sm:text-[15px] font-normal leading-normal">
        Start automating your{" "}
        <strong className="font-semibold text-black">landscaping</strong>{" "}
        <strong className="font-semibold text-black">communication</strong>{" "}
        in minutes
      </p>

    </div>
  );
}