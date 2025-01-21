const { add, subtract } = require('./calculator');

test('add function', () => {
  expect(add(1, 2)).toBe(3);
});

test('subtract function', () => {
  expect(subtract(10, 5)).toBe(5);
});