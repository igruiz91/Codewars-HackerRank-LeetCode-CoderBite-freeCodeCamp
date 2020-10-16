function fuelPrice(l, price) {
  let discount = l >=10 ? 0.25 : l >=8 ? 0.20 : l >=6 ? 0.15 : l >=4 ? 0.10 : l>= 2 ? 0.05 : 0
  let cost = l * (price -  discount);
  return cost.toFixed(2)
}

const fuelPriceUp = (l, price) => {
  let discount = Math.min(Math.floor(l/2)*0.05, 0.25)
  let finalCost = l * (price - discount);
  return price.toFixed(finalCost);
}

console.log(fuelPrice(8, 2.5), fuelPriceUp(8, 2.5));
console.log(fuelPrice(5, 5.6), fuelPriceUp(5, 5.6));
