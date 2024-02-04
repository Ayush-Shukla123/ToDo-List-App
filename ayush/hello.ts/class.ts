class Point{                //class creation
    x : number;
    y : number;

 
draw(){
    console.log('X is ' + this.x + ' Y is ' + this.y );
}

getDistance(){
    //...... (Business Logic)
}
}

let point = new Point();
point.x = 10;
point.y = 20;

point.draw();