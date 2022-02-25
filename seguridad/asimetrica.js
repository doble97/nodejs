const crypto = require('crypto')
const jose = require('jose')
//const { privateKey, publicKey } = crypto.generateKeyPairSync('ec', {
    namedCurve: 'sect239k1'
});

async function createJso() {
    const jwt = await new jose.SignJWT({ 'urn:example:claim': true })
        .setProtectedHeader({ alg: 'ES256' })
        .setIssuedAt()
        .setIssuer('urn:example:issuer')
        .setAudience('urn:example:audience')
        .setExpirationTime('2h')
        .sign()
    console.log(jwt)
}

const { publicKey, privateKey } = await jose.generateKeyPair('PS256')
console.log(publicKey)
console.log(privateKey)
// createJso()
//     .then(r=>{
//         console.log('hecho');
//     })
//     .catch(err=>{
//         console.log('err',err);
//     })
//Encriptando
// const encrypData = crypto.publicEncrypt({
//     key: publicKey,
//     padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
//     oaepHash: 'sha256'
// }, Buffer.from('hola mundo adjfaj asdfkjl'));
// console.log('ENCRYP DATA->', 'hola mundo', encrypData.toString('base64'));

// const decryptedData = crypto.privateDecrypt({
//     key: privateKey,
//     padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
//     oaepHash: 'sha256'
// }, encrypData);
// console.log('DESENCRIPTADO:', decryptedData.toString());