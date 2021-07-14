import { sum, capitalize, reverseString, calculator } from './index';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('capitalize only the first letter', () => {
  expect(capitalize('beonARd')).toBe('Beonard');
})

test('reverse a string', () => {
  expect(reverseString('longitudinal')).toBe('lanidutignol');
})

// test('calculator: add 13 + 4 to equal 17', () => {
//   expect(calculator(13, 4, 'add')).toBe(17);
// })

