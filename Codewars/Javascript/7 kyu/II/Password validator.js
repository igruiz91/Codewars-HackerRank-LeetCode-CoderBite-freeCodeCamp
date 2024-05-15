function password(str) {
  let uppercase = /[A-Z]/g.test(str)
  let lowercase = /[a-z]/g.test(str)
  let number = /\d/g.test(str)
  return str.length > 7 && uppercase && lowercase && number
}



console.log(password("aae1"))
console.log(password("aaA1aasasdfass"))
console.log(password("aaaasasdfass"))
console.log(password("aaaasas1fass"))
console.log(password("aaaasas1fass"))
