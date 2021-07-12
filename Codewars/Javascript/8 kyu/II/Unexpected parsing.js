function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  return {status:msg}
}



console.log(getStatus(true));
console.log(getStatus(false));
