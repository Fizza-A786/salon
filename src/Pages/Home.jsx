import React from 'react';
import bg1 from '../assets/Bg1.png';
import navBg from '../assets/image 1942.png';
import HeroContent from '../components/Home/HeroContent';
import CustomerCareSection from '../components/Home/CustomerCareSection';
import WaveformDemoSection from '../components/Home/WaveformDemoSection';
import Reavenuheading from '../components/Home/Reavenuheading';
import ProblemSection from '../components/Home/Revenueleakagesection';
import DaitchProShowcase from '../components/Home/SalonReception';
import Dashoardheading from '../components/Home/Dashoardheading';

export default function Hero() {
  return (
    <div className="w-full  bg-white">
      <section className="relative w-full h-[711px] overflow-hidden bg-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={bg1}
            alt="Salon background"
            className="w-full h-full object-cover  block"
            style={{
              objectPosition: "center center", /* Top boundary se 15% ka safe space hamesha locked rahega */
            }}
          />
        </div>

        {/* Ellipse 46951 */}
        <div
          className="absolute rounded-full inset-0 pointer-events-none z-2"
          style={{
            width: "373px",
            height: "397px",
            top: "0px",
            background:
              "linear-gradient(20deg, rgba(149,131,124,0.70) 20.32%, rgba(163,213,194,0.70) 11.46%)",

            filter: "blur(80px)",
          }}
        />

        {/* Ellipse 46953 */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "492px",
            height: "330px",
            left: "calc(50% - 246px - 629px)",
            top: "101px",
            background:
              "linear-gradient(79.8deg, #918394 33.07%, #FFFFFF 127.46%)",
            filter: "blur(80px)",
          }}
        />

        {/* Ellipse 46954 */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "311px",
            height: "205px",
            left: "calc(50% - 155.5px - 735.5px)",
            top: "397px",
            background:
              "linear-gradient(97.51deg, #759489 91.22%, #FFFFFF 127.87%)",
            filter: "blur(80px)",
          }}
        />

        {/* Ellipse 46952 */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "402px",
            height: "280px",
            left: "117px",
            top: "203px",
            background: "#7F6253",
            filter: "blur(80px)",
          }}
        />

        {/* Dark Overlay */}
        {/* <div
          className="absolute inset-0 z-10"
          style={{
            background: `
      linear-gradient(
        90deg,
        rgba(0,0,0,0.55) 0%,
        rgba(0,0,0,0.35) 25%,
        rgba(0,0,0,0.15) 45%,
        rgba(0,0,0,0) 70%
      )
    `,
          }}
        /> */}

        {/* Navbar Background */}
        <div className="absolute top-0 left-0 w-full h-[110px] z-30">
          <img
            src={navBg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 h-full max-w-[1440px] mx-auto">
          <div className="absolute left-[42px] top-[96px] w-[520px]">
            <HeroContent />
          </div>
        </div>
      </section>

      <CustomerCareSection />
      <WaveformDemoSection />
      <Reavenuheading />
      <ProblemSection />
      <Dashoardheading />
      <DaitchProShowcase />
    </div>
  );
}