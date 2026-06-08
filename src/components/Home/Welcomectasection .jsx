'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import bgBannerImage from '../../assets/footer.png'

export default function WelcomeCTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px', amount: 0.15 })

  // Typewriter Animation Logic
  const words = ["Landscaping", "Growth", "Orders"]
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
      className="w-full overflow-x-hidden"
    >
      <div className="w-full">
        {/* Background Image Container */}
        <div
          className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat h-[240px] xs:h-[280px] sm:h-[360px] md:h-[440px] lg:h-[500px] flex items-center justify-center px-4"
          style={{ backgroundImage: `url(${bgBannerImage})` }}
        >
          <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />

          {/* Main Card Modal Component — Fixed missing closing bracket on shadow */}
          <div className="relative z-10 w-full max-w-[290px] xs:max-w-[340px] sm:max-w-[480px] md:max-w-[580px] border-[1px] border-[#FFF] bg-[#F5FCF8]/55 backdrop-blur-md rounded-[24px] p-5 sm:p-8 md:p-10 shadow-[0_10px_35px_rgba(0,0,0,0.06)] flex flex-col items-center text-center">
            {/* Animated Heading */}
            <h2 className="text-black font-semibold tracking-tight leading-[1.3] m-0 select-none w-full">
              <span className="block" style={{ fontSize: 'clamp(14px, 3.4vw, 24px)' }}>
                Let AI Run Your Operations -
              </span>
              <span className="inline-flex items-center justify-center mt-1 sm:mt-1.5" style={{ fontSize: 'clamp(14px, 3.4vw, 24px)' }}>
                So You Can Focus on&nbsp;
                <span className="relative inline-flex items-center text-left min-w-[20px]">
                  {/* CHANGED: Text color set to theme green (#3C995B) */}
                  <span className="text-[#3C995B] font-bold">
                    {currentText}
                  </span>
                  {/* Blinking Cursor */}
                  <span className="inline-block ml-1 w-[3px] h-[18px] sm:h-[24px] bg-[#3C995B] align-middle animate-pulse" />
                </span>
              </span>
            </h2>

            {/* Buttons Layout */}
            <div className="flex flex-row justify-center items-center gap-3 sm:gap-4 w-full mt-5 sm:mt-7 md:mt-8">

              {/* Left Primary Button — Start Free Trial */}
              <a
                href="/signup"
                className="inline-flex font-medium items-center justify-center gap-2 md:py-3.5 md:px-10 py-2 px-3 rounded-xl text-black border border-white opacity-90 bg-[radial-gradient(59.41%_515.38%_at_40.59%_15.83%,rgba(175,217,177,0.89)_0%,rgba(60,153,91,0.89)_100%)] shadow-[0px_0px_30px_rgba(0,0,0,0.15)] backdrop-blur-[39.45px] transition-all hover:scale-105 whitespace-nowrap text-[14px] xl:text-[15px]"
              >
                Start Free Trial
              </a>

              {/* Right Secondary Button — Book a Demo (Fixed space typo) */}
              <a
                href="#demo"
                className="inline-flex font-medium items-center justify-center gap-2 md:py-3.5 md:px-10 py-2 px-3 rounded-xl text-[#3C995B] border border-[#3C995B] opacity-95 bg-[#efebeb] shadow-[0px_0px_10px_rgba(0,0,0,0.15)] backdrop-blur-[39.45px] transition-all hover:scale-105 whitespace-nowrap text-[14px] xl:text-[18px]"
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