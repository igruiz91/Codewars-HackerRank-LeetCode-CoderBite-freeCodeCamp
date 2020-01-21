function countMe(data){
    if(/[^\d]/.test(data)) return ""
    var resp="";
    for (let i = 0; i <= data.length; i++){
        var current=data[i]
        let count=1
        for (let j = i+1; j <=data.length; j++){ 
            if(current == data[j]){
                count++
                i++
            }
            else {
                resp+=count+current
                break     
            }  
        }
    }
    return resp
}

const countMeUp = data =>{
    return /\D/.test(data) ? "" : data.replace(/(.)\1*/g, (n, m) => n.length +m)
}


console.log(countMe('12322a212223443'));
console.log(countMe('12322212223443'));
//111213321132132413
//111213321132132413