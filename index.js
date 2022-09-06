const string = require("./mochData");

let dataArr = string.split("\n");

console.log("length " + dataArr.length);

function threeVowels(str) {
  let count = 0;
  let volwels = ["a", "e", "o", "i", "u"];

  volwels.forEach((elem) => {
    str.split("").forEach((word) => {
      if (elem === word) count++;
    });
  });
  if (count >= 3) return true;
  return false;
}

function twoLettersAround(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return true;
    }
  }
  return false;
}

function checkContainWords(str) {
  let conteiner = ["ab", "cd", "pq", "xy"];
  let flag = true;
  conteiner.forEach((elem) => {
    if (str.indexOf(elem) !== -1) {
      flag = false;
    }
  });
  return flag;
}

let counter = 0;
dataArr.forEach((elem) => {
  if (threeVowels(elem) && twoLettersAround(elem) && checkContainWords(elem)) {
    counter++;
  }
});

console.log(counter);

//PART 2

console.log("PART 2");

function doubleParts(str) {
  for (let i = 0; i < str.length - 2; i++) {
    let subStr = str.slice(i, i + 2);
    // console.log(str, subStr);
    let lastIndex = str.lastIndexOf(subStr);
    let index = str.indexOf(subStr);
    if (lastIndex - index !== 0 && lastIndex - index !== 1) return true;
  }
  return false;
}

function letterBetween(str) {
  for (let i = 0; i < str.length - 2; i++) {
    if (str[i] === str[i + 2]) return true;
  }
  return false;
}

counter = 0;
dataArr.forEach((elem) => {
  if (doubleParts(elem) && letterBetween(elem)) {
    counter++;
  }
});

console.log(counter);
