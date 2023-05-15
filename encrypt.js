function tripleDesEncrypt(message, key) {
  // Convert key and message to WordArray objects
  var keyHex = CryptoJS.enc.Hex.parse(key);
  var messageHex = CryptoJS.enc.Hex.parse(message);

  // Encrypt the message using TripleDES algorithm with CBC mode and PKCS7 padding
  var encrypted = CryptoJS.TripleDES.encrypt(messageHex, keyHex, {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  // Check if encrypted object and its properties are defined before accessing them
  if (!encrypted || !encrypted.hasOwnProperty('ciphertext') || !encrypted.ciphertext.hasOwnProperty('toString')) {
    throw new Error('Encryption failed');
  }

  // Convert the ciphertext to base64 format and return it
  return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
}



function aesEncrypt(message, key) {
    // Generate a random key with a length of 32 bytes (256 bits)
    const keyBytes = crypto.getRandomValues(new Uint8Array(32));
  
    // Generate a random 16-byte initialization vector
    const iv = crypto.getRandomValues(new Uint8Array(16));
  
    // Create an AES-CBC mode instance with the key and iv
    const aesCbc = new aesjs.ModeOfOperation.cbc(keyBytes, iv);
  
    // Convert the message to a format that AES can use
    const messageBytes = aesjs.utils.utf8.toBytes(message);
  
    // Encrypt the message using the cipher
    const encryptedBytes = aesCbc.encrypt(messageBytes);
  
    // Convert the encrypted bytes to a hex string
    const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);

    return encryptedHex;
  
  }
  

function desEncrypt(message, key) {
    // Convert the message and key to WordArray objects
    let messageBytes = CryptoJS.enc.Utf8.parse(message);
    let keyBytes = CryptoJS.enc.Utf8.parse(key);
  
    // Encrypt the message using DES algorithm
    let encrypted = CryptoJS.DES.encrypt(messageBytes, keyBytes, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });
  
    // Convert the encrypted message to a string and return it
     return encrypted.toString();
  }

function encryptMessage() {
    let message = document.getElementById("message").value;
    let key = document.getElementById("text-field").value;
    let algorithm = document.getElementById("dropdown").value;
    let encryptedMessage;

    console.log(message);
    console.log(algorithm);
    console.log(key);
    if (algorithm === "DES") {
        encryptedMessage = desEncrypt(message, key);

    } 

    else if (algorithm === "3DES") {
        encryptedMessage = tripleDesEncrypt(message, key);
    } 
    
    else if (algorithm === "AES") {
        encryptedMessage = aesEncrypt(message, key);
    }
    
    else {
      alert("Invalid algorithm selected!");
      return;
    }
  
    document.getElementById("encrypted-message").value = encryptedMessage;
  

}



  
