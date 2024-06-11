def bowling_pins(arr : list[int]) -> str:
    layout = list("   I   \n  I I  \n I I I \nI I I I")
    count = 0
    ans = []
    for i in range(len(layout)):
        if layout[i] != "I": continue
        else:
            count+=1
            if count in arr:
                layout[i] = " "
    sustitutions = "".join(layout[::-1]).split("\n")
    for a in sustitutions:
        ans.append(a[::-1])
    return "\n".join(ans)

pins = "{7} {8} {9} {10}\n" + \
        " {4} {5} {6} \n" + \
         "  {2} {3}  \n" + \
          "   {1}   "
def bowling_pins_up(arr):
    return pins.format(*(' ' if i in arr else "I" for i in range(11)))

print(bowling_pins([1,2, 10]))
print(bowling_pins_up([1,2, 10]))
#"I I I I\n I I I \n  I I  \n   I   "
#'I I I I\n I I I \n  I I  \n   I   '
