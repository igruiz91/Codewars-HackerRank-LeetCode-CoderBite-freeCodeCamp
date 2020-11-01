//https://www.codewars.com/kata/57274562c8dcebe77e001012/train/javascript

function cutIt(arr) {
  let min = Math.min(...arr.map(e => e.length))
  return arr.map(e => e.slice(0, min))
}


console.log(cutIt(["abc", "defgh", "ijklmn", 'asd']));