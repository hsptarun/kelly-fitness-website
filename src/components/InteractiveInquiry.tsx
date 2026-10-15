import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Instagram,
  Mail,
  MapPin,
  Sparkles,
  RotateCcw,
} from 'lucide-react';
import {
  validateConsultationInquiry,
  estimateSessionSchedule,
  type CoachingType,
  type FitnessGoal,
  type ExperienceLevel,
  type ConsultationInquiry,
} from '../utils/consultation';

interface InteractiveInquiryProps {
  initialService?: CoachingType;
}

export const InteractiveInquiry: React.FC<InteractiveInquiryProps> = ({
  initialService = 'in-person',
}) => {
  const [formData, setFormData] = useState<ConsultationInquiry>({
    fullName: '',
    email: '',
    phone: '',
    coachingType: initialService,
    primaryGoal: 'strength-muscle',
    experienceLevel: 'returning',
    trainingDaysPerWeek: 3,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<ConsultationInquiry | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateConsultationInquiry(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setSubmittedData({ ...formData });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      coachingType: initialService,
      primaryGoal: 'strength-muscle',
      experienceLevel: 'returning',
      trainingDaysPerWeek: 3,
      message: '',
    });
  };

  const schedulePreview = estimateSessionSchedule(formData.coachingType, formData.trainingDaysPerWeek);

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-[#E8E1D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline, Brand Context, Working Instagram */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#7A2E69]">
                Start Your Journey
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#151515] leading-[0.95] text-balance">
                Ready to Take the Next Step?
              </h2>
              <p className="text-base sm:text-lg text-[#3B3938] leading-relaxed">
                Whether you're in Denver looking for in-person studio training or seeking high-touch online guidance anywhere in the world, let's explore your goals together.
              </p>
            </div>

            {/* Direct Connect Information */}
            <div className="space-y-4 p-6 bg-[#F4EFEA] border border-[#E8E1D7]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#2D132C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#151515]">Location & Studio</p>
                  <p className="text-xs text-[#3B3938] mt-0.5">Denver, Colorado, USA · Private Coaching Facility</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#E8E1D7]">
                <Mail className="w-5 h-5 text-[#2D132C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#151515]">Consultations</p>
                  <p className="text-xs text-[#3B3938] mt-0.5">Accepting client inquiries for in-person & remote roster</p>
                </div>
              </div>
            </div>

            {/* Working Instagram Link Card */}
            <a
              href="https://www.instagram.com/kellydoesfitness/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 bg-[#2D132C] text-[#FAF7F2] border border-[#2D132C] hover:bg-[#1E0C1D] transition-all shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#FAF7F2]/10 flex items-center justify-center text-[#FAF7F2]">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#E2CEC7] block">Official Channel</span>
                    <span className="font-display text-xl font-bold uppercase tracking-tight text-[#FAF7F2]">
                      @kellydoesfitness
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#E2CEC7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <p className="mt-3 text-xs text-[#E2CEC7]/80 leading-relaxed">
                Follow Coach Kelly on Instagram for training techniques, daily nutrition ideas, and private coaching announcements.
              </p>
            </a>

            {/* Speculative Prototype Transparency Notice */}
            <div className="p-4 bg-[#F4EFEA] border border-[#E8E1D7] text-[11px] text-[#3B3938]/80 leading-relaxed">
              <strong className="text-[#151515] uppercase tracking-wider block mb-1">
                Portfolio Demonstration Note:
              </strong>
              This website is an independent speculative concept created for presentation. Submitting the inquiry form simulates the client intake assessment flow without sending emails to third parties.
            </div>
          </div>

          {/* Right Column: Interactive Consultation Intake Prototype Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F2] border border-[#2D132C]/20 p-6 sm:p-8 lg:p-10 shadow-sm relative">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#151515]">
                      Coaching Inquiry & Assessment
                    </h3>
                    <p className="text-xs text-[#3B3938] mt-1">
                      Fill out your training preferences to estimate your schedule and initiate consultation.
                    </p>
                  </div>

                  {/* Step 1: Format Selector */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#151515]">
                        1. Preferred Coaching Format *
                      </label>
                      <span className="text-[10px] font-mono font-bold text-[#7A2E69] bg-[#F4EFEA] px-2 py-0.5 border border-[#E8E1D7]">
                        $100 INTRO RATE AVAILABLE
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {[
                        { id: 'in-person', label: 'In-Person (Denver)' },
                        { id: 'online', label: 'Online (Remote)' },
                        { id: 'personalized-plan', label: 'Goal Planning' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, coachingType: item.id as CoachingType })
                          }
                          className={`py-3 px-3 text-center text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer border ${
                            formData.coachingType === item.id
                              ? 'bg-[#2D132C] text-[#FAF7F2] border-[#2D132C]'
                              : 'bg-[#F4EFEA] text-[#151515] border-[#E8E1D7] hover:bg-[#FAF7F2]'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                    {errors.coachingType && (
                      <p className="text-rose-600 text-xs mt-1.5">{errors.coachingType}</p>
                    )}
                  </div>

                  {/* Step 2: Primary Goal */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-2">
                      2. Primary Fitness Focus *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        { id: 'strength-muscle', label: 'Strength & Muscle Tone' },
                        { id: 'sustainable-habits', label: 'Sustainable Lifestyle & Habits' },
                        { id: 'energy-vitality', label: 'Energy, Conditioning & Health' },
                        { id: 'athletic-mobility', label: 'Joint Mobility & Pain-Free Form' },
                      ].map((goal) => (
                        <button
                          key={goal.id}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, primaryGoal: goal.id as FitnessGoal })
                          }
                          className={`py-2.5 px-3 text-left text-xs font-medium transition-colors cursor-pointer border ${
                            formData.primaryGoal === goal.id
                              ? 'bg-[#2D132C] text-[#FAF7F2] border-[#2D132C]'
                              : 'bg-[#F4EFEA] text-[#3B3938] border-[#E8E1D7] hover:bg-[#FAF7F2]'
                          }`}
                        >
                          {goal.label}
                        </button>
                      ))}
                    </div>
                    {errors.primaryGoal && (
                      <p className="text-rose-600 text-xs mt-1.5">{errors.primaryGoal}</p>
                    )}
                  </div>

                  {/* Step 3: Target Frequency & Dynamic Cadence Calculation */}
                  <div className="p-4 bg-[#F4EFEA] border border-[#E8E1D7] space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold uppercase tracking-wider text-[#151515]">
                        3. Target Weekly Frequency:
                      </span>
                      <span className="font-mono font-bold text-[#2D132C] text-sm">
                        {formData.trainingDaysPerWeek} Days / Week
                      </span>
                    </div>

                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, trainingDaysPerWeek: num })
                          }
                          className={`flex-1 py-2 text-center text-xs font-mono font-bold transition-colors cursor-pointer border ${
                            formData.trainingDaysPerWeek === num
                              ? 'bg-[#2D132C] text-[#FAF7F2] border-[#2D132C]'
                              : 'bg-[#FAF7F2] text-[#3B3938] border-[#E8E1D7] hover:bg-white'
                          }`}
                        >
                          {num}d
                        </button>
                      ))}
                    </div>

                    <p className="text-[11px] text-[#3B3938] pt-1 border-t border-[#E8E1D7]">
                      <strong className="text-[#151515]">Estimated Cadence:</strong>{' '}
                      {schedulePreview.cadenceDescription}
                    </p>
                  </div>

                  {/* Step 4: Contact Information */}
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E8E1D7] text-sm text-[#151515] focus:outline-none focus:border-[#2D132C] transition-colors"
                      />
                      {errors.fullName && (
                        <p className="text-rose-600 text-xs mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sarah@example.com"
                          className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E8E1D7] text-sm text-[#151515] focus:outline-none focus:border-[#2D132C] transition-colors"
                        />
                        {errors.email && (
                          <p className="text-rose-600 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1.5">
                          Phone Number (Optional)
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="303-555-0123"
                          className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E8E1D7] text-sm text-[#151515] focus:outline-none focus:border-[#2D132C] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#151515] mb-1.5">
                        Tell Coach Kelly about your fitness goals & history
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your previous training experience, any injury history, or what you hope to accomplish..."
                        className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#E8E1D7] text-sm text-[#151515] focus:outline-none focus:border-[#2D132C] transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submission CTA */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#2D132C] text-[#FAF7F2] font-bold text-xs uppercase tracking-widest hover:bg-[#1E0C1D] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <span>Submit Consultation Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-[#3B3938]/70">
                    *Consultation assessment is completely complimentary and confidential.
                  </p>
                </form>
              ) : (
                /* Interactive Success Confirmation Screen */
                <div className="py-6 space-y-6 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 mx-auto bg-[#F4EFEA] border border-[#2D132C] flex items-center justify-center text-[#2D132C]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7A2E69]">
                      Inquiry Logged (Prototype Mode)
                    </span>
                    <h3 className="font-display text-3xl font-extrabold uppercase tracking-tight text-[#151515] mt-1">
                      Thank You, {submittedData?.fullName}!
                    </h3>
                    <p className="text-sm text-[#3B3938] mt-2 max-w-md mx-auto">
                      Your consultation intake profile has been configured with the parameters below:
                    </p>
                  </div>

                  {/* Summary of submitted profile */}
                  <div className="p-4 bg-[#F4EFEA] border border-[#E8E1D7] text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between border-b border-[#E8E1D7] pb-1.5">
                      <span className="text-[#3B3938]">Format:</span>
                      <span className="font-bold uppercase text-[#151515]">{submittedData?.coachingType}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E8E1D7] pb-1.5">
                      <span className="text-[#3B3938]">Goal:</span>
                      <span className="font-bold uppercase text-[#151515]">{submittedData?.primaryGoal}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E8E1D7] pb-1.5">
                      <span className="text-[#3B3938]">Frequency:</span>
                      <span className="font-bold text-[#151515]">{submittedData?.trainingDaysPerWeek} Days/Week</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#3B3938]">Contact:</span>
                      <span className="font-bold text-[#151515]">{submittedData?.email}</span>
                    </div>
                  </div>

                  {/* Next Step: Instagram Connection */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="https://www.instagram.com/kellydoesfitness/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2D132C] text-[#FAF7F2] font-bold text-xs uppercase tracking-widest hover:bg-[#1E0C1D] transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>Message Kelly on Instagram</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#E8E1D7] bg-[#FAF7F2] text-[#3B3938] font-bold text-xs uppercase tracking-widest hover:bg-[#F4EFEA] transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Reset Form</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
