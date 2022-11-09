def pattern(n):
  resp = ['1']
  for i in range(2,n+1):
    temp = '*'*(i-1)
    resp.append('1'+temp+str(i))
  return "\n".join(resp)

def pattern_up(n):
  return '\n'.join(['1'] + ['1' + '*' * (i-1) + str(i) for i in range(2, n+1)])

print(pattern(7))
print(pattern(10))
print('--------------------------------')
print(pattern_up(7))
print(pattern_up(10))
