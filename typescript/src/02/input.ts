import * as fs from "fs";
import * as path from "path";

// split into report (per line) of levels (num)
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\n")
  .map((line) => line.split(/ +/).map(Number));

export default input;
