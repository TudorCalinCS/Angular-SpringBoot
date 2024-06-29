"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    constructor(theX, theY, _width, _lenght) {
        super(theX, theY);
        this._width = _width;
        this._lenght = _lenght;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get lenght() {
        return this._lenght;
    }
    set lenght(value) {
        this._lenght = value;
    }
    getInfo() {
        return super.getInfo() + `, width = ${this._width}, length = ${this._lenght}`;
    }
    calculateArea() {
        return this._width * this._lenght;
    }
}
exports.Rectangle = Rectangle;
