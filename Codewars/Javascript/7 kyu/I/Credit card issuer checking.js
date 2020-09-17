function getIssuer(number) {
    number = `${number}`;
    let first = number.slice(0,4)
    let twoDigits = first.slice(0,2);
    if(`${first}`.startsWith('4') && (number.length==13 || number.length==16)) return 'VISA';
    if(first == '6011' && number.length==16) return 'Discover';
    if((twoDigits=='34' || twoDigits == '37') && number.length==15) return 'AMEX';
    if((parseInt(twoDigits)>50 && parseInt(twoDigits)<56) && number.length==16) return 'Mastercard';
    else return 'Unknown'
}

console.log(getIssuer(510510510510510));