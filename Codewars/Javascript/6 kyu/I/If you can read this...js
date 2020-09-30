function to_nato(words) {
    let abc ={'A':'Alfa', 'B':'Bravo','C':'Charlie','D':'Delta','E':'Echo','F':'Foxtrot','G':'Golf','H':'Hotel','I': 'India','J':'Juliett','K':'Kilo','L':'Lima','M':'Mike','N':'November','O':'Oscar','P':'Papa','Q':'Quebec','R':'Romeo','S':'Sierra','T':'Tango','U':'Uniform','V':	'Victor','W':	'Whiskey','X':	'X-ray','Y':'Yankee','Z':'Zulu', ' ': ''}
    return words.toUpperCase().replace(/\s/g, '').split('').map(c => abc[c] || c).filter(String).join(' ')
}

//'Xray Xray Sierra Tango Xray . Alfa Echo Golf'
//'Xray Xray Sierra Tango Xray . Alfa Echo Golf'
//'India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta', 
//'India Foxtrot   Yankee Oscar Uniform   Charlie Alfa November   Romeo Echo Alfa Delta'
console.log(to_nato('If you can read!'));