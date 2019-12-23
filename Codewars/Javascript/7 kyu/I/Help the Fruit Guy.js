function removeRotten(bagOfFruits){
    return bagOfFruits ? bagOfFruits.map(f => f.toLowerCase().replace(/rotten/, '')) : [];
}

let arr =["apple","banana","kiwi","melone","orange"]
let arr2=[]
console.log(removeRotten(arr2))