function counterEffect(n) {
  return [...n].map((x) =>
    Array(Number(x) + 1)
      .fill()
      .map((_, i) => i)
  );
}

const counterEffectUp = (n) => [...n].map((n) => [...Array(n * 1 + 1).keys()]);

console.log(counterEffect("1250"));
