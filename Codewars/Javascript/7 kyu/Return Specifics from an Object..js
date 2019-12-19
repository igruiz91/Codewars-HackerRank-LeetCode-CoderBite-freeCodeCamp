function returnSpecifics(obj){
    let respV =[], respK=[];
    for(let [k,v] of Object.entries(obj)){
        if(typeof v=='number')respV.push(v)
        else if(typeof v== 'function')respK.push(k)
    }
    respV = respV.concat(respK)
    return respV.length ? respV : ['The Object is Empty']
}

var m={a:1,b:'str',c:2,d:true,e:function(a){return a;},f:340}

console.log(returnSpecifics(m));