function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    let reg = new RegExp(`(${geese.join('|')})`, 'g')

    // return an array containing all of the strings in the input array except those that match strings in geese
    return birds.join(' ').replace(reg, '')
};

function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(b => geese.indexOf(b) == -1)
    //return birds.filter(b=> !geese.includes(b))
}

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));