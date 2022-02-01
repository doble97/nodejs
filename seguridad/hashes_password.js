const crypto = require('crypto');

class Hash_Password {
    constructor(salt, initVector) {
        this.algorithm = 'aes-256-cbc'
        this.key = Buffer.from(salt)
        if (!(this.key.length==32)){
            throw new ErrorLengthException('Key error length', 'KeyLength')
        }
        this.initVector = initVector
        if(!(this.initVector.length==16)){
            throw new ErrorLengthException('InitVector error length', 'IVectorLength')
        }
    }

    cipher(password) {
        const _cipher = crypto.createCipheriv(this.algorithm, this.key, this.initVector);
        let hash = _cipher.update(password, 'utf-8', 'hex')
        hash += _cipher.final('hex')
        return hash
    }

    decipher(hash) {
        const _dcipher = crypto.createDecipheriv(this.algorithm, this.key, this.initVector);
        let _password = _dcipher.update(hash, 'hex', 'utf-8')
        _password += _dcipher.final('utf-8')
        return _password
    }
}
class ErrorLengthException extends Error {
    constructor(msg, type) {
        super(msg)
        this.name = 'ErrorLength'
        this.type = type
    }
}

module.exports = {Hash_Password, ErrorLengthException}