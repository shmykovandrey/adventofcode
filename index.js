///2015_08
mochData = require("./mochData");
mochData = require("./mochDataTest");
const fs = require("fs");

//PART1

function readMoch(mochData) {
  try {
    const data = fs.readFileSync("input.txt", "utf8");
    // console.log(data.split("\n"));
    return data.split("\n");
  } catch (err) {
    console.error(err);
  }
}

let allLines = readMoch(mochData);

let allSymbols = allLines.reduce((acc, elem) => (acc += elem.length), 0);

console.log("all symbols " + allSymbols);
let fullLines = allLines.map((elem) => elem);

allLines = allLines.map((elem) => elem.replace(/\\x[a-f|0-9][a-f|0-9]/g, "1"));

allLines = allLines.map((elem) => elem.replace(/\\./g, "1"));

allLines = allLines.map((elem) => elem.replace(/"/g, ""));

let allJSSymbol = allLines.reduce((acc, elem) => (acc += elem.length), 0);

for (let i = 0; i < allLines.length - 1; i++) {
  console.log(
    fullLines[i],
    fullLines[i].length,
    allLines[i],
    allLines[i].length
  );
}
console.log(allJSSymbol);

console.log(allSymbols - allJSSymbol);
