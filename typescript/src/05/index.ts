import input from "./input";

function sum(arr: number[]) {
  return arr.reduce((acc, val) => acc + val, 0);
}

function main() {
  const [rawRules, pages] = input;

  let rules = rawRules.split("\n").map((line) => {
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
}

main();
