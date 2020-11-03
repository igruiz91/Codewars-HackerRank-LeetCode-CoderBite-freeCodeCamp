function sortArray(array) {
    let even = array.filter(n => n%2==0).sort((a,b) => b-a)
    let odd = array.filter(n => n%2).sort((a,b) => a-b)
    let resp =[]
    for(let i =0 ; i< array.length; i++)
        if(array[i]%2) resp.push(odd.shift())
        else resp.push(even.shift())
    return resp
}

let sortArrayUp = arr =>{
    let even = arr.filter(n => n%2==0).sort((a,b) => b-a)
    let odd = arr.filter(n => n%2).sort((a,b) => a-b)
    return arr.map(n => n%2 ? odd.shift() : even.shift())
}

let arr= [5, 3, 2, 8, 1, 4, 11]
//  arr= [1, 3, 8, 4, 5, 2, 11]

console.log(sortArray(arr));
console.log(sortArrayUp(arr));


