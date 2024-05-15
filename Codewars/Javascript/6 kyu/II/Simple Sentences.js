function makeSentence(parts) {
  parts= parts.filter(x => x!='.')
  return parts.join(' ').replace(/\s\,/g, ",")+"."
}

const makeSentenceUp = (parts) => {
  return parts.reduce((sentence, word) => word == "," ? sentence + word : word =='.' ? sentence + "" : sentence +" "+ word)+'.'
};


console.log(
  makeSentence(["hello", "world", ".", ".", "."]),
);
console.log(makeSentenceUp(["hello", "world", ".", ".", "."]));
console.log(makeSentence([
  'The',    'Earth', 'rotates',
  'around', 'The',   'Sun',
  'in',     '365',   'days',
  ',',      'I',     'know',
  'that',   '.',     '.',
  '.',      '.',     '.',
  '.',      '.',     '.',
  '.',      '.',     '.',
  '.'
]))
console.log(makeSentenceUp([
  'The',    'Earth', 'rotates',
  'around', 'The',   'Sun',
  'in',     '365',   'days',
  ',',      'I',     'know',
  'that',   '.',     '.',
  '.',      '.',     '.',
  '.',      '.',     '.',
  '.',      '.',     '.',
  '.'
]))