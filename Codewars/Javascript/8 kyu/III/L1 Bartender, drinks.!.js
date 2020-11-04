function getDrinkByProfession(param){
    let drink = {"jabroni": "Patron Tequila", "school counselor": "Anything with Alcohol", "programmer": "Hipster Craft Beer", "bike gang member": "Moonshine", "politician": "Your tax dollars", "rapper": "Cristal"}
    return drink[param.toLowerCase()] || "Beer"
}

console.log(getDrinkByProfession('jabrOni'));