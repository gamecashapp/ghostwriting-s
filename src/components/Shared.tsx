import { ReactNode, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

export const Section = ({ children, className = '', id = '' }: { children: ReactNode, className?: string, id?: string }) => (
  <section id={id} className={`py-20 md:py-32 px-6 md:px-10 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

export const CTAButton = ({ text = "ENROLL NOW", href = "https://selar.com/p/qelh?affiliate=nou6", className = '' }: { text?: string, href?: string, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let startTime;
    try {
      startTime = localStorage.getItem('vsl_start_time');
      if (!startTime) {
        startTime = Date.now().toString();
        localStorage.setItem('vsl_start_time', startTime);
      }
    } catch (e) {
      console.warn("localStorage access denied", e);
      startTime = Date.now().toString(); // Fallback for this session
    }

    const timeElapsed = Date.now() - parseInt(startTime, 10);
    const timeToWait = 15 * 60 * 1000; // 15 minutes

    if (timeElapsed >= timeToWait) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, timeToWait - timeElapsed);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-gradient-to-r from-[#C9A227] to-[#D4AF37] text-white font-black py-5 px-8 rounded-2xl shadow-[0_10px_30px_-5px_rgba(201,162,39,0.5)] transition-all border border-white/20 flex items-center justify-center gap-2 ${className}`}
    >
      {text}
      <ChevronRight className="w-5 h-5" />
    </motion.a>
  );
};

export const FadeIn = ({ children, delay = 0, className = '' }: { children: ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);
