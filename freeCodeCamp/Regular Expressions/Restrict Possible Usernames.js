let username = "JackOfAllTrades";
let userCheck = /[a-z]+[0-9]*${2,}/gi; // Change this line
let result = userCheck.test(username);
