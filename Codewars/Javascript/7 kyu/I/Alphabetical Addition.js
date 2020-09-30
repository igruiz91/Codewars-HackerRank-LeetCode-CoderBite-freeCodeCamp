function addLetters(...letters) {
    let letter = String.fromCharCode((letters.map(l => l.charCodeAt()-96).reduce((a,b)=>a+b,0)%26)+96);
    return letter ==="`" ? 'z' : letter
}