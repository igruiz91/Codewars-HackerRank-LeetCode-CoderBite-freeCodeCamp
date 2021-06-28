class Song {
  visitors = [];
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
  }

  howMany(arr) {
    let newVisitors = [...new Set(arr.map((n) => n.toLowerCase()))].filter(
      (s) => !this.visitors.includes(s)
    );
    this.visitors = this.visitors.concat(newVisitors);
    return newVisitors.length;
  }
}

class SongUp{
  constructor(title,artist){
    this.title = title;
    this.artist = artist;
    this.visitors = new Set()
  }
  howMany(people){
    let currentVisitors = this.visitors.size
    people.map(p => this.visitors.add(p.toLowerCase()))
    return this.visitors.size-currentVisitors
  }
}

function SongUp2(title,artist) {
  const visitors = new Set;
  return {
    artist,title,
    howMany: a=> {
      let numberVisitors = visitors.size;
      a.forEach(e => visitors.add(e.toLowerCase()))
      return visitors.size - numberVisitors;
    }
  }
}


const mountMoose = new SongUp2(("Mount Moose", "The Snazzy Moose"));

let day1 = mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn'])
let day2 = mountMoose.howMany(['JoHn', 'Luke', 'AmAndA'])

console.log(day1)
console.log(day2)





