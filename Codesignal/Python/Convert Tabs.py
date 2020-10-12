def convertTabs(code, x):
    return code.replace('\t', ' '*x)


code = "def add(x, y)\f\treturn x + y"
spaces = 8
#"def add(x, y)\f        return x + y"
print(convertTabs(code, spaces))
