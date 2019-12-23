function rank(st, we, n) {
    if(st=="") return "No participants"
    let resp = []
    let names = st.split(',')
    if(n>names.length) return "Not enough participants";
    st = names.map((name,i) => (name.length+name.toLowerCase().split('').map(c => c.charCodeAt(0)-96).reduce((a,b)=> a+b))*we[i])
    for(let i=0; i<names.length; i++)
         resp.push([st[i],names[i]])
    resp = resp.sort((a,b) => (a[0] == b[0]) ? a[1].localeCompare(b[1]) : b[0]-a[0])
    return resp[n-1][1]
}

function rankAuto(st, we, n){
    let arr = st.toLowerCase().split`,`.map((v,i) => (v.split``.map(v => v.charCodeAt()-96).reduce((a,b)=> a+b,0)+v.length)*we[i])
    const entries = st.split`,`.map((v,i)=> [arr[i],v]).sort((a,b) => (a[0]==b[0] ? a[1].localeCompare(b[1]) : b[0]-a[0]))
    if(!st.length) return "No participants"
    return entries[n-1] ? entries[n-1][1] : "Not enough participants"
}




//console.log(rankAuto("Aubrey,Olivai,Abigail,Chloe,Andrew,Elizabeth", [ 3, 1, 4, 4, 3, 2 ], 4));
console.log(rank("Aubrey,Olivai,Abigail,Chloe,Andrew,Elizabeth", [ 3, 1, 4, 4, 3, 2 ], 4));