
import bg1 from '../assets/bg.png';
import HeroContent from '../components/Home/HeroContent';
import CustomerCareSection from '../components/Home/CustomerCareSection';
import WaveformDemoSection from '../components/Home/WaveformDemoSection';
import Reavenuheading from '../components/Home/Reavenuheading';
import ProblemSection from '../components/Home/Revenueleakagesection';
import DaitchProShowcase from '../components/Home/SalonReception';
import Dashoardheading from '../components/Home/Dashoardheading';
import RevenueCalculator from '../components/Home/RevenueCalculator';
import ComparisonTable from '../components/Home/ComparisonTable';
import AppointmentSection from '../components/Home/AppointmentSection';
import ComparisonTableheading from '../components/Home/ComparisonTableheading';

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
      <RevenueCalculator/>
      <ComparisonTableheading/>
      <ComparisonTable/>
      <AppointmentSection/>
    </div>
  );
}