function charCheck(text, max, spaces) {
    if (!spaces) text = text.split(' ').join('')
    return [text.length <= max, text.slice(0, max)]
};

console.log(charCheck("I am applying for the role of Base Manager on Titan.", 60, false));