const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf8").trim();
const reports = input
  .split(/\r?\n/)
  .map((line) => line.trim().split(/\s+/).map(Number));

function isSafe(levels) {
  const diffs = [];
  for (let i = 0; i < levels.length - 1; i++)
    diffs.push(levels[i + 1] - levels[i]);

  const inc = diffs.every((d) => d >= 1 && d <= 3);
  const dec = diffs.every((d) => d <= -1 && d >= -3);
  return inc || dec;
}

let safeCount = 0;
for (const r of reports) {
  if (isSafe(r)) safeCount++;
}

console.log(safeCount);
