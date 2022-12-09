class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None


def get_nth(node, index):
  if node == None or index<0: raise ValueError
  count = 0
  while node:
    try:
      if count == index: return node
      count += 1
      node =  node.next
    except:
        print(ValueError)
  raise ValueError
