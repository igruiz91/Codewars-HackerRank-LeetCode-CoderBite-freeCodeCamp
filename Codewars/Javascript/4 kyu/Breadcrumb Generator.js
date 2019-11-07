function generateBC(url, separator) {
    console.log(url, separator); // url y separador
    let resp=`<a href="/">HOME</a>`;
    let position='/';
    let def=`<span class="active">HOME</span>`;
    url=clearURL(url);
    console.log(url); //url limpia
    let sites = url.split('/').slice(1)
    console.log(sites); //arreglo de los sites 
    if(sites.length ==0) return def
    let last = sites[sites.length-1]
    
    if(last.match(/index/g)){
        sites.pop()
        last=sites[sites.length-1]
        if(sites.length<2) return def;
    }
    
    //console.log(sites); // arreglo de sitios luego de limpiar los index

    let lastPosition = `${separator}<span class="active">${clearLastPosition(last)}</span>`;

    if(sites == '') return def;

    for(let i=0; i<sites.length-1; i++){
        if(sites[i].length>30){
            let clear = clearStrings(sites[i])
            position+=`${sites[i]}/`
            resp+=`${separator}<a href="${position}">${shortenStr(clear)}</a>`;
        }
        else{
            let clear = sites[i].replace(/-/g, ' ')
            position+=`${sites[i]}/`
            resp+=`${separator}<a href="${position}">${clear.toUpperCase()}</a>`
        }
    }
    return resp+lastPosition
}

function shortenStr(str) {
    return str.split('-').map(w => w.slice(0,1).toUpperCase()).join('')
}

function clearLastPosition(str) {
    let clear = clearStrings(str)   
    return clear.replace(/[^\\d/A-Za-z]/g, " ").toUpperCase()
}

function clearStrings(str) {
    let words = ["-the-","-of-","-in-","-from-","-by-","-with-","-and-", "-or-", "-for-", "-to-", "-at-", "-a-"];
    let reg_str = `(${words.join('|')})`
    let regex = new RegExp(reg_str, 'g')
    return str.replace(regex, '-')    
}

function clearURL(str) {
    let dominios= ['https://', 'http://', '.html', '.htm', '.php', '.asp'];
    dominios.map(w=> str=str.replace(new RegExp(w, 'g'),''));
    str=str.split('/').map(w =>w.match(/^([\w\-.]+)/g)).join('/')
    return str
}

//console.log(clearURL("www.agcpartners.co.uk"));

//console.log(clearStrings('https://getbootstrap.com/docs/4.3/layout/grid/')); 
// console.log(clearLastPosition('index.php'));
// console.log(clearLastPosition('home.html'));
// console.log(clearLastPosition('home?direction.asp'));

// console.log(shortenStr('very-long-site_name-to-make-a-silly-yet'));

console.log(generateBC("https://getbootstrap.com/docs/4.3/layout/grid/", " : "));




