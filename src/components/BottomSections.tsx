import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FadeIn, Section, CTAButton } from './Shared';
import { Star, Quote, Plus, Minus, ShieldCheck, CheckCircle2, Facebook, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';

import result1 from '../assets/images/1784220874665.png';
import result2 from '../assets/images/20221019_082739.jpg';
import result3 from '../assets/images/IMG-20220908-WA0007.jpg';
import result4 from '../assets/images/IMG-20220908-WA0009.jpg';
import result5 from '../assets/images/IMG_20260716_175616_486.jpg';
import result6 from '../assets/images/IMG_20260716_175716_778.jpg';
import result7 from '../assets/images/IMG_20260716_175844_223~2.jpg';
import result8 from '../assets/images/IMG_20260716_175936_367~2.jpg';
import result9 from '../assets/images/IMG_20260716_180951_210.jpg';
import result10 from '../assets/images/IMG_20260716_181046_517.jpg';
import result11 from '../assets/images/IMG_20260716_181209_360.jpg';
import result12 from '../assets/images/IMG_20260716_181249_754.jpg';
import result13 from '../assets/images/IMG_20260716_181315_138.jpg';
import result14 from '../assets/images/IMG_20260716_181423_924.jpg';

const resultsImages = [
  result1, result2, result3, result4, result5, result6, result7, result8, result9, result10, result11, result12, result13, result14
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="flex w-full justify-between items-center text-left font-bold text-lg hover:text-brand-accent transition-colors"
      >
        {question}
        {isOpen ? <Minus className="shrink-0 text-brand-accent" /> : <Plus className="shrink-0 text-brand-accent" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-white leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function BottomSections() {
  const testimonials = [
    {
      type: "video",
      videoId: "RTzLe2PlOXo"
    },
    {
      type: "video",
      videoId: "aYfv8t6dwco"
    },
    {
      type: "video",
      videoId: "k6yI-Auknr8"
    },
    {
      type: "video",
      videoId: "ra7a_OQKrao"
    }
  ];

  const faqs = [
    { q: "Do I really only need a smartphone?", a: "Yes. Daniel generated over $50,000 using just his phone. The course includes apps and workflows specifically optimized for mobile." },
    { q: "What if I have zero writing experience?", a: "The course includes foundational modules that teach you how to write clearly and effectively, even if you hated English class." },
    { q: "How long does it take to see results?", a: "Results vary entirely based on your execution and effort. Some students land clients in weeks; others take longer to build their foundation." },
    { q: "Is this guaranteed income?", a: "No. This is a skill-building program, not a get-rich-quick scheme. Your income will depend on your dedication to learning and applying the systems." }
  ];

  return (
    <>
      <div className="bg-[#0F2038] py-20">
        <Section>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Real Student Transformations</h2>
              <p className="text-xl text-white">
                Listen to what happened to the people who joined
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                {t.type === 'video' ? (
                  <div className="bg-[#0B1727] p-4 rounded-3xl relative h-full flex flex-col justify-center items-center aspect-[9/16] md:aspect-auto">
                    <iframe
                      src={`https://www.youtube.com/embed/${t.videoId}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="w-full h-full min-h-[400px] md:min-h-[500px] rounded-2xl"
                    ></iframe>
                  </div>
                ) : (
                  <div className="bg-[#0B1727] p-8 rounded-3xl relative h-full flex flex-col justify-between">
                    <div>
                      <Quote className="w-12 h-12 text-brand-accent/20 absolute top-6 right-6" />
                      <div className="flex gap-1 mb-6">
                        {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-brand-accent text-brand-accent" />)}
                      </div>
                      <p className="text-lg italic text-white mb-8">"{t.content}"</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover shadow-md" />
                      <div>
                        <h4 className="font-bold">{t.name}</h4>
                        <p className="text-sm text-white">{t.role}</p>
                      </div>
                    </div>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </Section>
      </div>

      <div className="bg-[#0F2038] pb-20">
        <Section>
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">More Results From The Millionaires Community</h2>
              <p className="text-xl text-white/70">
                Real screenshots and wins from our private student group.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {resultsImages.map((imgSrc, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-[#0B1727] rounded-3xl overflow-hidden aspect-[4/5] border border-white/10 flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent group-hover:from-brand-accent/10 transition-colors z-10 pointer-events-none"></div>
                  <img 
                    src={imgSrc} 
                    alt={`Student Result ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      </div>

      <Section className="bg-[#0B1727] pb-32">
        <FadeIn>
          <div className="max-w-4xl mx-auto bg-[#0F2038] rounded-[3rem] p-8 md:p-16 shadow-xl border border-brand-accent/10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>
            <div>
              {faqs.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)}
            </div>
          </div>
        </FadeIn>
      </Section>

      <Section className="bg-[#06101E] text-white text-center py-32 rounded-t-[4rem] -mt-20 relative overflow-hidden z-20 shadow-[0_-20px_40px_rgba(0,0,0,0.2)]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505315809703-a17fbc752bf6?q=80&w=2029&auto=format&fit=crop')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
        <FadeIn className="relative z-10 max-w-3xl mx-auto">
          <ShieldCheck className="w-20 h-20 text-brand-accent mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Ready To Change Your Narrative?</h2>
          <p className="text-xl text-white mb-12">
            Join the Ghostwriting Income Generator today and get instant access to the exact system Daniel used to build his business.
          </p>
          
          <div className="bg-[#0F2038]/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 mb-12 text-left shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-brand-accent text-center">What You Get Today:</h3>
            <ul className="space-y-4 mb-8 max-w-md mx-auto">
              {['Full Ghostwriting Curriculum', 'Client Acquisition Systems', 'Outsourcing Frameworks', 'Mobile Workflow Guides', 'Lifetime Access & Updates'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-success shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mb-8">
              <p className="text-gray-400 line-through text-2xl mb-2">Total Value: #450,000</p>
              <p className="text-5xl font-bold text-white mb-2">Only #30,000</p>
              <p className="text-brand-success font-medium">One-Time Payment. Lifetime Access.</p>
            </div>
            <CTAButton text="Get Instant Access Now" className="w-full text-xl py-6 justify-center flex" />
          </div>
          
          <p className="text-sm text-white max-w-2xl mx-auto">
            *Earnings disclaimer: Results are not guaranteed. Success depends on individual effort, skills, and market conditions. This is a skill-building course, not a get-rich-quick opportunity.
          </p>
        </FadeIn>
      </Section>
      
      <footer className="bg-[#06101E] text-white py-12 text-center text-sm">
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="X (Twitter)">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
            <Youtube className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="WhatsApp">
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Daniel Sampson. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
        </div>
      </footer>
    </>
  );
}
