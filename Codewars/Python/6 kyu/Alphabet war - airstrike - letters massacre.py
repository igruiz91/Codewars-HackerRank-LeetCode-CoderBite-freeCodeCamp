import re

def alphabet_war(fight):
    fight = re.split('(\w\*\w)', fight)
    figters = fight[len(fight)-1]
    left = 0
    switcher={
        "w": left+= 4,
        "p": left+= 3,
        "b": left+= 2,
        "s": left+= 1,
        "m": rigth+= 4,
        "q": rigth+= 3 ,
        "d": rigth+= 2,
        "z": rigth+= 1
    }

print(alphabet_war("z*dq*mwpbs"))