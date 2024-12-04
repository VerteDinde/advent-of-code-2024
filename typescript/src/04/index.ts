import input from "./input";

const XMAS = "XMAS";
const rows = input.length;
const columns = input[0].length;

function dfs(r: number, c: number, i: number) {
  if (XMAS.length === i) return true;
  if (r >= rows || r < 0 || c < 0 || c >= columns || input[r][c] !== XMAS[i])
    return false;

  // @ts-ignore
  input[r][c] = "#";
  if (
    dfs(r + 1, c, i + 1) || // E
    dfs(r + 1, c + 1, i + 1) || // NE
    dfs(r + 1, c - 1, i + 1) || // NE
    dfs(r - 1, c, i + 1) || // W
    dfs(r - 1, c + 1, i + 1) || // NW
    dfs(r - 1, c - 1, i + 1) || // SW
    dfs(r, c + 1, i + 1) || // N
    dfs(r, c - 1, i + 1) // S
  ) {
    input[r][c] = XMAS[i];
    return true;
  }

  input[r][c] = XMAS[i];
  return false;
}

function main() {
  console.log(input);
  let total = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (input[r][c] === XMAS[0] && dfs(r, c, 0)) total++;
    }
  }
  console.log("Input: ", input);
  console.log("Total: ", total);
}

main();
