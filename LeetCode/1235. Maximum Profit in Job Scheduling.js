/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  let jobs = [];
  let n = startTime.length;
  for(let i = 0; i < n; i++) {
    jobs.push({s: startTime[i], e: endTime[i], p: profit[i]})
  }

  jobs.sort((a,b) => a.e - b.e);
  let dp = new Array(n)

  dp[0] = jobs[0].p

  for(let i=1; i<n; i++) {
    let profit = jobs[i].p
    let task = -1
    for(let j = i-1; j >= 0; j--) {
      if(jobs[j].e <= jobs[i].s){
        task = j
        break
      }
    }
    if(task != -1) profit+=dp[task]
    dp[i] = Math.max(profit, dp[i-1])
  }
  return dp[n-1]
};



class Node{
  constructor(start, end, profit) {
    this.start = start;
    this.end = end;
    this. profit = profit;
  }
}

const binarySearch = (nodes, currEndTime, currIndex) => {
  let start= currIndex
  let end= nodes.length-1
  let result = -1

  while(start<=end){
    let mid = Math.floor((start+end)/2)

    if(nodes[mid].start >= currEndTime){
      result= mid
      end = mid-1
    }else start=mid+1

    return result
  }
};



let startTime = [1, 2, 3, 3],
  endTime = [3, 4, 5, 6],
  profit = [50, 10, 40, 70];

let startTime2 = [1, 2, 3, 4, 6],
  endTime2 = [3, 5, 10, 6, 9],
  profit2 = [20, 20, 100, 70, 60];

console.log(jobScheduling(startTime, endTime, profit));
console.log(jobScheduling(startTime2, endTime2, profit2));
