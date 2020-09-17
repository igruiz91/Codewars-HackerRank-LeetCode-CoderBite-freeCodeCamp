/*
Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
*/


function tripledouble(num1, num2) {
    let n1 = `${num1}`.match(/111|222|333|444|555|666|777|888|999|000/g)
    let n2 = `${num2}`.match(/11|22|33|44|55|66|77|88|99|00/g)
    if (n2 == null || n1 == null) return 0
    console.log(n1);
    console.log(n2);
    for (let i = 0; i < n1.length; i++) {
        let t = n1[i].slice(0, 2)
        if (n2.includes(t)) {
            return 1
        }
    }
    return 0
}

function tripledouble(n1, n2) {
    for (let i = 0; i <= 9; i++) {
        if (new RegExp(`${i}{3}`).test(n1) && new RegExp(`${i}{2}`).test(n2)) return 1
    }
    return 0
}

function tripledouble(num1, num2) {
    let nums = [...Array(10).keys()];

    return +nums.some(num =>
        num1.toString().includes(num.toString().repeat(3)) &&
        num2.toString().includes(num.toString().repeat(2))
    );
}

console.log(tripleDoubleUp(1112, 122));