/*
    Check Permutation: Given two strings, write a method to decide if one is a permutation of the
other.
*/

function permutation(s, t) {
    if (s.length != t.length) return false;
    let letters = [];
    let s_array = s.split('');
    for (c of s_array) {
        letters[c] ? letters[c]++ : letters[c] = 1
    }
    for (let i = 0; i < t.length; i++) {
        let c = t[i];
        console.log(letters);
        if (letters[c]) {
            letters[c]--
            if (letters[c] < 0) return false
        }
        else return false
    }
    return true
}

console.log(permutation('abca', 'acaa'));