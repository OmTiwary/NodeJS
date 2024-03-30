var accountName = "Golu"
let accountEmail = "om@google.com"
const accountPass = "1234"
accountCity = "Patna"
let accountId;  // IF we won't defined the values in created variable the it will be shown "undefined"

console.log(accountName);
console.log(accountEmail);

accountName = "Rohit Tiwary"
accountEmail = "golu@google.com"
// accountPass = "4321"  Constan(const) values can't be changed

/*
 Prefere not to use var
 Because of its issue in block scope and functional scope
*/

console.log(accountName)
console.log(accountEmail)
console.table([accountName, accountEmail, accountPass, accountId])