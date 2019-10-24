function getSize(w, h, d){
    return [(w*h)*2+(h*d)*2+(w*d)*2, w*h*d]
}


console.log(getSize(10, 10, 10));