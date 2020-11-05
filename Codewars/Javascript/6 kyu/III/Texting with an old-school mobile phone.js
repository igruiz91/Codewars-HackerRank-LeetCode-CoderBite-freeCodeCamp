/* ----------------------
|   1   |   2   |   3   |  <-- hold a key to type a number
|  .,?! |  abc  |  def  |  <-- press a key to type a letter
-------------------------
|   4   |   5   |   6   |  <-- Top row
|  ghi  |  jkl  |  mno  |  <-- Bottom row
-------------------------
|   7   |   8   |   9   |
|  pqrs |  tuv  |  wxyz |
-------------------------
|   *   |   0   |   #   |  <-- hold for *, 0 or #
|  '-+= | space |  case |  <-- press # to switch between upper/lower case
------------------------- */

const sendMessage = message => {
    let keys = [[' '],['.',',','?','!'], ['a','b','c'], ['d','e','f'], ['g','h','i'], ['j','k','l'], ['m','n','o'], ['p','q','r','s'], ['t','u','v'], ['w','x','y','z'], ["'",'-','+','='], ['case']]
    let resp='';
    let prev = [0];
    let cac = false;
    for(let i=0; i<message.length; i++){
        let key=message[i];
        if(key == key.toUpperCase() && key !=' '){
            key = key.toLowerCase();
            resp+='#';
            cac=true
        }else cac = false
        keys.map((k,i) => {
            if(k.includes(key)){ 
                prev.push(i)
                if(prev[prev.length-1] == prev[0]){
                prev.shift();
                resp+=' '
                }else prev.shift()
                return resp+=`${i}`.repeat(k.indexOf(key)+1) 
            }
        })
    }
    return resp;
}

const sendMessage2 = message => {
    let texToNum={
        a:'2', b: '22', c: '222', d:'3',e:'33',f:'333',g:'4',h:'44',i:'444',j:'5',k:'55',l:'555',m:'6',n:'66',o:'666',p:'7',q:'77',r:'777',s:'7777',t:'8',u:'88',v:'888',w:'9',x:'99',y:'999',z:'9999',
        '.':'1',',':'11','?':'111','!':'1111', ' ':'0'
    }
    let resp="", up=false, low=true, last =['`']
    for(let i=0; i<message.length; i++){
        let letter = message[i]
        last.push(letter)
        if(last[0]==last[last.length-1]){
            resp+=" "
        }
        if(letter==letter.toUpperCase() && /\w/.test(letter)){
            up=true;
            resp+='#';
        }else up=false
        
        resp+=texToNum[letter.toLowerCase()]
        last.shift()
    }
    return resp;
}

//console.log(sendMessage2('Hello World!'));
var str = 'Test';
var number = /(\d+)/.test(str) ? RegExp.$1 : '0';
console.log(number); // "24"

//#4433555 5556660#96667775553#1111
//#44#33555 5556660#9#66677755531111
//#4433555 5556660#966677755531111
