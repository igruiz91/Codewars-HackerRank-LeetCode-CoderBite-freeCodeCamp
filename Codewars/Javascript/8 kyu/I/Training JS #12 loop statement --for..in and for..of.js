function giveMeFive(obj){
    let resp = []
    for(var key in  obj){
        if(key.length==5) resp.push(key)
        if(obj[key].length == 5) resp.push(obj[key])
    }
    return resp
}
const giveMeFiveUp = obj =>{
    let resp = []
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            if(key.length == 5) resp.push(key)
            if(obj[key].length==5) resp.push(obj[key])
        }
    }
    return resp
}


var x= {Our:"earth",is:"a",beautyful:"world"}
var y ={Ihave:"enough", money:"to",buy:"a",car:"model"}
console.log(giveMeFive(y));
console.log(giveMeFiveUp(x));