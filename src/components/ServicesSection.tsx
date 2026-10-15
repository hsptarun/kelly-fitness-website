import React, { useState } from 'react';
import { ArrowUpRight, Check, Dumbbell, Globe, Target } from 'lucide-react';
import type { CoachingType } from '../utils/consultation';

interface ServicesSectionProps {
  onSelectService: (serviceKey: CoachingType) => void;
}

interface ServiceDetail {
  id: CoachingType;
  index: string;
  title: string;
  subtitle: string;
  locationTag: string;
  description: string;
  image: string;
  imageAlt: string;
  focusAreas: string[];
  deliverables: string[];
  bestFor: string;
}

const SERVICES: ServiceDetail[] = [
  {
    id: 'in-person',
    index: '01',
    title: 'In-Person Personal Training',
    subtitle: 'Private 1-on-1 Biomechanics & Strength in Denver',
    locationTag: 'Denver, Colorado · Studio Sessions',
    description:
      'Immersive, individual coaching sessions conducted in a private training environment. Every rep, set, and tempo is actively coached to refine your form, eliminate compensations, and build unshakeable confidence under load.',
    image: '/src/assets/images/kelly_coaching_client_1792059081972.jpg',
    imageAlt: 'Coach Kelly actively coaching a client on barbell squat form in Denver private gym',
    focusAreas: [
      'Comprehensive movement & mobility assessment',
      'Hands-on form feedback and neuromuscular cues',
      'Periodized strength and conditioning progression',
      'Post-workout recovery guidance & warm-up protocols',
    ],
    deliverables: [
      'Private 60-minute training sessions',
      'Real-time technique adjustments & safety',
      'Access to full private strength equipment',
      'Complementary off-day activity guidelines',
    ],
    bestFor: 'Individuals in the Denver metro area who thrive on in-person energy, direct technical supervision, and structured physical accountability.',
  },
  {
    id: 'online',
    index: '02',
    title: 'Online Fitness Coaching',
    subtitle: 'High-Touch Remote Programming & Accountability',
    locationTag: 'Anywhere · Fully Remote & Mobile',
    description:
      'The comprehensive guidance of a dedicated personal coach wherever you train. Custom workouts built for your specific gym setup or home equipment, paired with detailed video form reviews and weekly habit check-ins.',
    image: '/src/assets/images/online_coaching_1792055700236.jpg',
    imageAlt: 'Online fitness coaching digital dashboard and athlete gear',
    focusAreas: [
      'Customized monthly training blocks in mobile app',
      'Detailed asynchronous video form feedback',
      'Direct messaging for daily questions and adjustments',
      'Weekly habit, energy, and recovery analysis',
    ],
    deliverables: [
      'Full exercise video library with coaching notes',
      'Targeted weekly progress review calls',
      'Nutritional & lifestyle habit frameworks',
      'Adaptive workout modifications for travel',
    ],
    bestFor: 'Motivated individuals seeking expert programming, flexibility to train on their own schedule, and consistent high-touch guidance from anywhere.',
  },
  {
    id: 'personalized-plan',
    index: '03',
    title: 'Personalized Goal Planning',
    subtitle: 'Bespoke Training Blueprints & Roadmaps',
    locationTag: 'Custom Blueprint · Independent Execution',
    description:
      'A deeply tailored, self-directed training program engineered around your unique physiology, goals, and schedule. Includes a 1-on-1 strategy deep-dive, clear milestones, and progressive training phases to execute autonomously.',
    image: '/src/assets/images/personalized_planning_1792055699677.jpg',
    imageAlt: 'Fitness training journal and goal planner with measuring tools',
    focusAreas: [
      'In-depth intake questionnaire & goal synthesis',
      'Biomechanical consideration & injury history review',
      '8 to 12-week progressive training schedule',
      'Deload protocols & progressive overload benchmarks',
    ],
    deliverables: [
      'Custom digital training manual & schedule',
      '60-minute kickoff strategy & movement consultation',
      'Mid-cycle program check-in consultation',
      'Exercise substitution guide for different gyms',
    ],
    bestFor: 'Experienced or self-motivated lifters who want an expertly crafted, objective blueprint without requiring ongoing weekly check-ins.',
  },
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState<CoachingType>('in-person');
  const activeService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  return (
    <section id="coaching" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8E1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#7A2E69] mb-3">
            Coaching Services
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#151515] leading-[0.95] text-balance">
            Tailored Coaching Formats Built for Real Life.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#3B3938] leading-relaxed">
            Every fitness journey begins from a different starting line. Choose the coaching structure that best complements your location, lifestyle, and goals.
          </p>
        </div>

        {/* Interactive Segmented Selector (Functional Button Tabs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-1.5 bg-[#F4EFEA] border border-[#E8E1D7] mb-12">
          {SERVICES.map((service) => {
            const isSelected = service.id === activeTab;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`py-3.5 px-5 text-left transition-all duration-200 cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#2D132C] text-[#FAF7F2] shadow-sm'
                    : 'bg-transparent text-[#151515] hover:bg-[#FAF7F2]'
                }`}
              >
                <div>
                  <span className={`text-xs font-mono font-bold block mb-0.5 ${isSelected ? 'text-[#E2CEC7]' : 'text-[#7A2E69]'}`}>
                    {service.index}
                  </span>
                  <span className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight block">
                    {service.title}
                  </span>
                </div>
                {isSelected ? (
                  <Check className="w-4 h-4 text-[#E2CEC7] shrink-0" />
                ) : (
                  <ArrowUpRight className="w-4 h-4 text-[#3B3938]/40 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Service Detailed Showcase */}
        <div className="bg-[#F4EFEA] border border-[#E8E1D7] p-6 sm:p-8 lg:p-12 transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E8E1D7] border border-[#E8E1D7]">
                <img
                  src={activeService.image}
                  alt={activeService.imageAlt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#2D132C]/90 backdrop-blur-xs text-[#FAF7F2] text-xs font-mono font-semibold px-3 py-1 uppercase tracking-wider">
                  {activeService.locationTag}
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#7A2E69]">
                  {activeService.subtitle}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#151515] mt-1">
                  {activeService.title}
                </h3>
              </div>

              <p className="text-base text-[#3B3938] leading-relaxed">
                {activeService.description}
              </p>

              {/* Focus areas */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-[#151515]">
                  What's Included:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.focusAreas.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#3B3938]">
                      <span className="w-1.5 h-1.5 rounded-none bg-[#2D132C] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Best for */}
              <div className="p-4 bg-[#FAF7F2] border border-[#E8E1D7] text-xs text-[#3B3938] leading-relaxed">
                <strong className="text-[#151515] uppercase tracking-wider block mb-1">Ideal For:</strong>
                {activeService.bestFor}
              </div>

              {/* Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={() => onSelectService(activeService.id)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2D132C] text-[#FAF7F2] font-bold text-xs uppercase tracking-widest hover:bg-[#1E0C1D] transition-colors cursor-pointer"
                >
                  <span>Inquire About {activeService.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#3B3938]/70 text-center sm:text-left">
                  *Introductory Founder's Rate Available Below
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Kelly's Authentic Founder's Rate Callout (From Official Announcement) */}
        <div className="mt-12 bg-gradient-to-r from-[#2D132C] via-[#3D1B3C] to-[#1E0C1D] text-[#FAF7F2] border border-[#7A2E69]/40 p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E2CEC7] bg-[#FAF7F2]/10 px-2.5 py-1">
                  Limited-Time Introductory Special
                </span>
                <span className="text-xs text-[#E2CEC7]">
                  NASM Certification Celebration
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#FAF7F2]">
                Founder's Rate — First Month: $100
              </h3>
              <p className="text-sm text-[#E2CEC7]/90 leading-relaxed max-w-2xl">
                To celebrate earning my certification through NASM (National Academy of Sports Medicine), I'm offering a special introductory rate as I build my client base. Spots are strictly limited to ensure every client gets attentive, customized coaching.
              </p>

              {/* 4 Feature Items from Flyer */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs text-[#FAF7F2]/90">
                <div className="flex items-start gap-2">
                  <span className="text-[#E2CEC7] font-bold">✓</span>
                  <span><strong>Personalized Fitness Assessment</strong> — Current level & custom plan</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#E2CEC7] font-bold">✓</span>
                  <span><strong>1 Full Month of Training</strong> — Online or in-person format</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#E2CEC7] font-bold">✓</span>
                  <span><strong>Customized Nutrition Guide</strong> — Personalized macro breakdown</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#E2CEC7] font-bold">✓</span>
                  <span><strong>Body Composition Assessment</strong> — In-person progress tracking</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-4">
              <div className="text-center lg:text-right">
                <span className="text-xs uppercase tracking-widest text-[#E2CEC7]/80 block">Special Introductory Rate</span>
                <span className="font-display text-5xl sm:text-6xl font-black text-[#FAF7F2]">$100</span>
                <span className="text-xs text-[#E2CEC7] block">First Full Month</span>
              </div>
              <button
                onClick={() => onSelectService('in-person')}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#FAF7F2] text-[#2D132C] font-bold text-xs uppercase tracking-widest hover:bg-[#E2CEC7] transition-colors cursor-pointer text-center"
              >
                Claim Founder's Rate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
