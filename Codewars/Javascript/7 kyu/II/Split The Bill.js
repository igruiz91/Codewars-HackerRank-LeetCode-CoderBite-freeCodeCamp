function splitTheBill(x) {
  let sum = 0, count = 0,avg = 0, resp={}
  for (const value of Object.values(x)) {
    sum += value;
    count++;
  }
  avg = sum / count
  for (let [key, value] of Object.entries(x))
    resp[key]=Math.round((value-avg)*100)/100
  return resp;
}

const splitTheBillUp = (x) => {
  let obj = Object.values(x)
  let avg = obj.reduce((sum, e) =>sum+=e)/obj.length
  return Object.keys(x).reduce((e,v) => (e[v]=+(x[v]-avg).toFixed(2),e),{})
};


var group = {
  A: 20,
  B: 15,
  C: 10,
};

var group2= {A: 40, B: 25, X: 10}

console.log(splitTheBillUp(group));
console.log(splitTheBill(group2));
