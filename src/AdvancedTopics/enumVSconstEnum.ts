//Difference
// enum->changed into objects in compile time 
//const enum -> removed completely they arent available after compilation their values will be inlined


enum status{
    Pending="pending",
    Done="done"
}

const st1 :status = status.Pending; //ok
console.log(status); //ok, will log an object 


const enum statusConst {
    Pending="pending",
    Done="done"
}
const st2:statusConst = statusConst.Pending // ok after compilation looks like const st2="pending"
// console.log(statusConst); // throws error because it is not available in in runtime



//FORWARD AND REVERSE MAPPING

enum smartPhones {
    samsung,
    apple,
    redmi
}
//logs indices
console.log(smartPhones.samsung); //log 0
console.log(smartPhones.apple); //log 1
console.log(smartPhones.redmi); //log 2

// reverse
console.log(smartPhones[0]); //log samsung
console.log(smartPhones[1]); //log apple
console.log(smartPhones[2]); //log redmi


//NOTE : only numeric values have reverse mapping 

enum numericAndString{
    numeric=200,
    string="something"

}
// so doing 
console.log(numericAndString.numeric); //ok gives 200
console.log(numericAndString.string);//ok gives something
// BUT
console.log(numericAndString[200]); //ok gives numeric
// console.log(numericAndString["something"]); //notOK gives error


// mental mode
enum Status {
  Pending = "pending",
  Done = 200
}
// this is converted somewhat into 

// {
//   Pending: "pending",
//   Done: 200,
//   200: "Done"
// }



