import input from "./input";

function main() {
  let left: number[] = [];
  let right: number[] = [];

  for (const line of input.filter(Boolean)) {
    left.push(line[0]);
    right.push(line[1]);
  }
  left.sort((a, b) => a - b);
  right.sort((a, b) => a - b);

  let total = 0;
  for (let i = 0; i < left.length; i++) {
    total += Math.abs(left[i] - right[i]);
  }
  console.log("Total #1", total); // Part 1 answer

  let sim = 0;
  for (let i = 0; i < left.length; i++) {
    sim += left[i] * right.filter((x) => x === left[i]).length;
  }
  console.log("Total #2", sim); // Part 2 answer
}

main();
