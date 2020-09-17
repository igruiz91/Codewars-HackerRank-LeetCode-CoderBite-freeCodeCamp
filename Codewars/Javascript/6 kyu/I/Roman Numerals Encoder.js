function solution(number) {
    var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1], roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var result = '';
    decimals.map((value, i) => {
        while (number >= value) {
            result += roman[i];
            number -= value
        }
    })
    return result
}

console.log(solution(11));