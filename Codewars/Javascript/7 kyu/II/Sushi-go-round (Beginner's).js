function totalBill(str) {
  let plates = 0
  for(let plate of str)
    if(plate == "r") plates++
  return (plates - Math.floor(plates/5) )*2
}


const totalBillUp = (str) => {
  return str.replace(/ /g, "").replace(/r{5}/g, "rrrr").length*2
 }

console.log(totalBill("rr rrr"));
console.log(totalBillUp("rr rrr"));
