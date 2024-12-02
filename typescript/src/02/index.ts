import input from "./input";

function isSafe(report: number[]): boolean {
  const levelsDiff = [];
  for (let i = 0; i < report.length - 1; i++) {
    levelsDiff.push(report[i + 1] - report[i]);
  }

  // Safe criteria:
  // 1. All increasing or decreasing
  // 2. Adjacent levels differ by (x > 0 && x < 4)
  const isSafeIncrease = levelsDiff.every((x) => x > 0 && x < 4);
  const isSafeDecrease = levelsDiff.every((x) => x < 0 && x > -4);
  return isSafeIncrease || isSafeDecrease;
}

function isDampened(report: number[]): boolean {
  for (let i = 0; i < report.length; i++) {
    // "Dampened" criteria:
    // Remove 1 level from report makes it safe
    const levelsMinusOne = [...report.slice(0, i), ...report.slice(i + 1)];
    if (isSafe(levelsMinusOne)) return true;
  }

  return false;
}

function main() {
  let safe = 0;

  for (const report of input) {
    if (isSafe(report)) safe++;
  }

  console.log("Safe: ", safe); // Part 1 answer

  let dampened = 0;
  for (const report of input) {
    if (isDampened(report)) dampened++;
  }
  console.log("Dampened: ", dampened); // Part 2 answer
}

main();
