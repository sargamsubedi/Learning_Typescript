
// discriminated union is a type of union of objects where each object have one same key (discriminant), based on discriminant the ts will decide which properties should it have 

type Shape = 
|{
    kind:"circle";
    radius:number
}
|{
    kind:"rectangle"
    length:number
    breadth:number
}
|{
    kind:"square"
    side:number
}

let rect :Shape ={
    kind:"rectangle",
    length:3,
    breadth:2
    // radius:4 //error because for kind rectangle there is no radius
}

let cir :Shape ={
    kind:"circle",
    radius:45
}


//Although we can do like this 

//this will not give us strict type check we can send radius to kind square and so on 
type ShapeLoose ={
    kind:"rectangle"|"circle"|"square"
    length?:number
    breadth?:number
    radius?:number
    side?:number
}