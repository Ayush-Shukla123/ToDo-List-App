var Access = /** @class */ (function () {
    function Access(x, y) {
        this.x = x;
        this.y = y;
        // this.x = x;
        // this.y = y;
    }
    Access.prototype.getX = function () {
        return this.x;
    };
    Object.defineProperty(Access.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Value of X is cannot be less than 0.');
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Access;
}());
var access = new Access(10, 20);
access.getX(); //call getX()
access.X = 10; //passes a value for set()
