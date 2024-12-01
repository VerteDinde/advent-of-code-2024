import * as fs from "fs";
import * as path from "path";

// split two lists into sets of ids
const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .split("\n")
  .map((line) => line.split(/ +/).map(Number));

export default input;
