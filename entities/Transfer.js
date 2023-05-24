module.exports = class Transfer {
  constructor(userEnvi,userToReceive,value){
      this.usertoSend = userEnvi
      this.userToReceive = userToReceive
      this.value = value
      this.creationDate = new Date()
  }
}