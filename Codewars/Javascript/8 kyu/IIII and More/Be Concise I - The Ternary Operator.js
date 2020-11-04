var describeAge=(a)=>{
    let b="You're a(n)"
    return a<13 ? b+" kid":a<18 ? b+" teenager" : a<65 ? b+" adult" : b+" elderly"
}

function describeAge(age) {
    return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
  }