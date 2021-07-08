function engrandireCards() {
  let maxLength = 0
  let cards=  document.getElementsByClassName("cammindex__cardTitle");
  let content = [...cards].map(function(e){
    if (e.innerHTML.length > maxLength) maxLength = e.innerHTML.length; 
    return e.innerHTML;
  })  
  for(let i=0; i<cards.length; i++){
    let spaces = calcLength(content[i].length,maxLength);
    cards[i].innerHTML =
      "&#32;".repeat(spaces) + cards[i].innerHTML + "&#32;".repeat(spaces);
  }
}

function calcLength(l, m){
  return Math.floor((m-l)/2)
}


engrandireCards()