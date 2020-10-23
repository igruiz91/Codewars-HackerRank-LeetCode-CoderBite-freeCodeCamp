const dic = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
};
const mult = { hundred: 100, thousand: 1000, million: 1000000 };
function parseInt2(str) {
  return str.split(/ |-/).reduce((value, word) => {
    if (dic[word]) value += dic[word];
    if (mult[word]) {
      value += mult[word] * (value % mult[word]) - (value % mult[word]);
    }
    return value;
  }, 0);
}

const parseInt = (str) => {
  let arr = str.split(/ |-/);
  let result = 0;
  let helper = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    and: 0,
    thousand: function (n) {
      result += n * 1000;
      return 0
    },
    hundred: function (n) {
      return  n * 100;
    },
    million: function (n) {
      result += n * 1000000
      return 0
    },
  };
  var lastNum = arr.reduce((previous, current) => {
    if (typeof helper[current] === "number") {
      return (previous += helper[current]);
    } else {
      return helper[current](previous);
    }
  }, 0);
  return result + lastNum;
};

//console.log(Math.pow(10,0));

console.log(204%100);
// console.log(parseInt2("two hundred forty-six"));
// console.log(parseInt2("one thousand three hundred and thirty-seven"));
// console.log(parseInt("one thousand three hundred and thirty-seven"));
