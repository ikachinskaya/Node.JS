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

//лучше экспортировать так
module.exports = MyMath;
console.log(module.exports);
