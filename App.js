const Account = require("./entities/Account");
const Deposit = require("./entities/Deposit");

const newConta = new Account('1200','10','2','1',)
const newDeposits = newConta.newDeposits('200')

console.table({newConta, newDeposits})

