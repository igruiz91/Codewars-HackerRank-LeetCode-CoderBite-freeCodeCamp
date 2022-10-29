def even_last(numbers):
  sum=0
  for i in range(len(numbers)):
    if i%2==0: sum+=numbers[i]
  return sum*numbers[-1] if len(numbers) else 0


def even_last_up(numbers):
  return sum(numbers[::2])*numbers[-1] if numbers else 0

print(even_last([2, 3, 4, 5]))
print(even_last_up([2, 3, 4, 5]))
print(even_last_up([]))
