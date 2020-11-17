function rot(str) {
  return str.split('\n').reverse().map(e => e.split('').reverse().join('')).join('\n')
}

const rotUp = (s) => {
  return s.split('').reverse().join('')
}

function selfieAndRot(str) {
  let arr = str.slice().split("\n");
  let len = arr.length;
  let points = '.'.repeat(len)
  let str1 = str.split("\n").join(points+"\n");
  let str2 = [];
  for (let i = len-1; i >= 0; i--) {
    let newStr = "\n" + points + arr[i].split("").reverse().join("");
    str2.push(newStr);
  }
  return (str1+points).concat(str2.join(""));
}

const selfieAndRotUp = (s) => {
  return (
    (s = s.replace(/.+/g, (t) => t + t.replace(/./g, "."))) + "\n" + rotUp(s)
  );
};
function oper(fct, s) {
  return fct(s)
}

// let s = "abcd\nefgh\nijkl\nmnop";
let s2 = "xZBV\njsbS\nJcpN\nfVnP";
console.log(rotUp(s2));
console.log(selfieAndRotUp(s2));
// console.log(oper(rot, s));

// "xZBV....\njsbS....\nJcpN....\nfVnP....\n....PnVf\n....NpcJ\n....Sbsj\n....VBZx"


