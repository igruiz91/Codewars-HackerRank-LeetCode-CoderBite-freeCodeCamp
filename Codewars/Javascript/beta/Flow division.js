function flowDivision(zoneMap, n){
    for(let i=0, count=0; i<zoneMap.length; i++){
        count+=zoneMap[i]
        if(count>=n) return i
    }
}

console.log(flowDivision([8,8], 0));