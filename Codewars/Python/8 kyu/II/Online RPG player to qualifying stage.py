def playerRankUp(pts):
    if pts >= 100:
        return "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
    return False


def playerRankUpTwo(p):
    msg = "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
    return msg if p >= 100 else False


print(playerRankUp(12))
print(playerRankUp(120))
print(playerRankUpTwo(12))
print(playerRankUpTwo(120))
