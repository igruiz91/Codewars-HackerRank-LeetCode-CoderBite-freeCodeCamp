def solution(nums=[]):
    return [] if not nums else sorted(nums)


def solutionUp(nums):
    return sorted(nums) if nums else []

def solutionUp2(nums):
    return sorted(nums or [])

resp = solution(None)

print(resp)