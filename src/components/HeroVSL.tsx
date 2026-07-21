import { motion } from 'motion/react';
import { PlayCircle, ShieldCheck, Star, ChevronUp } from 'lucide-react';
import { CTAButton, FadeIn, Section } from './Shared';

export default function HeroVSL() {
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-brand-accent opacity-5 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#06101E] opacity-5 blur-[120px]"></div>
      </div>

      <Section className="pt-32 pb-16 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F2038]/50 backdrop-blur border border-black/5 mb-8">
            <Star className="w-4 h-4 text-brand-accent fill-brand-accent" />
            <span className="text-sm font-semibold tracking-wide uppercase text-white">The Ghostwriting Income Generator</span>
            <Star className="w-4 h-4 text-brand-accent fill-brand-accent" />
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Finally, How To Land <br className="hidden md:block"/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-accent">Dollar-Paying Ghostwriting Clients</span>…<br className="hidden md:block"/>
            Even If You've Never Written for Anyone Before
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto mb-10 font-light">
            Learn the exact system Daniel Sampson used after generating over $50,000 with just his smartphone—and discover how to build a real online income through ghostwriting, client acquisition, and scalable systems without needing expensive equipment or years of experience.
          </p>
        </FadeIn>


        <FadeIn delay={0.4}>
          <div className="relative max-w-7xl mx-auto w-full rounded-3xl overflow-hidden shadow-2xl bg-[#0F2038] border border-white/20 p-2 md:p-4 backdrop-blur-sm mb-6">
            <div className="aspect-video bg-black rounded-2xl relative flex items-center justify-center overflow-hidden">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Dpmo1uwNpk4?rel=0&modestbranding=1&showinfo=0"
                title="VSL Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="flex flex-col items-center mb-8">
            <div className="flex flex-col items-center text-[#C9A227] animate-bounce mb-2">
              <ChevronUp className="w-8 h-8 -mb-4" />
              <ChevronUp className="w-8 h-8 -mb-4" />
              <ChevronUp className="w-8 h-8" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-[#D4AF37]">Watch This First</h3>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="flex justify-center">
            <CTAButton text="Get Instant Access Now - #30,000" className="w-full sm:w-auto text-xl py-5 px-10" />
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
