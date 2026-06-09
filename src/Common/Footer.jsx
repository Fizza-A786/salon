import React from "react";
import logo from "../assets/logo.png";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import footerDesign from "../assets/footerdesign.svg";

export const Footer = ({
  style,
  footerStyle,
}) => {
  return (
    <div
      className="relative w-full flex flex-col font-sans text-white"
      style={style}
    >
      <div
        className="relative w-full bg-[#063A2F] pt-16 pb-6 px-6 lg:px-8 xl:px-16 overflow-hidden"
        style={footerStyle}
      >
        {/* Animated Circuit Background Graphic - Positioned for bottom half only */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-1/2 opacity-30 pointer-events-none mix-blend-overlay bg-repeat bg-bottom animate-pulse"
          style={{ 
            backgroundImage: `url(${footerDesign})`,
            backgroundSize: "contain"
          }}
        ></div>

        <div className="relative z-10 max-w-[1600px] mx-auto">
          {/* Main Grid Layout - 8 Columns on Extra Large Screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-x-8 gap-y-12">
            
            {/* Column 1: Newsletter & Socials */}
            <div className="xl:col-span-2 flex flex-col gap-6 pr-4">
              <img
                className="w-48 h-auto object-contain"
                alt="DaitchPro Logo"
                src={logo}
              />
              <div className="text-[20px] font-bold tracking-wide font-inter">
                Subscribe To Our <br /> Newsletter
              </div>
              
              <div className="flex flex-col gap-3 mt-2 max-w-[300px]">
                <label className="text-sm font-semibold text-white">Your Email</label>
                <div className="bg-[#0D2D23] border border-[#FFFFFF33] rounded-[12px] overflow-hidden transition-colors focus-within:border-[#3E8667]">
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full bg-transparent text-white placeholder-gray-400 text-sm px-4 py-3 outline-none"
                  />
                </div>
                <button className="bg-[#3E8667] hover:bg-[#326B52] transition-colors text-white font-semibold rounded-[12px] px-4 py-3 mt-1 cursor-pointer">
                  Subscribe
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 mt-4">
                <div className="w-9 h-9 rounded-full bg-[#FFFFFF0F] hover:bg-[#1A5741] flex items-center justify-center cursor-pointer transition">
                  <FiFacebook className="text-gray-300 text-sm" />
                </div>
                <div className="w-9 h-9 rounded-full bg-[#FFFFFF0F] hover:bg-[#1A5741] flex items-center justify-center cursor-pointer transition">
                  <FiTwitter className="text-gray-300 text-sm" />
                </div>
                <div className="w-9 h-9 rounded-full bg-[#FFFFFF0F] hover:bg-[#1A5741] flex items-center justify-center cursor-pointer transition">
                  <SlSocialLinkedin className="text-gray-300 text-sm" />
                </div>
                <div className="w-9 h-9 rounded-full bg-[#FFFFFF0F] hover:bg-[#1A5741] flex items-center justify-center cursor-pointer transition">
                  <FaInstagram className="text-gray-300 text-sm" />
                </div>
              </div>
            
            </div>

            {/* Column 2: Solutions */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[12px] font-bold text-[#82C1A6] uppercase tracking-wider mb-1 whitespace-nowrap">
                SOLUTIONS
              </h3>
              <ul className="flex flex-col gap-3">
                {["Web Agency", "Digital Agency", "Social Media Agency", "Marketing", "Creative Agencies", "Software vendor", "Sales"].map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-[13px] text-[#FFF] hover:text-[#8FB5A2] transition-colors leading-snug">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Platform */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[12px] font-bold text-[#82C1A6] uppercase tracking-wider mb-1 whitespace-nowrap">
                PLATFORM
              </h3>
              <ul className="flex flex-col gap-3">
                {["AI Workforce", "MarketPlace", "Automations", "Project Management", "Payments", "DaitchPro Affiliate"].map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-[13px] text-[#FFF] hover:text-[#8FB5A2] transition-colors leading-snug">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Areas We Handle */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[12px] font-bold text-[#82C1A6] uppercase tracking-wider mb-1 whitespace-nowrap">
                AREAS WE HANDLE
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Primary Care", "Dental Practices", "Salons", "Home Services", "Restaurants", 
                  "Automotive Dealerships", "Real Estate", "Veterinary Clinics", "Professional Services", 
                  "Retail & E-commerce", "Financial Services", "Education & Tutoring", "Mental Health", 
                  "Gyms, Fitness Studios", "Senior Care", "Landscaping", "Events & Venue", "Logistics", 
                  "Nonprofit Fundraising", "SaaS, Agencies"
                ].map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-[13px] text-[#FFF] hover:text-[#8FB5A2] transition-colors leading-snug">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Company */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[12px] font-bold text-[#82C1A6] uppercase tracking-wider mb-1 whitespace-nowrap">
                COMPANY
              </h3>
              <ul className="flex flex-col gap-3">
                {["About Us", "Contact Us", "FAQs", "Pricing", "Terms of Service", "Privacy Policy", "Affiliate policy", "Affiliate program terms", "DaitchPro Affiliate"].map((link, idx) => (
                  <li key={idx}>
                    <a href="#" className="text-[13px] text-[#FFF] hover:text-[#8FB5A2] transition-colors leading-snug">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 6: Benefits, AI Products, AI Agent Product */}
            <div className="flex flex-col gap-8">
              {/* Benefits */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[12px] font-bold text-[#82C1A6] uppercase tracking-wider mb-1 whitespace-nowrap">
                  BENEFITS
                </h3>
                <ul className="flex flex-col gap-3">
                  {["Review Management", "Phone & Calling"].map((link, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-[13px] text-[#FFF] hover:text-[#8FB5A2] transition-colors leading-snug">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* AI Products */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[12px] font-bold text-[#82C1A6] uppercase tracking-wider mb-1 whitespace-nowrap">
                  AI PRODUCTS
                </h3>
                <ul className="flex flex-col gap-3">
                  {["AI WebChat", "CRM"].map((link, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-[13px] text-[#FFF] hover:text-[#8FB5A2] transition-colors leading-snug">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* AI Agent Product */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[12px] font-bold text-[#82C1A6] uppercase tracking-wider mb-1 whitespace-nowrap">
                  AI AGENT PRODUCT
                </h3>
                <ul className="flex flex-col gap-3">
                  {["AI Agent Demo", "AI Agent Product", "AI Agent Product Pricing"].map((link, idx) => (
                    <li key={idx}>
                      <a href="#" className="text-[13px] text-[#FFF] hover:text-[#8FB5A2] transition-colors leading-snug">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 7: Email & Phone Number */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="text-[12px] font-bold text-[#82C1A6] uppercase tracking-wider mb-1 whitespace-nowrap">
                  EMAIL
                </h3>
                <a href="mailto:Info@DaitchPro.com" className="text-[13px] text-[#FFF] hover:text-[#8FB5A2] transition-colors">
                  Info@DaitchPro.com
                </a>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[12px] font-bold text-[#82C1A6] uppercase tracking-wider mb-1 whitespace-nowrap">
                  PHONE NUMBER
                </h3>
                <a href="tel:+1309230950" className="text-[13px] text-[#FFF] hover:text-[#8FB5A2] transition-colors">
                  +1 (309) 230-950
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Bottom Copyright */}
        <div className="relative z-10 mt-20 flex justify-center w-full pb-4">
          <p className="text-[13px] text-[#A6C5B7]">
            © 2026 DaitchPro | All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};