def largest_rect(histogram):
    l,r = 0, len(histogram)-1
    max_area= 0
    hash_map = {}
    for n in histogram:
        while l<r:
          if histogram[l]<n:
            l+=1
          elif histogram[r]<n:
            r-=1
          else:
            pass

    return hash_map

print(largest_rect([33, 9, 7, 6, 6, 6, 14, 14, 14, 15, 21]))
