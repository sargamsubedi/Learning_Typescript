
type ProductStatus = "available" |"outofstock"
type StatusInfo = {
    label:string,
    canBuy:boolean
}

const productStatusInfo = {
    available:{
        label:"label1",
        canBuy:true
    },
    outofstock:{
        label:"cannot buy",
        canBuy:false
    }
    //in record if key is an union then it means it should have all the values of an union as key so only available gives error we need to include all values 
} satisfies Record<ProductStatus,StatusInfo>


//why use satisfies insteadd of :type
// Type → declares/annotates the type

// satisfies Type → checks the type, but keeps the value's more specific inferred type

// eg:
type Config={
    mode: "light"|"dark"
}
const configType:Config={
    mode:"light"
}
console.log(configType.mode); //here when hover on mode it gives us light|dark even tho we defined that it is light

const configSatisfies ={
    mode:"dark"
} satisfies Config

console.log(configSatisfies.mode); //hover here and it will give dark only

// tip
// Use : Type, when you want to declare the type of a variable.

// Use satisfies Type, when you want to validate an object against a type while preserving precise inference.
