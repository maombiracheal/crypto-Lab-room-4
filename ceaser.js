function caesarEncrypt(text, shift) {
    let result = ''; 
    for (let i= 0; i < text.length; i++) {
      let char = text[i];
        if(char >= 'A' && char <= 'Z') {
         let position = char.charCodeAt(0) -65;
         let newPosition = (position + shift) % 26;
         result+= String.fromCharCode(newPosition + 65);

            } else if (char >='a' && char <= 'z') { 

                // TODO: Complete for lowercase letters
                // Hint: Use 97 instead of 65}
                let lowerPosition=char.charCodeAt(0) -97;
                let newLower=(lowerPosition + shift) % 26;
                result+= String.fromCharCode(newLower + 97);
            
            }else {
                result += char;
            }
    } return result;
}
console.log(caesarEncrypt("Hello World", 3));

// Decryption using Caesar Cipher

function caesarDecrypt(text, shift) {
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            let base = (char === char.toUpperCase()) ? 65 : 97;
            decryptedText += String.fromCharCode(((code - base - shift + 26) % 26) + base);
        } else {
            decryptedText += char;
        }
    }
    return decryptedText;
}

console.log(caesarDecrypt("Khoor Zruog", 3));