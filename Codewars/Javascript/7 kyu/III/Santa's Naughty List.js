function findChildren(santasList, children) {
    let resp=[];
    santasList.map(c => children.includes(c) ? resp.push(c) : null)
    return [...new Set(resp)].sort()
}

const findChildrenUp = (santasList, children) => {
    return Array.from(new Set(children.filter(child => santasList.indexOf(child) !== -1).sort()))
}

 [ 'Jason', 'James', 'JJ' ]

let santa= [ 'Jason', 'James', 'Johnson' ]
let list = [ 'Jason', 'James', 'JJ' ]

console.log(findChildren(santa, list));
console.log(findChildrenUp(santa, list));