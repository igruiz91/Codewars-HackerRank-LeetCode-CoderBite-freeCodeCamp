function getADownArrowOf(n) {
  var blanks = " ", resp = "", count = 0, partial = ""
  for (var i = n; i > 0; i--) {
    partial = "";
    for (let j = 1; j < i; j++) {
      let control=j
      if(control>9)control%=10
      partial += control;
    }
    resp += `${blanks.repeat(count)}${partial}${i>9?i%10:i}${[...partial]
      .reverse()
      .join("")}\n`;
    count++;
      
  }
  return resp.slice(0,-1);
}

const getADownArrowOfUp = (n) => {
  let part1 = Array.from({length:n}, (_,i) =>{
    let arr= Array.from({length:i}, (v,j) => (j+1)%10)
    return ' '.repeat(n-i-1)+arr.join('')+(i+1%10+arr.reverse().join(''))
  }).reverse()
  return part1.join('\n')
};




console.log(getADownArrowOf(11));
console.log(getADownArrowOfUp(11));

/*
'1234567890987654321\n 
12345678987654321\n
  123456787654321\n
     1234567654321\n
         12345654321\n
              123454321\n
                    1234321\n
                           12321\n
                                   121\n
                                            1'
'12345678910987654321\n
 12345678987654321\n
   123456787654321\n
      1234567654321\n
          12345654321\n
               123454321\n
                     1234321\n
                            12321\n
                                    121\n
                                             1' 
*/
