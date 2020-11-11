function removeDuplicateWords2 (s) {
    s = s.split(' ')
    return [... new Set(s)]
}

const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')


console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));