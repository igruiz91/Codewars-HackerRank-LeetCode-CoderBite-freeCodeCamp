from collections import deque
# Definition for a binary tree node.

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right




class Solution:
    def minDepth(self, root):
      if not root: return 0
      q = deque()
      q.append(root)
      level = 0
      while len(q):
        size = len(q)
        level+=1
        for _ in range(size):
          node = q.popleft()
          if not node.left and not node.right:
            return level
          if node.left:
            q.append(node.left)
          if node.right:
            q.append(node.right)









tests = Solution()

tree_one = TreeNode(3)
tree_one.left = TreeNode(9, TreeNode(15),TreeNode(7))
tree_one.right = TreeNode(20)

tree_two = TreeNode(3)
tree_two.left = TreeNode(9, TreeNode(15),TreeNode(7))
tree_two.right = TreeNode(20, TreeNode(15),TreeNode(15))


print(tests.minDepth(tree_one))
print(tests.minDepth(tree_two))
