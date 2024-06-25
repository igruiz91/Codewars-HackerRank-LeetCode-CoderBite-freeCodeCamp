def eraseOverlapIntervals( intervals: list[list[int]]) -> int:
    intervals.sort()
    count=0
    prev_end = intervals[0][1]
    for start, end in intervals[1:]:
        if prev_end<=start:
            prev_end=end
        else:
            count+=1
            prev_end = min(prev_end, end)
    return count


print(eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3], [2,4]]))
