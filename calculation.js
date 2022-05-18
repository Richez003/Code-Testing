const calculations = {
addNum: add,
subNum: subtract,
dividNum: divid,
multiplyNum: multiply
};

function add(a, b) {
    let num = (a + b);
    return num
};

function subtract(a, b) {
  let num = (a - b);
  return num
};

function divid(a,  b) {
   let num = (a / b);
   return num
};

function multiply(a, b) {
    let num = (a * b);
    return num
};

module.exports = calculations