import input from "./input";

function uncorruptInput(input: string) {
  return input.match(/mul\(\d+,\d+\)/g);
}

function sanitizeEnabledInput(input: string) {
  // Lol this sucks, can probably use a Regex here?
  const sanitized = input
    .split("do()")
    .map((line) => line.split("don't()")[0])
    .join("");
  return uncorruptInput(sanitized);
}

function multiplyMuls(muls: RegExpMatchArray): number {
  let total = 0;
  for (const mul of muls) {
    if (mul) {
      const values = mul.match(/\d+/g)!.map(Number);
      total += values[0] * values[1];
    }
  }
  return total; // Part 1 answer
}

function main() {
  // Looking for mul(x,y)
  const uncorrupted = uncorruptInput(input);
  const sum = multiplyMuls(uncorrupted!);
  console.log("Sum: ", sum);

  // Looking for do() and don't(), only multiply if do() is enabled
  let sanitized = sanitizeEnabledInput(input);
  const enabledSum = multiplyMuls(sanitized!);
  console.log("Enabled: ", enabledSum); // Part 2 answer
}

main();
