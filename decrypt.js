// Get the encrypted message, key, and algorithm from the HTML input fields
const encryptedMessage= document.getElementById("message").value;
const key = document.getElementById("text-field").value;
const algorithm = document.getElementById("dropdown").value;






// Decrypt the message using the CryptoJS library
let decryptedMessage =encryptedMessage;

console.log(message);
console.log(algorithm);
console.log(key);


function desDecrypt(encryptedMessage, key) {
  // Convert the encrypted message and key to WordArray objects
  let encryptedMessageBytes = CryptoJS.enc.Hex.parse(encryptedMessage);
  let keyBytes = CryptoJS.enc.Utf8.parse(key);

  // Decrypt the message using DES algorithm
  let decrypted = CryptoJS.DES.decrypt(
    {
      ciphertext: encryptedMessageBytes
    },
    keyBytes,
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }
  );

  // Convert the decrypted message to a string and return it
  return decrypted.toString(CryptoJS.enc.Utf8);
}





if (algorithm === "DES") {
  decryptedMessage =desDecrypt(encryptedMessage, key);
}

else if (algorithm === "3DES") {
  decryptedMessage = CryptoJS.TripleDES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);
}

else if (algorithm === "AES") {
  decryptedMessage = CryptoJS.AES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);
}

// Set the decrypted message in the HTML output field
document.getElementById("decrypted-message").value = decryptedMessage;
