class Access{
    constructor (private x : number, private y : number){
    // this.x = x;
    // this.y = y;
    }
    getX(){
        return this.x;
    }
    get X(){
        return this.x;
    }
    set X(value){     // If we want to make our X value read only then we need to comment out this set().
        if(value < 0)
        throw new Error('Value of X is cannot be less than 0.');

        this.x = value;
    }

}
let access = new Access(10,20);
access.getX();   //call getX()
access.X = 10;   //passes a value for set()
