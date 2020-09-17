function howmuch(m, n) {
    let mymin = 0;
    let mymax = 0;
    let numcars = 0;
    let numboats = 0;
    let result = [];
    if (m > n) {
      mymin = n;
      mymax = m;
    } else {
      mymin = m;
      mymax = n;
    }
  
    for (let i = mymin; i < mymax + 1; i++) {
      if (i > 8) {
        numcars = GetCar(i);
        numboats = GetBoat(i);
      }
  
      if (numcars > 0 && numboats > 0) {
        result.push([`M: ${i}`, `B: ${numboats}`, `C: ${numcars}`]);
      }
    }
  
    return result;
  
    function GetCar(i) {
      let numcars = 0;
      if ((i - 1) % 9 == 0)
        numcars = (i - 1) / 9;
  
      return numcars;
    }
  
    function GetBoat(i) {
      let numboats = 0;
      if ((i - 2) % 7 == 0)
        numboats = (i - 2) / 7;
      return numboats;
    }
  }

function howmuchUp(m,n){  
    for(var i=Math.min(m,n), resp = []; i<=Math.max(m, n); i++)
        if((i-2)%7==0 && (i-1)%9==0)
            resp.push(['M: '+i, 'B: '+(i-2)/7, 'C: '+(i-1)/9])
    return resp
}

console.log(howmuchUp(1,100));

//(1, 100)      => [["M: 37", "B: 5", "C: 4"]

//37 - 7 * 5 = 2  -- 100 - 7 * 14 = 2
//  x - 7 * y =2

//37 - 9 * 4 = 1  -- 100 - 9 * 11 = 1

//(1000, 1100)  => [["M: 1045", "B: 149", "C: 116"]]

//x-n*x=2  / *-1
//x-n*x =1 /