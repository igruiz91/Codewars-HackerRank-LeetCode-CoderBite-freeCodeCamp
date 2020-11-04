function tripleTrouble(one, two, three){
    for(var i=0, resp=''; i<one.length; i++)
        resp+=one[i]+two[i]+three[i];
    return resp
}


console.log(tripleTrouble("aa","bb","cc"));