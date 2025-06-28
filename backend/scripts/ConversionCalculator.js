const convertLength = require("./conversionLogic");

const cLenghtLeft = document.querySelector("#lenghtLeft");
const cLenghtRight = document.querySelector("#lenghtRight");
const cLenghtInputFrom = document.querySelector("#lenghtInputFrom");
const cLenghtResult = document.querySelector("#conversion-result");
const cLenghtResultTitle = document.querySelector("#conversion-result-title");

const lengthCalculate = () => {
  const value = parseFloat(cLenghtInputFrom.value);
  const fromUnit = cLenghtLeft.value;
  const toUnit = cLenghtRight.value;

  const converted = convertLength(value, fromUnit, toUnit);
  if (converted === null) {
    cLenghtResultTitle.innerText = "Invalid input";
    cLenghtResult.innerText = "";
  } else {
    cLenghtResultTitle.innerText = "Result";
    cLenghtResult.innerText = `${converted} ${toUnit}`;
  }
};

cLenghtLeft.addEventListener("change", lengthCalculate);
cLenghtRight.addEventListener("change", lengthCalculate);
cLenghtInputFrom.addEventListener("input", lengthCalculate);
