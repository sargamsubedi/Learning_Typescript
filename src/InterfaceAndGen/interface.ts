
//in this eg it is interchangeable with the type
interface Student {
    name: string
    age: number
}
const stu1: Student = { name: "abc", age: 21 }

//used to define function structure
interface Discount {
    //defining function that takes one num as a arg and return num
    (price: number): number
}

const apply50: Discount = (p) => p * 0.5


//multiple functions
interface Machine {
    start(): void
    stop(): void
}
const excavator: Machine = {
    start() {
        console.log("Machine started...");
    },
    stop() {
        console.log("Machine stopped...");

    }
}

interface UserRating {

    //this is not an array its key:value pair
    [product: string]: number
}
const ratings: UserRating = {
    "sheet": 4.5,
    "mat": 4
}

//interfaces are merged
interface User {
    name: string
}
interface User {
    age: number
}
//we can define interfaces with same name but the variable of that type should satisfy all the interfaces
const u: User = {
    name: 'sfasa',
    age: 43 //need this without all properties it will throw error
}

//extending interfaces

interface A { a: string }
interface B { b: string }
//now the variable of type C should satisfy A and B as above
interface C extends A,B {}