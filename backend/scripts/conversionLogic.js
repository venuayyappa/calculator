function convertLength(value, fromUnit, toUnit) {
  const conversionRates = {
    m: 1,
    cm: 100,
    mm: 1000,
    km: 0.001,
  };

  if (!(fromUnit in conversionRates) || !(toUnit in conversionRates)) return null;

  const valueInMeters = value / conversionRates[fromUnit];
  const result = valueInMeters * conversionRates[toUnit];

  return result;
}

module.exports = convertLength;
