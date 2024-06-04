import re


def last_survivors_old(string):
    # Create a regular expression pattern that matches two consecutive equal characters
    pattern = r"(.)(?=.*\1)"
    # Use the re.sub function to replace the pattern with the next alphabetic character
    output_string = re.sub(
        pattern, lambda x: chr((ord(x.group(1)) - ord("a") + 1) % 26 + ord("a")), string
    )

    # Repeat the substitution until there are no more equal characters
    while True:
        # Check if the output string still contains equal characters
        if re.search(pattern, output_string):
            # If it does, perform another substitution
            output_string = re.sub(
                pattern,
                lambda x: chr((ord(x.group(1)) - ord("a") + 1) % 26 + ord("a")),
                output_string,
            )
        else:
            # If it doesn't, break the loop
            break

    return output_string


def last_survivors(string):
    temp = {}
    repeated = True
    for c in string:
        if c in temp:
            temp[c] += 1
            repeated= False
        else: temp[c] = 1

    if repeated: return string
    for k, v in temp.items():
        if v < 2: continue
        index1,index2 =None, None
        for i, c in enumerate(string):
            if c == k and index1 is None:
                index1 = i
            elif c == k:
                index2 = i
                break
        new_str = (string[:index1] + chr((ord(k)-ord("a")+1)%26+ord("a")) + string[index1 + 1 : index2] + string[index2 + 1 :])
    return last_survivors(new_str)

def last_survivors_up(s):
    while len(set(s)) !=len(s):
        s = re.sub(r'(.)(.)*\1', lambda x: chr((ord(x.group(1))-96)%26+97) +x.group(2), s)
    return s


print(last_survivors("fzxzab"))
print(last_survivors("zzzab"))
print(last_survivors_up("zzzab"))
# print(last_survivors_old("zzzab"))
