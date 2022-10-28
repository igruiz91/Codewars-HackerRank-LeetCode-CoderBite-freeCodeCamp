function fizzBuzzCuckooClock(time) {
  let [hours, mins] = time.split(":").map(Number);
  if(hours ==0 && mins ==0) hours = 24
  let resp = {
    cuckoo: "Cuckoo ",
    buzz: "Buzz ",
    fizz: "Fizz",
    fizzBuzz: "Fizz Buzz",
  };
  return mins === 0
    ? resp.cuckoo.repeat(hours > 12 ? hours - 12 : hours).trim()
    : mins % 30 === 0
    ? resp.cuckoo.slice(0, -1)
    : mins % 5 == 0 && mins % 3 == 0
    ? resp.fizzBuzz
    : mins % 5 == 0
    ? resp.buzz
    : mins % 3 == 0
    ? resp.fizz
    : "tick";
}

const fizzBuzzCuckooClockUp = (time) => {
  let [h, m] = time.split(":");
  return m == 0 ? "Cuckoo ".repeat(h%12 || 12).trim() :
        m== 30 ? "Cuckoo" :
        m % 15 ==0 ? "Fizz Buzz" :
        m % 5 == 0 ? "Buzz" :
        m % 3 == 0 ? "Fizz" : "tick"
};

console.log(fizzBuzzCuckooClock("12:00"));
console.log(fizzBuzzCuckooClock("13:34"));
