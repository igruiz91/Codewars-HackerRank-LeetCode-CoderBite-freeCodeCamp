// Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.
// The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.
// Return the blurred image as an integer, with the fractions rounded down.
function solution(image) {
  let len = image[0].length - 2;
  let resp = Array.from({length: len}, () => []);
   for(let i=0;i<image.length;i++){
     for(let j=0;j<image[i].length;j++){
       console.log(image[i][j])
       let index = parseInt(i/3)*3+parseInt(j/3)
       console.log(`i=${i}j=${j},${index}`);
     }
   }
   console.log(resp)
}


let image = [
  [1, 1, 1],
  [1, 7, 1],
  [1, 1, 1],
];

let image2 = [
  [36, 0, 18, 9],
  [27, 54, 9, 0],
  [81, 63, 72, 45],
];

let image3 = [
  [7, 4, 0, 1],
  [5, 6, 2, 2],
  [6, 10, 7, 8],
  [1, 4, 2, 0],
];
let image4 = [
  [36, 0, 18, 9, 9, 45, 27],
  [27, 0, 54, 9, 0, 63, 90],
  [81, 63, 72, 45, 18, 27, 0],
  [0, 0, 9, 81, 27, 18, 45],
  [45, 45, 27, 27, 90, 81, 72],
  [45, 18, 9, 0, 9, 18, 45],
  [27, 81, 36, 63, 63, 72, 81],
];
// console.log(solution(image));
console.log(solution(image2));
// console.log(solution(image3));
// console.log(solution(image4));
