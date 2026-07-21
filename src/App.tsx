import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import HeroVSL from './components/HeroVSL';
import ProblemStory from './components/ProblemStory';
import Opportunity from './components/Opportunity';
import CourseDetails from './components/CourseDetails';
import BottomSections from './components/BottomSections';
import { ShoppingCart } from 'lucide-react';

export default function App() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  const [spotsRemaining, setSpotsRemaining] = useState(() => {
    try {
      const saved = localStorage.getItem('gig_spots_v2');
      const lastUpdate = localStorage.getItem('gig_spots_time_v2');
      if (saved && lastUpdate) {
        const periodsElapsed = Math.floor((Date.now() - parseInt(lastUpdate, 10)) / (15 * 60 * 1000));
        const currentSpots = Math.max(1, parseInt(saved, 10) - periodsElapsed);
        return currentSpots;
      }
    } catch (e) {
      console.warn("localStorage access denied", e);
    }
    return 23;
  });

  useEffect(() => {
    try {
      localStorage.setItem('gig_spots_v2', spotsRemaining.toString());
      localStorage.setItem('gig_spots_time_v2', Date.now().toString());
    } catch (e) {
      console.warn("localStorage access denied", e);
    }
  }, [spotsRemaining]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsRemaining(prev => Math.max(1, prev - 1));
    }, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setShowStickyCTA(latest > 800);
    });
  }, [scrollY]);

  useEffect(() => {
    const w = window as any;
    if (w.fbq) return;
    const n = w.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!w._fbq) w._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    const t = document.createElement('script');
    t.async = true;
    t.src = 'https://connect.facebook.net/en_US/fbevents.js';
    const s = document.getElementsByTagName('script')[0];
    if (s && s.parentNode) {
      s.parentNode.insertBefore(t, s);
    } else {
      document.head.appendChild(t);
    }
    w.fbq('init', 'YOUR_PIXEL_ID_HERE');
    w.fbq('track', 'PageView');
  }, []);

  return (
    <div className="min-h-screen bg-[#0A192F] text-white selection:bg-[#C9A227] selection:text-white scroll-smooth relative pb-20 md:pb-0 font-sans overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C9A227] to-[#06101E] origin-left z-[100]"
        style={{ scaleX }}
      />

      <nav className="fixed top-0 w-full flex items-center justify-between px-6 md:px-10 py-4 md:py-5 bg-[#0B1727]/90 backdrop-blur-md border-b border-[#06101E]/10 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#06101E] to-[#C9A227] rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <span className="font-bold text-sm md:text-lg tracking-tight uppercase text-white hidden md:block">Ghostwriting Income Generator</span>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
            <span className="text-xs md:text-sm font-medium text-red-500 animate-pulse">{spotsRemaining} Spots Remaining</span>
          </div>
        </div>
      </nav>
      
      <div className="pt-16">
        <HeroVSL />
        <ProblemStory />
        <Opportunity />
        <CourseDetails />
        <BottomSections />
      </div>


    </div>
  );
}
