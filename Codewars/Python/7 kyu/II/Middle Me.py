"""
Write a function that will take a key of X and place it in the middle of Y repeated N times.

Extra challege (not tested): You can complete this with under 70 characters without using regex. Challenge yourself to do this. It wont be best practices but it will work.

Rules:

If X cannot be placed in the middle, return X.

N will always be > 0.

Example:
"""
def middle_me(N, X, Y):
    e = Y*(N//2)
    return f"{e}{X}{e}" if N%2 == 0 else X


print(middle_me(18, 'z', '#'))
print(middle_me(19, 'z', '#'))
