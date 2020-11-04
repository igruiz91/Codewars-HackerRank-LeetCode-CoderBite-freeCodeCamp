function correctPolishLetters(string) {
  let polDic = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };
  return string.split('').map(c => polDic[c] ? polDic[c] : c).join('')
}


const correctPolishLettersUp = (str) => {
    var dict = {
      ą: "a",
      ć: "c",
      ę: "e",
      ł: "l",
      ń: "n",
      ó: "o",
      ś: "s",
      ź: "z",
      ż: "z",
    };
    return str.replace(/[ąćęłńóśźż]/g, match => dict[match]);
};


console.log(correctPolishLetters("Jędrzej Błądziński"));
console.log(correctPolishLettersUp("Jędrzej Błądziński"));
