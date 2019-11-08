var isAnagram = function(test, original) {
    test = test.split('').map(n => n? n++: n=1,{})
    return test
};

console.log(isAnagram("foefet", "toffee"));
