class Node(object):
    def __init__(self, data):
        self.data = data
        self.next = None

def insert_nth(head, index, data):
  if index == 0:
    node = Node(data)
    node.next = head
    return node
  else:
    head.next = insert_nth(head.next, index-1, data)
  return head



def insert_nth_up(head, index, data):
  if index == 0:
    return Node(data, head)

  node = head
  while index!=0:
    node = node.next

  node.next = Node(data, node.next)
  return node





