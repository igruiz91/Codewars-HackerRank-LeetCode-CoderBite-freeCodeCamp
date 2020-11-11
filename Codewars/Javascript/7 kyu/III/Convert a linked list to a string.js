function stringify(list) {
    return list === null ? 'null' : `${list.data} -> ${stringify(list.next)}`
}

function stringifyUp(l){
    let data =[]
    while(l!==null){
        data.push(l.data)
        l=l.next
    }
    data.push('null')
    return data.join(' -> ')
}


let arr = ['1', '2', 'null']

console.log(arr.join(' -> '));