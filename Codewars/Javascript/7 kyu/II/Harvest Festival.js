function plant(seed, water, fert, temp){
  if(temp > 19 && temp < 31){
    return `${"-".repeat(water)}${seed.repeat(fert)}`.repeat(water)
  }
  return `${"-".repeat(water)}${'-'.repeat(fert)}`.repeat(water);
}


const plantUp = (seed, water, fert, temp) => {
  return 20<= temp && temp <=30 ? ('-'.repeat(water)+seed.repeat(fert)).repeat(water) : ('-'.repeat(water*water)+seed)
};


console.log(plant(",", 3, 7, 25));
