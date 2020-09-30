function calculateYears(principal, interest, tax, desired){
    let annos = 0
    while (principal<desired) {
        principal+=(principal*interest)*(1-tax)
        annos++;
    }
    return annos
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));