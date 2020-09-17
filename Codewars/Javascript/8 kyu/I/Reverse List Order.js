function reverseList(list) {
    return list.reverse()
}

function reverseList(list) {
    var array = [];
    for (var i = list.length-1; i >= 0; i --){
      array.push(list[i]);
    }
    return array;
  }

console.log(reverseList([3,1,5,4]));

