
class Employee{
    public name:string
    protected age:number
    private salary:number

    constructor(name:string,age:number,salary:number)
    {
        this.name=name;
        this.age=age;
        this.salary=salary;

    }

    //for accessing private entity make a function 
    reveal()
    {
        return this.salary
    }

}

//get and set 
class Tea{

    private _sugar =5 //just a naming convention private starts with _

    get sugar()
    {
        return this._sugar
    }
    set sugar(value:number)
    {
        this._sugar=this.sugar
    }
}

// for using getter and setter

let s= new Tea
s.sugar = 10 //using setter
let sugarQuantity = s.sugar //using getter