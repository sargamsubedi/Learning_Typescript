
type basicInfo = {name:string}
type extraInfo = {salary:number}

type employeeInfo = basicInfo & extraInfo //means now employeeinfo has both name and salary

const senior :employeeInfo ={
    name:"senior Developer",
    salary:120000
}
// OPTIONAL INFO
//here salary can be available or not but if it is available its type should be number
type internInfo={
    name:string
    salary?:number
}

let intern1:internInfo={ //wont give error if only name defined 
    name:"sarrr",
    
}

// READONLY

type emp={
    name:string,
    readonly salary:number //needed to define once but after define cant change
}
let emp1:emp={
    name:"sargam",
    salary:10000
}
emp1.name="employee1" //can do this 
// emp1.salary=15000 //cant do this 