const { open } = require("node:fs/promises");

function recoverCalibrationValue(valueString) {
  let firstDigit;
  let lastDigit;
  for (const item of valueString) {
    const digit = Number(item);
    if (!isNaN(item)) {
      if (!firstDigit) {
        firstDigit = digit;
      } else {
        lastDigit = digit;
      }
    }
  }
  lastDigit = lastDigit ? lastDigit : firstDigit;
  return firstDigit * 10 + lastDigit;
}

async function readAndRecoverValues(valuesPath) {
  const file = await open(valuesPath);
  const recoveredValues = [];
  for await (const line of file.readLines()) {
    recoveredValues.push(recoverCalibrationValue(line));
  }
  return recoveredValues.reduce((acc, value) => acc + value, 0);
}

module.exports = { recoverCalibrationValue, readAndRecoverValues };
