export type CoachingType = 'in-person' | 'online' | 'personalized-plan';
export type FitnessGoal = 'strength-muscle' | 'sustainable-habits' | 'energy-vitality' | 'athletic-mobility';
export type ExperienceLevel = 'beginner' | 'returning' | 'consistent';

export interface ConsultationInquiry {
  fullName: string;
  email: string;
  phone?: string;
  coachingType: CoachingType;
  primaryGoal: FitnessGoal;
  experienceLevel: ExperienceLevel;
  trainingDaysPerWeek: number;
  message?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function validateConsultationInquiry(data: Partial<ConsultationInquiry>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'Please provide a valid email address.';
  }

  const validTypes: CoachingType[] = ['in-person', 'online', 'personalized-plan'];
  if (!data.coachingType || !validTypes.includes(data.coachingType)) {
    errors.coachingType = 'Please select a preferred coaching format.';
  }

  const validGoals: FitnessGoal[] = ['strength-muscle', 'sustainable-habits', 'energy-vitality', 'athletic-mobility'];
  if (!data.primaryGoal || !validGoals.includes(data.primaryGoal)) {
    errors.primaryGoal = 'Please choose a primary fitness objective.';
  }

  if (
    data.trainingDaysPerWeek === undefined ||
    data.trainingDaysPerWeek < 1 ||
    data.trainingDaysPerWeek > 6
  ) {
    errors.trainingDaysPerWeek = 'Target frequency should be between 1 and 6 days per week.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function estimateSessionSchedule(
  coachingType: CoachingType,
  targetDays: number
): { recommendedSessions: number; cadenceDescription: string } {
  if (coachingType === 'in-person') {
    const recommended = Math.min(Math.max(targetDays, 2), 4);
    return {
      recommendedSessions: recommended,
      cadenceDescription: `${recommended} weekly 1-on-1 private coaching sessions in Denver + tailored recovery structure.`,
    };
  }

  if (coachingType === 'online') {
    return {
      recommendedSessions: targetDays,
      cadenceDescription: `${targetDays} guided weekly programming sessions with ongoing form review & weekly video check-in.`,
    };
  }

  return {
    recommendedSessions: targetDays,
    cadenceDescription: `4-to-8 week progressive plan mapped to ${targetDays} weekly workouts with scheduled progress reviews.`,
  };
}
