import input from "./input";

const XMAS = "XMAS";
const ROWS = input.length;
const COLUMNS = input[0].length;
const DIRECTIONS = [
  [-1, -1], // NW
  [-1, 0], // N
  [-1, 1], // NE
  [0, -1], // W
  [0, 1], // E
  [1, -1], // SW
  [1, 0], // S
  [1, 1], // SE
];

function findStrand(r: number, c: number, dr: number, dc: number): boolean {
  for (let i = 0; i < XMAS.length; i++) {
    const dx = r + i * dr;
    const dy = c + i * dc;
    if (
      dx < 0 ||
      dy < 0 ||
      dx >= ROWS ||
      dy >= COLUMNS ||
      input[dx][dy] !== XMAS[i]
    ) {
      return false;
    }
  }
  return true;
}

function main() {
  let total = 0;
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLUMNS; c++) {
      for (const [dr, dc] of DIRECTIONS) {
        if (findStrand(r, c, dr, dc)) total++;
      }
    }
  }
  console.log("Total:", total); // Part 1 answer

  let xMases = 0;
  for (let r = 1; r < ROWS - 1; r++) {
    for (let c = 1; c < COLUMNS - 1; c++) {
      if (input[r][c] === "A") {
        const mmss =
          (input[r - 1][c - 1] === "M" && input[r + 1][c + 1] === "S") ||
          (input[r - 1][c - 1] === "S" && input[r + 1][c + 1] === "M");
        const ssmm =
          (input[r - 1][c + 1] === "M" && input[r + 1][c - 1] === "S") ||
          (input[r - 1][c + 1] === "S" && input[r + 1][c - 1] === "M");
        if (mmss && ssmm) xMases++;
      }
    }
  }

  console.log("X-Mases: ", xMases); // Part 2 answer
}

main();
