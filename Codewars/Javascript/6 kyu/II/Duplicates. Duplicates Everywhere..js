const removeDuplicateIds = (obj) => {
  const removeDuplicates = (arr) => [...new Set(arr)]
  const keys = Object.keys(obj)
  const values = Object.keys(obj)
  
}





const obj = {
  1: ["A", "B", "C"],
  2: ["A", "B", "D", "A"],
};
console.log(removeDuplicateIds(obj))
