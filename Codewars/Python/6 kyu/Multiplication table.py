def multiplication_table(size):
    resp = []
    for i in range(size):
        row = []
        mult = i+1
        for j in range(size):
            row.append((j+1)*mult)
        resp.append(row)
    return resp


def multiplication_table_up(size):
    return [[j*i for j in range(1, size+1)] for i in range(1, size+1)]


def multiplication_table_up2(size):
    columns = []
    for i in range(1, size+1):
        rows = []
        for j in range(1, size):
            row.append(i*j)
        columns.append(rows)
    return columns


print(multiplication_table(3))
