def parse_float(string):
    try:
        return float(string)
    except (TypeError, ValueError):
        return None

def parse_float_up(string):
    try:
        return float(string)
    except:
        pass

print(parse_float("as"))