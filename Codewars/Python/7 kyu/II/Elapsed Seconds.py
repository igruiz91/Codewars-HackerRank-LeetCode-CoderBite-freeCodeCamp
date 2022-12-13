import datetime


def elapsed_seconds(start, end):
  return (end-start).seconds


start = datetime.datetime(2013, 1, 1, 0, 0, 1)
end = datetime.datetime(2013, 1, 1, 0, 0, 2)

print(elapsed_seconds(start, end))
