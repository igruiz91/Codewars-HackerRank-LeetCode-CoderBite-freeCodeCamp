def mirror(text):
  strs = text.split(' ')
  mx = max(len(w) for w in strs)
  f_strs = list(map(lambda w: f"* {w[::-1]}{' '*(mx-len(w))} *" , strs))
  return "\n".join(["*"*len(f_strs[0])] + f_strs+["*"*len(f_strs[0])])


print(mirror("Hello world"))
print(mirror("emosewA !ataK"))


#'***********\n* Awesome *\n* Kata! *\n***********'
#'***********\n* Awesome *\n* Kata!   *\n***********'
