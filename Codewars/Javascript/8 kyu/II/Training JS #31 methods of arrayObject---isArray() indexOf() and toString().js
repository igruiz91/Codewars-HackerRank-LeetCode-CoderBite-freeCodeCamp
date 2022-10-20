function blackAndWhite(arr) {
  return Array.isArray(arr)
    ? arr.includes(5) && arr.includes(13)
      ? "It's a black array"
      : "It's a white array"
    : "It's a fake array";
}


console.log(blackAndWhite(5, 13));
