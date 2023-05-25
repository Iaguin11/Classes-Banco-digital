const App = require("./App")

App.createUser("John@gmail.com", "John Mark")
App.createUser("Carlos@gmail.com", "Carlos Souza")
App.createUser("tomCruise@gmail.com", "Tom Cruise")

App.deposit("John@gmail.com", 100)

App.transfer("John@gmail.com","Carlos@gmail.com", 20 )
App.changeLoanFee(10)
App.takeLoan("tomCruise@gmail.com", 2000, 24)

console.log(App.findUser("John@gmail.com"))
console.log(App.findUser("John@gmail.com").account)
console.log(App.findUser("Carlos@gmail.com"))
console.log(App.findUser("Carlos@gmail.com").account)
console.log(App.findUser("tomCruise@gmail.com"))
console.log(App.findUser("tomCruise@gmail.com").account)
console.log(App.findUser("tomCruise@gmail.com").account.loans[0].installments)