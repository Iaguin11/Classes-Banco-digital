 module.exports = class Account { 
  #balanceValue 
  
    constructor(user){
      this.owner = user
      this.#balanceValue = 0
      this.deposits = []
      this.loans = []
      this.transfers = []
    }
    get balance(){
      return this.#balanceValue
    }

    addDeposits(deposit){
      this.#balanceValue += deposit.value
      this.deposits.push(deposit)
    }
    addLoan(loan){
      this.#balanceValue =+ loan.value 
      this.loans.push(loan)
    }
    addTransfer(transfer){
      if(transfer.toUser.email === this.owner.email){
        this.#balanceValue += transfer.value
        this.transfers.push(transfer)
      }else if (transfer.fromUser.email === this.owner.email){
        this.#balanceValue -= transfer.value
        this.transfers.push(transfer)
      }
    }
}


