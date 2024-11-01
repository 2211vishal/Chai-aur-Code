const accountID=123
let email="vis@gmail.com"
var pass="123"
city="pune"
 let accountState  //The value of accountstate is undefined because we cannot assign the value to the state


email="sggs@jdg"
pass="333"
city="jaipur"


/*
Prefer not to use var
because of issue in block scope and functional scope

*/

// accountID=2 // once we define constant we cannot change the constant accountID not allowed
console.log(accountID);
console.table([accountID,email,pass,city,accountState]);

