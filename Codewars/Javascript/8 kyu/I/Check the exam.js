function checkExam(array1, array2) {
    for(var i=0, resp =0 ; i<array2.length; i++){
        if(array2[i]==array1[i]) resp+=4
        else if(array2=="") resp+=0
        else resp--
    }
    return resp>=0 ? resp : 0
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));