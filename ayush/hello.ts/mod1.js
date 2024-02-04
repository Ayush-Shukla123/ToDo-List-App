"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
var sum = /** @class */ (function () {
    function sum() {
    }
    // constructor(x : number , y : number){
    // }
    sum.prototype.sum = function (X, Y) {
        this.z = this.x + this.y;
        console.log('The sum is ' + this.z);
    };
    sum.prototype.subtract = function (X, Y) {
        this.z = this.x - this.y;
        console.log('The subtract is ' + this.z);
    };
    return sum;
}());
exports.sum = sum;
