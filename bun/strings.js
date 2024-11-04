const  name="bunny"
const concate=59
// console.log(name+concate+"value"); outdated syntax do not to use

console.log(`my name is ${name}and concat is ${concate}`);

const name1= new String('baramati')
console.log(name1);

console.log(name1[0]);
console.log(name1.__proto__);

console.log(name1.length);

console.log(name1.toUpperCase());

console.log(name1.charAt(2));  // To find which character at the index

console.log(name1.indexOf('m')); // To finde character which position

const stringa=name1.substring(0, 4)
console.log(stringa);           // Last value cannot include 0 to 3 print only not 4 that is ok cannot set negative value.


const  anotherstring=name1.slice(-8,3)  // Also used to set the negative value using slice method.
console.log(anotherstring);


const newstring= "    vishal    "
console.log(newstring);
console.log(newstring.trim());  //Trim method remove the extra space from the string

const url="vishal%47//:https"   // Replace the content what you want using replace method
console.log(url.replace('%47','bunny'));


console.log(url.includes('vishal'));  // Words are include in a string or not if include then true if not then false

console.log(url.split('_'));  //Used to seperate the string using underscore or any other symbol

