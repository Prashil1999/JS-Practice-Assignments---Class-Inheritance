// import using require

const Shape = require("./shape");

// declare class
class Circle extends Shape {
  constructor() {
    super();
  }
  calculateArea = () => {};
}

// export class using module.exports
module.exports = Circle;
