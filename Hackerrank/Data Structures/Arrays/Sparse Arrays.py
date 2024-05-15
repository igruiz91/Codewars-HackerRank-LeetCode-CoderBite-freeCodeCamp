def matchingStrings(stringList, queries):
    resp = []
    for querie in queries:
        count = 0
        for string in stringList:
            if string == querie:
                count+=1
        resp.append(count)
    return resp



print(matchingStrings(["ab", "ac", "aba", "ab"], ["ac", "aba", "ab"]))
