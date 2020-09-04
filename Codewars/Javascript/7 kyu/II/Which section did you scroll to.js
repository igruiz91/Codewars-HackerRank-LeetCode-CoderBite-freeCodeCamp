function getSectionIdFromScroll(scrollY,sizes){
    var i=-1;
    do{
        scrollY-=sizes[i+1]
        i++
    }while(scrollY>=0)
    return i>=sizes.length ? -1 : i
}

function getSectionIdFromScrollUp(scrollY, sizes){
    var sum=0
    return sizes.findIndex(e => (sum+=e)>scrollY)
}

getSectionIdFromScrollUp2=(scroll, sizes) => sizes.findIndex(e => (scroll-=e)<0)

function getSectionIdFromScrollOther(scroll, sizes){
    var i=0;
    while (scroll>=0){
        scroll-=sizes[i++]
    }
    return scroll<0 ? --i : -1
}

console.log(getSectionIdFromScroll(400,[300,200,400,600,100]));
console.log(getSectionIdFromScrollUp(400,[300,200,400,600,100]));
console.log(getSectionIdFromScrollUp2(400,[300,200,400,600,100]));
console.log(getSectionIdFromScrollOther(400,[300,200,400,600,100]));