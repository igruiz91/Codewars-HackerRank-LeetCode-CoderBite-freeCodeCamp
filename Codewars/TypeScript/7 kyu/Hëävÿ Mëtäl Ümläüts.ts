export function heavyMetalUmlauts(boringText: string): string {
  type ReplaceMap = { A: "Ä"; E: "Ë"; I: "Ï"; O: "Ö"; U: "Ü"; Y: "Ÿ"; a: "ä"; e: "ë"; i: "ï"; o: "ö"; u: "ü"; y: "ÿ";};
  const replaceMap: ReplaceMap = { A: "Ä", E: "Ë", I: "Ï", O: "Ö", U: "Ü", Y: "Ÿ", a: "ä", e: "ë", i: "ï", o: "ö", u: "ü", y: "ÿ"};
  return [...boringText].map((c) => replaceMap[c as keyof ReplaceMap] || c).join("");
}

const letters: object = {
  A: "\u00c4",
  O: "\u00d6",
  a: "\u00e4",
  o: "\u00f6",
  E: "\u00cb",
  U: "\u00dc",
  e: "\u00eb",
  u: "\u00fc",
  I: "\u00cf",
  Y: "\u0178",
  i: "\u00ef",
  y: "\u00ff",
};

export function heavyMetalUmlautsUp(boringText: String): String {
  return boringText.replace(/[AOaoEUeuIYiy]/g, (letter) => letters[letter]);
}
//console.log(heavyMetalUmlauts("Announcing the Macbook Air Guitar"));
console.log(heavyMetalUmlauts("Announcing the Macbook Air Guitar"));
