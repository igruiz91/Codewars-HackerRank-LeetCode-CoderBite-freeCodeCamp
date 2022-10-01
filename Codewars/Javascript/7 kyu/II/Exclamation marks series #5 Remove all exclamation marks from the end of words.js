function remove(string) {
  return string.replace(/(\w+)(!+)/g, "$1");
}

const removeUp = (str) => { return str.replace(/\b!+/g, "") }


console.log(remove("!Hi! hi!!"));
console.log(removeUp("!Hi! hi!!"));
