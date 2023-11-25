function giveChange(amount) {
  let resp = [0, 0, 0, 0, 0, 0];
  while (amount > 0) {
    switch (amount>0) {
      case amount >= 100: resp[5]++; amount -= 100;
        break;
      case amount >= 50: resp[4]++; amount -= 50;
        break;
      case amount >= 20: resp[3]++; amount -= 20;
        break;
      case amount >= 10: resp[2]++; amount -= 10;
        break;
      case amount >= 5: resp[1]++; amount -= 5;
        break;
      case amount >= 1: resp[0]++; amount -= 1;
        break;
    }
  }
  return resp;
}

const giveChangeUp = (amount) => {
  return [100,50,20,10,5,1].map(a => ([a, amount] = [Math.trunc(amount/a), amount%a])[0]).reverse()
};

console.log(giveChange(365));
console.log(giveChangeUp(365));
console.log(giveChange(217));
console.log(giveChangeUp(217));
