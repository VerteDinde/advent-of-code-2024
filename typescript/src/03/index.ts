import input from "./input";

function sanitizeInput(input: string, enable: boolean) {
  let output = input;
  // Lol this sucks, can probably use a Regex here?
  if (enable) {
    output = input
      .split("do()")
      .map((line) => line.split("don't()")[0])
      .join("");
  }
  return output.match(/mul\(\d+,\d+\)/g);
}

function multiplyMuls(muls: RegExpMatchArray): number {
  let total = 0;
  for (const mul of muls) {
    if (mul) {
      const values = mul.match(/\d+/g)!.map(Number);
      total += values[0] * values[1];
    }
  }
  return total;
}

function main() {
  // Looking for mul(x,y)
  const uncorrupted = sanitizeInput(input, false);
  const sum = multiplyMuls(uncorrupted!);
  console.log("Sum: ", sum); // Part 1 answer

  // Looking for do() and don't(), only multiply if do() is enabled
  let enabled = sanitizeInput(input, true);
  const enabledSum = multiplyMuls(enabled!);
  console.log("Enabled: ", enabledSum); // Part 2 answer
}

main();
