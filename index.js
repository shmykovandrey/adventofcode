const string = require('./mochData')
const md5 = require('md5');

for(let i = 0; true; i++){
  let res = md5(string + i);
  // console.log(res.slice(0,5));
  if (res.slice(0,5)==='000000') {
    console.log(i)
    break;
  }
}
