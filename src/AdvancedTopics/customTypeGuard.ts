// a custom type guard is a function that tells TypeScript that a value is a specific type after a runtime check.

type User ={
    name:string
    age:number

}

//here value is user means this function returns true if value is user , cant use boolean , this is typescript ecosystem 
function isUser(value:unknown): value is User
{
    if(typeof value !=="object" || value===null)
    {
        return false;
    }
    //here record says treat it as a object with its all keys are string and values are unknown
    // other examples record<unknown,string> dont know key but values are string 
    // record <string,boolean> etc.. 
    // synax record<key type, value type>

    let possibleUser = value as Record<string,unknown>

    return(typeof possibleUser.name==="string" && typeof possibleUser.age==="number")

}