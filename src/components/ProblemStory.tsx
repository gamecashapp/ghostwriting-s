import { FadeIn, Section } from './Shared';
import { AlertTriangle, XCircle } from 'lucide-react';
import danielImage from '../assets/images/Dansam-selar.co-20231215015214.jpg';

export default function ProblemStory() {
  return (
    <div className="bg-[#0F2038]">
      <Section>
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">You're Exhausted From "Fake" Online Opportunities</h2>
            <p className="text-xl text-white">
              You see people making money online, but every time you try, you hit a wall. You lack a laptop, you have no prior experience, or the "opportunity" turns out to be a scam.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-32">
          <FadeIn delay={0.2} className="space-y-6">
            <h3 className="text-3xl font-bold">Why Most People Stay Stuck</h3>
            <ul className="space-y-4">
              {[
                "Waiting until they can afford an expensive laptop.",
                "Believing they need a degree in English or Journalism.",
                "Falling for get-rich-quick schemes that teach no real skills.",
                "Trying to figure it out alone without a proven system."
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                  <span className="text-lg text-white">{text}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.4} className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1581456495146-65a71b2c8e52?q=80&w=2070&auto=format&fit=crop" alt="Stuck working" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#0F2038] p-6 rounded-2xl shadow-xl max-w-xs border border-white/10">
              <div className="flex gap-4 items-center">
                <AlertTriangle className="w-10 h-10 text-brand-accent shrink-0" />
                <p className="font-medium text-white">It doesn't have to be this way.</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="bg-[#0B1727] rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center z-10 relative">
              <div>
                <img src={danielImage} alt="Daniel Sampson" className="rounded-2xl shadow-2xl object-cover aspect-[4/5] w-full" />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Meet Daniel Sampson</h2>
                <p className="text-lg text-white">
                  A few years ago, Daniel was exactly where you might be right now. He wanted to earn in dollars, build a sustainable online income, and achieve financial freedom—but all he had was a smartphone.
                </p>
                <p className="text-lg text-white">
                  He discovered ghostwriting. Through relentless trial and error, he built a system that generated over $50,000 using nothing but his phone. 
                </p>
                <p className="text-lg text-white font-medium italic border-l-4 border-brand-accent pl-4 py-2">
                  "I realized that companies don't care what device you use. They care about results, reliability, and clear communication. Once I cracked the code on how to find these clients, everything changed."
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
