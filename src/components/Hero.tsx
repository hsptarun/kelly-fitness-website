import React, { useState } from 'react';
import { ArrowDown, ArrowRight, MapPin, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartJourney: () => void;
  onExploreCoaching: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartJourney, onExploreCoaching }) => {
  const [imageError, setImageError] = useState(false);
  const heroImageSrc = '/src/assets/images/hero_kelly_athletic_1792059081508.jpg';

  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] border-b border-[#E8E1D7] pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient editorial texture */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E2CEC7]/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Sub-header strip with unboxed metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#E8E1D7] mb-10 text-xs uppercase tracking-widest font-semibold text-[#3B3938]">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#2D132C]" />
            <span>Denver, Colorado</span>
            <span aria-hidden="true" className="text-[#3B3938]/40">·</span>
            <span>Worldwide Online Coaching</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[#7A2E69] font-bold">NASM Certified Trainer</span>
            <span aria-hidden="true" className="text-[#3B3938]/40">·</span>
            <span className="text-[#2D132C] font-bold">Accepting New Clients</span>
          </div>
        </div>

        {/* Hero Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Typographic Powerhouse (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#7A2E69]">
                Personal Training & Holistic Coaching
              </p>
              
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-black uppercase tracking-tight text-[#151515] leading-[0.92] text-balance">
                Stronger Than <br />
                <span className="text-[#2D132C] italic font-normal">Your Excuses.</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-[#3B3938] leading-relaxed max-w-xl font-normal">
              High-touch personal training designed around your body, your schedule, and your real life. Build lasting physical strength, master your movement, and cultivate sustainable habits that endure beyond the gym.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onStartJourney}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2D132C] text-[#FAF7F2] font-bold text-sm tracking-widest uppercase hover:bg-[#1E0C1D] transition-all shadow-md hover:shadow-lg active:scale-[0.99] cursor-pointer"
              >
                <span>Start Your Fitness Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreCoaching}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-transparent border border-[#2D132C] text-[#2D132C] font-bold text-sm tracking-widest uppercase hover:bg-[#F4EFEA] transition-colors cursor-pointer"
              >
                <span>Explore Coaching</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Micro value props - clean unboxed editorial list */}
            <div className="pt-4 border-t border-[#E8E1D7] grid grid-cols-3 gap-4 text-left">
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#151515] tracking-tight">1-on-1</p>
                <p className="text-xs text-[#3B3938] mt-0.5 uppercase tracking-wide">Denver Studio</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#151515] tracking-tight">Custom</p>
                <p className="text-xs text-[#3B3938] mt-0.5 uppercase tracking-wide">Programming</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl font-extrabold text-[#151515] tracking-tight">Weekly</p>
                <p className="text-xs text-[#3B3938] mt-0.5 uppercase tracking-wide">Accountability</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset (5 cols on desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* Filmic offset border accent */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#2D132C] to-[#E2CEC7] opacity-20 -rotate-1 hidden sm:block" />
              
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden bg-[#E8E1D7] border border-[#2D132C]/10 shadow-2xl">
                {!imageError ? (
                  <img
                    src={heroImageSrc}
                    alt="Kelly Fitness Strength Coaching in Denver Studio"
                    referrerPolicy="no-referrer"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center grayscale-[12%] contrast-[1.05] hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-[#2D132C] text-[#FAF7F2] text-center">
                    <Sparkles className="w-12 h-12 text-[#E2CEC7] mb-4" />
                    <h2 className="font-display text-3xl font-bold uppercase tracking-tight">Kelly Fitness</h2>
                    <p className="text-xs text-[#E2CEC7] mt-2 max-w-xs">Strength & Movement Conditioning — Denver, CO</p>
                  </div>
                )}

                {/* Subtle bottom caption card */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 bg-gradient-to-t from-[#151515]/90 via-[#151515]/60 to-transparent text-[#FAF7F2]">
                  <div className="flex items-center justify-between text-xs tracking-wider uppercase font-semibold">
                    <span>Denver Studio · 1-on-1 Session</span>
                    <span className="text-[#E2CEC7]">Coach Kelly</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
