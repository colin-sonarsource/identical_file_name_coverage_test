const {subtract } = require('./calculator');

test('subtract function', () => {
  expect(subtract(10, 5)).toBe(5);
});