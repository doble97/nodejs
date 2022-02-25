const jose = require('jose')
const {publicKey, privateKey} = cry

const jwt = await new jose.SignJWT({ 'urn:example:claim': true })
  .setProtectedHeader({ alg: 'ES256' })
  .setIssuedAt()
  .setIssuer('urn:example:issuer')
  .setAudience('urn:example:audience')
  .setExpirationTime('2h')
  .sign(privateKey)

console.log(jwt)