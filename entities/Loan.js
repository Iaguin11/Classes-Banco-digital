const Installment = require("./Installment")

module.exports = class Loan {
  static #taxaDeJuros = 0 + '%'
  constructor(valueLoan, creatinDate,installmentsLoan){
    this.valueLoan = valueLoan
    this.creatinDate = creatinDate
    this.installmentsLoan = installmentsLoan * Installment
  }

  static get seeInterest(){
    return Loan.#taxaDeJuros
  }

  static setNewTaxadeJuros(taxa){
    Loan.#taxaDeJuros = taxa
  }
}

