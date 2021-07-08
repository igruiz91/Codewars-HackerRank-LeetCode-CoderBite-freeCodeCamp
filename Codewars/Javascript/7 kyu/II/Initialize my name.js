function initializeNames(name) {
  return name.split(' ').map((e,i,arr) => {
    if(i==0 || i==arr.length-1) return e
    else return e[0].toUpperCase()+'.'
  }).join(' ')
}

const initializeNamesUp = (name) => {
  return name.replace(/ (\w)\w*(?= )/g, ' $1.')
};

const initializeNamesUp2 = (name) => {
  return name.split(' ').map((e,i,arr) => i==0 ||  i==arr.length-1 ? e : `${e[0]}.`).join(' ')
};




console.log(initializeNames('Jack Ryan'));
console.log(initializeNames('Lois Mary black Lane'));
console.log(initializeNamesUp("Lois Mary black Lane"));
console.log(initializeNamesUp2("Lois Mary black Lane"));


