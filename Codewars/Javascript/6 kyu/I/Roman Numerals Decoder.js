function solution(roman) {
    let nums = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 }
    console.log(nums.C);
    let numeros = roman.split('').map(c => {
        return c = nums[c]
    })
    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] < numeros[i + 1]) {
            numeros[i] = +numeros[i] * -1
        }
    }
    console.log(numeros);
    console.log(numeros.reverse());
    return numeros.reduce((a, b) => a + b)
}

function solution2(roman) {
    var conversion = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

    return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[roman], 0);
}

function solution3(roman) {
    var rom = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
    return roman.split('').reverse().reduce(
        function (acum, c, i, rr) {
            c = rom[c];
            i = rom[rr[i - 1]] || 0;
            return acum + (i <= c ? c : -c)
        }
        , 0
    )
}

function solution(roman) {
    var romanos = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };
    return roman.split('').map(num => romanos[num]).reduce((sum, v, i, o) => sum + ((o[i + 1] > v) ? -v : v), 0);
}

console.log(solution('MMXMV'));

//.reduce((a, b) => a + b)