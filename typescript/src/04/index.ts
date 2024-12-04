import input from "./input";

const XMAS = "XMAS";

function dfs(r: number, c: number, i: number) {
  if (XMAS.length === i) return true;
  if (
    r >= input.length ||
    r < 0 ||
    c < 0 ||
    c >= input[0].length ||
    input[r][c] !== XMAS[i]
  )
    return false;

  // @ts-ignore
  input[r][c] = "#";
  if (
    dfs(r + 1, c, i + 1) ||
    dfs(r - 1, c, i + 1) ||
    dfs(r, c + 1, i + 1) ||
    dfs(r, c - 1, i + 1)
  )
    return true;
}

function main() {
  console.log(input);
  let total = 0;

  for (let r = 0; r < input.length; r++) {
    for (let c = 0; c < input[0].length; c++) {
      if (input[r][c] === XMAS[0] && dfs(r, c, 0)) total++;
    }
  }
  console.log("Total: ", total);
}

main();
