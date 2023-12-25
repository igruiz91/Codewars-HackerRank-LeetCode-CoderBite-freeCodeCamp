function add() {
  return  [...arguments].reduce((acc, curr, i) => acc+curr*(i+1), 0)
}


console.log(add(3, 4, 5));
