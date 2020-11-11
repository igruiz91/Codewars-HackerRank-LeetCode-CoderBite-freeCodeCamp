function generateMarkdowns(markdown, text, urlOrLanguage) {
  switch (markdown) {
    case "code": return "```" + `${urlOrLanguage}\n${text}` + "\n```";
    default: return (markdown === "img" ? '!' : '') + `[${text}](${urlOrLanguage})`;
  }
}

const generateMarkdownsUp = (markdown, text, urlOrLanguage) => {
  const templates = {
    link: '[\\1](\\2)',
    img: '![\\1](\\2)',
    code: '```\\2\n\\1\n```'
  }
  return templates[markdown].replace('\\1', text).replace('\\2', urlOrLanguage)
}


let code = "function generateMarkdowns(markdown,text,urlOrLanguage)"; 

console.log(generateMarkdowns("code", code, "javascript"));
console.log(generateMarkdownsUp("code", code, "javascript"));
console.log(
  generateMarkdowns(
    "images",
    "this should be an image",
    "https://github.com/codewars/gna.jpg"
  )
);