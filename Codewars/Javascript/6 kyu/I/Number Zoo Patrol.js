function findNumber(array) {
    array = array.sort((a,b)=>a-b)
    console.log(array);
    for(let i = 0; i< array.length-1; i++)
        if(array[i]+1 != array[i+1]) return array[i]+1
    return (array[array.length-1]-array[0]== array.length-1 && array[0] !=1) ? array[0]-1 : array.length;
}

function findNumber(array) {
    return (
      ((1 + (array.length + 1)) * (array.length + 1)) / 2 -
      array.reduce((sum, item) => sum + item, 0)
    );
  }

console.log(findNumber([13,11,10,3,2,1,4,5,6,9,7,8]));