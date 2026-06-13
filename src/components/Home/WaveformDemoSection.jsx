"use client";
import React from 'react';
import waveImg from '../../assets/bg2.png';

export default function WaveformDemoSection() {
  return (
    <section className="relative w-full py-10 sm:py-24 bg-[#F8FAFC] overflow-hidden flex justify-center items-center min-h-[300px] md:min-h-[400px]">
      {/* Subtle Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04]" 
        style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* ── Figma Ellipse 46947 & 46948 Ambient Glow Backgrounds ── */}
      <div 
        className="absolute pointer-events-none rounded-full mix-blend-multiply"
        style={{
          left: "6.74%", top: "9.74%", width: "25.48%", height: "49.11%",
          background: "rgba(154, 219, 184, 0.46)", filter: "blur(80px)", zIndex: 0
        }}
      />
      <div 
        className="absolute pointer-events-none rounded-full mix-blend-multiply"
        style={{
          left: "67.71%", top: "58.71%", width: "25.48%", height: "49.11%",
          background: "rgba(154, 219, 184, 0.46)", filter: "blur(80px)", zIndex: 0
        }}
      />

      {/* Main Container */}
      <div className="relative p-4 sm:p-7 z-10 w-[95%] max-w-[1150px] flex items-center justify-center">
        
        {/* ── Figma Rectangle 1: Neon Aura Gradient Underlay ── */}
        <div 
          className="absolute pointer-events-none"
          style={{
            width: "1131px",
            height: "556.78px",
            maxWidth: "112%",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "linear-gradient(130.11deg, rgba(89, 159, 146, 0.7) -11.58%, rgba(194, 255, 229, 0.7) 105.95%)",
            opacity: 0.6,
            filter: "blur(18.5px)",
            borderRadius: "10px",
            zIndex: 1,
          }}
        />

        {/* ── Figma Rectangle 8: Main Linear Glass Outer Frame Border ── */}
        <div 
          className="w-full relative z-10 p-[6px] sm:p-[10px]" 
          style={{
            background: "linear-gradient(110.97deg, rgba(228, 255, 244, 0.5) -4.87%, rgba(255, 255, 255, 0.5) 103.95%)",
            border: "1.8px solid #FFFFFF",
            backdropFilter: "blur(25px)",
            WebkitBackdropFilter: "blur(25px)",
            borderRadius: "32px",
            boxShadow: "0px 20px 50px rgba(0, 0, 0, 0.12)"
          }}
        >
          {/* Inner Content Area Frame (Frame 2147228534 Aspect Boundary) */}
          <div 
            className="w-full h-full relative overflow-hidden bg-black"
            style={{
              borderRadius: "20px"
            }}
          >
            {/* The Black AI Image Asset */}
            <img 
              src={waveImg.src || waveImg} 
              className="w-full h-auto object-cover block" 
              alt="AI Dashboard Asset" 
            />
          </div>
        </div>

        {/* ── Figma Play Button Container Stack ── */}
        <div 
          className="absolute inset-0 m-auto z-20 flex items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-95"
          style={{
            width: "199px",
            height: "198px",
            background: "rgba(255, 255, 255, 0.66)",
            border: "2.05px solid #FFFFFF",
            borderRadius: "120px",
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.05)"
          }}
        >
          {/* Inner Play Button Circle */}
          <button 
            className="flex items-center justify-center cursor-pointer"
            style={{
              width: "165px",
              height: "164px",
              background: "#FFFFFF",
              borderRadius: "100px",
              border: "none",
              boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.15)",
              backdropFilter: "blur(39.45px)",
              WebkitBackdropFilter: "blur(39.45px)"
            }}
          >
            {/* Polygon 1 (Rotated Arrow Head Accent) */}
            <div 
              style={{
                width: "42px",
                height: "42px",
                background: "#7ED9AC",
                boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.15)",
                backdropFilter: "blur(39.45px)",
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                transform: "rotate(90deg)",
                marginLeft: "8px"
              }}
            />
          </button>
        </div>

      </div>
    </section>
  );
}