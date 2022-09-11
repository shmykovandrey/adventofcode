///2015_07
mochData = require("./mochDataTest");
mochData = require("./mochData");

//PART1

function readMoch(mochData) {
  dataArr = mochData.split("\n");
  operandsArr = dataArr.map((elem) => elem.split(" -> "));
  operandsArr = operandsArr.map((elem) => {
    if (elem[0].indexOf("AND") !== -1)
      return ["AND", elem[0].split(" AND "), elem[1]];
    if (elem[0].indexOf("NOT") !== -1)
      return ["NOT", elem[0].replace("NOT ", ""), elem[1]];
    if (elem[0].indexOf("LSHIFT") !== -1)
      return ["LSHIFT", elem[0].split(" LSHIFT "), elem[1]];
    if (elem[0].indexOf("RSHIFT") !== -1)
      return ["RSHIFT", elem[0].split(" RSHIFT "), elem[1]];
    if (elem[0].indexOf("OR") !== -1)
      return ["OR", elem[0].split(" OR "), elem[1]];
    return ["=", elem[0], elem[1]];
  });
  return operandsArr;
}

function isNumber(num) {
  if (num === "0" || num === 0) return true;
  if (isNaN(+num)) return false;
  if (!!num) return true;
  return false;
}

function workWithData(parsedData) {
  parsedData.forEach((elem) => {
    // console.log(elem);
    let current = null;
    /// if =
    if (elem[0] === "=") {
      if (isNumber(elem[1])) current = +elem[1];
      if (isNumber(allWise[elem[1]])) current = +allWise[elem[1]];
      allWise[elem[2]] = current;
    }
    //// if NOT
    if (elem[0] === "NOT") {
      if (isNumber(elem[1])) current = elem[1];
      if (isNumber(allWise[elem[1]])) current = allWise[elem[1]];
      if (isNumber(current))
        allWise[elem[2]] = +(
          "0b" +
          ("0".repeat(16 - current.toString(2).length) + current.toString(2))
            .split("")
            .map((el) => (el === "0" ? "1" : "0"))
            .join("")
        );
    }
    //// if AND
    if (elem[0] === "AND") {
      let current1 = null;
      let current2 = null;
      if (isNumber(elem[1][0])) current1 = elem[1][0];
      if (isNumber(elem[1][1])) current2 = elem[1][1];
      if (isNumber(allWise[elem[1][0]])) current1 = allWise[elem[1][0]];
      if (isNumber(allWise[elem[1][1]])) current2 = allWise[elem[1][1]];
      if (isNumber(current1) && isNumber(current2))
        allWise[elem[2]] = current1 & current2;
    }
    if (elem[0] === "OR") {
      let current1 = null;
      let current2 = null;
      if (isNumber(elem[1][0])) current1 = elem[1][0];
      if (isNumber(elem[1][1])) current2 = elem[1][1];
      if (isNumber(allWise[elem[1][0]])) current1 = allWise[elem[1][0]];
      if (isNumber(allWise[elem[1][1]])) current2 = allWise[elem[1][1]];
      if (isNumber(current1) && isNumber(current2))
        allWise[elem[2]] = current1 | current2;
    }
    if (elem[0] === "LSHIFT") {
      if (isNumber(elem[1][0])) current = elem[1][0];
      if (isNumber(allWise[elem[1][0]])) current = allWise[elem[1][0]];
      if (isNumber(current)) allWise[elem[2]] = current << +elem[1][1];
    }
    if (elem[0] === "RSHIFT") {
      if (isNumber(elem[1][0])) current = elem[1][0];
      if (isNumber(allWise[elem[1][0]])) current = allWise[elem[1][0]];
      if (isNumber(current)) allWise[elem[2]] = current >> +elem[1][1];
    }
  });
}

function inicializeAllWise(parsedData) {
  parsedData.forEach((elem) => (allWise[elem[2]] = null));
}

function haveNoNull(obj) {
  let flag = true;
  Object.keys(obj).forEach((elem) => {
    if (obj[elem] === null) flag = false;
  });
  return flag;
}
//read moch data
let parsedData = readMoch(mochData);
const allWise = {};

inicializeAllWise(parsedData);

while (!haveNoNull(allWise)) {
  workWithData(parsedData);

  let count = 0;
  for (key in allWise) {
    if (allWise[key] !== null) count++;
  }
  console.log(count);
}
console.log(allWise.a);
