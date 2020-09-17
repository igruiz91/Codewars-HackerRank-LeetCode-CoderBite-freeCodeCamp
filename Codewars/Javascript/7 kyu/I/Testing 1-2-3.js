var number=function(array){
    return  array.map((c, i)=> c=i+1+': '+c)
}

console.log(number([ 'a', 'b', 'c' ]));