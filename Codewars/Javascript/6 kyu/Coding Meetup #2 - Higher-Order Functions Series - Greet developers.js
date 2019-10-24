function greetDevelopers(list) {
    list.map(d=> d.greeting =`Hi ${d.firstName}, what do you like the most about${d.language}?`)
    return list
}

function greetingsDev(list) {
  list.forEach(developer => developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`)
  return list  
}

var list1 = [
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];


console.log(greetingsDev(list1));