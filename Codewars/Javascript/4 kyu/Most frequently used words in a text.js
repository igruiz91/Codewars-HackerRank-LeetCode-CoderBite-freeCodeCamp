function topThreeWords(text) {
  let resp=[]
  let textFilter = text
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0–9_'-\s]+/g, "");
  let words = textFilter.split(' ').filter(String)
  let parser = words.reduce((acc,current) => {
    acc[current] ? acc[current]++ : acc[current] = 1
    return acc
  },{})
  let sortObj = Object.entries(parser)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
  for (let i = 0; i < sortObj.length; i++) {
    resp.push(sortObj[i][0]);
  }
  return resp.filter((a) => a!="'");
}


const topThreeWordsUp = (text) => {
  let words = {}
  text.toLowerCase().replace(/[\w][\w']*/g, match => {
    let w = words[match] || 0
    words[match] = ++w
  })
  console.log(words);
  return Object.keys(words).sort((a,b) => words[b]-words[a]).slice(0,3)
  
};

const topThreeWordsUp2 = (txt) => {
  let wordsCount = (text.toLowerCase().match(/\b[a-z']+\b/g) || []).reduce((acc, curr) => (acc[curr]= (acc[curr] || 0)+1 , acc),{})
  return wordsCount
};



const text = `In a village of La Mancha, the name of which I have no desire to call to mind, there lived not long since one of those gentlemen that keep a lance in the lance-rack, an old buckler, a lean hack, and a greyhound for coursing. An olla of rather more beef than mutton, a salad on most nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra on Sundays, made away with three-quarters of his income.`;

const text2 = `"  //wont won't won't "`;
const text3 = `"e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"`
const text4 = "  '  ";
//console.log(topThreeWords(text));
console.log(topThreeWordsUp2(text));
//console.log(topThreeWordsUp(text3));

