function sillycase(silly) {
  return silly.split('').map((c, i) => i< silly.length/2 ? c.toLowerCase() : c.toUpperCase()).join('');
}



console.log(sillycase("foobar"));
