
// key of-> returns key of an object
//type of ->returns type of an existing object 

//type of 
let student = {
    name:"sargam",
    age:21,
    isActive:true

}

//type of "hello"-> will give string similarly 
// type of student will give object -> {name:string, age:number, isActive:boolean}

type Student = typeof student
let student1: Student ={
    name:"hi",
    age:32,
    isActive:false
}
// here we created an type using existing object and used that type to declare another value 

//KeyOf -> it will  return keys 

type KeysOfStudent = keyof Student;
//equivalent of saying keyOfStudent = "name"|"age"|"isActive" 

let key1:KeysOfStudent ="name"
// let key2:KeysOfStudent ="something" //throws error because we cant assign other than name,age,isActive to type of keys of student