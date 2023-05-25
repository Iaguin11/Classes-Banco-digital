const Installment = require("./Installment")

module.exports = class Loan{
  static #fees = 1.05
  constructor(value,installments){
    this.value = value 
    this.installments = []
    for ( let i = 1; i <= installments; i++){
      this.installments.push(new Installment((value * Loan.#fees) / installments, i))
    }
    this.creation = new Date()
  }

  static get fee(){
    return Loan.#fees
  }
  static set fee(newFee){
    Loan.#fees = 1 + (newFee / 100)
  }
  
}