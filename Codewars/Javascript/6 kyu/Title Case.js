function titleCase(title, minorWords) {
  title=title.split(' ')
  minorWords=minorWords.split(' ')
  return  title.filter( w => minorWords.some(f => f.indexOf(w) > -1))
}

console.log(titleCase('a clash of KINGS', 'a an the of'));
