'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
// Aapki original local image path
import bgBannerImage from '../../assets/Footer.png'

export default function WelcomeCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px', amount: 0.15 })

  // Typewriter Animation Logic
  const words = ["Customers", "Growth", "Orders"]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  useEffect(() => {
    const handleType = () => {
      const fullWord = words[currentWordIndex]
      
      if (!isDeleting) {
        setCurrentText(fullWord.substring(0, currentText.length + 1))
        setTypingSpeed(120)
      } else {
        setCurrentText(fullWord.substring(0, currentText.length - 1))
        setTypingSpeed(60)
      }

      if (!isDeleting && currentText === fullWord) {
        setTypingSpeed(1800)
        setIsDeleting(true)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setTypingSpeed(400)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full overflow-x-hidden my-8"
    >
      <div className="w-full">
        {/* Background Image Container */}
        <div 
          className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat h-[240px] xs:h-[280px] sm:h-[360px] md:h-[440px] lg:h-[500px] flex items-center justify-center px-4"
          style={{ backgroundImage: `url(${bgBannerImage.src || bgBannerImage})` }}
        >
          <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />
          
          {/* Main Card Modal Component */}
          <div className="relative z-10 w-full max-w-[290px] xs:max-w-[340px] sm:max-w-[480px] md:max-w-[580px] bg-[#F5FCF8]/95 backdrop-blur-md rounded-[24px] p-5 sm:p-8 md:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-white/40 flex flex-col items-center text-center">
            
            {/* Animated Heading */}
            <h2 className="text-black font-semibold tracking-tight leading-[1.3] m-0 select-none w-full">
              <span className="block" style={{ fontSize: 'clamp(14px, 3.4vw, 24px)' }}>
                Let AI Run Your Orders -
              </span>
              <span className="inline-flex items-center justify-center mt-1 sm:mt-1.5" style={{ fontSize: 'clamp(14px, 3.4vw, 24px)' }}>
                So You Can Focus on&nbsp;
                <span className="text-black relative inline-block text-left min-w-[20px]">
                  {currentText}
                  {/* Matching Blinking Cursor line */}
                  <span className="inline-block ml-0.5 w-[3px] h-[18px] sm:h-[24px] bg-[#3C995B] align-middle animate-pulse" />
                </span>
              </span>
            </h2>

            {/* Buttons Layout */}
            <div className="flex flex-row justify-center items-center gap-3 sm:gap-4 w-full mt-5 sm:mt-7 md:mt-8">
              
              {/* Left Primary Button — Start Free Trail (Aapka CSS) */}
              <a
                href="/signup"
                className="flex-1 max-w-[180px] inline-flex items-center justify-center font-semibold no-underline transition-all duration-200 hover:scale-[1.01] active:scale-[0.98] whitespace-nowrap text-center text-[#173A1B]"
                style={{
                  padding: 'clamp(10px, 1.5vw, 14px) clamp(12px, 2vw, 22px)',
                  fontSize: 'clamp(11px, 1.6vw, 15px)',
                  borderRadius: '12px',
                  border: '1px solid #FFF',
                  opacity: 0.9,
                  background: 'radial-gradient(515.89% 72.14% at 40.59% 15.83%, rgba(175, 217, 177, 0.89) 0%, rgba(60, 153, 91, 0.89) 100%)',
                  boxShadow: '0 0 30px 0 rgba(0, 0, 0, 0.15)',
                  backdropFilter: 'blur(39.45000076293945px)',
                  WebkitBackdropFilter: 'blur(39.45000076293945px)',
                }}
              >
                Start Free Trail
              </a>

              {/* Right Secondary Button — Book a Demo (Aapka CSS) */}
              <a
                href="/contact"
                className="flex-1 max-w-[180px] inline-flex items-center justify-center font-medium no-underline transition-all duration-200 hover:bg-[#F9FAF9] active:scale-[0.98] whitespace-nowrap text-center"
                style={{
                  padding: 'clamp(10px, 1.5vw, 13px) clamp(12px, 2vw, 22px)',
                  fontSize: 'clamp(11px, 1.6vw, 15px)',
                  borderRadius: '12px',
                  border: '1px solid #3C995B',
                  background: '#FFF',
                  color: '#3C995B',
                  backdropFilter: 'blur(12.949999809265137px)',
                  WebkitBackdropFilter: 'blur(12.949999809265137px)',
                }}
              >
                Book a Demo
              </a>
            </div>

          </div>
        </div>
      </div>
    </motion.section> 
  )
}