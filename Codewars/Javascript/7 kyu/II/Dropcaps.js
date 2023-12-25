function dropCap(string) {
  let words = string.split(/\b/);
  return  words.map((word) => word.length > 2 ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word).join('');
  }


  const dropCapUp = (str) => {
    return str.replace(/\b(\w)(\w{2,})/g, (_,$1,$2) =>$1.toUpperCase()+$2.toLowerCase());
  }

console.log(dropCap("Apple"));
console.log(dropCap("apple of banana"));
console.log(dropCap("one   space"));

console.log(dropCapUp("Apple"));
console.log(dropCapUp("apple of banana"));
console.log(dropCapUp("one   space"));
