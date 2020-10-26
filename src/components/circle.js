// import using require

const { Shape } = require("./shape");

// declare class
class Circle extends Shape {
  calculateArea = () => {};
}

// export class using module.exports
exports.Circle = Circle;
