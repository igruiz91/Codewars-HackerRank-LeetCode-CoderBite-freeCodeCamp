function switcheroo(x) {
  return x.split('').map(c => c === 'a' ? 'b' : c === 'b' ? 'a' : c).join('')
}

const switcherooUp = (x) => {
  return x.replace(/[ab]/g , c => c == 'a' ? 'b' : 'a')
}


console.log(switcheroo("acb"));
console.log(switcherooUp("acb"));
