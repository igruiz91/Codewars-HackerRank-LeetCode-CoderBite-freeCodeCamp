function titleCase(title, minorWords) {
  let str=''
  title=title.split(' ')
  minorWords=minorWords.split(' ')
  str =  title.map((w,i) => (minorWords.indexOf(w)!=-1) ? w.toLowerCase() : w[0].toUpperCase()+w.slice(1).toLowerCase()).join(' ')
  return str[0].toUpperCase()+str.slice(1)
}

function titleCase(title, minorWords) {
  minorWords.length==0 ? minorWords=[] : minorWords=minorWords.toLowerCase().split(' ')
  return title.toLowerCase().split(' ').map((v,i) => {
    if(v != '' && (minorWords.indexOf(v) !==-1 || i===0)){
      v= v.split('');
      v[0]=v[0].toUpperCase();
      v=v.join('')
    }
    return v
  }).join(' ');
}

console.log(titleCase('a clash of KINGS', 'a an the of'));
