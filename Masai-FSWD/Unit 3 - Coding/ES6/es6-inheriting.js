class Car{
    constructor(n,b)
    {
        this.name = n;
        this.brand = b;
    }
}

let c1 = new Car("Benz","Mercedes");
console.log(c1);


//Inheriting

class SUV extends Car{
    constructor(n,b,o,s)
    {
        super(n,b);
        this.owner = o;
        this.seats = s;
    }
}

let c2 = new SUV("Benz","Mercedes","Pablo",4);
console.log(c2);