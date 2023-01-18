export function hexHash(code: string): number {
  return [...code].reduce((resp,c)=> resp+ c.charCodeAt(0).toString(16).replace(/\D/, '').split('').reduce((x,y)=> x+ +y,0),0)
}


console.log(hexHash("Yo"));
