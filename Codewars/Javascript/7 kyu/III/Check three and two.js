function checkThreeAndTwo(array) {
    const countC = (c) => array.filter(e => e.match(c)).length
    let a = countC('a'), 
        b = countC('b'), 
        c = countC('c')
    return (a ===3 || b===3 || c===3) && (a ===2 || b===2 || c===2)
}

let arrs = [["a", "a", "a", "b", "b"], ["a", "c", "a", "c", "b"]]

console.log(checkThreeAndTwo(["a", "a","c", "a", "b", "b"]));