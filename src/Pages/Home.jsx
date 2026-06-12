import React from 'react';
import bg1 from '../assets/bg1.png';
import HeroContent from '../components/Home/HeroContent';
import CustomerCareSection from '../components/Home/CustomerCareSection';
import WaveformDemoSection from '../components/Home/WaveformDemoSection';
import Reavenuheading from '../components/Home/Reavenuheading';
import ProblemSection from '../components/Home/Revenueleakagesection';
import SalonReceptionistShowcase from '../components/Home/SalonReception';
export default function Hero() {
  return (
    <>
      <section className="relative w-full m-h-screen flex items-center justify-start overflow-hidden font-sans antialiased selection:bg-[#4DA667]/30">

        {/* Background Container - Space Gaps Removed Completely */}
        <div className="absolute inset-0 w-full h-[100%] z-0">
          <img
            src={bg1}
            alt="Modern luxury salon environment"
            /* h-full w-full ke sath object-fill lgane se upar aur neeche ki sari spaces remove ho jayengi bina image crop kiye */
            className="w-full h-full"
          />
          {/* Left-sided premium dark gradient mask overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Figma Blur Ellipses Layers */}
        <div className="absolute inset-0 w-full h-full z-1 pointer-events-none hidden lg:block">
          {/* Ellipse 46953 */}
          <div
            className="absolute w-[663px] h-[397px] rounded-full"
            style={{
              left: 'calc(70% - 663px/2 - 629px)',
              top: '5%',
              background: 'linear-gradient(283deg, rgba(149, 131, 124, 0.70) 20.32%, rgba(163, 213, 194, 0.70) 51.46%)',
              filter: 'blur(80px)'
            }}
          />
          {/* Ellipse 46952 */}
          <div
            className="absolute  w-[492px] h-[330px] rounded-full"
            style={{
              left: 'calc(50% - 663px/2 - 629px)',
              top: '60%',
              background: 'linear-gradient(80deg, #918394 33.07%, #FFF 127.46%)',
              filter: 'blur(80px)'
            }}
          />

          {/* Ellipse 46951 */}
          <div
            className="absolute w-[808px] h-[639px] rounded-full"
            style={{
              left: 'calc(50% - 808px/2 - 552px)',
              top: '25%',
              background: 'linear-gradient(80deg, rgba(150, 132, 126, 0.8) 33.07%, rgba(255, 255, 255, 0.8) 127.46%)',
              filter: 'blur(80px)'
            }}
          />
        </div>

        {/* Hero Content Overlay Frame */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-14 py-20 lg:py-25">
          <div className="w-full lg:w-[50%] xl:w-[44%]">
            <HeroContent />
          </div>
        </div>


    </section>
    <CustomerCareSection/>
    <WaveformDemoSection/>
    <Reavenuheading/>
    <ProblemSection/>
    <SalonReceptionistShowcase/>
    </>
  );
}

