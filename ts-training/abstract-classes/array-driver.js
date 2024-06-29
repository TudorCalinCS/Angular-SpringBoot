"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
const rectangle_1 = require("./rectangle");
let circle = new circle_1.Circle(7, 8, 20);
let rectangle = new rectangle_1.Rectangle(2, 3, 15, 25);
let shapes = [];
shapes.push(circle);
shapes.push(rectangle);
for (let s of shapes) {
    console.log(s.getInfo());
    console.log(`Area = ${s.calculateArea()}`);
}
