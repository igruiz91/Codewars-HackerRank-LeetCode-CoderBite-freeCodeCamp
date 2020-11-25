function rot13(str) {
  let resp = [];
  let abcUp = "abcdefghijklmABCDEFGHIJKLM";
  let abcDown = "nopqrstuvwxyzNOPQRSTUVWXYZ";
  let chars = str.split("");
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];

    if (abcUp.includes(c)) {
      let position = abcUp.indexOf(c);
      let char = abcDown[position];
      resp.push(char);
    } else if (abcDown.includes(c)) {
      let position = abcDown.indexOf(c);
      let char = abcUp[position];
      resp.push(char);
    } else {
      resp.push(c);
    }
  }
  return resp.join("");
}

const rot13Up = (str) => {
  return str.replace(/[a-z]/gi, (x) =>
    String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= "m" ? 13 : -13))
  );
};

//EBG13 rknzcyr.
console.log(rot13("EBG13 rknzcyr."));
console.log(rot13Up("EBG13 rknzcyr."));

//How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.
//Ubj pna lbh gryy na rkgebireg sebz na vagebireg ng afn? in the elevators, the extrovert looks at the other guy's shoes.
console.log(
  rot13(
    "How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf."
  )
);
