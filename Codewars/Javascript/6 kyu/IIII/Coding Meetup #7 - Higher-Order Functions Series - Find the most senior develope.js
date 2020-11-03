function findSenior(list) {
    let exp = list.slice().sort((a,b) => b.age - a.age)[0].age
    return list.filter(p => p.age==exp)
}

function findSeniorUp(list){
    const maxAge = Math.max(...list.map(person => person.age))
    return list.filter(p => p.age==maxAge)
}

const findSeniorUp2 = list => list.filter(x => x.age == Math.max(...list.map( e => e.age)))


var list1 = [
    { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
    { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
    { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
    { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
  ];
console.log(findSenior(list1));
console.log(findSeniorUp(list1));
console.log(findSeniorUp2(list1));