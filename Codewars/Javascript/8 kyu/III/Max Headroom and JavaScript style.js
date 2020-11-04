function getMax1(){
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2(){
    // Have your return object on same line
    // note Javascript does not require the semicolon but can assume it meaning nothing is returned
  // instead move the brace up
    return{
        name: 'Max Headroom'
    };
 
}


console.log(JSON.stringify(getMax2()) == JSON.stringify(getMax1()));