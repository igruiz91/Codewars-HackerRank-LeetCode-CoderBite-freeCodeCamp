var regex=/(\d)(?=(\d{3})+$)/g
function addCommas(money,reg){
  return money.replace(reg,x=>x+",")  //like this
}


console.log(addCommas('$1234',regex));