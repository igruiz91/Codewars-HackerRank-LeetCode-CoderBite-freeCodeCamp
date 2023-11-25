function trim(str, size) {
  return str.length < size
  ? str
  : size > 3
  ? str.slice(0, size - 3) + "..."
  : str.slice(0, size) + "...";
}
function trimUp(str, size) {
  return str.length <= size ? str : str.slice(0, size-(size <=3 ? 0 : 3)) + "...";
}
console.log(trim("vItu", 4));
console.log(trimUp("vItu", 4));
console.log(trim("Creating kata is fun", 14));
console.log(trimUp("Creating kata is fun", 14));
console.log(trim("yAKT xFNTv", 17));
console.log(trimUp("yAKT xFNTv", 17));
console.log(trimUp("He", 1));
console.log(trim("He", 1));
