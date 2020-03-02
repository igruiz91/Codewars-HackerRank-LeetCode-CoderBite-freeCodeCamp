function top3(products, amounts, prices) {
    let profits = [], top=[]
    for(let i=0; i<amounts.length; i++)
        profits.push(amounts[i]*prices[i])
    let n = profits.sort((a,b) => a-b).slice(-3)[0]
    return products.filter((e,i) => {
        e =amounts[i]*prices[i]
        return e>=n
    })
}


const top3Automedom = (products, amounts, prices) =>{
    let arr=[]
    for(let i=0; i<products.length; i++)
        arr.push({
            product: products[i],
            profits: amounts[i]*prices[i]
        })
    return arr.sort((a,b) => b.profits- a.profits || products.indexOf(a.product)-products.indexOf(b.product)).slice(0,3).map(v=> v.product)
}

const top3Up = (products, amounts, prices) =>{
    return products.map((name, i) => ({
        name, i, revenue: amounts[i]*prices[i]
    })).sort((a,b) => b.revenue-a.revenue || a.i-b.i).slice(0,3).map(product => product.name)
}

console.log(top3Automedom(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [5, 25, 2, 7, 10, 3, 2, 24], [51, 225, 22, 47, 510, 83, 82, 124]));
console.log(top3Up(["Cell Phones", "Vacuum Cleaner", "Computer", "Autos", "Gold", "Fishing Rods", "Lego", " Speakers"], [5, 25, 2, 7, 10, 3, 2, 24], [51, 225, 22, 47, 510, 83, 82, 124]));