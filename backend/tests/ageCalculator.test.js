const calculateAgeDetails = require('../scripts/ageLogic');

test('calculates correct age', () => {
  const result = calculateAgeDetails(new Date('2000-01-01'), new Date('2025-01-01'));
  expect(result.years).toBe(25);
  expect(result.totalMonths).toBe(300);
  expect(result.days).toBeGreaterThan(9000);
});
