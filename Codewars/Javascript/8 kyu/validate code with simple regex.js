function validateCode (code) {
    return /^(1|2|3)\d+/.test(code)
}

const validateCodeUp = c => /^[1-3]/.test(c)

console.log(validateCode(123));
console.log(validateCodeUp(423));