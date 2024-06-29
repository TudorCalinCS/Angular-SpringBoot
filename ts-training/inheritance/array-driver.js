"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = require("./shape");
const circle_1 = require("./circle");
const rectangle_1 = require("./rectangle");
let shape = new shape_1.Shape(5, 6);
let circle = new circle_1.Circle(7, 8, 20);
let rectangle = new rectangle_1.Rectangle(2, 3, 15, 25);
let shapes = [];
shapes.push(shape);
shapes.push(circle);
shapes.push(rectangle);
for (let s of shapes) {
    console.log(s.getInfo());
}
