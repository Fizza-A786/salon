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

      {/* Glow Effects on Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FFF2E5] rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#E8FAED] rounded-full mix-blend-multiply filter blur-3xl opacity-70 z-0"></div>

      {/* Main Image Container */}
      <div className="relative p-7 rounded-[32px] z-10 w-[90%] max-w-[1000px] flex items-center justify-center"
      style={{
        background:'url(src/assets/back.jpg)',
        backgroundSize:'cover'
      }}
      >
        
        {/* ── FIGMA SPECIFIED GRADIENT BLUR SHADOW LAYER ── */}
        <div 
          className="absolute pointer-events-none rounded-full"
          style={{
            width: "1131px",          // Figma Spec Width
            height: "556.78px",       // Figma Spec Height
            maxWidth: "115%",         // Responsive guardrails
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "linear-gradient(135deg, #599F92 0%, #C2FFE5 100%)", // Palette colors
            opacity: 0.6,             // 60% Opacity from spec
            filter: "blur(37px)",     // Layer blur 37 from spec
            zIndex: -1,               // Pushed behind the image asset
          }}
        />

        {/* The provided image which already contains the card, waveform, and dots */}
        <img 
          src={waveImg} 
          className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] object-cover rounded-[32px] relative z-10" 
          alt="Waveform Demo" 
        />

        {/* Play Button Wrapper placed exactly in the center */}
        <button className="absolute inset-0 m-auto z-20 w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] md:w-[160px] md:h-[160px] rounded-full bg-white/30 backdrop-blur-[2px] flex items-center justify-center group hover:scale-105 active:scale-95 transition-transform duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-white/50">
          
          {/* Inner Play Button Circle */}
          <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[110px] md:h-[110px] rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center justify-center border border-white/90">
            {/* Green Triangle */}
            <div className="w-0 h-0 border-t-[10px] sm:border-t-[14px] md:border-t-[18px] border-t-transparent border-l-[16px] sm:border-l-[22px] md:border-l-[30px] border-l-[#76D1A1] border-b-[10px] sm:border-b-[14px] md:border-b-[18px] border-b-transparent ml-2 sm:ml-3 md:ml-4"></div>
          </div>
          
        </button>
      </div>
    </section>
  );
}