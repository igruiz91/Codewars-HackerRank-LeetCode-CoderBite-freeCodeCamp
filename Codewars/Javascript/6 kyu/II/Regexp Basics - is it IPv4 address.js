String.prototype.ipv4Address = function () {
  return /^(?:(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(\.(?!$)|$)){4}$/.test(
    this
  );
};

String.prototype.ipv4AddressUp = function () {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(this);
}

String.prototype.ipv4AddressUp2 = function () {
  let s = this.split('.')
  return s.length == 4 && s.every((n) => n == "" + +n && +n >= 0 && +n < 256);
}

console.log("10.256.30.40".ipv4Address());
console.log("255.255.255.255".ipv4Address());
console.log('\n')
console.log("10.256.30.40".ipv4AddressUp());
console.log("255.255.255.255".ipv4AddressUp());
console.log('\n')
console.log("10.256.30.40".ipv4AddressUp2());
console.log("255.255.255.255".ipv4AddressUp2());
