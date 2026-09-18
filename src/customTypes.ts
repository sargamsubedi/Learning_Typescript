
//can define custom type with type keyword
type user ={
    name:string,
    age:number
}

let user1 :user= {name:"sargam", age:21};

let jsonUser = '{"name":"sargam","age":"23"}'
//without the as user the parsedUser type would be any we need to explicitly declare type 
let parsedUser = JSON.parse(jsonUser) as user

//cusom user values
type Role = "admin" | "user"
// here admin1's role should be either admin or user other roles give error
let admin1: Role = "admin"

//there is also type for html elements
let username = document.getElementById("username") as HTMLInputElement

// difference 
let human:string  //it means the variable human can only store string 
let good = "someValueGetByApi" as string //this means the value is string we are defining it explicitly

//for error
try {   
    //here we cant do error.message directly because we dont know type of error
} catch (error) {
    if(error instanceof Error)
        console.log(error.message);
    
}