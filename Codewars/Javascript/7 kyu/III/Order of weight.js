const tw = (w) => {
  let messure = w.slice(-2)
  let n = w.replace(/\D/g, '')
  return messure !='KG' ? messure.slice(-1) == 'G' ? n/1000 : n*1000 : n
}

function arrange(arr) {
  return arr.sort((a,b) => tw(a)-tw(b))
}


const arrangeUp = (arr) => {
  const transf = (w) =>
    w.replace("KG", "000").replace("G", "").replace("T", "000000");
  return arr.sort((a, b) => transf(a) - transf(b));
}

const arrangeUp2 = (arr) => {
  const transf = w => w.replace(/[kgt]+/gi, m => ({G:"", KG: "000", T: "000000"})[m])
  return arr.sort((a,b) => transf(a) - transf(b))
}


console.log(arrange(["200G", "300G", "150G", "100KG"]));
console.log(arrange(["400G", "100T", "150KG", "100G"]));
console.log(arrangeUp(["400G", "100T", "150KG", "100G"]));
console.log(arrangeUp2(["400G", "100T", "150KG", "100G"]));