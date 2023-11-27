function lineupStudents(students) {
  return students.split(' ').sort((a, b) => b.length - a.length || b.localeCompare(a))
}




console.log(
  lineupStudents(
    "Tadashi Takahiro Takao Takashi Takayuki Takehiko Takeo Takeshi Takeshi"
  )
);
