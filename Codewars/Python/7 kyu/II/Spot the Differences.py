def spot_diff(s1, s2):
    ans = []
    for i in range(len(s1)):
        if s1[i] != s2[i]:
            ans.append(i)
    return ans


def spot_diff_up(s1, s2):
    return [i for i in range(len(s1)) if s1[i] != s2[i]]
