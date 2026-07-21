import { FadeIn, Section, CTAButton } from './Shared';
import { BookOpen, Users, DollarSign } from 'lucide-react';

export default function CourseDetails() {
  const modules = [
    { title: "Ghostwriting Foundations", desc: "What it is, how it works, and setting up your mindset for success." },
    { title: "Skill Acquisition", desc: "For beginners and pros: How to write compelling copy that clients love." },
    { title: "Client Acquisition", desc: "Daniel's exact systems for finding and landing clients who pay in dollars." },
    { title: "The Business Model", desc: "How to build a sustainable business and scale your income." },
    { title: "Project Management", desc: "Hate writing? Learn how to outsource the work and keep the margin." },
  ];

  return (
    <Section className="bg-[#0B1727] relative z-10 -mt-10 rounded-t-[4rem] shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
      <div className="text-center max-w-3xl mx-auto mb-20 pt-8">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Introducing The Ghostwriting Income Generator</h2>
          <p className="text-xl text-white">
            A comprehensive, step-by-step training program combining years of experience into an actionable blueprint.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        {[
          { icon: BookOpen, title: "Step-by-Step Curriculum", desc: "No fluff. Just the exact steps you need to take from day one." },
          { icon: Users, title: "For All Levels", desc: "Whether you've never written a word professionally, or you're a seasoned pro." },
          { icon: DollarSign, title: "Earn in USD", desc: "Protect yourself from local currency inflation by earning globally." }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="bg-[#0F2038] p-8 rounded-3xl shadow-sm border border-white/10 h-full">
              <div className="w-14 h-14 rounded-full bg-[#0B1727] flex items-center justify-center mb-6">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-white">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="bg-[#0F2038] rounded-[3rem] p-8 md:p-16 shadow-xl mb-16 border border-white/10">
        <FadeIn>
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Inside The Curriculum</h3>
        </FadeIn>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {modules.map((mod, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center p-6 rounded-2xl bg-[#0B1727] border border-white/10 hover:border-brand-accent transition-colors">
                <div className="w-16 h-16 shrink-0 bg-[#0F2038] rounded-xl shadow-sm flex items-center justify-center text-2xl font-bold text-white font-serif">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">{mod.title}</h4>
                  <p className="text-white text-lg">{mod.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      <FadeIn className="text-center">
        <CTAButton text="Get Instant Access Now - #30,000" className="mx-auto text-lg py-5 px-10" />
      </FadeIn>
    </Section>
  );
}
