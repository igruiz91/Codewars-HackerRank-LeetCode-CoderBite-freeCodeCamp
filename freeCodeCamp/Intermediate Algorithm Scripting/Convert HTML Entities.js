function convertHTML(str) {
  let abc = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;"};
  return str.split('').map(c => abc[c] || c).join('');
}


function convertHTMLRegex(str) {
 let abc = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;"};  return str.replace(/[&<>\"']/, match => abc[match]);
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTMLRegex("Dolce & Gabbana"));
