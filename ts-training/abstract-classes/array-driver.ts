import { Shape } from "./shape";
import { Circle } from "./circle";
import { Rectangle } from "./rectangle";

let circle = new Circle(7,8,20);
let rectangle = new Rectangle(2,3,15,25);

let shapes: Shape[] = [];

shapes.push(circle);
shapes.push(rectangle);

for(let s of shapes){
    console.log(s.getInfo());
    console.log(`Area = ${s.calculateArea()}`);
}