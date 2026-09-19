
function arrayMaker <T>(item:T):T[]
{
    return [item]
}

//it will take the data type itself and do work
arrayMaker("sargam")
arrayMaker(21)
arrayMaker({})

//Multiple TYpes
function pair <A,B>(a:A,b:B):[A,B]
{
    return [a,b]
}
pair("hi","hello") //can be same type
pair("hi",22) 

//generic interfaces

interface Box<T>{
    content:T
}
const box1:Box<string> = {content:'dsafsa'}
const box2:Box<number> = {content:32}