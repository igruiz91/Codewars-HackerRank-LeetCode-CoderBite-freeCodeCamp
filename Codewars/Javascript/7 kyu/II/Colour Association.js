function colourAssociation(array) {
  let resp = []
  array.map(e => {
    let newObj = {}
    newObj[e[0]] = e[1]
    resp.push(newObj)
  });
  return resp
}


const colourAssociationUp = (arr) => {
  return arr.map(([color, association]) => ({color: association}))
 }

console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]))
console.log(colourAssociationUp([["white", "goodness"], ["blue", "tranquility"]]))
