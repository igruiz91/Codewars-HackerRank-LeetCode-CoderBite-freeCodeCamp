function powerOf4(n) {
  if (n % 4 != 0 || Number.isNaN(n) || typeof n != "") return false;
  if (n == 4 || n == 1) return true;
  return powerOf4(n / 4);
}

console.log(powerOf4("4"));
console.log(powerOf4(8));
console.log(powerOf4(1024));
console.log(powerOf4(16));
console.log(powerOf4(44));
