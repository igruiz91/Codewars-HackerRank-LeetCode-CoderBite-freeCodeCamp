function last(list){
    let last = [...arguments][arguments.length-1]
    return last.length ? last[last.length-1] : last
}


console.log(last([1,"b",3,"d",5]));
