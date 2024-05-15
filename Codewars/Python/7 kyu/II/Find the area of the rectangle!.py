def area(d, l):
    try:
        return round(pow(pow(d,2)-pow(l,2),1/2)*l,2)
    except:
      raise 'Not a rectangle'

print(area(5,4))
print(area(12, 5))
print(area(5, 5))
