const generateRandomNumber = require("../scripts/randomNoLogic");

test("generates random number in range", () => {
  const min = 1;
  const max = 10;
  const value = generateRandomNumber(min, max);
  expect(value).toBeGreaterThanOrEqual(min);
  expect(value).toBeLessThanOrEqual(max);
});
