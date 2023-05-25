module.exports = class Account {
  #balence
  constructor(user){
    this.owner = user
    this.#balence = 0 
    this.deposits = []
    this.loans = []
    this.transfers= []
  }
  get balance(){
    return this.#balence
  }

  addDeposit(deposit){
    this.#balence += deposit.value
    this.deposits.push(deposit)
  }
  addLoan(loan){
    this.#balence += loan.value 
    this.loans.push(loan)
  }
  addTransfer(transfer){
    if(transfer.toUser.email === this.owner.email){
      this.#balence += transfer.value
      this.transfers.push(transfer)
    }else if (transfer.fromUser.email === this.owner.email){
      this.#balence -= transfer.value
      this.transfers.push(transfer)
    }
  }
}