const { Hash_Password } = require('./hashes_password')
let salt = Buffer.from('holajojfw9r49urfadñfadk92k42f8jdaforadfa')//32
//initVector = Buffer.from('123456789123asdasdfaa').slice(0,16)//16
let initVector = Buffer.from('tTOGwyspinF*KNdaddfadasdfasdfa')
const encoder = new Hash_Password(salt.slice(0,32), initVector.slice(0,16))
const hash = encoder.cipher('holamundo')
console.log(encoder.decipher(hash));