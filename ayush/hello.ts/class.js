var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X is ' + this.x + ' Y is ' + this.y);
    };
    Point.prototype.getDistance = function () {
        //...... (Business Logic)
    };
    return Point;
}());
var point = new Point();
point.x = 10;
point.y = 20;
point.draw();
