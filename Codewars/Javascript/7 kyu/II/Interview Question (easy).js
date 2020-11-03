function getStrings(city) {
  let arr = city.toLowerCase().replace(/ /g, '').split('').reduce((acc, curr) => {
    acc[curr] ? acc[curr]+="*" : acc[curr]="*"
    return acc
  } ,[])
  return Object.entries(arr).map(a => a.join(':')).join('')
}


console.log(getStrings("Chic ago"));
//console.log(getStrings("Bangkok"));