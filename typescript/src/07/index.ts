import input from "./input";

function isCorrectCalibration({ result, values }): boolean {
  for (let i = 0; i < 2 ** values.length; i++) {
    let acc = values[0];
    let currIndex = 1;
    const str = i.toString(2).padStart(values.length - 1, "0");

    for (const e of str) {
      if (e === "0") acc *= values[currIndex];
      else acc += values[currIndex];
      if (acc > result) break;
      currIndex++;
    }

    if (acc === result) return true;
  }
  return false;
}

function main() {
  let result = 0;
  for (const calibration of input) {
    if (isCorrectCalibration(calibration)) result += calibration.result;
  }
  console.log("Result: ", result);
}

main();
