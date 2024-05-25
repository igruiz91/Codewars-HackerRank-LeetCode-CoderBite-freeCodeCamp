dic = {"0": "zero", "1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine"}
def numbers_of_letters(n):
    n_str = str(n)
    values = [n_str]
    resp = []
    while True:
      conversion = numbers_of_text(values[-1])
      length =str(len(conversion))
      if conversion=="four":
        resp.append("four")
        break
      resp.append(conversion)
      values.append(length)
    return resp

def numbers_of_text(srt):
    return "".join([dic[x] for x in srt])


print(numbers_of_letters(60))
