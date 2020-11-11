function catMouse(map,moves){
    map = map.split('\n')
    let cat=[], mouse = []
    map.map((arr,i) => {
        if(arr.includes('C')){
            cat.push(i)
            cat.push(arr.indexOf('C'))
        }
        if(arr.includes('m')){
            mouse.push(i)
            mouse.push(arr.indexOf('m'))
        }
    })
    if(cat.length==0 || mouse.length==0) return "boring without two animals"
    moves-= Math.abs(cat[0]-mouse[0])+Math.abs(cat[1]-mouse[1])
    return moves>0 ? "Caught!" : "Escaped!" 
}

const catMouseUp =(map, moves, c={}) =>{
    map.split('\n').map(x => x.split``).forEach((r,y)=>r.forEach((i,x)=> i!='.' ? c[i]=[x,y]:0))
    return Object.keys(c).length>1 ? Math.abs(c.C[0]-c.m[0])+Math.abs(c.C[1]-c.m[1])>moves ? 'Escaped!':'Caught!':'boring without two animals'
}

var map=
`..C......
.........
....m....`

console.log(catMouse(map,5));
console.log(catMouseUp(map,5));