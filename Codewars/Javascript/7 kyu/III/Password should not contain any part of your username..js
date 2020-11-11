function validate(username, password) {
  if(password.includes(username)) return false
  let len = Math.ceil(password.length / 2);
  let substr =[]
  for(let i=0; len<=password.length; len++){
    let word = password.slice(i, len)
    substr.push(word.toLowerCase())
    i++
  }
  for(let i = 0; i<substr.length; i++){
    console.log(substr[i]);
    if (username.toLowerCase().includes(substr[i])) return false;
  }
  return true
}


//console.log(validate("username", "myname"));
console.log(validate("as", "password"));