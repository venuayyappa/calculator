function generateRandomNumber(min, max) {
  if (isNaN(min) || isNaN(max)) return null;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = generateRandomNumber;
