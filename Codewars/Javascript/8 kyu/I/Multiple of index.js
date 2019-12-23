function multipleOfIndex(array) {
    return array.filter((n, i) => n % i == 0)
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));