// declare class

// export class using module.exports
class Shape {
  color = "color";
  constructor(color) {
    this.color = color;
  }
  drawShape() {}
  calculateArea() {}
}

module.exports = Shape;
