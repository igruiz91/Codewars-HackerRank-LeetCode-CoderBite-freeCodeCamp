class Harshad:
    @staticmethod
    def is_valid(number):
      return number % sum(map(lambda x: int(x), [*str(number)])) == 0

    @staticmethod
    def get_next(number):
      number = number+1
      while True:
        if Harshad.is_valid(number): return number
        else: number += 1

    @staticmethod
    def get_series(count, start=0):
      resp = [start]
      while count >0:
        resp.append(Harshad.get_next(resp[-1]))
        count-=1
      return resp[1:]


print(Harshad.is_valid(10))
print(Harshad.get_next(17))
print(Harshad.is_valid(19))
print(Harshad.get_next(22))

print(Harshad.get_series(3, 1000))
