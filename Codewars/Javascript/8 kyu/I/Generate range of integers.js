function generateRange(min, max, step){
    let resp = []
    for(let i=min; i<=max; i+=step) resp.push(i)
    return resp
}

function generateRangeUp(min, max, step) {
    for (var res = []; min <= max; min += step) res.push(min)
    return res
}

function generateRange(min, max, step) {
    return [...rangeGenerator(min, max, step)];
  }
  
function* rangeGenerator(min, max, step) {
    while (min <= max) {
        yield min;
        min += step;
    }
}

console.log(generateRange(2, 10, 2));