function countGrade(scores) {
  ans = { "S": 0, "A": 0, "B": 0, "C": 0, "D": 0, "X": 0 };
  scores.map(s => s==100 ? ans["S"]++ : s>=90 && s<100 ? ans["A"]++ : s<90 && s>=80 ? ans["B"]++ : s>=60 && s<80 ? ans["C"]++ : s<60 && s>=0 ? ans["D"]++ : ans["X"]++ )
  return ans
}


console.log(countGrade([50, 60, 70, 80, 90, 100]));
console.log(countGrade([65, 75, , 85, 85, 95, 100, 100]));
