var primeListFirst = function (top) {
  let resp = [];
  let contador = 0;
  for (let j = 1; j <= top; j++) {
    if (j % 2 == 0) continue;
    else {
      for (let i = 3; i < j; i += 2) {
        if (j % i == 0) break;
        else if ((i + 1) ** 2 > j) {
          resp[contador] = j;
          contador++;
        }
      }
    }
  }
  return resp;
};

const isPrime = (n) => {
  if (n % 2 == 0) return false;
  for (let i = 3; i * i <= n; i += 2) if (n % i == 0) return false;
  return true;
};

var primeList = function (top) {
  let resp = [2];
  for (let i = 3, count = 1; i <= top; i++) {
    if (isPrime(i)) {
      resp[count] = i;
      count++;
    }
  }
  return resp;
};

var eratosthenes = function (n) {
  var array = [],
    upperLimit = Math.sqrt(n),
    resp = [2];
  for (var i = 0; i < n; i++) array.push(1);
  for (var i = 3; i <= upperLimit; i += 2)
    if (array[i]) {
      for (var j = i * i; j < n; j += 2 * i) array[j] = 0;
    }
  for (var i = 3; i < n; i += 2) if (array[i]) resp.push(i);
  return resp;
};

function primeListUp(limit) {
  let resp = [2];
  let arr = new Uint8Array(limit);
  for (let i = 3; i <= limit; i += 2) {
    if (!arr[i]) {
      resp.push(i);
      for (let j = i * i; j < limit; j += i) {
        arr[j] = 1;
      }
    }
  }
  return resp;
}

//console.log(eratosthenes(10));
console.log(primeListUp(10));

//
