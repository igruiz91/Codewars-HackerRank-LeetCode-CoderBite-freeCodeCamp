function encrypt(text, n) {
    if (!text || n <= 0) return text
    while (n--) {
        let str = ''
        for (let i = 1; i < text.length; i += 2) {
            str += text[i]
        }
        for (let i = 0; i < text.length; i += 2) {
            str += text[i];
        }
        text = str;
    }
    return text;
}

function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return text
    const ans = new Array(encryptedText.length);
    while (n--) {
        let j = 0;
        for (let i = 1; i < ans.length; i += 2) {
            ans[i] = encryptedText[j++]
            console.log(ans);
        }
        for (let i = 0; i < ans.length; i += 2) {
            ans[i] = encryptedText[j++]
        }
        encryptedText = ans.join('')
    }
    return encryptedText
}

console.log(encrypt("This is a test!", 1));
console.log(decrypt("hsi  etTi sats!", 1));