def generateShape(int):
    resp=''
    for i in range (int):
        resp+='+'*int+'\n'
    return resp[:-1]

def generateShapeUp(int):
    return '\n'.join('+'*int for i in range(int))

print(generateShape(3)+'\n')

print(generateShapeUp(4))
