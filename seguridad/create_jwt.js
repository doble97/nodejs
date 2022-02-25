const jose = require('jose')


async function createKeys(){
    const { publicKey, privateKey } = await jose.generateKeyPair('PS256')
console.log(publicKey)
console.log(privateKey)
const privateJwk = await jose.exportJWK(privateKey)
const publicJwk = await jose.exportJWK(publicKey)

console.log(privateJwk)
console.log(publicJwk)
}
createKeys()
    .then(r=>{
        console.log(JSON.stringify(r));
    })
    .catch(err=>{
        console.log('err');
    })