const Deposit = require("./Deposit")
const Loan = require("./Loan")
const Transfer = require("./Transfer")
const User = require("./User")

module.exports = class App { 
  static #users = []

  static findUser(email){
    const user = this.#users.find(user => user.email === email)
    return user ?? null
  }
  static createUser(email, fullName){
    const userExists = App.findUser(email)
    if(!userExists){
      this.#users.push(new User(email, fullName))
    }
  }

  static deposit(email, value){
    const user = App.findUser(email)
    if(user){
      const newDeposit = new Deposit(value)
      user.account.addDeposit(newDeposit)
    }
  }
  static transfer(fromUserEmail, toUserEmail, value){
    const fromUser = App.findUser(fromUserEmail)
    const toUser = App.findUser(toUserEmail)
    if(fromUser && toUser){
      const newTransfer = new Transfer(fromUser, toUser, value)
      fromUser.account.addTransfer(newTransfer)
      toUser.account.addTransfer(newTransfer)
    }
  }
  static takeLoan(email, value, numberInstallments){
    const user = App.findUser(email)
    if (user){
      const newLoan = new Loan(value, numberInstallments)
      user.account.addLoan(newLoan)
    }
  }
  static set fee(newFee){
    Loan.fee = newFee
  }
}