/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

function scramble1(str1, str2) {
    let count = 0;
    let arr1 = [...str1];
    let arr2 = [...str2];
    for (let i of arr2) {
        let temp = 0;
        for (let j of arr1) {
            if (i == j) {
                count++;
                for (let k = tmp; k < arr1.length - 1; k++) {
                    arr1[k] = arr1[k + 1]
                }
                break;
            }
            tmp++
        }
    }
    return str2.length == count
}

const a = 'a'.charCodeAt()

function scramble(str1, str2) {
    const len1 = str1.length
    const len2 = str2.length

    if (len1 < len2) {
        return false
    }

    const arr2 = Array(26).fill(0)
    for (let i = 0; i < len2; i++) {
        arr2[str2.charCodeAt(i) - a]++
    }

    for (let i = 0, j = len2; i < len1; i++) {
        const chr1 = str1.charCodeAt(i) - a
        const num2 = arr2[chr1]

        if (num2) {
            if (--j === 0) {
                return true
            }

            arr2[chr1] = num2 - 1
        }
    }
    return false
}

function scrambleUp(str1, str2) {
    let occurences = str1.split("").reduce((arr, cur) => {
        arr[cur] ? arr[cur]++ : arr[cur] = 1;
        return arr;
    }, {});
    return str2.split("").every(character => --occurences[character] >= 0);
}

function scrambleUp2(str1, str2) {
    var hashtab = [...new Array(256)].map(x => 0);

    str2.split('').map(c => hashtab[c.charCodeAt(0)]++)

    str1.split('').map(c => hashtab[c.charCodeAt(0)]--);

    hashtab = hashtab.filter(x => x > 0)
    return hashtab.length == 0;
}

console.log(scrambleUp2('rkqodlw', 'world'));