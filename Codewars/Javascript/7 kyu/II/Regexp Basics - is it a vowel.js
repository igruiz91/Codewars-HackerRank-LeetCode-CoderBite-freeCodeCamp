String.prototype.vowel = function () {
  if (this.length > 1) return false;
  return /[aeiou]/i.test(this);
};

String.prototype.vowelUp = function () {
  return /^[aeiou]$/i.test(this);
}




console.log("d".vowel());
