function checkCashRegister(price, cash, cid) {
  if(price == cash) return {status: "CLOSED", change: cid}
  const original = JSON.parse(JSON.stringify(cid))
  let change = cash-price;
  let currency = {"PENNY": 0.01,"NICKEL": 0.05,"DIME": 0.1,"QUARTER": 0.25,"ONE": 1,"FIVE": 5,"TEN": 10,"TWENTY": 20,"ONE HUNDRED": 100}
  let changeObj = {};
  let newCid=[]
  for(let i = cid.length-1; i>=0;i--){
    let t = cid[i][0];
    while(change>=currency[t] && cid[i][1]>0){
      change = (change-currency[t]).toFixed(2);
      cid[i][1]=(cid[i][1]-currency[t]).toFixed(2);
      changeObj[cid[i][0]] ? changeObj[cid[i][0]]+=currency[t] : changeObj[cid[i][0]] = currency[t];
    } 
  }
  if (change > 0) return { status: "INSUFFICIENT_FUNDS", change: [] };
  for(const [key, value] of Object.entries(changeObj)){
    newCid.push([key, value])
  }
  console.log(cid.every((m) => m[1] == 0));
  return cid.every((m) => m[1] == 0)
    ? { status: "CLOSED", change: original }
    : { status: "OPEN", change: newCid };
}


let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]

console.log(checkCashRegister(19.5,20 , cid));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// console.log(
//   checkCashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// );
// 
// console.log(
//   checkCashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// );