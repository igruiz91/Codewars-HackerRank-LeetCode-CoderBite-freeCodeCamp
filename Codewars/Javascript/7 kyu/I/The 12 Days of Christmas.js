var comparator = function(a,b) {
    let song = [
        "On the 12th day of Christmas my true love gave to me",
        "12 drummers drumming,",
        "11 pipers piping,",
        "10 lords a leaping,",
        "9 ladies dancing,",
        "8 maids a milking,",
        "7 swans a swimming,",
        "6 geese a laying,",
        "5 golden rings,",
        "4 calling birds,",
        "3 French hens,",
        "2 turtle doves and",
        "a partridge in a pear tree."
      ];
      return song.indexOf(a)-song.indexOf(b)
}

function comparator2(a,b) {
    let fragments= ['On', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', 'a'];

    return fragments.indexOf(a.split(' ')[0])-fragments.indexOf(b.split(' ')[0])
}


function nums(str) {
  return Number(str.split(' ').join('').split('').filter(Number).join('') ) 
}

function selectionSort(arr) {
    let len=arr.length, min;
    for(let i=0; i<len; i++){
        min=i
        for(let j=i+1;j<len; j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        [arr[i], arr[min]]=[arr[min], arr[i]]

    }
    return arr
}

//console.log(selectionSort([9,7,5,4,3,1]));

//console.log(nums('On the 12th day of Christmas my true love gave to me'));
console.log(comparator2("11 pipers piping,", "3 French hens,"));