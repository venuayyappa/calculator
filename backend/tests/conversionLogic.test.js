const convertLength = require("../scripts/CconversionLogic");

test("converts meters to centimeters", () => {
  expect(convertLength(1, "m", "cm")).toBe(100);
});

test("converts kilometers to meters", () => {
  expect(convertLength(1, "km", "m")).toBe(1000);
});

test("returns null for invalid unit", () => {
  expect(convertLength(1, "m", "invalid")).toBeNull();
});
