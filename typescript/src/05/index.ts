import input from "./input";

function sum(arr: number[]) {
  return arr.reduce((acc, val) => acc + val, 0);
}

function main() {
  const [rawRules, pages] = input;

  const rules = rawRules.split("\n").map((line) => {
    return line.split("|").map((num) => parseInt(num));
  });

  const pageNumbers = pages.split("\n").map((line) => {
    return line.split(",").map((n) => +n);
  });

  const midPageNumbers = pageNumbers
    .filter((page) => {
      return rules.every((rule) => {
        return page.includes(rule[0]) && page.includes(rule[1])
          ? page.indexOf(rule[0]) <= page.indexOf(rule[1])
          : 1;
      });
    })
    .map((x) => x[x.length >> 1]);

  console.log("Mid Page Numbers Sum: ", sum(midPageNumbers)); //Part 1 answer

  const ruleSet = new Set(rawRules.split("\n"));
  let midSum = 0;

  // can't decide if I like for loops or maps more
  for (const line of pages.split("\n")) {
    let a = line.split(",");
    a.sort((a, b) => (ruleSet.has(a + "|" + b) ? -1 : 1));
    if (a.join(",") !== line) {
      midSum += +a[a.length >> 1];
    }
  }

  console.log("Mid Page Numbers Sum: ", midSum); //Part 2 answer
}

main();
