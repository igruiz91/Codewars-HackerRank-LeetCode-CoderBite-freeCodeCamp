// export function htmlspecialchars(formData: string): string {
//   return formData
//     .replace(/&/g, "&amp;")
//     .replace(/</g, "&lt;")
//     .replace(/>/g, "&gt;")
//     .replace(/"/g, "&quot;");
// }

export function htmlspecialchars(formData: string): string {
  var a =  formData.replace(
    /[\<\>\"\&]/g,
    (a) =>
      ({
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "&": "&amp;",
      }[a])
  );
  console.log(a);
  return "asd";
}

// console.log(htmlspecialchars("<h2>Hello World</h2>"));
console.log(htmlspecialchars("<h2>Hello World</h2>"));
