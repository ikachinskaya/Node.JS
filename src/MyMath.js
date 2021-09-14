class MyMath {
  static sum = (...args) =>
    args.reduce((acc, currentValue) => acc + currentValue, 0);
  static substract = (...args) =>
    args.reduce((acc, currentValue) => acc - currentValue, 0);
  static div = (...args) =>
    args.reduce((acc, currentValue) => acc * currentValue);
  static multiply = (...args) =>
    args.reduce((acc, currentValue) => acc / currentValue);
}

const data = 2; /* мешать друг другу не будут*/

console.log(exports);
exports.MyMath = MyMath;
console.log(exports);
