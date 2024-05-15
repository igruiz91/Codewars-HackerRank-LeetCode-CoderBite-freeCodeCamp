class Solution:
    def onesMinusZeros(self, grid):
        m = len(grid)
        n = len(grid[0])

        diff=[[0] * n for _ in range(m)]

        rows_ones = [sum(row) for row in grid]
        col_ones = [sum(row[i] for row in grid) for i in range(n)]

        for i in range(m):
            for j in range(n):
                row_zeros = n-rows_ones[i]
                col_zeros = m-col_ones[j]

                diff[i][j] = rows_ones[i]+col_ones[j] - row_zeros - col_zeros
        return diff



