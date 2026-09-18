
// playing with objects

// 1. tip separate different types

// we could have declared address inside person but this is better practice
type address = {country:string,province:string,streetNo:number}

type person ={
    name:string
    address:address
}

// DIFFERENT UTILITS

// partial 

type user={
    name:string
    phoneNo:string
    address:string
}

function PartialExample( user:Partial<user>){
    console.log(user);
    
}
// these all are valid the partial makes all the properties optional 
PartialExample({name:"sargam",phoneNo:"24334234",address:"myagdi"})
PartialExample({name:"sargam",phoneNo:"24334234"})
PartialExample({})


// Required
type employee ={
    name?:string
    salary?:number
}

function RequiredExample(emp:Required<employee>)
{
    console.log(emp);
    
}
// required makes all the propperties required even tho it is defined by ?
RequiredExample({name:"sargam",salary:1234})
// RequiredExample({name:"sargam"}) //gives error

// Pick
function PickExample (user:Pick<user,"name"|"phoneNo">)
{
    console.log(user);
    
}
// we can pick only properties we want by chaining it with |(union)
PickExample({name:"sargam",phoneNo:"432"})


// omit
function OmitExample(user:Omit<user,"address">)
{
    console.log(user);
    
}
// we can omit any property of data type using it 
OmitExample({name:"sg",phoneNo:"3533"})