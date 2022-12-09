class Node:
    def __init__(self, data, next=None):
        self.data = data
        self.next = next


    def length(head):
      count = 0
      while head:
        count+=1
        head = head.next
      return count


n1 = Node(1)
n2 = Node(2, n1)
n3 = Node(3, n2)
head = Node(4, n3)


print(Node.length(head))
