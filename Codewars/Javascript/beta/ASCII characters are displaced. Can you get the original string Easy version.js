function translator(ascii, letter) {
  return ascii.map((e) => String.fromCharCode(e-25)).splice();
}


console.log(
  translator([134, 131, 138, 138, 141, 32, 149, 141, 144, 138, 130].splice(), "l")
); // hello world
console.log(translator([146, 136, 142, 32, 140, 136, 32, 123, 136, 139, 130, 135, 128], 'o')) //  you so boring
