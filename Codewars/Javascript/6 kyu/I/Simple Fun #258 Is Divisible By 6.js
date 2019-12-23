function isDivisibleBy6(s) {    
    let nums=[];
    for(let i=0;i<=9;i++){
        nums.push(s.replace(/[*]/, `${i}`));
    }
    return nums.filter(d =>(d.slice(-1)%2==0)  && (d.split('').reduce((a,b)=>+a+~~(b))%3==0))
}

function isDivisibleBy(s, d) {
    let rem=0;

    for(let char of s)
        rem=+(rem+char)%d;

    return !rem
}

function isDivisibleBy6_2(s) {
    let num, res=[];

    for(let i=0;i<10;i++){
        if(isDivisibleBy(num =s.replace('*', i),6))
        res.push(num)
    }
    return res
}

function isDivisibleBy6_3(s) {    
    let nums = [];
    for(let i = 0; i <= 9; i++){
        nums.push(s.replace(/[*]/, `${i}`));
    }
    return nums.filter(d =>BigInt(d)%BigInt(6));
}

// a='123456789012345678901234567800'
// console.log(a.slice(-1)%2);



// console.log('para 41*: '+isDivisibleBy6('41*'));
// console.log('para 34234*2: '+isDivisibleBy6('34234*2'));
console.log('para 1234567890123456789012345678*0: '+isDivisibleBy6_3('1234567890123456789012345678*0'));