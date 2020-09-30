function permutationShift(permutation) {
    for(let i = 0; i<permutation.length; i++){
        permutation[i]= permutation[i]-i
    }
    console.log(permutation);
    return Math.max(...permutation) - Math.min(...permutation)
}

let arr =[36,38,17,12,5,26,23,40,9,13,45,8,18,20,25,42,4,15,44,34,11,0,19,31,29,2,37,6,3,28,22,24,41,14,21,43,30,16,10,35,33,27,1,39,32,7] 

console.log(permutationShift(arr));