function flickSwitch(arr) {
  for(let i=0, flick=true; i<arr.length; i++) {
    if(arr[i] == "flick") flick = !flick
    arr[i] = flick
  }
  return arr
}



console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
console.log(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]));
