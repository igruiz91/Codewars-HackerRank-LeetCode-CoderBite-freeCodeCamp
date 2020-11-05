function myParseInt(str) {
    return (str.trim().match(/[\D]/)) ? 'NaN' : parseInt(str) 
}
console.log(myParseInt('17.42'));