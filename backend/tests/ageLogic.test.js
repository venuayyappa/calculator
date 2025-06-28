const calculateAgeDetails = require("../scripts/ageLogic");

test("calculates age correctly", () => {
  const date1 = new Date("2000-01-01");
  const date2 = new Date("2025-01-01");
  const result = calculateAgeDetails(date1, date2);

  expect(result.years).toBe(25);
  expect(result.totalMonths).toBe(300);
  expect(result.days).toBeGreaterThan(9000);
});

test("returns null when start date is after end date", () => {
  const date1 = new Date("2025-01-01");
  const date2 = new Date("2000-01-01");
  const result = calculateAgeDetails(date1, date2);

  expect(result).toBe(null); // If you return null for invalid range
});
