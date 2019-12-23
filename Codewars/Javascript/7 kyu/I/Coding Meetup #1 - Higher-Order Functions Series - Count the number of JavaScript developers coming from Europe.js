function countDevelopers(list) {
    let contador = 0
    list.map(d => {
        if (d.continent == 'Europe') {
            return contador++
        }
    })
    return contador ? 1 : 0
}

function countDevelopers2(list) {
    return list.filter(x => x.continent == 'Europe' && x.language == 'JavaScript').length
}


var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Europe', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

console.log(countDevelopers2(list1));