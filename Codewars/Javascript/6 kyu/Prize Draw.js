function rank(st, we, n) {
    if(st=="") return "No participants"
    let resp = {}
    let names = st.split(',')
    if(n>names.length) return "Not enough participants";
    st = names.map((name,i) => (name.length+name.toLowerCase().split('').map(c => c.charCodeAt(0)-96).reduce((a,b)=> a+b))*we[i])
    for(let i=0; i<names.length; i++){
        resp[st[i]]=names[i]
    }
    let ordenados = st.sort((a,b) => b-a)
    let value = ordenados[n-1]
    let comprobacion = ordenados.filter(e=> e==value)
    if (comprobacion.length>1){
        var x =[]
        for(var key in resp){
            if (key==comprobacion[0]) x.push([key, resp[key]])
        }
    }
    console.log(x); 
    return resp[ordenados]
}





console.log(rank("Aubrey,Olivai,Abigail,Chloe,Andrew,Elizabeth", [ 3, 1, 4, 4, 3, 2 ], 4));