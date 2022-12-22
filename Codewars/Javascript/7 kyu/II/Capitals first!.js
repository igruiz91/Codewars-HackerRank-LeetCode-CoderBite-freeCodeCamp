function capitalsFirst(str) {
  return str.split(' ').sort((a,b) => b[1].localeCompare(a[1])).join(' ');
}


console.log(capitalsFirst("hey You, Sort me Already!"));
