const SafeInteger = (n) => Number.MAX_SAFE_INTEGER > n;


const safeIntegerUp = (n) => {
  return Number.isSafeInteger(n)
}



console.log(SafeInteger(9007199254740990));
console.log(SafeInteger(-90));
console.log(SafeInteger(9007199254740992));