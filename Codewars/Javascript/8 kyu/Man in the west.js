function checkTheBucket(bucket=['stone']){
    for(let i=0; i<bucket.length; i++)
        if(bucket[i]=='gold') return true
    return false
}

const checkTheBucketUp = b => b.includes('gold')

console.log(checkTheBucketUp(["stone", "stone", "stone", "stone", "gold"]));