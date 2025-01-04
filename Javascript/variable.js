const account_Id = 144553
let accountEmail = "rsav@google.com"
var accountPassword = "12345"
accountCity = "kathmandu"
let accountState;

// account_Id = 2 not allowed 

accountEmail = "sam@sam.com"
accountPassword = "3456"
accountCity = "chitwan"

console.log(account_Id)

console.table([accountEmail, account_Id, accountPassword, accountCity, accountState])


// prefer not to use var 
// because of issue in block scope and functional scope, if we not assign any value after variable declaration it gives output undefined

