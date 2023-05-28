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
