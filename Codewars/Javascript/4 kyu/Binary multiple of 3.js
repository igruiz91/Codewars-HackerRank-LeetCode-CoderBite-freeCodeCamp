var multipleOf3Regex = /^(1(01*0)*1|0)+$/;


console.log(multipleOf3Regex.test("000"));
console.log(multipleOf3Regex.test("110"));
console.log(multipleOf3Regex.test("111"));