function sumFracts(l) {
    let resp = [[]]; 
    for(let i=0; i< l.length; i++)
        resp.push(sumFracArr(resp.pop(), l[i]))
    return simplificar(resp[0]);
}

const sumFracArr = (arr1,arr2) => {
    if(arr1.length==0) return arr2
    else if(arr2.length==0) return arr1
    else if(arr2.length==0 && arr1.length ==0) return []
    let base=arr1[1]*arr2[1]
    let denominador = (base/arr1[1]*arr1[0])+(base/arr2[1]*arr2[0])
    return [denominador, base]
}

const simplificar = arr => {
    let maximo = Math.max(...arr)
    while(maximo>1){
        if(arr[0]%maximo==0 && arr[1]%maximo==0){
            arr[0]/=maximo
            arr[1]/=maximo
        }
        else maximo--
    }
    return arr[1]==1 ? arr[0] : arr
}

const gdc = (a,b)=> b? gdc(b,a%b):a;

const sumFractsUp = l => {
    if(!l.length) return null;
    var [n,d] = l.reduce(([a,x], [b,y])=>[a*y + b*x, x*y])
    var g= gdc(n,d)
    return g===d ? n/d : [n/g, d/g]
}

//console.log(simplificar([ 18,9 ]));
//console.log(sumFracArr([1, 3], [5, 3]));

console.log(sumFractsUp([[1, 3], [5, 3]])); 