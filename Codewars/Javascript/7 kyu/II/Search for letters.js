function change(string) {
  let resp = "00000000000000000000000000";
  string
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
    .split("")
    .map((e) => {
      let pos = e.charCodeAt(0) - 96;
      resp = resp.substr(0, pos - 1) + "1" + resp.substr(pos);
    });
  return resp;
}


const changeUp = (str) => {
  let flags = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]
  for(let i=0; i<str.length;i++){
    let c = str.charCodeAt(i)
    if(c>64 && c<91) flags[c-65] =1
    else if(c>96 && c<123) flags[c-97] =1
  }
  return flags.join('')
}

const changeUp2 = (str) => {
  str = str.toLowerCase()
  return 'abcdefghijklmnopqrstuvwxyz'.split('').map(c => str.indexOf(c) !== -1 ? 1 : 0).join('')
}



let rare = `Abc e  $$  
!!a$%&RgTT

abcdefghijklmnopqrstuvwxy
aaaaaaaaaaa
&%&%/$%$%$%$%GYtf67fg34678hgfdyd`;

console.log(change(rare));
console.log(changeUp(rare));
console.log(changeUp2(rare));
