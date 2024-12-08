import * as fs from "fs";
import * as path from "path";

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .trim()
  .split("\n")
  .map((line) => {
    const [answer, nums] = line.split(":").map((str) => str.trim());

    return {
      result: Number(answer),
      values: nums.split(" ").map(Number),
    };
  });

export default input;
