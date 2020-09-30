function calculate(str) {
    str=str.replace(/plus/g,'+').replace(/minus/g, '-')
    return eval(str);
}

function calculate2(str) {

    return eval(str.replace(/plus/gi, '+').replace(/minus/gi, '-')).toString();
  }

console.log(calculate('1plus2plus3minus4'));