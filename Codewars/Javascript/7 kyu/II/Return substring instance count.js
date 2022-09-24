function solution(fullText, searchText) {
  return fullText.split(searchText).length-1
}


const solutionUp = (text, search) => {
  return text.match(new RegExp(search, "g")).length;
 }

console.log(solution("aa_bb_cc_dd_bb_e", 'bb'));
console.log(solutionUp("aa_bb_cc_dd_bb_e", 'bb'));
