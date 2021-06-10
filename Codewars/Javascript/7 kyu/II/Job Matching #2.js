function match(job, candidates) {
  const {equityMax, locations} = job
  return candidates.filter(c => 
    (job.equityMax > 0 && !c.desiresEquity) &&
    locations.some(l => c.currentLocation === l || c.desiredLocations.includes(l)))
}

let candidates = [
  {
    desiresEquity: true,
    currentLocation: "New York",
    desiredLocations: ["San Francisco", "Los Angeles"],
  },
  {
    desiresEquity: false,
    currentLocation: "San Francisco",
    desiredLocations: ["Kentucky", "New Mexico"],
  },
];

let job1 = { equityMax: 0, locations: ["Los Angeles", "New York"] },
  job2 = { equityMax: 1.2, locations: ["New York", "Kentucky"] };


console.log(match(job2,candidates))