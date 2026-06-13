export default function HeroContent() {
  const bulletPoints = [
    "Instantly answers every call",
    "Books appointments automatically",
    "Updates CRM in real-time",
    "Handles chat, SMS, and inquiries"
  ];

  return (
    <div className="w-full max-w-xl flex flex-col justify-center text-left font-sans select-none antialiased">

      <h1
        className="w-full max-w-[414px] mt-14 text-[40px] sm:text-[48px] lg:text-[53px] font-bold leading-[50px] sm:leading-[58px] lg:leading-[62px] text-white tracking-normal"
        style={{
          textShadow: `0px 2px 4px rgba(0,0,0,0.4),
      0px 6px 16px rgba(0, 0, 0, 0.3)` }}
      >
      Never Miss a Client Again.
    </h1>

      {/* Header Subtitle Area (Includes description & lists) */ }
  <div
    className="w-full max-w-[516px] flex flex-col justify-center text-[18px] sm:text-[21px] lg:text-[18px] font-medium leading-[167%] text-white gap-4 mt-1"
    style={{ textShadow: "0 2px 6px rgba(0,0,0,0.4)" }}
  >
    <p className="opacity-95">
      AI Receptionist for Salons - Answer Calls, Book Appointments, and Manage Clients 24/7.
    </p>

    <ul className="flex flex-col gap-2 pl-5 list-disc opacity-90 text-[16px] sm:text-[19px] lg:text-[18px]">
      <li>Instantly answers every call</li>
      <li>Books appointments automatically</li>
      <li>Updates CRM in real-time</li>
      <li>Handles chat, SMS, and inquiries</li>
    </ul>
  </div>
  {/* Action Buttons Frame Interface */ }

  <div className="flex mt-4 flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 w-full">

    {/* Primary Radial Highlight Button */}

    <button className="inline-flex font-semibold items-center justify-center py-4 px-10 rounded-xl text-black border border-white/60 bg-[radial-gradient(59.41%_515.38%_at_40.59%_15.83%,rgba(175,217,177,0.95)_0%,rgba(60,153,91,0.95)_100%)] shadow-[0px_8px_24px_rgba(60,153,91,0.25)] hover:shadow-[0px_12px_28px_rgba(60,153,91,0.35)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap text-[16px]">

      Start Free Trial

    </button>



    {/* Secondary White/Green Ghost Button */}

    <button className="inline-flex font-semibold items-center justify-center py-4 px-10 rounded-xl text-[#3C995B] border-[1px] border-[#3C995B] bg-[#FFFFFF] shadow-[0px_4px_14px_rgba(0,0,0,0.15)] hover:bg-[#3C995B]/5 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap text-[16px]">

      Book a Demo

    </button>

  </div>



    </div >
  );
}