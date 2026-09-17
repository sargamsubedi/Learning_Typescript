
//dont need to give type if type is primitive and assigned when declared.
let name = "sargam"

//UNION:
// we can use pipe to union different data types 
let wealth: number | string = 1000
wealth = "1M"

//we can also define our own data values

let status: "pending" | "success" = "pending"

// status='done' // cant do this its value should be either pending or success

//ANY: if we dont know/care data type we can assign its value to any, dont use this as much as possible 
let data: any = "nicee"
data = false

// we can also set type to undefined 
let serverStatus : string|undefined
