function outed(meet, boss) {
  let sum = meet[boss];
  let len = Object.values(meet).map(n => sum+=n).length
  return sum/len <=5 ? "Get Out Now!" : "Nice Work Champ!"
}


console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'))