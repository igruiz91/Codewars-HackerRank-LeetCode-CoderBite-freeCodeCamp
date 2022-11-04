function paul(x) {
  let lib = {"kata": 5, "Petes kata": 10, "life": 0, "eating": 1}
  let misery = x.reduce((a, b) => (a += lib[b]), 0);
  return misery <40 ? "Supper happy!" : misery <70 ? "Happy!" : misery <100 ? "Sad!" : "Miserable!"
}

console.log(paul(['Petes kata', 'Petes kata', 'eating', 'Petes kata', 'Petes kata', 'eating']))
