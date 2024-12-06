import * as fs from "fs";
import * as path from "path";

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .trim()
  .split("\n\n");

export default input;
