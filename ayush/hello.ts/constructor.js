var Construct = /** @class */ (function () {
    function Construct(x, y) {
        this.x = x;
        this.y = y;
    }
    Construct.prototype.draw = function () {
        console.log('X is' + this.x + ', Y is' + this.y);
    };
    return Construct;
}());
var construct = new Construct(10, 20);
construct.draw();
