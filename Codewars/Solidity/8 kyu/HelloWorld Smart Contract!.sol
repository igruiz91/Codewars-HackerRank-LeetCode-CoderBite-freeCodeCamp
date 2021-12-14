pragma solidity ^0.4.19;

contract HelloWorld {
  // State Variables
  string greeting =  "Hello World!"; // Change this
  
  // Endpoints
  function setGreeting(string x){
    greeting = x;
  }
  
  function greet() constant returns(string){
    return greeting;
  }
  // ...
}