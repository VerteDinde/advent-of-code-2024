import input from "./input";

function isCorrectCalibration(
  // @ts-ignore
  { result, values },
  checkThirdOperator: boolean,
): boolean {
  const max = checkThirdOperator ? 3 ** values.length : 2 ** values.length;

  for (let i = 0; i < max; i++) {
    let acc = values[0];
    let currIndex = 1;
    const str = checkThirdOperator
      ? i.toString(3).padStart(values.length - 1, "0")
      : i.toString(2).padStart(values.length - 1, "0");

    for (const e of str) {
      if (e === "0") acc *= values[currIndex];
      else if (e === "1") acc += values[currIndex];
      else {
        const str = ["", acc, values[currIndex]].join("");
        acc = Number(str);
      }
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
    if (isCorrectCalibration(calibration, false)) result += calibration.result;
  }
  console.log("Result Pt 1: ", result); // Part 1 answer

  let resultpt2 = 0;
  for (const calibration of input) {
    if (isCorrectCalibration(calibration, true))
      resultpt2 += calibration.result;
  }
  console.log("Result Pt 2: ", resultpt2); // Part 1 answer
}

main();
