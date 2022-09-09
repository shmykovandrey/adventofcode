///2015_06
const mochData = require("./mochData");

//PART1

// function parseMochData(mochData) {
//   let dataArr = mochData.split("\n");
//   dataArr = dataArr.map((elem) => elem.split(" through "));

//   dataArr = dataArr.map((elem) => {
//     if (elem[0].indexOf("turn on") !== -1)
//       return ["turn on", elem[0].replace("turn on ", ""), elem[1]];
//     if (elem[0].indexOf("turn off") !== -1)
//       return ["turn off", elem[0].replace("turn off ", ""), elem[1]];
//     if (elem[0].indexOf("toggle") !== -1)
//       return ["toggle", elem[0].replace("toggle ", ""), elem[1]];
//   });

//   return dataArr;
// }

// function inicializeArr() {
//   let allLigths = [];
//   for (let i = 0; i < 1000; i++) {
//     let newArr = [];
//     for (let j = 0; j < 1000; j++) {
//       newArr.push(false);
//     }
//     allLigths.push(newArr);
//   }
//   return allLigths;
// }

// function calculateCount(data) {
//   let count = 0;
//   data.forEach((line) => {
//     line.forEach((elem) => {
//       if (elem) count++;
//     });
//   });
//   return count;
// }

// function actionByLigth(action) {
//   let firstCoordinate = action[1].split(",");
//   let lastCoordinate = action[2].split(",");
//   for (let i = +firstCoordinate[0]; i <= +lastCoordinate[0]; i++) {
//     for (let j = +firstCoordinate[1]; j <= +lastCoordinate[1]; j++) {
//       if (action[0] === "turn on") allLigths[i][j] = true;
//       if (action[0] === "toggle") allLigths[i][j] = !allLigths[i][j];
//       if (action[0] === "turn off") allLigths[i][j] = false;
//       }
//     }
// }

// let data = parseMochData(mochData);
// console.log("action in moch " + data.length);
// //inisialize matrix by false;
// let allLigths = inicializeArr();

// //lets Rock
// data.forEach((elem) => actionByLigth(elem));

// //calculate true count
// console.log(calculateCount(allLigths));



//PART 2

function parseMochData(mochData) {
  let dataArr = mochData.split("\n");
  dataArr = dataArr.map((elem) => elem.split(" through "));

  dataArr = dataArr.map((elem) => {
    if (elem[0].indexOf("turn on") !== -1)
      return ["turn on", elem[0].replace("turn on ", ""), elem[1]];
    if (elem[0].indexOf("turn off") !== -1)
      return ["turn off", elem[0].replace("turn off ", ""), elem[1]];
    if (elem[0].indexOf("toggle") !== -1)
      return ["toggle", elem[0].replace("toggle ", ""), elem[1]];
  });

  return dataArr;
}

function inicializeArr() {
  let allLigths = [];
  for (let i = 0; i < 1000; i++) {
    let newArr = [];
    for (let j = 0; j < 1000; j++) {
      newArr.push(0);
    }
    allLigths.push(newArr);
  }
  return allLigths;
}

function calculateCount(data) {
  let count = 0;
  data.forEach((line) => {
    line.forEach((elem) => {
      if (elem) count+=elem;
    });
  });
  return count;
}

function actionByLigth(action) {
  let firstCoordinate = action[1].split(",");
  let lastCoordinate = action[2].split(",");
  for (let i = +firstCoordinate[0]; i <= +lastCoordinate[0]; i++) {
    for (let j = +firstCoordinate[1]; j <= +lastCoordinate[1]; j++) {
      if (action[0] === "turn on") allLigths[i][j] += 1;
      if (action[0] === "toggle") allLigths[i][j] += 2;
      if (action[0] === "turn off") allLigths[i][j] > 0 ? allLigths[i][j] -= 1: allLigths[i][j] = 0;
      }
    }
}



let data = parseMochData(mochData);
console.log("action in moch " + data.length);
//inisialize matrix by false;
let allLigths = inicializeArr();

//lets Rock
data.forEach((elem) => actionByLigth(elem));

// //calculate brigth count
console.log(calculateCount(allLigths));

