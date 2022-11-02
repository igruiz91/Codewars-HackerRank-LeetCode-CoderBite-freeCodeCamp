var isValid = function (s) {
  let lib = [];
  let dict = { "]": "[", "}": "{", ")": "(" };
  for (let i = 0; i < s.length; i++) {
    if (lib.length == 0) {
      lib.push(s[i]);
      continue;
    }
    if (lib[lib.length - 1] == dict[s[i]]) lib.pop();
    else lib.push(s[i]);
  }
  return lib.length == 0;
};



const isValidUp = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    switch (c) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (c !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
};
//Runtime 59 ms Beats 99.2% Memory 43 MB Beats 27.98%

console.log(isValid("(]"));
console.log(isValid("()"));
console.log(isValid("()[]{}"));
