<<<<<<< HEAD
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
=======
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
>>>>>>> d4032ec81459f9b8a6dd31aac9e65034e91228b3
