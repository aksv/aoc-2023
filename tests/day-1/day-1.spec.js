const { resolve } = require("path");
const {
  recoverCalibrationValue,
  readAndRecoverValues,
} = require("../../solutions/day-1/solution-day-1");

describe("Day 1 solution tests", () => {
  let inputPath;
  beforeAll(() => {
    inputPath = resolve("./input.txt");
    console.log(inputPath);
  });
  describe("recover calibration value utility function", () => {
    it("digits at start and end", () => {
      const corruptedValue = "1abc2";
      expect(recoverCalibrationValue(corruptedValue)).toBe(12);
    });
    it("digits not at start and end", () => {
      const corruptedValue = "pqr3stu8vwx";
      expect(recoverCalibrationValue(corruptedValue)).toBe(38);
    });
    it("more than two digits in string", () => {
      const corruptedValue = "a1b2c3d4e5f";
      expect(recoverCalibrationValue(corruptedValue)).toBe(15);
    });
    it("one digit in string", () => {
      const corruptedValue = "treb7uchet";
      expect(recoverCalibrationValue(corruptedValue)).toBe(77);
    });
  });

  describe("recover values sum from file", () => {
    it("test", async () => {
      const v = await readAndRecoverValues(inputPath);
      expect(v).toBe(55108);
    });
  });
});
