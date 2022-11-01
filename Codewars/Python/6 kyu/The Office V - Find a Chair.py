def meeting(rooms, need):
  if need == 0: return "Game On"
  take = need
  resp = []
  for room in rooms:
    chairs = room[1] - len(room[0])
    if chairs<0: chairs = 0
    if chairs>take:
      resp.append(take)
      break
    else:
      take-= chairs
      resp.append(chairs)
      if take == 0 : break
  return "Not enough!" if sum(resp)<need else resp



def meeting_up(rooms, need):
  if need == 0: return "Game On"
  resp = []
  for people, chairs in rooms:
    taken = min(max(chairs -len(people), 0), need)
    resp.append(taken)
    need-=taken
    if need == 0: return resp
  return "Not enough!"



print(meeting([['X', 5], ['X', 1], ['XXXX', 3], ['XXXXXXXXX', 3]], 6))
print(meeting([['XXXXXXXXXX', 9], ['XXXXXXX', 3], ['XXXXXX', 5], ['X', 9], ['XXXXXXXX', 5]], 25))
print(meeting([["XXX", 1], ["XXXXXX", 6], ["X", 2], ["XXXXXX", 8], ["X", 3], ["XXX", 1]], 5))

print(meeting_up([['X', 5], ['X', 1], ['XXXX', 3], ['XXXXXXXXX', 3]], 6))
print(meeting_up([['XXXXXXXXXX', 9], ['XXXXXXX', 3], ['XXXXXX', 5], ['X', 9], ['XXXXXXXX', 5]], 25))
print(meeting_up([["XXX", 1], ["XXXXXX", 6], ["X", 2], ["XXXXXX", 8], ["X", 3], ["XXX", 1]], 5))
