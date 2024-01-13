function hasSubpattern(string) {
  if (string.length < 2) return false;
  for (let i = 1, len = string.length / 2 + 1; i < len; i++) {
    let pattern = string.slice(0, i)
    if(string.split(pattern).join("")=="")return true
  }
  return false;
}

const hasSubpatternUp = (str) => {
  return str.match(/^(.*)\1+$/) !== null
}


const hasSubpatternClever = (str) => {
  return (str+str).indexOf(str, 1) != str.length
}

 console.log(hasSubpatternClever("ababab"));
 console.log(hasSubpatternClever("abab"));
 console.log(hasSubpatternClever("abbab"));


console.log(hasSubpattern("ababab"));
console.log(hasSubpatternUp("ababab"));
console.log(hasSubpatternUp("abbab"));
