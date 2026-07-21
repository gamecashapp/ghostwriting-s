import { FadeIn, Section } from './Shared';
import { TrendingUp, Building2, Globe2, Smartphone } from 'lucide-react';

export default function Opportunity() {
  const stats = [
    { icon: TrendingUp, title: "High Demand", desc: "Founders and CEOs are too busy to write their own content." },
    { icon: Building2, title: "Deep Pockets", desc: "Companies gladly pay in USD for reliable communication." },
    { icon: Globe2, title: "Work Anywhere", desc: "100% remote. Your location doesn't limit your income." },
    { icon: Smartphone, title: "Low Barrier", desc: "Start with the device already in your hand." },
  ];

  return (
    <div className="bg-[#0F2038]">
      <Section className="bg-[#06101E] text-white rounded-t-[4rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
        
        <FadeIn>
          <div className="text-center max-w-4xl mx-auto mb-20 pt-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">The Golden Era of Ghostwriting</h2>
            <p className="text-xl text-white">
              Why is ghostwriting the ultimate skill right now? And why do beginners have a massive advantage if they follow the right system?
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="bg-[#0F2038]/10 backdrop-blur border border-white/10 p-8 rounded-3xl hover:bg-[#0F2038]/20 transition-all h-full">
                <stat.icon className="w-12 h-12 text-brand-accent mb-6" />
                <h3 className="text-xl font-bold mb-3 text-white">{stat.title}</h3>
                <p className="text-white leading-relaxed">{stat.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="bg-[#0F2038] rounded-3xl p-10 md:p-16 text-white shadow-2xl relative mt-12">
            <h3 className="text-3xl font-bold mb-10 text-center">Busting Common Myths</h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-xl font-bold mb-2 flex items-start gap-2"><span className="text-brand-accent text-2xl leading-none">Myth 1:</span> You need to be a famous author.</h4>
                <p className="text-white">Fact: Ghostwriters stay behind the scenes. You adopt their voice, they get the credit, you get paid.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 flex items-start gap-2"><span className="text-brand-accent text-2xl leading-none">Myth 2:</span> You need a laptop.</h4>
                <p className="text-white">Fact: Daniel built his entire $50k+ foundation writing and organizing on his smartphone.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 flex items-start gap-2"><span className="text-brand-accent text-2xl leading-none">Myth 3:</span> It's too late to start.</h4>
                <p className="text-white">Fact: The creator economy is exploding. More people than ever need content, but don't have the time to write it.</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 flex items-start gap-2"><span className="text-brand-accent text-2xl leading-none">Myth 4:</span> AI will replace you.</h4>
                <p className="text-white">Fact: AI lacks human empathy and specific lived experiences. CEOs pay for nuanced, human-sounding content.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
