var paintLetterboxes = function (start, end) {
  let index = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for(let i=start; i<=end; i++)
    `${i}`.split('').map(c => index[+c]++)
  return index;
};

console.log(paintLetterboxes(125, 132));
