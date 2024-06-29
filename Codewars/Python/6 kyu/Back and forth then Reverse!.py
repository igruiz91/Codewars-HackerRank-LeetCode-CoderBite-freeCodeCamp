def arrange(s):
    ans= []
    start, end = 0, len(s)-1
    count=0
    while start<=end:
        if start==end:
            ans.append(s[start])
            break
        if count%2==0:
            ans.append(s[start])
            ans.append(s[end])
        else:
            ans.append(s[end])
            ans.append(s[start])
        start+=1
        end-=1
        count+=1

    return ans






print(arrange([1, 2, 3, 4, 5, 6]))
print(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1]))
