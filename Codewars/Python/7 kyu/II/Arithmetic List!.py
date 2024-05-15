def seqlist(first, c, l):
    resp = [first]
    while l>1:
        first+=c
        resp.append(first)
        l-=1
    return resp


def seqlist_up(first, c, l):
  return [first+x*c for x in range(l)]

print(seqlist(0,1,20))
