def string_transformer(s):
    return " ".join(list(map(lambda x: x.swapcase(), reversed(s.split(" ")))))

print(string_transformer("Example Input"))