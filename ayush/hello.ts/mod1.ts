export class sum{
    x : number;
    y : number;
    z : number;
    // constructor(x : number , y : number){

    // }

    sum(X,Y){
        this.z = this.x + this.y;
        console.log('The sum is '+ this.z);
    }

    subtract(X,Y){
        this.z = this.x - this.y;
        console.log('The subtract is '+ this.z);
    }
}

