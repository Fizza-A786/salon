export default function HeroContent() {
  const bulletPoints = [
    "Instantly answers every call",
    "Books appointments automatically",
    "Updates CRM in real-time",
    "Handles chat, SMS, and inquiries"
  ];

  return (
    <div className="w-full max-w-xl flex flex-col justify-center text-left font-sans select-none antialiased">
      
      {/* Principal Header */}
      <h1 className="text-[44px] sm:text-[53px] font-bold mt-12 text-white leading-[1.1] tracking-tight mb-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">
        Never Miss a <br /> Client Again.
      </h1>

      {/* Description Body Text */}
      <p className="text-[17px] sm:text-[19px] text-white/95 font-normal leading-[1.4] mb-8 drop-shadow-[0_1px_3px_rgba(0,0,0,0.15)]">
        AI Receptionist for Salons - Answer Calls, <br />
        Book Appointments, and Manage Clients 24/7.
      </p>

      {/* Structured Bullet Lists */}
      <ul className="space-y-4 mb-10 pl-1">
        {bulletPoints.map((text, index) => (
          <li key={index} className="flex items-center gap-3 text-[16px] sm:text-[18px] text-white/95 font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]">
            <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 opacity-90" />
            <span className="leading-none">{text}</span>
          </li>
        ))}
      </ul>

 {/* Action Buttons Frame Interface */}

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full">

        {/* Primary Radial Highlight Button */}

        <button className="inline-flex font-semibold items-center justify-center py-4 px-10 rounded-xl text-black border border-white/60 bg-[radial-gradient(59.41%_515.38%_at_40.59%_15.83%,rgba(175,217,177,0.95)_0%,rgba(60,153,91,0.95)_100%)] shadow-[0px_8px_24px_rgba(60,153,91,0.25)] hover:shadow-[0px_12px_28px_rgba(60,153,91,0.35)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap text-[16px]">

          Start Free Trial

        </button>



        {/* Secondary White/Green Ghost Button */}

        <button className="inline-flex font-semibold items-center justify-center py-4 px-10 rounded-xl text-[#3C995B] border-[1px] border-[#3C995B] bg-[#FFFFFF] shadow-[0px_4px_14px_rgba(0,0,0,0.15)] hover:bg-[#3C995B]/5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap text-[16px]">

          Book a Demo

        </button>

      </div>



    </div>
  );
}