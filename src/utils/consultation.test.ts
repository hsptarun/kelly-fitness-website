import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateEmail,
  validateConsultationInquiry,
  estimateSessionSchedule,
  type ConsultationInquiry,
} from './consultation.ts';

test('validateEmail correctly accepts valid email addresses', () => {
  assert.equal(validateEmail('kelly@example.com'), true);
  assert.equal(validateEmail('client.athlete+denver@gmail.com'), true);
});

test('validateEmail correctly rejects invalid email addresses', () => {
  assert.equal(validateEmail(''), false);
  assert.equal(validateEmail('plainaddress'), false);
  assert.equal(validateEmail('@missingusername.com'), false);
  assert.equal(validateEmail('user@domain'), false);
});

test('validateConsultationInquiry validates complete valid inquiry', () => {
  const validData: ConsultationInquiry = {
    fullName: 'Alex Morgan',
    email: 'alex@example.com',
    phone: '303-555-0199',
    coachingType: 'in-person',
    primaryGoal: 'strength-muscle',
    experienceLevel: 'returning',
    trainingDaysPerWeek: 3,
    message: 'Looking to build compound strength with proper technique.',
  };

  const result = validateConsultationInquiry(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('validateConsultationInquiry flags missing required fields', () => {
  const incompleteData: Partial<ConsultationInquiry> = {
    fullName: 'A',
    email: 'bad-email',
  };

  const result = validateConsultationInquiry(incompleteData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.coachingType);
  assert.ok(result.errors.primaryGoal);
  assert.ok(result.errors.trainingDaysPerWeek);
});

test('estimateSessionSchedule returns appropriate in-person and online cadences', () => {
  const inPerson = estimateSessionSchedule('in-person', 3);
  assert.equal(inPerson.recommendedSessions, 3);
  assert.ok(inPerson.cadenceDescription.includes('Denver'));

  const online = estimateSessionSchedule('online', 4);
  assert.equal(online.recommendedSessions, 4);
  assert.ok(online.cadenceDescription.includes('weekly video check-in'));
});
