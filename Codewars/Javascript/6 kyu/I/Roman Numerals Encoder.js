function solution(number) {
    var decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    var roman    = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var result = '';
    decimals.map((value, i) => {
        while (number >= value) {
            result += roman[i];
            number -= value
        }
    })
    return result
}

console.log(DataView('2-4-199'));
let a = new Date()
console.log(a);
console.log(a.getFullYear());
console.log(a.getUTCMonth());
console.log(a.getUTCDate());

//console.log(solution(11));