var addOneRow = function (root, val, depth) {
  var cantArrays = 0;
  var exp = 0;
  while (exp < root.length) {
    exp = Math.pow(2, cantArrays);
    cantArrays++;
  }
  cantArrays--;
  // console.log(cantArrays);
  var pullArrays = [];
  var i = 0;
  while (i < cantArrays) {
    var newArray = [];
    elements = Math.pow(2, i);
    var c = 0;
    while (c < elements) {
      if (root[0]) {
        newArray.push(root[0]);
        root.splice(0, 1);
      } else {
        newArray.push(null);
        root.splice(0, 1);
      }
      c++;
    }
    pullArrays.push(newArray);
    i++;
  }
  var newArray = [];
  console.log(pullArrays);
  pullArrays[depth - 1].forEach((element) => {
    if (element != null) {
      newArray.push(val);
    }
  });
  pullArrays.splice(depth - 1, 0, newArray);
  generatedArray = [];
  var flag = true;
  newArray.forEach((element, i) => {
    var newPair = [];
    if (flag) {
      newPair = [pullArrays[depth][i], null];
    } else {
      newPair = [null, pullArrays[depth][i]];
    }
    newPair.forEach((element) => {
      generatedArray.push(element);
    });
    flag = !flag;
  });
  pullArrays[depth] = generatedArray;

  var response = pullArrays.flatMap((e) => e);

  var cleaning = true;
  while (cleaning) {
    if (response[response.length - 1] == null) {
      response.splice(response.length - 1, 1);
    } else {
      cleaning = false;
    }
  }

  // console.log(response);

  return response;
};

// let root = [4, 2, null, 3, 1]
// let val = 1;
// let depth = 3

let root = [4, 2, 6, 3, 1, 5];
let val = 1;
let depth = 2;

console.log(addOneRow(root, val, depth))
