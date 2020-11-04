function colorOf(r, g, b) {
  const convert = (c) => ("0"+c.toString(16)).slice(-2)
  return "#"+convert(r) + convert(g) + convert(b);
}


console.log(colorOf(0, 111, 0));
