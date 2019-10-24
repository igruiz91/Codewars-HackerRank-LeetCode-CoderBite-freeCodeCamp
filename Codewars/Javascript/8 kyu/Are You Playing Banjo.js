function areYouPlayingBanjo(name) {
    return name.split('')[0].toLowerCase() == 'r'
    ? `${name} plays banjo`
    : `${name} does not play banjo`
}

function areYouPlayingBanjo2(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

function areYouPlayingBanjo3(name) {
    return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
  }

console.log(areYouPlayingBanjo('Rikke'));