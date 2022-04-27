import { Divide } from './divide.js';

test('Divide', () => {
  expect(Divide(10, 2)).toBe(5);
  expect(Divide(10, 0)).toBe(10);
});
