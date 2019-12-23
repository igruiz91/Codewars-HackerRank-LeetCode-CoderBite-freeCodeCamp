function longestPossible(playback) {
    let closest = Number.MIN_SAFE_INTEGER;
    let resp = '';
    let tiempo = formatPLayback(playback);
    songs.filter(s => {
        let tiempoPista = formatTime(s.playback)
        if (tiempoPista <= tiempo && tiempoPista > closest) {
            resp = s.title;
            closest = tiempoPista
        }
        return tiempoPista <= tiempo
    })
    return resp
}

const formatTime = t => Number(t.replace(/\:/, '.'))
const formatPLayback = p => {
    let min = p / 60;
    let sec = p % 60;
    return Number(`${parseInt(min)}.${sec}`)
}

//console.log(formatPLayback(215));
//{artist: 'Artist', title: 'Title String', playback: '04:30'}
//console.log(formatTime('03:36'));
var songs = [
    { artist: 'Marillion', title: 'Keyleigh', playback: '03:36' },
    { artist: 'Pink Floyd', title: 'Time', playback: '06:48' },
    { artist: 'Rush', title: 'YYZ', playback: '04:27' },
    { artist: 'Bonobo', title: 'Days To Come', playback: '03:50' },
    { artist: 'Coldplay', title: 'Yellow', playback: '04:32' },
    { artist: 'Bloc Party', title: 'Like Eating Glass', playback: '04:22' },
    { artist: 'The Killers', title: 'For Reasons Unknown', playback: '03:30' },
    { title: 'Teddy Picker', artist: 'Arctic Monkeys', playback: '03:25' },
    { artist: 'Joe Satriani', title: 'Surfing With The Alien', playback: '04:34' }
]


console.log(longestPossible(215));

