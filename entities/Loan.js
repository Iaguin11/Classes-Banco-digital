const Installment = require("./Installment")

module.exports = class Loan {
  static #feejuros = 1.05
  constructor(value, installment){
    this.valueLoan = value
    this.Installment = installment
    for(let i = 1 ; i<= installment; i++){
      this.Installment.push(new Installment((value * Loan.#feejuros)/ Installment, i))
    }
    this.createdAt = new Date()
  }

  static get fee(){
    return Loan.#feejuros
  }

  static set fee(newFeePercentage) {
    Loan.#feejuros = 1 + (newFeePercentage / 100)
  }
}

