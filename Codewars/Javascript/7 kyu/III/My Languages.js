function myLanguages(results) {
    return Object.keys(results).filter(x => results[x]>59).sort((a,b) => results[b]-results[a])
}

const myLanguagesUp = results => {
    return Object.entries(results).filter(e => e[1]>59).sort((a,b) => b[1]-a[1]).map(x)
}

console.log(myLanguages({"Python": 10, "Ruby": 80, "Java": 65} ));
console.log(myLanguagesUp({"Python": 10, "Ruby": 60, "Java": 65} ));