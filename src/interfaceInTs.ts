
type person = {
    name:string,
    age:number
}
//till here everything is good 
class personClass implements person{
    name: string="sargam"
    age: number=21
}
//same type in interface as in interface
interface person1 {
    name:string,
    age:number
}
class personClass1 implements person1{
    name="sargam"
    age=21
}

// TIP: for classes use we use interface 

// for these we cant do type
// type cupSize = "small" | "medium"
// class Tea implements cupSize{
//     cupSize ="small"
// }
 interface cupSize{
    size: "small"| "medium" 
 }
 class Tea implements cupSize{
    size: "small" | "medium" ="small"
}

