def grid_index(grid, indexes):
    ans = []
    n = len(grid)
    for i in indexes:
      arr = i//n if i%n else i//n-1
      pos = (i-1)%n
      ans.append(grid[arr][pos])
    return "".join(ans)



print(grid_index([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 2, 3, 4, 5, 6, 7, 8, 9])) #myexample
