function mango(quantity, price) {
    return quantity % 3 == 0 ? quantity / 3 * price * 2 : Math.floor(quantity / 3) * price * 2 + quantity % 3 * price
}

console.log(mango(7, 3));