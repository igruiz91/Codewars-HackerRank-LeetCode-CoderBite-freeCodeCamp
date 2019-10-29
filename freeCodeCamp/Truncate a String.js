function truncateString(str, num) {
    let final=''
    num>=str.length ? final='' : final='...'
    return `${str.slice(0,num)}${final}`;
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));