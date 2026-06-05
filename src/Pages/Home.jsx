import { motion } from 'framer-motion';
import HeroContent from '../components/Home/HeroContent';
import AIChatPanel from '../components/Home/AIChatPanel';
import VoiceAgentPanel from '../components/Home/VoiceAgentPanel';
import bg1 from '../assets/Bg1.png';
import CustomerCareSection from '../components/Home/CustomerCareSection';
import WaveformDemoSection from '../components/Home/WaveformDemoSection';
import RevenueLeakageDashboard from '../components/Home/RevenueLeakageDashboard';
import RevenueCalculator from '../components/Home/RevenueCalculator';

export default function Hero() {
  return (
    <main className="w-full flex flex-col bg-gradient-to-r from-[#9ADBB8]/40 to-white/40 backdrop-blur-lg">
      <section className="relative w-full min-h-screen lg:min-h-[calc(100vh-103px)] flex flex-col lg:flex-row items-stretch">
        
        {/* Left Side Content - Width kam karke 38% kar di hai taake text mazeed compact ho jaye */}
        <div className="w-full lg:w-[44%] relative z-10 flex items-center shrink-0">
          <HeroContent />
        </div>

        {/* Right Side Image & Floating Glass Panels - Width barha kar 62% kar di hai */}
        {/* Is se image ko zyada area milega aur woh baghair cut huay poori phail sakay gi */}
        <div className="relative w-full h-auto lg:w-[62%] z-0 flex items-center justify-center">
          
          {/* Wrapper container jo image ke exact layout ko bounds mein rakhta hai */}
          <div className="relative w-full h-full flex items-center justify-center overflow-visible">
            
            {/* Main Background Image Asset */}
            <motion.img 
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={bg1}
              alt="Landscaping environment" 
              // object-contain ab bari width par poori image saaf dikhaye ga
              className="w-full h-auto lg:h-full object-cover lg:object-contain block"
            />

            {/* Figma Desktop Panels Overlay Container */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-20">
              
              {/* Voice Agent Panel Group */}
              {/* Width barhnay ki wajah se cards ki coordinates ko adjust kiya hai taake layout disturb na ho */}
              <div className="absolute left-[4%] top-[18%] w-[239px] h-[238px] pointer-events-auto">
                <VoiceAgentPanel isMobile={false} />
              </div>
              
              {/* AI Chat Panel Group */}
              <div className="absolute right-[6%] bottom-[14%] w-[283px] h-[253px] pointer-events-auto">
                <AIChatPanel isMobile={false} />
              </div>

            </div>
          </div>

        </div>

      </section>
            <CustomerCareSection/>
              <WaveformDemoSection/>
              <RevenueLeakageDashboard/>
              <RevenueCalculator/>
    </main>
  );
}