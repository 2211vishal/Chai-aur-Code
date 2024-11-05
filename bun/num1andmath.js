const score=400

console.log (score);

const balance=new Number(100)// the data type of 100 is number because use new Number keyword 
console.log(balance);

// console.log(balance.toString().length); // because number is converted into string then we use string all properties like length and all
                                        
// console.log(balance.toFixed(2)); // mens 100 is in two values we give 2  to return two values like => 100.00 if we give 1 then 100.0 return


const otherNumber=1223.383
// console.log(otherNumber.toPrecision(3));//It will give output 123 if othernumber is 123.383
// console.log(otherNumber.toPrecision(3));// It will give 23.4 value if othernumber is 23.383
// console.log(otherNumber.toPrecision(3));// value is 1.22e+3 if value is 1223.383

const hundred=100000
//console.log(hundred.toLocaleString('en-IN')); // give the comas between zeros to easily understsnd  en-IN mens convert indian values to read 


//+++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++


console.log(Math);
console.log(Math.abs(-4)); // Convert negative value in to  positive value

console.log(Math.round(3.5)); // Increase before dot value and decrease after dot value like 3.5 into 4.4

console.log(Math.ceil(4.2)); // if value more then 4 then it conver into 5 

console.log(Math.floor(4.6)); // It will get lower value  only get 4 

console.log(Math.max(3,5,6,2));  // find maximum number in string

console.log(Math.min(2,3,5,7,3.12)); // Find minimum number in the string

console.log(Math.random()); // the value of random function is between 0 and 1

const min=10
const max=20

console.log( Math.floor (Math.random() * (max-min+1)) +min);

