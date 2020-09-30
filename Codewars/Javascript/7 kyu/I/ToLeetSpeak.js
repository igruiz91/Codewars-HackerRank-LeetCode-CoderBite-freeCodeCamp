let abc = {A : '@',B : '8',C : '(',D : 'D',E : '3',F : 'F',G : '6',H : '#',I : '!',J : 'J',K : 'K',L : '1',M : 'M',N : 'N',O : '0',P : 'P',Q : 'Q',R : 'R',S : '$',T : '7',U : 'U',V : 'V',W : 'W',X : 'X',Y : 'Y',Z : '2', ' ': ' '}

function toLeetSpeak(str) {
    return str.split('').map(c => abc[c]).join('');
}

const toLeetSpeakUp = s => s.replace(/[A-Z]/g, c=> abc[c])

console.log(toLeetSpeakUp('HELLO WORLD'));