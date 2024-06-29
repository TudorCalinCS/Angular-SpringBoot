import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let shape = new Shape(5,6);
let circle = new Circle(7,8,20);
let rectangle = new Rectangle(2,3,15,25);

let shapes: Shape[] = [];

shapes.push(shape);
shapes.push(circle);
shapes.push(rectangle);

for(let s of shapes){
    console.log(s.getInfo());
}