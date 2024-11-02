// Primitive 
// 7 Type of data  :String,Boolean,Number,Null,Undefined,Symbol,BigInt


// Reference(Non Primitive)

// JAVASCRIPT IS DYNAMICALLY TYPED LANGUAGE ALL TYPES ARE CHECKED IN PERFORMED IN RUNTIME  ONLY WHEN YOUR PROGRAM IS EXECUTED


const id=Symbol('123')
const anotherid=Symbol('123')

//const bigint=1233333433n  // its big number javascript automatically consider its big int number because its length is high
console.log(id === anotherid)


// Array,Object,Functions


const heros=["shaktiman","onepeace","G-one"]   //this is the array method to declare


let arr={                  // this is object declaration method in to the curlybraces
    name:"vishal",
    age:22,
}


let myfunction=function()  // Method to declare a Function in to the varible
{

    console.log("hello world");
    
}









