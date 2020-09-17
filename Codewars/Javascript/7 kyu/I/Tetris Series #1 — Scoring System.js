function getScore(arr) {
  let nivel=1, score=0, lineas=0;
  for(let i=0; i<arr.length; i++){
      nivel=1+Math.floor(lineas/10)
      lineas += arr[i]
      score+=arr[i] ==4 ? nivel*40*30 : arr[i]==3 ? nivel*40*7.5 : arr[i]==2 ? nivel*40*2.5 : arr[i]==1 ? nivel*40 : 0
  }
  return score
}


console.log(getScore([0, 1, 2, 3, 4]));