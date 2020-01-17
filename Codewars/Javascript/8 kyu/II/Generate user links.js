function generateLink(user) {
    return `http://www.codewars.com/users/${encodeURIComponent(user)}`
}

console.log(generateLink(''));