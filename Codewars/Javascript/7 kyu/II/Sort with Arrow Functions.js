var OrderPeople = function(people){
  return people.sort((a,b) => a.age - b.age)
}



let p =[ { age: 83, name: 'joel' },
{ age: 46, name: 'roger' },
{ age: 99, name: 'vinny' },
{ age: 26, name: 'don' },
{ age: 74, name: 'brendan' } ]
console.log(OrderPeople(p))