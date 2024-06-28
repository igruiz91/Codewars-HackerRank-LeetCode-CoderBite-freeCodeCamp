class Interval(object):
    def __init__(self, start, end):
        self.start = start
        self.end = end

i1= Interval(0,30)
i2= Interval(5,10)
i3= Interval(15,20)

def min_meeting_rooms( intervals: list[Interval]) -> int:
    starts= sorted([i.start for i in intervals])
    ends= sorted([i.end for i in intervals])
    res, count=0,0
    s,e= 0,0

    while s<len(intervals):
        if starts[s]< ends[e]:
            s+=1
            count +=1
        else:
            e+=1
            count-=1
        res=max(res, count)

    return res




print(min_meeting_rooms([i1,i2,i3]))
