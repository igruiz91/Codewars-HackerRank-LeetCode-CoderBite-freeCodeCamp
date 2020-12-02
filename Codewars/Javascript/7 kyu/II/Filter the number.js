var FilterString = function (value) {
  return +value.replace(/\D/g, '')
};



console.log(FilterString('aa1bb2cc3dd'));