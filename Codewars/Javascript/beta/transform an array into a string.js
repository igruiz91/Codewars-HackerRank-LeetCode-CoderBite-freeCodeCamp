const transform = (a) => a.map(n=> n == null ? n='null' : n).join('')



console.log(transform([ 78, 0, NaN, null ]));