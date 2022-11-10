def match_arrays(v, r):
    return len(set(v) & set(r))

def match_arrays_up(v,r):
  return sum(x in r for x in v)




print(match_arrays(['Perl', 'Closure', 'JavaScript'], ['Go', 'C++', 'Erlang']))
print(match_arrays_up(['Perl', 'Closure', 'JavaScript'], ['Go', 'C++', 'Erlang']))
print(match_arrays([True, 3, 9, 11, 15], [True, 3, 11]))
print(match_arrays_up([True, 3, 9, 11, 15], [True, 3, 11]))
