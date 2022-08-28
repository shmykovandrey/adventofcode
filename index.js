const data = require('./mochData.js')

let currentX = 0;
let currentY = 0;

let santaCurrentX = 0;
let santaCurrentY = 0;

let roboSantaCurrentX = 0;
let roboSantaCurrentY = 0;

let santaPath = []

santaPath.push([currentX, currentY])

data.split('').forEach((elem, i)=>{
if (i % 2 === 1){
  if (elem === '>') santaCurrentX++;
  if (elem === '<') santaCurrentX--;
  if (elem === '^') santaCurrentY++;
  if (elem === 'v') santaCurrentY--;
  if(!arrHasElem([santaCurrentX, santaCurrentY])) santaPath.push([santaCurrentX, santaCurrentY])
}

if (i % 2 === 0){
  if (elem === '>') roboSantaCurrentX++;
  if (elem === '<') roboSantaCurrentX--;
  if (elem === '^') roboSantaCurrentY++;
  if (elem === 'v') roboSantaCurrentY--;
  if(!arrHasElem([roboSantaCurrentX, roboSantaCurrentY])) santaPath.push([roboSantaCurrentX, roboSantaCurrentY])
}
})

function arrHasElem(elem){
  for(let i=0; i < santaPath.length; i++){
    if (santaPath[i][0] === elem[0] && santaPath[i][1] === elem[1]) return true
  }
  return false;
}

console.log(santaPath.length)
