import React, { useState } from 'react';
import { Target, TrendingUp, HeartHandshake, CheckCircle2, XCircle, Clock, Check } from 'lucide-react';
import { estimateSessionSchedule, type CoachingType } from '../utils/consultation';

export const PhilosophySection: React.FC = () => {
  const [selectedType, setSelectedType] = useState<CoachingType>('in-person');
  const [days, setDays] = useState<number>(3);

  const scheduleInfo = estimateSessionSchedule(selectedType, days);

  return (
    <section id="philosophy" className="py-20 lg:py-28 bg-[#151515] text-[#FAF7F2] border-b border-[#2D132C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#E2CEC7] mb-3">
            Coaching Philosophy
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#FAF7F2] leading-[0.95] text-balance">
            Three Core Pillars. Zero Gimmicks.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#E2CEC7]/80 leading-relaxed">
            True physical transformation isn't born from extreme 30-day punishment. It is engineered through deliberate practice, tailored volume, and intelligent recovery.
          </p>
        </div>

        {/* Distinctive Asymmetric Principle Flow */}
        <div className="space-y-12 lg:space-y-16">
          {/* Principle 01: Training Tailored to Individual Goals */}
          <div className="border border-[#3B3938] bg-[#1E0C1D]/60 p-6 sm:p-8 lg:p-10 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <span className="font-display text-5xl sm:text-6xl font-black text-[#E2CEC7]/40 block leading-none">
                  01
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#FAF7F2] mt-3">
                  Tailored to Individual Goals
                </h3>
                <p className="text-sm text-[#E2CEC7]/80 mt-3 leading-relaxed">
                  Your anatomy, joint mobility, past injuries, and work week are distinct. No cookie-cutter PDF program can address your personal biomechanics.
                </p>
              </div>

              {/* Side-by-side contrast instead of a generic card */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-[#151515] border border-[#3B3938]/60 text-xs text-[#E2CEC7]/70 space-y-3">
                  <div className="flex items-center gap-2 text-rose-300 font-bold uppercase tracking-wider">
                    <XCircle className="w-4 h-4" />
                    <span>Generic Fitness Templates</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold shrink-0">✕</span>
                      <span>Forces every client into identical barbell squats and overhead presses regardless of limb length.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold shrink-0">✕</span>
                      <span>Assumes endless free hours with no adjustments for work stress or parenting.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold shrink-0">✕</span>
                      <span>Leaves you guessing on exercise substitutions and progressions.</span>
                    </li>
                  </ul>
                </div>

                <div className="p-5 bg-[#2D132C]/70 border border-[#7A2E69]/50 text-xs text-[#FAF7F2] space-y-3">
                  <div className="flex items-center gap-2 text-[#E2CEC7] font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-[#E2CEC7]" />
                    <span>Kelly Fitness Individualized Architecture</span>
                  </div>
                  <ul className="space-y-2 text-[#FAF7F2]/90">
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E2CEC7] shrink-0 mt-0.5" />
                      <span>Movement screen determines which squat, hinge, and press variations best suit your skeleton.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E2CEC7] shrink-0 mt-0.5" />
                      <span>Volume and intensity calibrated to your real recovery capacity and lifestyle demands.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#E2CEC7] shrink-0 mt-0.5" />
                      <span>Clear progressive overload benchmarks with active modifications when schedule fluctuates.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Principle 02: Consistent, Sustainable Progress */}
          <div className="border border-[#3B3938] bg-[#1E0C1D]/60 p-6 sm:p-8 lg:p-10 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <span className="font-display text-5xl sm:text-6xl font-black text-[#E2CEC7]/40 block leading-none">
                  02
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#FAF7F2] mt-3">
                  Consistent, Sustainable Progress
                </h3>
                <p className="text-sm text-[#E2CEC7]/80 mt-3 leading-relaxed">
                  We don't chase reckless soreness that leaves you unable to walk for three days. We build compounding weekly momentum that lasts for years.
                </p>
              </div>

              {/* Progress Compounding Phases */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-[#151515] border border-[#3B3938] space-y-2">
                  <span className="text-xs font-mono font-bold text-[#E2CEC7]">Weeks 1 – 4</span>
                  <h4 className="font-display text-lg font-bold uppercase text-[#FAF7F2]">Foundation & Form</h4>
                  <p className="text-xs text-[#E2CEC7]/70 leading-relaxed">
                    Nail baseline movement patterns, activate stabilizing musculature, and lock in consistent weekly attendance.
                  </p>
                </div>

                <div className="p-4 bg-[#151515] border border-[#3B3938] space-y-2">
                  <span className="text-xs font-mono font-bold text-[#E2CEC7]">Weeks 5 – 12</span>
                  <h4 className="font-display text-lg font-bold uppercase text-[#FAF7F2]">Load & Strength</h4>
                  <p className="text-xs text-[#E2CEC7]/70 leading-relaxed">
                    Systematic progressive overload. Increase barbell weights, kettlebell loads, and work capacity with crisp form.
                  </p>
                </div>

                <div className="p-4 bg-[#151515] border border-[#3B3938] space-y-2">
                  <span className="text-xs font-mono font-bold text-[#E2CEC7]">Months 4+</span>
                  <h4 className="font-display text-lg font-bold uppercase text-[#FAF7F2]">Autonomy & Power</h4>
                  <p className="text-xs text-[#E2CEC7]/70 leading-relaxed">
                    Deep athletic resilience, confident self-awareness in any weight room, and habitual lifestyle integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Principle 03: Supportive Coaching & Accountability */}
          <div className="border border-[#3B3938] bg-[#1E0C1D]/60 p-6 sm:p-8 lg:p-10 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4">
                <span className="font-display text-5xl sm:text-6xl font-black text-[#E2CEC7]/40 block leading-none">
                  03
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#FAF7F2] mt-3">
                  Supportive Coaching & Accountability
                </h3>
                <p className="text-sm text-[#E2CEC7]/80 mt-3 leading-relaxed">
                  Real change happens between sessions. Having a trusted coach who checks in, celebrates breakthroughs, and troubleshoots obstacles is the differentiator.
                </p>
              </div>

              {/* Interactive Schedule Estimator Box */}
              <div className="lg:col-span-8 p-5 bg-[#151515] border border-[#7A2E69]/40 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#3B3938] pb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E2CEC7] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#E2CEC7]" />
                    <span>Interactive Schedule & Cadence Estimator</span>
                  </span>
                  <span className="text-[11px] text-[#E2CEC7]/60">Select format & target frequency:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#E2CEC7]/80 mb-1.5">
                      Coaching Format
                    </label>
                    <div className="flex gap-2">
                      {(['in-person', 'online', 'personalized-plan'] as CoachingType[]).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`flex-1 py-1.5 px-2 text-center text-[11px] uppercase font-bold transition-colors cursor-pointer ${
                            selectedType === type
                              ? 'bg-[#2D132C] text-[#FAF7F2] border border-[#E2CEC7]'
                              : 'bg-[#1E0C1D] text-[#E2CEC7]/60 hover:text-[#FAF7F2] border border-[#3B3938]'
                          }`}
                        >
                          {type === 'in-person' ? 'In-Person' : type === 'online' ? 'Online' : 'Plan'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] uppercase tracking-wider text-[#E2CEC7]/80 mb-1.5">
                      <span>Days Per Week:</span>
                      <span className="font-mono font-bold text-[#FAF7F2]">{days} Days</span>
                    </div>
                    <div className="flex gap-2">
                      {[2, 3, 4, 5].map((d) => (
                        <button
                          key={d}
                          type="button"
                          onClick={() => setDays(d)}
                          className={`flex-1 py-1.5 text-center text-xs font-mono font-bold transition-colors cursor-pointer ${
                            days === d
                              ? 'bg-[#E2CEC7] text-[#151515]'
                              : 'bg-[#1E0C1D] text-[#E2CEC7]/60 hover:text-[#FAF7F2] border border-[#3B3938]'
                          }`}
                        >
                          {d}d
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-[#1E0C1D] border border-[#3B3938] text-xs text-[#FAF7F2]/90">
                  <span className="text-[11px] uppercase tracking-wider text-[#E2CEC7] font-bold block mb-1">
                    Recommended Cadence:
                  </span>
                  {scheduleInfo.cadenceDescription}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
