function dbSort(arr){
    let str =arr.filter(e => typeof e=='string').sort((a,b)=> a-b), nums =arr.filter(e => typeof e=='number').sort();
    return nums.concat(str)
}

//const _ = require('lodash')
//const dbSortUp = arr => _.sortBy(arr, _.isString, _.identity);


dbSortUp2=Q=>Q.sort((Q,S)=>!S.big()-!Q.big()||S<Q||-1)




console.log(dbSortUp2(["Banana", "Orange", "banana", "Apple", "Mango", 0, 2, 2, 45]));