# Definition for a binary tree node.
from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def averageOfLevels(self, root):
      if not root:
        return []
      q = deque()
      q.append(root)
      resp = []
      while len(q):
        size = len(q)
        small_list = []
        sum_level = 0
        for _ in range(size):
          level = q.popleft()
          small_list.append(level.val)
          sum_level += level.val
          if level.left:
            q.append(level.left)
          if level.right:
            q.append(level.right)
        resp.append(sum(small_list)/size)
      return resp










tests = Solution()

tree_one = TreeNode(3)
tree_one.left = TreeNode(9, TreeNode(15),TreeNode(7))
tree_one.right = TreeNode(20)

tree_two = TreeNode(3)
tree_two.left = TreeNode(9, TreeNode(15),TreeNode(7))
tree_two.right = TreeNode(20, TreeNode(15),TreeNode(15))


print(tests.averageOfLevels(tree_one))
print(tests.averageOfLevels(tree_two))
