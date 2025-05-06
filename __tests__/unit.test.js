// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// isPhoneNumber tests
test('valid phone number: (123) 456-7890', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('valid phone number: 123-456-7890', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('invalid phone number: 1234567890', () => {
  expect(isPhoneNumber('1234567890')).toBe(false);
});

test('invalid phone number: abc-def-ghij', () => {
  expect(isPhoneNumber('abc-def-ghij')).toBe(false);
});


// isEmail tests
test('valid email: user@example.com', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('valid email: johndoe@domain.com', () => {
  expect(isEmail('johndoe@domain.com')).toBe(true);
});

test('invalid email: userexample.com', () => {
  expect(isEmail('userexample.com')).toBe(false);
});

test('invalid email: @missingusername.com', () => {
  expect(isEmail('@missingusername.com')).toBe(false);
});


// isStrongPassword tests
test('valid strong password: MyPass123', () => {
  expect(isStrongPassword('MyPass123')).toBe(true);
});

test('valid strong password: goodOne456', () => {
  expect(isStrongPassword('goodOne456')).toBe(true);
});

test('invalid password: 12345678', () => {
  expect(isStrongPassword('12345678')).toBe(false);
});

test('invalid password: ab', () => {
  expect(isStrongPassword('ab')).toBe(false);
});


// isDate tests
test('valid date: 01/01/2022', () => {
  expect(isDate('01/01/2022')).toBe(true);
});

test('valid date: 12/31/1999', () => {
  expect(isDate('12/31/1999')).toBe(true);
});

test('invalid date: 2022-01-01', () => {
  expect(isDate('2022-01-01')).toBe(false);
});

test('invalid date: 99/999/9999', () => {
  expect(isDate('99/999/9999')).toBe(false);
});


// isHexColor tests
test('valid hex: #FFF', () => {
  expect(isHexColor('#FFF')).toBe(true);
});

test('valid hex: #123abc', () => {
  expect(isHexColor('#123abc')).toBe(true);
});

test('invalid hex: #12G45Z', () => {
  expect(isHexColor('#12G45Z')).toBe(false);
});

test('invalid hex: #GGGGGG', () => {
  expect(isHexColor('#GGGGGG')).toBe(false);
});
