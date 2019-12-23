function meeting(s) {
    return s.toUpperCase().split(';').sort().map(p => {
        p=p.split(':')
        return `(${p[1]}, ${p[0]})`
    }).sort()
}

let t =[
    'FRED:CORWILL',
    'WILFRED:CORWILL',
    'BARNEY:TORNBULL',
    'BETTY:TORNBULL',
    'BJON:TORNBULL',
    'RAPHAEL:CORWILL',
    'ALFRED:CORWILL'
];
let c = ['a','d','c'];

//console.log(sortName(t));
let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

console.log(meeting(s));