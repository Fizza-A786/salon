import { motion } from 'framer-motion';
import HeroContent from '../components/Home/HeroContent';
import AIChatPanel from '../components/Home/AIChatPanel';
import VoiceAgentPanel from '../components/Home/VoiceAgentPanel';
import bg1 from '../assets/Bg1.png';
import CustomerCareSection from '../components/Home/CustomerCareSection';
import WaveformDemoSection from '../components/Home/WaveformDemoSection';
import RevenueLeakageDashboard from '../components/Home/RevenueLeakageDashboard';
import RevenueCalculator from '../components/Home/RevenueCalculator';
import LandscapingCommunication from '../components/Home/CommunicationComparison';
import LandscapingAiWorkforce from '../components/Home/LandscapingAiWorkforce';
import WelcomeCTASection from './../components/Home/Welcomectasection ';

export default function Hero() {
  return (
    <main className="w-full flex flex-col bg-gradient-to-r py-12 from-[#9ADBB8]/40 to-white/40 backdrop-blur-lg">
      <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-stretch">
        
      <div className="w-full lg:w-[44%] relative z-10 flex items-center shrink-0">
  <HeroContent />
</div>

<div className="relative w-full lg:w-[62%] z-0 flex self-stretch">
  <div className="relative w-full h-full flex items-center justify-center overflow-visible">

    <motion.img
      initial={{ opacity: 0, scale: 1.02 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      src={bg1}
      alt="Landscaping environment"
      /* CHANGED object-contain TO object-cover */
      className="w-full h-full object-cover block" 
    />

    <div className="hidden lg:block absolute inset-0 pointer-events-none z-20">
      <div className="absolute left-[4%] top-[18%] w-[239px] h-[238px] pointer-events-auto">
        <VoiceAgentPanel isMobile={false} />
      </div>

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
              <LandscapingCommunication/>
              <LandscapingAiWorkforce/>
              <WelcomeCTASection/>
           
    </main>
  );
}