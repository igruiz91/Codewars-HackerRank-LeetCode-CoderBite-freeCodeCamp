function spinalCase(str) {
  str =str.replace(/\W|\_/g, '-');
  let capture = true
  return str.split('').map((c,i)=> {
    if(c === '-') capture=false
    if (i != 0 && c.toUpperCase() == c && capture) {
      capture = true
      return "-" + c.toLowerCase();
    }
    return c.toLowerCase(); 
  }
  ).join('')
};

const spinalCaseUp = (str) => { 
  return str.split(/\s|_(?=[A-Z])/).join('-').toLowerCase();  
}



console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCaseUp("This Is Spinal Tap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));