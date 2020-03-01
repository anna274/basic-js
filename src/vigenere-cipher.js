class VigenereCipheringMachine {

    constructor(isDirect = true) {
        this.isDirect = isDirect;
        this.sequence = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.n = this.sequence.length;
    }

    encrypt(message, key) {

        if(message == undefined || key == undefined){
            throw new Error();
        } 
    
        let encryptedMessage = '';
        let messageLength = message.length, keyLength = key.length;
    
        for(let i = 0, j = 0; i < messageLength; i++){
            if(/[A-Za-z]/.test(message[i]) == true){
                encryptedMessage += this.sequence[(this.sequence.indexOf(message[i].toUpperCase()) + this.sequence.indexOf(key[j%keyLength].toUpperCase())) % this.n];
                j++;
            }else{
                encryptedMessage += message[i];
            }
        }
        return this.isDirect? encryptedMessage: encryptedMessage.split('').reverse().join('');
    }

    decrypt(encryptedMessage, key) {

        if(encryptedMessage == undefined || key == undefined){
            throw new Error();
        } 

        let message = '';
        let encrMessageLength = encryptedMessage.length, keyLength = key.length;
    
        for(let i = 0, j = 0; i < encrMessageLength; i++){
            if(/[A-Za-z]/.test(encryptedMessage[i]) == true){
                message += this.sequence[(this.n - this.sequence.indexOf(key[j%keyLength].toUpperCase()) + this.sequence.indexOf(encryptedMessage[i].toUpperCase()))%this.n];
                j++;
            }else{
               message += encryptedMessage[i];
            }
        }
        return this.isDirect? message: message.split('').reverse().join(''); 
    }
}

module.exports = VigenereCipheringMachine;
