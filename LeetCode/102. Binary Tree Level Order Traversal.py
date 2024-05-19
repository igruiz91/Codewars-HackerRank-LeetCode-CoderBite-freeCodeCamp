# Definition for a binary tree node.
from collections import deque
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def levelOrder(self, root):
      if not root:
        return []
      q = deque()
      q.append(root)
      resp = []
      
      while len(q):
        size = len(q)
        small_list = []
        for _ in range(size):
          node = q.popleft()
          small_list.append(node.val)
          if node.left:
            q.append(node.left)
          if node.right:
            q.append(node.right)
        resp.append(small_list)
      return resp



test = Solution()
tree = TreeNode(3)
tree.left = TreeNode(9)
tree.right = TreeNode(20, TreeNode(15), TreeNode(7))


test1 = test.levelOrder(tree)

print(test1)



