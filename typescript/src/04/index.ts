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
  console.log("Total:", total);
}

main();
