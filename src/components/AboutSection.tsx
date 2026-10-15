import React from 'react';
import { ArrowUpRight, CheckCircle2, Instagram, ShieldCheck, HeartHandshake } from 'lucide-react';

interface AboutSectionProps {
  onStartInquiry: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartInquiry }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8E1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[3/4] w-full overflow-hidden bg-[#E8E1D7] border border-[#2D132C]/10 shadow-xl">
                <img
                  src="/src/assets/images/about_kelly_portrait_1792059081574.jpg"
                  alt="Coach Kelly Portrait — Denver Personal Trainer & NASM Certified"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top contrast-[1.03]"
                />
              </div>

              {/* Verified Coach NASM Credentials Badge */}
              <div className="mt-4 p-4 bg-[#F4EFEA] border border-[#E8E1D7] text-xs text-[#3B3938]">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="font-bold uppercase tracking-wider text-[#151515] flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#7A2E69]" />
                    <span>NASM Certified Personal Trainer</span>
                  </p>
                  <span className="text-[10px] font-mono font-bold text-[#7A2E69] bg-[#FAF7F2] px-2 py-0.5 border border-[#E8E1D7]">
                    CREDENTIALED
                  </span>
                </div>
                <p className="text-[11px] leading-relaxed text-[#3B3938]">
                  Certified through the National Academy of Sports Medicine. Specializing in individualized resistance training, progressive biomechanics, and sustainable habit coaching in Denver and worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Text and Philosophy Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#7A2E69]">
                Meet Coach Kelly · NASM CPT
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#151515] leading-[0.95] text-balance">
                Stronger You, Better You, Unstoppable You.
              </h2>
            </div>

            <p className="text-lg text-[#3B3938] leading-relaxed font-normal">
              Most fitness programs fail because they demand an extreme, all-or-nothing overhaul that ignores your career, family, stress, and schedule. As a certified NASM personal trainer, my coaching philosophy is built on creating a realistic, empowering roadmap tailored specifically to YOU.
            </p>

            <p className="text-base text-[#3B3938] leading-relaxed">
              Based in Denver, Colorado, I coach in-person clients locally in private gym settings and mentor athletes worldwide through high-touch online coaching. Whether you're lifting weights for the first time or looking to break through a training plateau, I'm here to provide the structure, form feedback, and genuine support you need to succeed.
            </p>

            {/* Three Pillar Distinctions from Kelly's Program */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E8E1D7]">
              <div className="p-4 bg-[#F4EFEA] border border-[#E8E1D7]">
                <p className="font-display text-lg font-bold uppercase text-[#151515]">Fat Loss</p>
                <p className="text-xs text-[#3B3938] mt-1.5 leading-relaxed">
                  Sustainable nutrition & energy expenditure strategies that actually work without starvation or burnout.
                </p>
              </div>

              <div className="p-4 bg-[#F4EFEA] border border-[#E8E1D7]">
                <p className="font-display text-lg font-bold uppercase text-[#151515]">Strength</p>
                <p className="text-xs text-[#3B3938] mt-1.5 leading-relaxed">
                  Build lean functional muscle, master compound lifts, and feel capable and strong in everyday life.
                </p>
              </div>

              <div className="p-4 bg-[#F4EFEA] border border-[#E8E1D7]">
                <p className="font-display text-lg font-bold uppercase text-[#151515]">Consistency</p>
                <p className="text-xs text-[#3B3938] mt-1.5 leading-relaxed">
                  Realistic, personalized plans that fit your calendar and keep you motivated week after week.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onStartInquiry}
                className="px-8 py-3.5 bg-[#2D132C] text-[#FAF7F2] font-bold text-xs uppercase tracking-widest hover:bg-[#1E0C1D] transition-colors cursor-pointer"
              >
                Inquire For Coaching
              </button>

              <a
                href="https://www.instagram.com/kellydoesfitness/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-[#2D132C] text-[#2D132C] font-bold text-xs uppercase tracking-widest hover:bg-[#F4EFEA] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow @kellydoesfitness</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
