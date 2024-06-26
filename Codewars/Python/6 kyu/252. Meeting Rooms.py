
class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end

class Solution:

    def can_attend_meetings(self, intervals: list[Interval]) -> bool:
        if len(intervals) == 0: return True
        intervals.sort(key=lambda i: i.start)
        last_end = intervals[0].end
        for i in range(1, len(intervals)):
            if intervals[i].start >= last_end:
                last_end = min(intervals[i].end, last_end)
            else:
                return False
        return True

    def can_attend_meetings_up(self, intervals: list[Interval]) -> bool:
        intervals.sort(key=lambda i: i.start)
        for i in range(1, len(intervals)):
            i1 = intervals[i-1]
            i2 = intervals[i]
            if i2.start<i1.end:
                return False
        return True



test = Solution()
print(test.can_attend_meetings([(0, 30), (5, 10), (15, 20)]))
print(test.can_attend_meetings([(5, 8), (9, 15)]))
