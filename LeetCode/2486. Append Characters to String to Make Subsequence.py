class Solution:
    def appendCharacters(self, s, t):
        i=0
        for c in range(len(t)):
            index = s.find(t[c],i)
            if index!=-1:
                i= index+1
            else:
                return len(t)-c
        return 0

                

    print(appendCharacters("coaching", "coding"))
