const Deposit = require("./Deposit")

 module.exports = class Account { 
  #balanceValue = 0
  allDeposits = []
  allLoans = []
  allInstallment = []
    constructor(balance, deposits, loans, installment, accountOwner){
      this.#balanceValue = balance
      this.allDeposits = deposits
      this.allLoans = loans
      this.allInstallment = installment
    }
    get VerSaldo(){
      return {
        balance : this.#balanceValue
      }
    }
    newDeposits(deposits){
      // let newDeposits = new Deposit(deposits,new Date())
      deposits += this.#balanceValue
      deposits += this.allDeposits
    }
}


