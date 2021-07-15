import { capitalize, reverseString, calculator, caesarCipher, analyze } from './index';

test('capitalize only the first letter', () => {
  expect(capitalize('beonARd')).toBe('Beonard');
});

test('reverse a string', () => {
  expect(reverseString('longitudinal')).toBe('lanidutignol');
});

test('calculator', () => {
  expect(calculator.add(13, 4)).toBe(17);
  expect(calculator.substract(35, 12)).toBe(23);
  expect(calculator.divide(80, 40)).toBe(2);
  expect(calculator.multiply(5, 3)).toBe(15);
})

test('return the correctly encrypted string', () => {
  expect(caesarCipher("What's up?", 3)).toBe("Zkdw'v xs?");
})

test('return an object with the right property values', () => {
  expect(analyze([1,8,3,4,2,6])).toEqual({
    average: 4,
    length: 6,
    min: 1,
    max: 8
  });
});