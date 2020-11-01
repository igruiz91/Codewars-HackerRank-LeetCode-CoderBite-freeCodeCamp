function josephusTry(items, k) {
  let resp = []
  let pointer = 0
  for(let i = 0, len = items.length; i<len; i++){
    pointer=(pointer + (k-1))%items.length
    let element = items.splice(pointer,1)
    resp.push(element)
  }
  return resp
}


const josephus = (arr, k ) => {
  let pos = 0
  let resp = []
  while(arr.length>0){
    pos = (pos+(k-1))%arr.length
    resp.push(...arr.splice(pos,1))
  }
  return resp
};

console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3));


/* 
[1,2,3,4,5,6,7] , 3  
[1,2,4,5,6,7] => 3  i = 3
[1,2,4,5,7] => 6  i = 5
[1,4,5,7] => 2 i = 2
[1,4,5] => 7 i = 4
[1,4] => 5 i = 3
[4]        i = 0
*/