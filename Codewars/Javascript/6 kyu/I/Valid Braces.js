function validBraces2(braces) {
    if (braces.length % 2) return false
    braces = braces.split('')
    for (let i = 0; i < braces.length; i++) {
        for (let j = i + 1; j < braces.length; j++) {
            if (braces[i] == '(') {
                return true
            }
        }
    }
}

function validBraces(braces) {
    while (/\(\)|\[\]|\{\}/g.test(braces)) {
        braces = braces.replace(/\(\)|\[\]|\{\}/g, '')
    }
    return !braces.length;
}

function validBraces3(braces) {
    var matches = { '(': ')', '{': '}', '[': ']' }
    var stack = [];
    var currentChar;

    for (let i = 0; i < braces.length; i++) {
        currentChar = braces[i]

        if (matches[currentChar]) {
            stack.push(currentChar)
        } else {
            if (currentChar !== matches[stack.pop()]) {
                return false
            }
        }
    }

    return stack.length === 0
}


console.log(validBraces3('[({})]([)]'));