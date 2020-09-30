function bouncingBall(h,  bounce,  window) {
    if(bounce==1) return h
    let count=0;
    while(h>window){
        count++
        h*=bounce
    }
    return count*2-1
}

console.log(bouncingBall(40, 1, 10));