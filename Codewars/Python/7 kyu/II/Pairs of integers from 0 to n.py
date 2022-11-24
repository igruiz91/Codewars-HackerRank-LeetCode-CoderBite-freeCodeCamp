def generate_pairs(n):
  resp = []
  for i in range(n+1):
    j=i
    while(j <= n):
      resp.append([i,j])
      j+=1
  return resp



def generate_pairs_up(n):
  return [[i,j] for i in range(n+1) for j in range(i,n+1)]


print(generate_pairs(2))
print(generate_pairs_up(2))
