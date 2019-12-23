function periodIsLate(last, today, cycleLength){
  return (today.getTime()-last.getTime())/(1000*60*60*24)>cycleLength;
}


console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35));