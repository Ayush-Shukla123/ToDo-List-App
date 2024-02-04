class A{
    constructor(private x ?: number, private y?: number){

    }

    draw(){
    console.log('X is '+ this.x + ', Y is '+this.y);
    }
}

let aa = new A (1,2);
aa.draw();
 