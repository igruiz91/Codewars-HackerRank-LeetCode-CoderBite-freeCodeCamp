var removeElement2 = function(nums, val) {
    nums = nums.filter(n => n != val)
    return nums.length
};

function removeElement3(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if(nums[j] !=val){
            nums[i]=nums[j]
            i++
        }      
    }
    console.log(nums);
    return i
}

function removeElement(nums, val) {
    let i=0;
    let n= nums.length;
    while(i<n){
        if(nums[i] == val){
            nums[i] == nums[n-1];
            n--;
        }else{
            i++
        }
    }
    return n    
}

function otro(nums, val) {
    let numVals = 0;
    for(let i = 0; i<nums.length; i++){
        if(nums[i]== val){
            numVals++
        }else{
            nums[i-numVals] = nums[i]
        }
    }
    return nums.length-numVals
}

//console.log(removeElement([3,2,2,3], 3));
console.log(otro([3,2,6,1,3,1,22,3], 3));