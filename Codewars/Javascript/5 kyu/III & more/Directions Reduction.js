function dirReduc(arr){
    let str = arr.join(''), reg= /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
    while (reg.test(str)) {
        str=str.replace(reg,'');
    }
    return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}

function direction(arr) {
    var opposites ={
        'NORTH': 'SOUTH', 
        'SOUTH': 'NORTH', 
        'EAST': 'WEST', 
        'WEST': 'EAST'
    }
    return arr.reduce((dir, a) =>{
        
        if(dir[dir.length-1]== opposites[a]) dir.pop()
        else dir.push(a)
        console.log(dir[dir.length-1]);
        return dir
    }, [])
}

function dirReduceUp(dir) {
    var opposites ={
        'NORTH': 'SOUTH', 
        'SOUTH': 'NORTH', 
        'EAST': 'WEST', 
        'WEST': 'EAST'
    }
    return dir.reduce((a,b)=> {
        opposites[a.slice(-1)] === b ? a.pop() : a.push(b)
        return a
    }, [])
}

console.log(dirReduceUp(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));