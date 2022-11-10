def scrabble_score(st):
    lib = [[["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"], 1], [["D", "G"], 2], [["B", "C", "M", "P"], 3], [["F", "H", "V", "W", "Y"], 4], [["K"], 5], [["J", "X"], 8], [["Q", "Z"], 10]]
    c = list(st.upper())
    resp = 0
    for x in c:
      for i in range(len(lib)):
        if x in lib[i][0]:
          resp += lib[i][1]
          break
    return resp


def scrabble_score_up(st):
  return sum(dict_scores.get(c, 0) for c in st.upper())

#print(scrabble_score("street"))
print(scrabble_score("quirky")) #10 1 1 1 5 4
