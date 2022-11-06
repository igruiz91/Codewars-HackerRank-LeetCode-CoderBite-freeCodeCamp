function posAverage(s) {
  let count =0, combinations=0, str = s.split(', ')
  for(var i=0, len =str.length ; i<len-1; i++)
    for(let j=i+1; j<len; j++)
      for (var k = 0 ; k < str[i].length; k++) {
        combinations++
        if (str[i][k] == str[j][k]) count++;
      }
  return count*100/combinations
}
s1 = "6900690040";
s2 = "4690606946";
s3 = "9990494604";


s4 ="444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490";

console.log(posAverage(s4))


//444996
//699990
//666690
//096904
//600644
//640646
//606469
//409694
//666094
//606490
