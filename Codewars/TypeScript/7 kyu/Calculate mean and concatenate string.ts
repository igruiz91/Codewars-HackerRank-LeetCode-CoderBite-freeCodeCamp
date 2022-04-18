export function mean(lst: string[]): [number, string] {
  let nums=0;
  let str="";
  lst.map(e => /[1234567890]/.test(e) ? nums+=Number(e) : str+=e );
  return [nums/10, str]
}
