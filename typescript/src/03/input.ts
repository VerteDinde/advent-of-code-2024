import * as fs from "fs";
import * as path from "path";

const input = JSON.stringify(
  fs.readFileSync(path.join(__dirname, "input.txt"), "utf8"),
);

export default input;
