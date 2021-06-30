function timeCorrect(str) {
  if(str == '') return str;
  if(!/^\d{2}\:\d{2}\:\d{2}$/.test(str)) return null
  let date = new Date(0, 0, 0, ...str.split(":"));
  return date.toString().slice(16,24);
}

const timeCorrectUp = (s) => {
  if(!s) return s
  if(!/^(\d\d:){2}\d\d$/.test(s)) return null
  return (new Date(0,0,0, ...s.split(':'))).toString().slice(16,24)
};




console.log(timeCorrect("24:01:01"));
console.log(timeCorrectUp("24:01:01"));