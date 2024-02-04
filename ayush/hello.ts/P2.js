var A = /** @class */ (function () {
    function A(x, y) {
        this.x = x;
        this.y = y;
    }
    A.prototype.draw = function () {
        console.log('X is ' + this.x + ', Y is ' + this.y);
    };
    return A;
}());
var aa = new A(1, 2);
aa.draw();
