function redacted(doc1, doc2) {
  for (let i = 0; i < doc1.length; i++) {
    if (doc1[i] === doc2[i]) continue;
    else if (doc1[i] === "X" && doc2[i] != false) {
      while (doc1[i] === "X") i++;
    }else return false
  }
   return true;
}

var doc1 =
  "TOP SECRET:\nThe missile launch code for Sunday XXXXXXXXXX is:\nXXXXXXXXXXXXXXXXX";
var doc2 =
  "TOP SECRET:\nThe missile launch code for Sunday 5th August is:\n7-ZERO-8X-ALPHA-1";

console.log(redacted(doc1, doc2));
