function formatWords(words) {
  if (!words) return "";
  words = words.filter((e) => String(e));
  let len = words.length;
  if (len == 0) return "";
  if (len == 1) return words[0];
  let resp = words[0];
  for (let i = 1; i < len - 1; i++) resp += ", " + words[i];
  resp += " and " + words[len - 1];
  return resp;
}
const formatWordsUp1 = (words) => {
  return (words|| []).filter(x => x).join(', ').replace(/,(?= [^,]*$)/, ' and')
}

const formatWordsUp = (words) => {
  if(!words) return ''
  return words.filter(x => x).join(', ').replace(/(, )+(\S+)$/, ' and $2')
};



console.log(formatWordsUp(["ninja", "samurai", "capisa,ronin"]));
console.log(formatWordsUp(["ninja", "", "ronin"]));