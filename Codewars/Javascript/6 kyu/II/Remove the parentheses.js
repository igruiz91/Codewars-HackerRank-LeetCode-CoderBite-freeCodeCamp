function removeParentheses(s) {
  let resp='';
  let track = []
  let deleting = false;
  let i = 0;
  while (s.length>i) {
    let char = s[i]
    //console.log(s[i])
    if ( char == "(") {
      track.push("(");
      deleting = true
    }else if(char == ')'){
      track.pop()
      if(track.length == 0) deleting = false
      i++
      continue
    }
    deleting ? resp+='' : resp+=char
    i++
  }
  return resp
}

const removeParenthesesUp = (str) => {
  let p = 0;
  let resp = ''
  for(c of str){
    if(c =='(') p++
    if(p==0) resp+=c
    if(c==')') p--
  }
  return resp
};

const removeParenthesesUp2 = (str) => {
  return str.replace(/\([^()]*?\)/g, "");
}

let example1 ="(first group) (second group) (third group)"
let example2 = "example(unwanted thing)example";
let example3 = "hello example (words(more words) here) something";
console.log(removeParentheses(example1), removeParenthesesUp2(example1));
console.log(removeParentheses(example2), removeParenthesesUp2(example2));
console.log(removeParentheses(example3), removeParenthesesUp2(example3));