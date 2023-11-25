function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  const date = new Date(birthday)
  let month = date.getMonth();
  let day = (date.getDate()+1).toString().slice(-1)
  console.log(day)
  return `The ${m[month]} ${d[day]}`
}

console.log(getVillainName("2001-05-03T00:00:00.000Z"));
console.log(getVillainName("2001-05-13T00:00:00.000Z"));
