function catMouse(x, j) {
  let cat = x.indexOf("C")
  let dog = x.indexOf("D")
  let mouse = x.indexOf('m')
  if ([cat, dog, mouse].some(x => x==-1)) return "boring without all three";
  if(Math.abs(mouse-cat)>j) return "Escaped!";
  if(dog>cat && dog<mouse || dog>mouse && dog<cat) return "Protected!";
  return "Caught!";
}


console.log(catMouse("............C.............D..m...", 8));
console.log(catMouse(".m.........D...C....", 17));
