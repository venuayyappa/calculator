const generateRandomNumber = require("./randomNoLogic");

const rngNormalInput1 = document.querySelector("#rng-normal-input-1");
const rngNormalInput2 = document.querySelector("#rng-normal-input-2");
const rngNormalbuttonGen = document.querySelector("#rng-normal-generate");
const rngNormalbuttonClr = document.querySelector("#rng-normal-clear");
const rngNormalResult = document.querySelector("#normal-result");
const rngNormalResultTitle = document.querySelector("#normal-result-title");

rngNormalbuttonGen.addEventListener("click", () => {
  const min = parseInt(rngNormalInput1.value);
  const max = parseInt(rngNormalInput2.value);
  const result = generateRandomNumber(min, max);

  if (result === null) {
    rngNormalResultTitle.innerText = "Invalid input!";
    rngNormalResult.innerText = "";
  } else {
    rngNormalResultTitle.innerText = "Generated Number";
    rngNormalResult.innerText = result;
  }
});

rngNormalbuttonClr.addEventListener("click", () => {
  rngNormalInput1.value = "";
  rngNormalInput2.value = "";
  rngNormalResultTitle.innerText = "";
  rngNormalResult.innerText = "";
});
