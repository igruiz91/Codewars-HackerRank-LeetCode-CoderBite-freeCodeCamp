function returnSpecifics(obj){
    let resp =[]
    for(let [k,v] of Object.entries(obj)){
        if(typeof v=='number')resp.push(v)
        else if(typeof v== 'function')resp.push(k)
    }
    return resp.sort(   )
}

var m={a:1,b:'str',c:2,d:true,e:function(a){return a;},f:340}

console.log(returnSpecifics(m));