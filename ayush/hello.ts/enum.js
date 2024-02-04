// enum Color { red = 0, green = 1, yellow = 3 };
// let BackgroundColor1:Color = Color.red;
// let anotherOtherColor2:Color = Color.green;
// let BackgroundColor3:Color = Color.yellow;
// console.log(BackgroundColor1);
// console.log('value of : '+ anotherOtherColor2);
// // console.log('value of : '+ BackgroundColor3);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// Using the enum
var myColor = Color.Green;
console.log(myColor);
