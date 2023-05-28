// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO: 2 tests that should be true, 2 tests that should be false FOR EACH FUNCTION

// Testing `isPhoneNumber`
test('checks for valid phone number with dashes', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});

test('checks for valid phone number with parentheses', () => {
    expect(functions.isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('checks for invalid phone number (no dashes or parentheses)', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('checks for invalid phone number (too short)', () => {
    expect(functions.isPhoneNumber('123-456')).toBe(false);
});

// Testing `isEmail`
test('checks for valid email with gmail.com ending', () => {
    expect(functions.isEmail('email@gmail.com')).toBe(true);
});

test('checks for valid email with email.us ending', () => {
    expect(functions.isEmail('email@email.us')).toBe(true);
});

test('checks for invalid email without \'@\'', () => {
    expect(functions.isEmail('emailemail.com')).toBe(false);
});

test('checks for invalid email without \'.\' ending', () => {
    expect(functions.isEmail('email@email')).toBe(false);
});

// Testing `isStrongPassword`
test('checks for valid simple password', () => {
    expect(functions.isStrongPassword('password')).toBe(true);
});

test('checks for invalid password (starts with number)', () => {
    expect(functions.isStrongPassword('4password')).toBe(false);
});

test('checks for invalid password (contains special symbol)', () => {
    expect(functions.isStrongPassword('p@ssword')).toBe(false);
});

test('checks for invalid password (longer than 15 characters)', () => {
    expect(functions.isStrongPassword('passwordpasswordpassword')).toBe(false);
});

// Testing `isDate`
test('checks for valid date (form of XX/XX/YYYY)', () => {
    expect(functions.isDate('05/28/2023')).toBe(true);
});

test('checks for valid date (form of X/X/YYYY)', () => {
    expect(functions.isDate('5/2/2023')).toBe(true);
});

test('checks for invalid date (form of XX/XX/YY)', () => {
    expect(functions.isDate('05/28/23')).toBe(false);
});

test('checks for invalid date (no slashes)', () => {
    expect(functions.isDate('05282023')).toBe(false);
});

// Testing `isHexColor`
test('checks for valid hex code (3 characters)', () => {
    expect(functions.isHexColor('Ad5')).toBe(true);
});

test('checks for valid hex code (6 characters)', () => {
    expect(functions.isHexColor('Eb7Ca2')).toBe(true);
});

test('checks for invalid hex code (invalid symbol in 3 character code)', () => {
    expect(functions.isHexColor('Dh1')).toBe(false);
});

test('checks for invalid hex code (invalid length)', () => {
    expect(functions.isHexColor('Fb6Db7E')).toBe(false);
});