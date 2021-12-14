function save(s, hd) {
  for (var i = 0, sum = 0; i < s.length; i++)
    if ((sum += s[i]) > hd) return i;
  return i;
}

console.log(save([4, 4, 4, 3, 3], 12));
