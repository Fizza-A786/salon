import React from "react";

export const Footer = ({
  property1 = "variant",
  style,
  footerStyle,
  vector = "/img/vector-13.svg",
  groupStyle,
  group = "/img/group-2147225313.png",
  hasComponent = true,
}) => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        padding: "60px 0px 40px", // Reduced from 120px to fix the top margin issue completely
        backgroundColor: "#053228",
        minHeight: "700px",
        ...style,
      }}
    >
      {/* Background Radial Glow Effect */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          width: "1920px",
          height: "96px",
          left: "calc(50% - 1920px/2)",
          top: "calc(50% - 96px/2 + 6px)",
          background: "#063A2F",
          filter: "blur(44.6px)",
        }}
      />

      {/* Main Container - Reduced side padding (px-4) to maximize horizontal view space */}
      <div
        className="relative grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-x-5 gap-y-8 px-4 mx-auto w-full max-w-[1440px] z-10"
        style={footerStyle}
      >
        
        {/* COLUMN 1: Logo & Newsletter Form Group */}
        <div className="lg:col-span-2 flex flex-col items-start gap-5 min-w-[190px]">
          {/* Brand Logo */}
          <img
            className="w-[178px] h-[31.73px] object-contain"
            alt="DaitchPro Logo"
            src="/img/logo-1-1.png"
          />
          
          {/* Newsletter Setup */}
          <div className="flex flex-col items-start gap-3 w-full">
            <div className="text-white font-roboto text-[19px] font-semibold leading-[26px]">
              Subscribe To Our Newsletter
            </div>
            
            <div className="flex flex-col items-start gap-2 w-full">
              <label className="text-white/70 font-roboto text-[13px] font-medium variant-none">
                Your Email
              </label>
              
              {/* Email Field Container */}
              <div className="box-border flex flex-row items-center px-3 w-full h-[46px] border border-white/20 rounded-[9px] bg-[#042921]">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-transparent border-none text-white font-roboto text-[14px] font-medium outline-none placeholder-white/30"
                />
              </div>

              {/* Submit Button */}
              <button className="flex flex-row justify-center items-center w-full h-[46px] bg-[#3E8667] hover:bg-[#336e54] transition-colors border-none rounded-[12px] cursor-pointer">
                <span className="text-white font-roboto text-[16px] font-normal leading-[21px]">
                  Subscribe
                </span>
              </button>
            </div>
          </div>

          {/* Social Icons List Row */}
          <div className="flex flex-row gap-2 w-full mt-1">
            {[0, 1, 2, 3].map((index) => (
              <a
                href="#"
                key={index}
                className="flex items-center justify-center w-[36px] h-[36px] bg-white/[0.06] hover:bg-white/[0.12] transition-colors rounded-full text-white text-xs no-underline"
              >
                <span className="font-['Font_Awesome_5_Brands']">
                  {index === 0 && ""}
                  {index === 1 && ""}
                  {index === 2 && ""}
                  {index === 3 && ""}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 2: Solutions Container */}
        <div className="lg:col-span-2 flex flex-col items-start gap-3 pl-1">
          <div className="text-[#82C1A6] font-roboto font-bold text-[17px] leading-[24px] uppercase tracking-wider">
            SOLUTIONS
          </div>
          <div className="flex flex-col items-start gap-1.5">
            {[
              "Web Agency",
              "Digital Agency",
              "Social Media Agency",
              "Marketing",
              "Creative Agencies",
              "Software vendor",
              "Sales"
            ].map((name) => (
              <a href="#" key={name} className="font-roboto font-normal text-[13.5px] leading-[22px] text-white/80 hover:text-white no-underline transition-colors whitespace-nowrap">
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 3: Platform Container */}
        <div className="lg:col-span-2 flex flex-col items-start gap-3">
          <div className="text-[#82C1A6] font-roboto font-bold text-[17px] leading-[24px] uppercase tracking-wider">
            PLATFORM
          </div>
          <div className="flex flex-col items-start gap-1.5">
            {[
              "AI Workforce",
              "MarketPlace",
              "Automations",
              "Project Management",
              "Payments",
              "DaitchPro Affiliate"
            ].map((name) => (
              <a href="#" key={name} className="font-roboto font-normal text-[13.5px] leading-[22px] text-white/80 hover:text-white no-underline transition-colors whitespace-nowrap">
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 4: Areas We Handle Container */}
        <div className="lg:col-span-2 flex flex-col items-start gap-3">
          <div className="text-[#82C1A6] font-roboto font-bold text-[17px] leading-[24px] uppercase tracking-wider">
            AREAS WE HANDLE
          </div>
          <div className="flex flex-col items-start gap-1.5 w-full">
            {[
              "Primary Care",
              "Dental Practices",
              "Salons",
              "Home Services",
              "Restaurants",
              "Automotive Dealerships",
              "Real Estate",
              "Veterinary Clinics",
              "Professional Services",
              "Retail & E-commerce",
              "Financial Services",
              "Education & Tutoring",
              "Mental Health",
              "Gyms, Fitness Studios",
              "Senior Care",
              "Landscaping",
              "Events & Venue",
              "Logistics",
              "Nonprofit Fundraising",
              "SaaS, Agencies"
            ].map((name) => (
              <a href="#" key={name} className="font-roboto font-normal text-[13.5px] leading-[22px] text-white/80 hover:text-white no-underline transition-colors truncate w-full">
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 5: Company Container */}
        <div className="lg:col-span-2 flex flex-col items-start gap-3">
          <div className="text-[#82C1A6] font-roboto font-bold text-[17px] leading-[24px] uppercase tracking-wider">
            COMPANY
          </div>
          <div className="flex flex-col items-start gap-1.5">
            {[
              "About Us",
              "Contact Us",
              "FAQs",
              "Pricing",
              "Terms of Service",
              "Privacy Policy",
              "Affiliate policy",
              "Affiliate program terms",
              "DaitchPro Affiliate"
            ].map((name) => (
              <a href="#" key={name} className="font-roboto font-normal text-[13.5px] leading-[22px] text-white/80 hover:text-white no-underline transition-colors whitespace-nowrap">
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* COLUMN 6: Benefits & Stacking Product Menus */}
        <div className="lg:col-span-1 flex flex-col items-start gap-5 min-w-[150px]">
          {/* Sub-block: Benefits */}
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="text-[#82C1A6] font-roboto font-bold text-[17px] leading-[24px] uppercase tracking-wider">
              BENEFITS
            </div>
            <div className="flex flex-col items-start gap-1.5 text-white/80 text-[13.5px]">
              <span className="whitespace-nowrap">Review Management</span>
              <span className="whitespace-nowrap">Phone & Calling</span>
            </div>
          </div>

          {/* Sub-block: AI Products */}
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="text-[#82C1A6] font-roboto font-bold text-[17px] leading-[24px] uppercase tracking-wider">
              AI PRODUCTS
            </div>
            <div className="flex flex-col items-start gap-1.5 text-white/80 text-[13.5px]">
              <span className="whitespace-nowrap">AI WebChat</span>
              <span className="whitespace-nowrap">CRM</span>
            </div>
          </div>

          {/* Sub-block: AI Agent Product */}
          <div className="flex flex-col items-start gap-2 w-full">
            <div className="text-[#82C1A6] font-roboto font-bold text-[17px] leading-[24px] uppercase tracking-wider whitespace-nowrap">
              AI AGENT PRODUCT
            </div>
            <div className="flex flex-col items-start gap-1.5 text-white/80 text-[13.5px]">
              <span className="whitespace-nowrap">AI Agent Demo</span>
              <span className="whitespace-nowrap">AI Agent Product</span>
              <span className="whitespace-nowrap">AI Agent Product Pricing</span>
            </div>
          </div>
        </div>

        {/* COLUMN 7: Email & Phone Action Details */}
        <div className="lg:col-span-1 flex flex-col items-start gap-5 pl-2 min-w-[140px]">
          {/* Email Block */}
          <div className="flex flex-col items-start gap-2">
            <div className="text-[#82C1A6] font-roboto font-bold text-[17px] leading-[24px] uppercase tracking-wider">
              EMAIL
            </div>
            <a href="mailto:Info@DaitchPro.com" className="font-roboto font-normal text-[13.5px] leading-[22px] text-white/80 hover:text-[#82C1A6] transition-colors no-underline whitespace-nowrap">
              Info@DaitchPro.com
            </a>
          </div>

          {/* Phone Block */}
          <div className="flex flex-col items-start gap-2">
            <div className="text-[#82C1A6] font-roboto font-bold text-[17px] leading-[24px] uppercase tracking-wider whitespace-nowrap">
              PHONE NUMBER
            </div>
            <a href="tel:+1309230950" className="font-roboto font-normal text-[13.5px] leading-[22px] text-white/80 hover:text-[#82C1A6] transition-colors no-underline whitespace-nowrap">
              +1 (309) 230-950
            </a>
          </div>
        </div>

      </div>

      {/* Blueprint Backdrop Lines Graphic */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] opacity-[0.04] pointer-events-none z-0">
        <img
          className="w-full h-full object-cover"
          style={groupStyle}
          alt="Grid Graphic Background Layout"
          src={property1 === "variant" ? "/img/group-2147225313-1.png" : group}
        />
      </div>
    </div>
  );
};