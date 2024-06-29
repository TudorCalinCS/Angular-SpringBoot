import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let shape = new Shape(5,6);
console.log(shape.getInfo());

let circle = new Circle(7,8,20);
console.log(circle.getInfo());

let rectangle = new Rectangle(2,3,15,25);
console.log(rectangle.getInfo());