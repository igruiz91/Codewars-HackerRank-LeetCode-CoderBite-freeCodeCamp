var uniqueMorseRepresentations = function(words) {
    const morse = {a:".-",b:"-...",c:"-.-.",d:"-..",e:".",f:"..-.",g:"--.",h:"....",i:"..",j:".---",k:"-.-",l:".-..",m:"--",n:"-.",o:"---",p:".--.",q:"--.-",r:".-.",s:"...",t:"-",u:"..-",v:"...-",w:".--",x:"-..-",y:"-.--",z:"--.."};
    let resp =[];
    let cont=0
    for(let i=0;i<words.length; i++){
        resp.push(words[i].split('').map(c=> morse[c]).join(''))
    }
    return resp.filter(distinto).length
};

const distinto =(v,i,self)=> {
    return self.indexOf(v)===i
}

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));