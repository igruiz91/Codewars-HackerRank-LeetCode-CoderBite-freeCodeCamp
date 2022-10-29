function search(budget, prices) {
    return prices.filter(x => x<=budget).sort((a,b) => a-b).toString()
}
console.log(search(3, [6, 1, 2, 9, 2]));
