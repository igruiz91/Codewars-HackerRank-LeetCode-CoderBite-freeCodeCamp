function lovefunc(flower1, flower2){
    return (flower1%2==0&&flower2%2!=0 || (flower1%2!=0&& flower2%2==0))
}

function loveFunction2(flower1, flower2) {
  return (flower1+flower2)%2 ==1  
}

function loveFunction3(flower1, flower2) {
    return flower1 %2 !== flower2 %2
  }



console.log(lovefunc(2,2));