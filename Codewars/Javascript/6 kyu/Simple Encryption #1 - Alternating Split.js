function encrypt(text, n) {
    return text.split('').map(word => word.slice(n))
}

let a=Number.f