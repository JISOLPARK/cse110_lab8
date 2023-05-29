// unit.test.js
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('phone number test 1', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
  });
test('phone number test 2', () => {
expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
});
test('phone number test 3', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});
test('phone number test 4', () => {
    expect(functions.isPhoneNumber('12345678901')).toBe(false);
});
test('emaiil test 1', () => {
    expect(functions.isEmail('hello@email.com')).toBe(true);
});
test('emaiil test 2', () => {
    expect(functions.isEmail('test@gmail.com')).toBe(true);
});
test('emaiil test 3', () => {
    expect(functions.isEmail('testgmail.com')).toBe(false);
});
test('emaiil test 4', () => {
    expect(functions.isEmail('testgmailcom')).toBe(false);
});
test('password test 1', () => {
    expect(functions.isStrongPassword('aB123456789')).toBe(true);
});
test('password test 2', () => {
    expect(functions.isStrongPassword('SKka_bce1234')).toBe(true);
});
test('password test 3', () => {
    expect(functions.isStrongPassword('')).toBe(false);
});
test('password test 4', () => {
    expect(functions.isStrongPassword('12345')).toBe(false);
});
test('date test 1', () => {
    expect(functions.isDate('1/31/2002')).toBe(true);
});
test('date test 2', () => {
    expect(functions.isDate('01/31/2002')).toBe(true);
});
test('date test 3', () => {
    expect(functions.isDate('01-31-2002')).toBe(false);
});
test('date test 4', () => {
    expect(functions.isDate('01312002')).toBe(false);
});
test('hexCode test 1', () => {
    expect(functions.isHexColor('#FFFFFF')).toBe(true);
});
test('hexCode test 2', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});
test('hexCode test 3', () => {
    expect(functions.isHexColor('')).toBe(false);
});
test('hexCode test 4', () => {
    expect(functions.isHexColor('#yellow')).toBe(false);
});