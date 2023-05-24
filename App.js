const User = require("./entities/User")
const Deposit = require("./entities/Deposit")
const Transfer = require("./entities/Transfer")
const Loan = require("./entities/Loan")

module.exports = class App {
  static #userApp = []
  
  static findUser(email){
    const user = this.#userApp.find(user => user.email === email)
    return user ?? null
  }
  static createUser(email, fullname){
    const userExists = App.findUser(email)
    if (!userExists){
      this.#userApp.push(new User(email, fullname))
    }
  }
  static deposit(email, value){
    const user = App.findUser(email)
    if (user) {
      const newDeposit = new Deposit(value)
      User.account.addDeposit(newDeposit)
    }
  }
  static transfer(fromUserEmail, toUserEmail, value) {
    const fromUser = App.findUser(fromUserEmail)
    const toUser = App.findUser(toUserEmail)
    if (fromUser && toUser) {
      const newTransfer = new Transfer(fromUser, toUser, value)
      fromUser.account.addTransfer(newTransfer)
      toUser.account.addTransfer(newTransfer)
    }
  }
  static takeLoan(email, value, numberOfInstallments) {
    const user = App.findUser(email)
    if (user) {
      const newLoan = new Loan(value, numberOfInstallments)
      user.account.addLoan(newLoan)
    }
  }
  static changeLoanFee(newFeePercentage) {
    Loan.fee = newFeePercentage
  }
}
