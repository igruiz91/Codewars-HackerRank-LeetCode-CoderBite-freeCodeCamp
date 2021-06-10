reverse = function (array) {
  let resp = [];
  for (let i = 0; i < array.length; i++)
    resp.unshift(array[i]);
  return resp;
};

const reverseUp = (arr) => {
  return arr.reduceRight((a,b) => {return a.push(b) ,a},[])
}



console.log(reverse([1, 2, 3]));
console.log(reverseUp([1, 2, 3]));
