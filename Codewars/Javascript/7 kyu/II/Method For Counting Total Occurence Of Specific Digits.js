function List() {
  this.countSpecDigits = function (integersList, digitsList) {
    return digitsList.map((d) => {
      let occurrence = integersList.filter(n => `${n}`.includes(d));
      let total = occurrence.map(c => `${c}`.split('').filter(n => n == d).join('')).join('').length
      return [d, total]
    })
  };
}



integersList = [1, 1, 2, 3, 1, 2, 3, 4];
digitsList = [1, 3];


integersList2 = [-18, -31, 81, -19, 111, -888];
digitsList2 = [1, 8, 4];

let l = new List()
let l2 = new List()

// console.log(l.countSpecDigits(integersList, digitsList))
console.log(l2.countSpecDigits(integersList2, digitsList2))
