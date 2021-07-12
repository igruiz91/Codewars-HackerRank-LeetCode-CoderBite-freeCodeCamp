function pascalsTriangle(n) {
  console.time("pascalsTriangleUp");
  let resp = [];
  for (let i = 0; i < n; i++) {
    resp[i] = new Array(i + 1);
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) resp[i][j] = 1;
      else resp[i][j] = resp[i - 1][j - 1] + resp[i - 1][j];
    }
  }
  console.timeEnd("pascalsTriangleUp");
  return resp.reduce((a, b) => a.concat(b));
}

const pascalsTriangleUp = (n) => {
  console.time("pascalsTriangleUp");
  let resp = [],
    index = 0;
  for (let i = 0; i < n; i++) {
    index = resp.length - i;
    for (let j = 0; j < i + 1; j++) {
      if (j == 0 || j == i) resp.push(1);
      else {
        resp.push(resp[index + j] + resp[index + j - 1]);
      }
    }
  }
  console.timeEnd("pascalsTriangleUp");
  return resp;
};

const pascalsTriangleUp2 = (n) => {
  console.time("pascalsTriangleUp");
  let resp = new Array((n * (n + 1)) / 2);
  let row = 1,
    col = 1;
  for (let i = 0, len = resp.length; i < len; i++) {
    if (col == 1 || col == row) resp[i] = 1;
    else {
      resp[i] = resp[i - row] + resp[i - row + 1];
    }
    if (col == row) {
      col = 1;
      row++;
    } else col++;
  }
  console.timeEnd("pascalsTriangleUp");

  return resp;
};

console.log(pascalsTriangle(6));
console.log(pascalsTriangleUp(6));
console.log(pascalsTriangleUp2(6));
