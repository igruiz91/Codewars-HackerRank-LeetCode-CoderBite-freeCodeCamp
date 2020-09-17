function testit(a,b){
    let arr = a.concat(b).sort((a,b)=>a-b)
    var cont =0, actual=0;
    let resp =[];
    for(let i=0; i<arr.length; i++){
        let num = arr[i]
        if(actual !=num){
            if(resp.indexOf(num) == -1) cont=0
            actual=num;
            cont++;
            resp.push(num)
        }
        else if(actual == num && cont<2){
            resp.push(num)
            cont++
        } 
        else if(actual == num && cont>2){
            cont=0;
            continue;
        }
    }
    return resp
}



var a=[1,2] , b=[1,2]
console.log(testit(a,b));